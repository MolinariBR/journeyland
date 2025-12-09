import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// InfinitePay Configuration
const INFINITEPAY_HANDLE = process.env.INFINITEPAY_HANDLE || 'rejourney';

// Rate limiting store
const rateLimitStore = new Map();

// Confirmed payments store (in production, use a database)
const confirmedPayments = new Map();

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

// Generate unique order NSU
function generateOrderNSU() {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `RJ-${timestamp}-${random}`.toUpperCase();
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

// API: Create Checkout (InfinitePay)
app.post('/api/create-checkout', async (req, res) => {
  try {
    const clientIP = req.headers['x-forwarded-for'] || req.ip || 'unknown';
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({ error: 'Muitas tentativas. Aguarde 1 minuto.' });
    }

    const { plan } = req.body;

    if (!plan) {
      return res.status(400).json({ error: 'Plano não especificado' });
    }

    const prices = {
      'monthly': { amount: 2900, description: 'Plano Mensal - Re-Journey' },
      'quarterly': { amount: 7400, description: 'Plano Trimestral - Re-Journey' },
      'semiannual': { amount: 12900, description: 'Plano Semestral - Re-Journey' },
      'annual': { amount: 20900, description: 'Plano Anual - Re-Journey' },
    };

    const selectedPrice = prices[plan];
    if (!selectedPrice) {
      return res.status(400).json({ error: 'Plano inválido' });
    }

    const requestOrigin = req.headers.origin || 'https://journey.squareweb.app';
    const orderNSU = generateOrderNSU();

    // Create InfinitePay checkout link
    const response = await fetch('https://api.infinitepay.io/invoices/public/checkout/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        handle: INFINITEPAY_HANDLE,
        redirect_url: `${requestOrigin}/success?order=${orderNSU}`,
        webhook_url: `${requestOrigin}/api/webhook`,
        order_nsu: orderNSU,
        items: [
          {
            description: selectedPrice.description,
            quantity: 1,
            price: selectedPrice.amount, // Price in centavos
          }
        ]
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('InfinitePay error:', error);
      throw new Error(`InfinitePay checkout creation failed: ${response.status}`);
    }

    const data = await response.json();

    res.json({ 
      orderId: orderNSU, 
      url: data.url 
    });
  } catch (error) {
    console.error('Create checkout error:', error);
    res.status(500).json({ error: 'Erro ao criar sessão de pagamento' });
  }
});

// API: Webhook (InfinitePay payment confirmation)
app.post('/api/webhook', async (req, res) => {
  try {
    const { order_nsu, status, payment_method, customer } = req.body;

    console.log('Webhook received:', { order_nsu, status, payment_method });

    if (status === 'paid' || status === 'approved') {
      // Store confirmed payment
      confirmedPayments.set(order_nsu, {
        status: 'confirmed',
        payment_method,
        customer,
        confirmed_at: new Date().toISOString()
      });

      console.log(`Payment confirmed for order: ${order_nsu}`);
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// API: Check payment status
app.get('/api/payment-status/:orderId', (req, res) => {
  const { orderId } = req.params;
  const payment = confirmedPayments.get(orderId);

  if (payment) {
    res.json({ 
      confirmed: true, 
      ...payment 
    });
  } else {
    res.json({ confirmed: false });
  }
});

// Serve static files from dist folder
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// SPA fallback
app.get('*', (req, res) => {
  const reqPath = req.path || '';
  const ext = path.extname(reqPath);

  if (reqPath.startsWith('/assets/') || ext) {
    console.warn(`Static asset not found: ${reqPath} -> returning 404`);
    return res.sendStatus(404);
  }

  res.sendFile(path.join(distPath, 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`InfinitePay Handle: ${INFINITEPAY_HANDLE}`);
});
