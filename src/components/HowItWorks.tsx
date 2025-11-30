import { motion } from 'framer-motion';
import {ClipboardCheck, Sliders, TrendingUp, AlertCircle} from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Avaliação Inicial Inteligente",
    desc: "Um diagnóstico preciso do seu nível atual para calibrar o sistema.",
    icon: <ClipboardCheck className="w-6 h-6" />
  },
  {
    id: "02",
    title: "Calibração de Níveis",
    desc: "O sistema define um dos 6 níveis de dificuldade para sua largada.",
    icon: <Sliders className="w-6 h-6" />
  },
  {
    id: "03",
    title: "Trilhas Personalizadas",
    desc: "Foco automático em suas áreas de menor desempenho.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    id: "04",
    title: "Simulados & Revisões",
    desc: "Ciclos de prova realistas e revisões baseadas em seus erros.",
    icon: <AlertCircle className="w-6 h-6" />
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-[#161616]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E0E0E0] mb-4">Como funciona</h2>
          <p className="text-gray-400">Do diagnóstico à aprovação, sua jornada é guiada por dados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative p-6 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] hover:bg-[#1E1E1E] transition-all"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#252525] rounded-full flex items-center justify-center border border-[#333] text-gray-300 font-bold shadow-lg">
                {step.id}
              </div>
              <div className="mt-6 mb-4 text-gray-400">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-200 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
