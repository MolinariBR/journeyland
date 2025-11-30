import { motion } from 'framer-motion';
import {Eye, Monitor, Moon} from 'lucide-react';

export const Ergonomics = () => {
  return (
    <section className="py-24 bg-[#0F0F0F] border-y border-[#1F1F1F]">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#E0E0E0] mb-6">Ergonomia Visual Científica</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Estudar para o Revalida exige horas de tela. O Re-Journey utiliza o tema 
                <strong className="text-gray-200"> Dark / Black Paper</strong>, projetado especificamente para reduzir a emissão de luz azul e minimizar o cansaço ocular (eye strain).
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1A1A1A] rounded-lg text-gray-300">
                  <Moon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-200 mb-2">Baixo Contraste Controlado</h3>
                  <p className="text-gray-500">Evita o "efeito halo" de textos brancos puros em fundos pretos absolutos. Usamos tons off-white e cinzas profundos.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1A1A1A] rounded-lg text-gray-300">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-200 mb-2">Redução de Fadiga</h3>
                  <p className="text-gray-500">Ideal para maratonas de estudo noturnas ou ambientes com pouca luz, preservando seu ciclo circadiano.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 relative">
          {/* Abstract visual representation of eye comfort */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative aspect-square bg-gradient-to-tr from-[#121212] to-[#1E1E1E] rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-2xl"
          >
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-3/4 h-3/4 rounded-full bg-[#000] opacity-50 blur-3xl"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                    <div className="text-6xl font-thin text-[#333]">Aa</div>
                    <div className="h-px w-24 bg-[#333] mx-auto"></div>
                    <p className="text-[#444] text-sm uppercase tracking-[0.3em]">Visual Comfort</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
