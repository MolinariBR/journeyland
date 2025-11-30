import { motion } from 'framer-motion';
import {Database, RefreshCw, FileText, BarChart2, Clock, Brain, Layers} from 'lucide-react';

const features = [
  {
    icon: <Database className="w-5 h-5" />,
    text: "Banco calibrado por evidências"
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    text: "+30–50 questões novas/dia"
  },
  {
    icon: <FileText className="w-5 h-5" />,
    text: "Simulados realistas INEP"
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    text: "Painéis avançados de desempenho"
  },
  {
    icon: <Clock className="w-5 h-5" />,
    text: "Sistema de Spaced Repetition"
  },
  {
    icon: <Brain className="w-5 h-5" />,
    text: "Motor adaptativo de aprendizado"
  },
  {
    icon: <Layers className="w-5 h-5" />,
    text: "Análise por competência"
  },
  {
    icon: <FileText className="w-5 h-5" />,
    text: "Questões oficiais Revalida + Residências"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-[#121212] border-t border-[#1F1F1F]">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#E0E0E0] mb-4">Recursos Destacados</h2>
          <p className="text-gray-400">Ferramentas profissionais para quem leva o Revalida a sério.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, backgroundColor: "#1E1E1E" }}
              className="flex items-center gap-3 p-4 rounded-lg bg-[#161616] border border-[#252525] text-gray-300 cursor-default transition-colors"
            >
              <div className="text-gray-500">
                {feature.icon}
              </div>
              <span className="text-sm font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
