# Integração InfinitePay Checkout - Guia Completo

## 📋 Visão Geral

Este guia explica como implementar a integração completa do InfinitePay para checkout de pagamentos, incluindo PIX e cartão de crédito, com redirecionamento automático para WhatsApp após confirmação.

## 🔧 Pré-requisitos

### 1. Conta InfinitePay
- Crie uma conta em [infinitepay.io](https://infinitepay.io)
- Complete a verificação KYC (Know Your Customer)
- Obtenha seu **handle** (ex: `rejourney`)

### 2. Dependências
```bash
npm install express
```

### 3. Variáveis de Ambiente
```bash
INFINITEPAY_HANDLE=seu_handle_aqui
```

## 🏗️ Estrutura da Implementação

### Backend (server.js)

#### 1. Configuração Inicial
```javascript
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuração InfinitePay
const INFINITEPAY_HANDLE = process.env.INFINITEPAY_HANDLE || 'rejourney';

// Armazenamento temporário (use banco de dados em produção)
const confirmedPayments = new Map();
```

#### 2. Função para Gerar NSU Único
```javascript
function generateOrderNSU() {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `RJ-${timestamp}-${random}`.toUpperCase();
}
```

#### 3. Endpoint: Criar Checkout
```javascript
app.post('/api/create-checkout', async (req, res) => {
  try {
    const { plan } = req.body;

    if (!plan) {
      return res.status(400).json({ error: 'Plano não especificado' });
    }

    // Preços em centavos (R$ 129.00 = 12900)
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

    // Criar link de checkout InfinitePay
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
            price: selectedPrice.amount,
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
```

#### 4. Endpoint: Webhook de Confirmação
```javascript
app.post('/api/webhook', async (req, res) => {
  try {
    const { order_nsu, status, payment_method, customer } = req.body;

    console.log('Webhook received:', { order_nsu, status, payment_method });

    if (status === 'paid' || status === 'approved') {
      // Armazenar pagamento confirmado
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
```

#### 5. Endpoint: Verificar Status do Pagamento
```javascript
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
```

### Frontend (React + TypeScript)

#### 1. Componente Pricing.tsx - Botão de Checkout
```tsx
import { useState } from 'react';

export const Pricing = () => {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleCheckout = async (plan: '6months' | '12months') => {
    setLoadingPlan(plan);
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao processar pagamento');
      }

      if (data.url) {
        // Redirecionar para checkout InfinitePay
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao processar pagamento. Por favor, tente novamente.');
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <button
      onClick={() => handleCheckout('6months')}
      disabled={loadingPlan === '6months'}
      className="w-full py-4 bg-[#E0E0E0] text-[#121212] font-semibold rounded-lg hover:bg-white transition-all disabled:opacity-50"
    >
      {loadingPlan === '6months' ? 'Redirecionando...' : 'Começar Agora'}
    </button>
  );
};
```

#### 2. Página Success.tsx - Confirmação e WhatsApp
```tsx
import { useEffect, useState } from "react";
import { CheckCircle, Loader2, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5599913397978';
const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Acabei de assinar o Re-Journey.');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const Success = () => {
  const [countdown, setCountdown] = useState(5);
  const [isValidOrder, setIsValidOrder] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const orderNSU = params.get('order');

    // Se tem parâmetro order, é um redirect válido do InfinitePay
    if (orderNSU) {
      setIsValidOrder(true);
      setChecking(false);

      // Countdown para WhatsApp
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            window.location.href = WHATSAPP_URL;
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setChecking(false);
      setIsValidOrder(false);
    }
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen bg-[#121212] text-[#E0E0E0] flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-gray-400 animate-spin" />
      </div>
    );
  }

  if (!isValidOrder) {
    return (
      <div className="min-h-screen bg-[#121212] text-[#E0E0E0]">
        {/* Página de erro */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0]">
      <div className="container mx-auto px-6 pt-32 pb-20 text-center">
        <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-14 h-14 text-green-500" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
          Pagamento Confirmado! 🎉
        </h1>

        <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto">
          Obrigado por assinar o Re-Journey! Você será redirecionado para o WhatsApp em{" "}
          <span className="text-white font-bold">{countdown}</span> segundos...
        </p>

        <a
          href={WHATSAPP_URL}
          className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-all shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
          Ir para o WhatsApp agora
        </a>
      </div>
    </div>
  );
};
```

## 🔄 Fluxo Completo

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           FLUXO DE PAGAMENTO                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. Cliente clica "Começar Agora" no site                                   │
│           ↓                                                                 │
│  2. POST /api/create-checkout → API InfinitePay                             │
│     (envia: handle, redirect_url, webhook_url, items[])                     │
│           ↓                                                                 │
│  3. InfinitePay retorna URL do checkout                                     │
│           ↓                                                                 │
│  4. Cliente é redirecionado para checkout InfinitePay                       │
│     → Preenche dados (nome, CPF, email, cartão/PIX)                         │
│           ↓                                                                 │
│  5. Cliente paga (PIX ou Cartão)                                            │
│           ↓                                                                 │
│  ┌───────┴───────┐                                                          │
│  ↓               ↓                                                          │
│  WEBHOOK         REDIRECT                                                   │
│  ↓               ↓                                                          │
│  POST /api/webhook   →    /success?order=XXX                               │
│  - Confirma pagamento     - Mostra página de sucesso                       │
│  - Registra no banco      - Countdown 5s → WhatsApp                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 📡 API InfinitePay - Detalhes Técnicos

### Endpoint: Criar Link de Checkout
```
POST https://api.infinitepay.io/invoices/public/checkout/links
```

#### Request Body:
```json
{
  "handle": "rejourney",
  "redirect_url": "https://journey.squareweb.app/success?order=RJ-ABC123",
  "webhook_url": "https://journey.squareweb.app/api/webhook",
  "order_nsu": "RJ-ABC123",
  "items": [
    {
      "description": "Plano Semestral - Re-Journey",
      "quantity": 1,
      "price": 12900
    }
  ]
}
```

#### Response:
```json
{
  "url": "https://checkout.infinitepay.com.br/..."
}
```

### Webhook Payload:
```json
{
  "event": "payment_confirmed",
  "order_nsu": "RJ-ABC123",
  "status": "paid",
  "payment_method": "pix",
  "customer": {
    "name": "João Silva",
    "email": "joao@email.com",
    "document": "12345678900"
  }
}
```

## 🧪 Como Testar

### 1. Teste Local
```bash
# Iniciar servidor
npm run dev

# Testar endpoint
curl -X POST http://localhost:5173/api/create-checkout \
  -H "Content-Type: application/json" \
  -d '{"plan": "semiannual"}'
```

### 2. Teste em Produção
```bash
# Build e deploy
npm run build
# Deploy no Square Cloud
```

### 3. Verificar Logs
```bash
# Ver logs do servidor
tail -f logs/server.log

# Ver webhooks recebidos
curl http://localhost:5173/api/payment-status/RJ-ABC123
```

## ⚠️ Pontos de Atenção

### 1. Segurança
- Sempre valide os dados de entrada
- Use HTTPS em produção
- Implemente rate limiting
- Valide webhooks (verifique assinatura se disponível)

### 2. Banco de Dados
- Use um banco de dados real para armazenar pagamentos
- Implemente limpeza de dados temporários
- Adicione índices para performance

### 3. Tratamento de Erros
- Implemente retry para webhooks
- Adicione logs detalhados
- Notifique administradores em caso de falhas

### 4. Compliance
- Mantenha dados de pagamento conforme LGPD
- Implemente auditoria de transações
- Tenha política de reembolso clara

## 🚀 Próximos Passos

1. **Complete KYC** no InfinitePay
2. **Configure variáveis** de ambiente
3. **Teste a integração** completamente
4. **Implemente notificações** por email
5. **Adicione analytics** de conversão
6. **Configure monitoramento** e alertas

## 📞 Suporte

- **InfinitePay Docs**: [infinitepay.io/developers](https://infinitepay.io/developers)
- **WhatsApp**: Configure seu número e mensagem personalizada
- **Logs**: Monitore webhooks e redirecionamentos

---

**Nota**: Este guia foi criado baseado na implementação atual do Re-Journey. Ajuste conforme suas necessidades específicas.</content>
<parameter name="filePath">/home/mau/project/landing/checkout.md