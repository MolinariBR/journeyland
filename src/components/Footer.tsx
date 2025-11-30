import {Brain} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] py-12 border-t border-[#1F1F1F] text-gray-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Brain className="w-6 h-6 text-gray-400" />
            <span className="text-xl font-bold text-gray-300">Re-Journey</span>
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/termos" className="hover:text-gray-300 transition-colors">Termos de Uso</Link>
            <Link to="/privacidade" className="hover:text-gray-300 transition-colors">Privacidade</Link>
            <Link to="/contato" className="hover:text-gray-300 transition-colors">Contato</Link>
          </div>
        </div>
        <div className="text-center text-xs">
          &copy; {new Date().getFullYear()} Re-Journey. Todos os direitos reservados. Feito com ciência e tecnologia.
        </div>
      </div>
    </footer>
  );
};
