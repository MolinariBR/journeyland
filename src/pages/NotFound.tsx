import { Link } from "react-router-dom";
import {Home, ArrowLeft} from 'lucide-react';
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0]">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-9xl font-bold text-gray-700 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-6">
            Página Não Encontrada
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            A página que você está procurando não existe ou foi movida.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E0E0E0] text-[#121212] font-semibold rounded-lg hover:bg-white transition-all"
            >
              <Home className="w-5 h-5" />
              Voltar para Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[#333] text-[#E0E0E0] font-medium rounded-lg hover:bg-[#1E1E1E] hover:border-gray-500 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Página Anterior
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
