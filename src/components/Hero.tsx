import { motion } from 'framer-motion';
import {ArrowRight, Brain, Activity, BarChart3, Clock, Layers, ShieldCheck, Zap} from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212] text-[#E0E0E0] pt-20">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" 
           style={{ 
             backgroundImage: `url("https://static.lumi.new/4b/4bfcefa6fc906c3e622022ed98943780.png")`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundBlendMode: 'overlay'
           }} 
      />
      
      {/* Generated Image Overlay - will be replaced with actual URL if available */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212]/50 to-[#121212] z-10" />

      <div className="container mx-auto px-6 relative z-20 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#1E1E1E] border border-[#333] text-sm font-medium text-gray-400 mb-6">
            +30 a 50 novas questões adicionadas todos os dias
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-[#F5F5F5]">
            A jornada inteligente, <br className="hidden md:block" />
            <span className="text-gray-400">científica e personalizada</span> <br className="hidden md:block" />
            para o Revalida.
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Metodologia baseada em evidências, motor adaptativo e atualização diária de questões. 
            Projetado para reduzir a fadiga e maximizar a retenção.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#E0E0E0] text-[#121212] font-semibold rounded-lg hover:bg-white transition-all transform hover:scale-105 shadow-lg shadow-white/5"
              aria-label="Ir para planos"
            >
              Começar Agora
            </button>
            <button 
              onClick={() => document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent border border-[#333] text-[#E0E0E0] font-medium rounded-lg hover:bg-[#1E1E1E] hover:border-gray-500 transition-all flex items-center gap-2"
              aria-label="Ver metodologia"
            >
              Conheça a Metodologia
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
