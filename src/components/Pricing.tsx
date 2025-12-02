import {Check} from 'lucide-react';
import { useState } from 'react';

export const Pricing = () => {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const baseFeatures = [
    'Acesso completo ao banco de questões',
    '+30 a 50 novas questões diárias',
    'Motor adaptativo de aprendizagem',
    '6 níveis progressivos de dificuldade',
    'Simulados realistas INEP',
    'Análise detalhada de desempenho',
    'Sistema de revisão espaçada'
  ];

  const features6 = baseFeatures;
  const features12 = [
    ...baseFeatures,
    'Grupo Exclusivo',
    'Suporte prioritário'
  ];

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
        // Track conversion event (placeholder for future analytics)
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'begin_checkout', {
            currency: 'BRL',
            value: plan === '6months' ? 397 : 797,
            items: [{ item_name: `Re-Journey ${plan}` }]
          });
        }
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao processar pagamento. Por favor, tente novamente ou entre em contato com o suporte.');
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <>
      <section id="pricing" className="py-20 bg-[#121212] border-t border-[#1F1F1F]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">Planos Re-Journey</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Escolha o plano ideal para sua jornada rumo ao Revalida
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 6 Months Plan */}
            <div className="bg-[#161616] border border-[#1F1F1F] rounded-xl p-8 hover:border-gray-700 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2">Plano 6 Meses</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-gray-500 line-through">R$ 500</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-bold text-white">R$ 397</span>
                  <span className="text-gray-500">/semestre</span>
                </div>
                <p className="text-sm text-green-400 mt-2">Economia de R$ 103 • Assinando hoje</p>
              </div>

              <ul className="space-y-4 mb-8">
                {features6.map((feature, idx) => {
                  const iconColor = (feature === 'Suporte prioritário' || feature === 'Grupo Exclusivo') ? 'text-yellow-400' : 'text-green-500';
                  return (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  );
                })}
              </ul>

              <button 
                onClick={() => handleCheckout('6months')}
                disabled={loadingPlan === '6months'}
                className="w-full py-4 bg-[#E0E0E0] text-[#121212] font-semibold rounded-lg hover:bg-white transition-all disabled:opacity-50"
              >
                {loadingPlan === '6months' ? 'Redirecionando...' : 'Começar Agora'}
              </button>
            </div>

            {/* 12 Months Plan - Popular */}
            <div className="bg-[#161616] border-2 border-gray-600 rounded-xl p-8 relative hover:border-gray-500 transition-all">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-gray-600 to-gray-700 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MAIS POPULAR
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2">Plano 12 Meses</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-gray-500 line-through">R$ 1.000</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-bold text-white">R$ 797</span>
                  <span className="text-gray-500">/ano</span>
                </div>
                <p className="text-sm text-green-400 mt-2">Economia de R$ 203 • Assinando hoje</p>
              </div>

              <ul className="space-y-4 mb-8">
                {features12.map((feature, idx) => {
                  const iconColor = (feature === 'Suporte prioritário' || feature === 'Grupo Exclusivo') ? 'text-yellow-400' : 'text-green-500';
                  return (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  );
                })}
              </ul>

              <button 
                onClick={() => handleCheckout('12months')}
                disabled={loadingPlan === '12months'}
                className="w-full py-4 bg-white text-[#121212] font-semibold rounded-lg hover:bg-gray-200 transition-all shadow-lg disabled:opacity-50"
              >
                {loadingPlan === '12months' ? 'Redirecionando...' : 'Começar Agora'}
              </button>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Todos os planos incluem 7 dias de teste grátis
          </p>
        </div>
      </section>
    </>
  );
};
