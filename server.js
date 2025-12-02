import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// PayPal Configuration
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || '';
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || '';
const PAYPAL_MODE = process.env.PAYPAL_MODE || 'sandbox';

const PAYPAL_BASE_URL = PAYPAL_MODE === 'live' 
  ? 'https://api-m.paypal.com' 
  : 'https://api-m.sandbox.paypal.com';

// Rate limiting store
const rateLimitStore = new Map();

// Validation functions
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function validatePhone(phone) {
  const phoneRegex = /^\+?55\d{10,11}$/;
  return phoneRegex.test(phone.replace(/[\s()-]/g, ''));
}

function sanitizeString(str, maxLength) {
  return str.trim().slice(0, maxLength).replace(/[<>"']/g, '');
}

function checkRateLimit(clientId) {
  const now = Date.now();
  const limit = rateLimitStore.get(clientId);
  
  if (!limit || now > limit.resetAt) {
    rateLimitStore.set(clientId, { count: 1, resetAt: now + 60000 });
    return true;
  }
  
  if (limit.count >= 20) {
    return false;
  }
  
  limit.count++;
  return true;
}

// Get PayPal Access Token
async function getPayPalAccessToken() {
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64');
  
  const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    throw new Error(`PayPal auth failed: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

// Create PayPal Order
async function createPayPalOrder(accessToken, amount, description, returnUrl, cancelUrl, metadata) {
  const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: 'BRL',
          value: amount,
        },
        description: description,
        custom_id: JSON.stringify(metadata),
      }],
      application_context: {
        brand_name: 'Re-Journey',
        locale: 'pt-BR',
        landing_page: 'LOGIN',
        user_action: 'PAY_NOW',
        return_url: returnUrl,
        cancel_url: cancelUrl,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`PayPal order creation failed: ${error}`);
  }

  return await response.json();
}

// Capture PayPal Order
async function capturePayPalOrder(accessToken, orderId) {
  const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders/${orderId}/capture`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`PayPal capture failed: ${error}`);
  }

  return await response.json();
}

// Create Express app
const app = express();
app.use(express.json());

// CORS middleware
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:4173',
  'http://localhost:80',
  'https://re-journey.com',
  'https://www.re-journey.com',
  'https://journey.squareweb.app',
  'https://rejourney.squareweb.app'
];

app.use((req, res, next) => {
  const origin = req.headers.origin || '';
  if (allowedOrigins.includes(origin) || !origin) {
    res.header('Access-Control-Allow-Origin', origin || '*');
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// API: Create Checkout
app.post('/api/create-checkout', async (req, res) => {
  try {
    const clientIP = req.headers['x-forwarded-for'] || req.ip || 'unknown';
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({ error: 'Muitas tentativas. Aguarde 1 minuto.' });
    }

    const { plan, email, name, phone } = req.body;

    if (!plan || !email || !name || !phone) {
      return res.status(400).json({ error: 'Dados incompletos' });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    if (!validatePhone(phone)) {
      return res.status(400).json({ error: 'Telefone inválido. Use formato: +5599xxxxxxxxx' });
    }

    const safeName = sanitizeString(name, 100);
    const safeEmail = sanitizeString(email, 254);
    const safePhone = sanitizeString(phone, 20);

    const prices = {
      '6months': { amount: '397.00', description: 'Plano 6 Meses - Re-Journey' },
      '12months': { amount: '797.00', description: 'Plano 12 Meses - Re-Journey' },
    };

    const selectedPrice = prices[plan];
    if (!selectedPrice) {
      return res.status(400).json({ error: 'Plano inválido' });
    }

    const requestOrigin = req.headers.origin || 'https://journey.squareweb.app';

    const accessToken = await getPayPalAccessToken();
    const order = await createPayPalOrder(
      accessToken,
      selectedPrice.amount,
      selectedPrice.description,
      `${requestOrigin}/success`,
      `${requestOrigin}/`,
      {
        customer_name: safeName,
        customer_email: safeEmail,
        customer_phone: safePhone,
        plan: plan,
      }
    );

    const approvalLink = order.links.find((link) => link.rel === 'approve');
    if (!approvalLink) {
      throw new Error('PayPal approval URL not found');
    }

    res.json({ orderId: order.id, url: approvalLink.href });
  } catch (error) {
    console.error('Create checkout error:', error);
    res.status(500).json({ error: 'Erro ao criar sessão de pagamento' });
  }
});

// API: Capture Payment
app.post('/api/capture-payment', async (req, res) => {
  try {
    const { orderId } = req.body;

    if (!orderId) {
      return res.status(400).json({ error: 'Order ID é obrigatório' });
    }

    const accessToken = await getPayPalAccessToken();
    const captureResult = await capturePayPalOrder(accessToken, orderId);

    if (captureResult.status === 'COMPLETED') {
      let metadata = {};
      try {
        const customId = captureResult.purchase_units?.[0]?.payments?.captures?.[0]?.custom_id;
        if (customId) {
          metadata = JSON.parse(customId);
        }
      } catch {
        // Ignore parse errors
      }

      res.json({
        success: true,
        status: captureResult.status,
        transactionId: captureResult.purchase_units?.[0]?.payments?.captures?.[0]?.id,
        metadata
      });
    } else {
      res.status(400).json({
        success: false,
        status: captureResult.status,
        error: 'Pagamento não foi completado'
      });
    }
  } catch (error) {
    console.error('Capture payment error:', error);
    res.status(500).json({ error: 'Erro ao capturar pagamento' });
  }
});

// Serve static files from dist folder
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// SPA fallback - serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start server (use a non-privileged port locally; production can set PORT=80)
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
