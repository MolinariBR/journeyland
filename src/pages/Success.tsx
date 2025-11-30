import { useEffect, useState } from "react";
import {CheckCircle, Loader2} from 'lucide-react';
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Success = () => {
  const [validating, setValidating] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Validate session_id from URL
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id');
    
    if (sessionId) {
      // Simple validation - session_id exists
      setIsValid(true);
      setValidating(false);
      
      // Redirect to WhatsApp after validation
      const timer = setTimeout(() => {
        window.location.href = "https://wa.me/559991339799?text=Olá!%20Acabei%20de%20concluir%20meu%20pagamento%20no%20Re-Journey";
      }, 3000);
      
      return () => clearTimeout(timer);
    } else {
      // No session_id - invalid access
      setIsValid(false);
      setValidating(false);
    }
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
