import { useEffect, useState } from "react";
import { CheckCircle, Loader2, MessageCircle } from 'lucide-react';
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// WhatsApp configuration
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

    // If there's an order parameter, it's a valid redirect from InfinitePay
    if (orderNSU) {
      setIsValidOrder(true);
      setChecking(false);

      // Start countdown to WhatsApp
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
        <Navbar />
        <div className="container mx-auto px-6 pt-32 pb-20 text-center">
          <div className="w-20 h-20 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">⚠️</span>
          </div>
          <h1 className="text-4xl font-bold text-[#F5F5F5] mb-4">
            Acesso Inválido
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Esta página só pode ser acessada após um pagamento válido.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-4 bg-[#E0E0E0] text-[#121212] font-semibold rounded-lg hover:bg-white transition-all"
          >
            Voltar para Home
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0]">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-20 text-center">
        <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-14 h-14 text-green-500" aria-hidden="true" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
          Pagamento Confirmado! 🎉
        </h1>
        
        <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto">
          Obrigado por assinar o Re-Journey! Você será redirecionado para o WhatsApp em{" "}
          <span className="text-white font-bold">{countdown}</span> segundos...
        </p>

        <div className="space-y-4">
          <a
            href={WHATSAPP_URL}
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-all shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Ir para o WhatsApp agora
          </a>
          
          <p className="text-sm text-gray-500">
            Caso não seja redirecionado automaticamente,{" "}
            <a
              href={WHATSAPP_URL}
              className="text-gray-300 underline hover:text-white"
            >
              clique aqui
            </a>
          </p>
        </div>

        <div className="mt-12 p-6 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">
            Próximos passos
          </h3>
          <p className="text-gray-400 text-sm">
            No WhatsApp, você receberá seu acesso à plataforma e todas as instruções para começar sua jornada rumo ao Revalida!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
