import { useEffect, useState } from "react";
import {CheckCircle, Loader2, XCircle} from 'lucide-react';
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { lumi } from "../lib/lumi";

export const Success = () => {
  const [validating, setValidating] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const capturePayment = async () => {
      const params = new URLSearchParams(window.location.search);
      
      // Check for PayPal token (returned after approval)
      const paypalToken = params.get('token');
      const payerId = params.get('PayerID');
      
      // Also support legacy Stripe session_id for backwards compatibility
      const stripeSessionId = params.get('session_id');

      if (paypalToken && payerId) {
        // PayPal flow - capture the payment
        try {
          const response = await lumi.functions.invoke('capture-payment', {
            method: 'POST',
            body: { orderId: paypalToken }
          });

          if (response.success) {
            setIsValid(true);
            setValidating(false);
            
            // Redirect to WhatsApp after successful capture
            setTimeout(() => {
              window.location.href = "https://wa.me/559991339799?text=Olá!%20Acabei%20de%20concluir%20meu%20pagamento%20no%20Re-Journey";
            }, 3000);
          } else {
            setError(response.error || "Erro ao processar pagamento");
            setIsValid(false);
            setValidating(false);
          }
        } catch (err) {
          console.error("Capture error:", err);
          setError("Erro ao processar pagamento. Entre em contato conosco.");
          setIsValid(false);
          setValidating(false);
        }
      } else if (stripeSessionId) {
        // Legacy Stripe flow
        setIsValid(true);
        setValidating(false);
        
        setTimeout(() => {
          window.location.href = "https://wa.me/559991339799?text=Olá!%20Acabei%20de%20concluir%20meu%20pagamento%20no%20Re-Journey";
        }, 3000);
      } else {
        // No valid payment parameters
        setIsValid(false);
        setValidating(false);
      }
    };

    capturePayment();
  }, []);

  if (validating) {
    return (
      <div className="min-h-screen bg-[#121212] text-[#E0E0E0] flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-gray-400 animate-spin" />
      </div>
    );
  }

  if (!isValid) {
    return (
      <div className="min-h-screen bg-[#121212] text-[#E0E0E0]">
        <Navbar />
        <div className="container mx-auto px-6 pt-32 pb-20 text-center">
          <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
            {error ? <XCircle className="w-12 h-12 text-red-500" /> : <span className="text-4xl">⚠️</span>}
          </div>
          <h1 className="text-4xl font-bold text-[#F5F5F5] mb-4">
            {error ? "Erro no Pagamento" : "Acesso Inválido"}
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            {error || "Esta página só pode ser acessada após um pagamento válido."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-block px-8 py-4 bg-[#E0E0E0] text-[#121212] font-semibold rounded-lg hover:bg-white transition-all"
            >
              Voltar para Home
            </a>
            {error && (
              <a
                href="https://wa.me/559991339799?text=Olá!%20Tive%20um%20problema%20no%20pagamento%20do%20Re-Journey"
                className="inline-block px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-[#1E1E1E] transition-all"
              >
                Falar com Suporte
              </a>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0]">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-20 text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" aria-hidden="true" />
        <h1 className="text-4xl font-bold text-[#F5F5F5] mb-4">
          Pagamento Confirmado!
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Você será redirecionado para o WhatsApp em instantes...
        </p>
        <p className="text-sm text-gray-500">
          Caso não seja redirecionado automaticamente,{" "}
          <a
            href="https://wa.me/559991339799?text=Olá!%20Acabei%20de%20concluir%20meu%20pagamento%20no%20Re-Journey"
            className="text-gray-300 underline hover:text-white"
            aria-label="Abrir WhatsApp manualmente"
          >
            clique aqui
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};
