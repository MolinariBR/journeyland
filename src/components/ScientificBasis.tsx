import { motion } from 'framer-motion';
import {ExternalLink} from 'lucide-react';

const papers = [
  {
    title: "Case-Based Learning (CBL)",
    desc: "Base da construção de enunciados clínicos realistas.",
    link: "https://www.queensu.ca/ctl/resources/instructors/instructional-strategies/case-based-learning"
  },
  {
    title: "Teoria da Carga Cognitiva",
    desc: "Calibração de dificuldade e ergonomia cognitiva.",
    link: "https://www.sciencedirect.com/science/chapter/bookseries/abs/pii/B9780123876911000028"
  },
  {
    title: "Spaced Repetition",
    desc: "Fundamenta o sistema de revisões do aluno.",
    link: "https://pubmed.ncbi.nlm.nih.gov/39250798/"
  },
  {
    title: "Test-Enhanced Learning",
    desc: "Uso intensivo de questões como ferramenta primária.",
    link: "https://doi.org/10.1111/j.1745-6916.2006.00012.x"
  },
  {
    title: "Competency-Based Education",
    desc: "Sistema de medição de competências por área.",
    link: "https://doi.org/10.3109/0142159X.2010.501190"
  },
  {
    title: "Item Response Theory (TRI)",
    desc: "Modelo interno de calibração de dificuldade.",
    link: "https://www.ime.unicamp.br/~cnaber/Baker_Book.pdf"
  }
];

export const ScientificBasis = () => {
  return (
    <section className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2 block">Evidências</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E0E0E0] mb-6">Base Científica da Plataforma</h2>
          <p className="text-gray-400 max-w-2xl">
            Não seguimos intuições. Seguimos dados. Cada funcionalidade do Re-Journey é sustentada por papers e pesquisas em educação médica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {papers.map((paper, index) => (
            <motion.a
              key={index}
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="block bg-[#1A1A1A] p-6 rounded border border-[#2A2A2A] hover:border-gray-600 group transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors pr-4">
                  {paper.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-gray-400" />
              </div>
              <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                {paper.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
