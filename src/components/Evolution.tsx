import { motion } from 'framer-motion';

export const Evolution = () => {
  return (
    <section className="py-24 bg-[#161616]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#E0E0E0] mb-4">Evolução do Aluno</h2>
          <p className="text-gray-400">Resultados médios observados após 3 meses de uso contínuo.</p>
        </div>

        <div className="bg-[#121212] rounded-2xl border border-[#2A2A2A] overflow-hidden">
          <div className="grid grid-cols-3 bg-[#1E1E1E] p-4 text-sm font-semibold text-gray-400 uppercase tracking-wider border-b border-[#2A2A2A]">
            <div className="pl-4">Métrica</div>
            <div className="text-center">Antes</div>
            <div className="text-center text-white">Depois</div>
          </div>

          {[
            { label: "Taxa de Acerto", before: "45-55%", after: "75-85%" },
            { label: "Confiança na Resposta", before: "Baixa / Chute", after: "Alta / Fundamentada" },
            { label: "Constância de Estudo", before: "Irregular", after: "Diária (Streak)" },
            { label: "Progressão de Nível", before: "Estagnado", after: "Nível 4-5 (Avançado)" }
          ].map((row, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-3 p-6 border-b border-[#1F1F1F] last:border-0 hover:bg-[#181818] transition-colors items-center"
            >
              <div className="text-gray-300 font-medium pl-4">{row.label}</div>
              <div className="text-center text-gray-600">{row.before}</div>
              <div className="text-center text-[#E0E0E0] font-bold text-lg">{row.after}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
