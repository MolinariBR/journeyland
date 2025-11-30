import {Brain} from 'lucide-react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-[#1F1F1F]">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <Brain className="w-6 h-6 text-gray-200" />
          <span className="text-xl font-bold text-[#E0E0E0] tracking-tight">Re-Journey</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <button onClick={() => scrollToSection('metodologia')} className="hover:text-white transition-colors" aria-label="Ir para seção Metodologia">Metodologia</button>
          <button onClick={() => scrollToSection('ciencia')} className="hover:text-white transition-colors" aria-label="Ir para seção Ciência">Ciência</button>
          <button onClick={() => scrollToSection('recursos')} className="hover:text-white transition-colors" aria-label="Ir para seção Recursos">Recursos</button>
          <button onClick={() => scrollToSection('depoimentos')} className="hover:text-white transition-colors" aria-label="Ir para seção Depoimentos">Depoimentos</button>
          <Link to="/docs" className="hover:text-white transition-colors" aria-label="Ir para Documentação">Documentação</Link>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.location.href = '/#pricing'}
            className="px-4 py-2 bg-[#E0E0E0] text-[#121212] text-sm font-bold rounded hover:bg-white transition-all"
            aria-label="Ir para seção de planos"
          >
            Começar
          </button>
        </div>
      </div>
    </nav>
  );
};
