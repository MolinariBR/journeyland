import { motion } from 'framer-motion';
import {Brain, Activity, TrendingUp, Layers, Zap, Target} from 'lucide-react';

const pillars = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Inteligência Pedagógica",
    description: "Baseada em evidências científicas para otimizar o aprendizado."
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Realismo Total INEP",
    description: "Casos clínicos, estilo e distribuição de temas fiéis à prova."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Aprendizagem Adaptativa",
    description: "Motor de progressão real-time que se ajusta ao seu desempenho."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Escalonamento Científico",
    description: "Dificuldade progressiva em 6 níveis calibrados."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Edital Esquematizado",
    description: "Triangulação de dados: estatística INEP + protocolos SUS + epidemiologia nacional para máxima eficiência."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Evolução Contínua",
    description: "30–50 novas questões adicionadas diariamente."
  }
];

export const Methodology = () => {
  return (
    <section className="py-24 bg-[#161616] text-[#E0E0E0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pilares da Metodologia</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nossa abordagem não é aleatória. Cada detalhe foi construído sobre cinco fundamentos essenciais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pilar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1E1E1E] p-8 rounded-xl border border-[#2A2A2A] hover:border-[#404040] transition-colors group"
            >
              <div className="bg-[#2A2A2A] w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-gray-300 group-hover:text-white group-hover:bg-[#333] transition-colors">
                {pilar.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-200">{pilar.title}</h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                {pilar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
