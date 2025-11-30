import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Methodology } from './components/Methodology';
import { ScientificBasis } from './components/ScientificBasis';
import { Ergonomics } from './components/Ergonomics';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Evolution } from './components/Evolution';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] font-sans selection:bg-gray-700 selection:text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded">
        Pular para o conteúdo
      </a>
      <Navbar />
      
      <main>
        <Hero />
        
        {/* "What is" Section - Inline as it's simple */}
        <section className="py-20 bg-[#161616] border-b border-[#1F1F1F]">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">O que é o Re-Journey?</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Uma plataforma de estudo para o Revalida construída sobre bases científicas, 
              com geração inteligente de questões, níveis progressivos de dificuldade, 
              aprendizagem adaptativa e ergonomia visual projetada para longas sessões de estudo 
              com baixo cansaço ocular.
            </p>
          </div>
        </section>

        <div id="metodologia">
          <Methodology />
        </div>
        <div id="ciencia">
          <ScientificBasis />
        </div>
        <Ergonomics />
        <HowItWorks />
        <div id="recursos">
          <Features />
        </div>
        <Evolution />
        <div id="depoimentos">
          <Testimonials />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <FAQ />

        {/* Final CTA Section */}
        <section className="py-32 bg-[#121212] relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-8 tracking-tight">
              Pronto para iniciar sua jornada <br /> científica rumo ao Revalida?
            </h2>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-[#E0E0E0] text-[#121212] text-lg font-bold rounded-lg hover:bg-white hover:scale-105 transition-all shadow-xl shadow-white/5"
              aria-label="Ir para seção de planos"
            >
              Começar Agora
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
