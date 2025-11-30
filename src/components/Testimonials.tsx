import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {ChevronLeft, ChevronRight, Quote} from 'lucide-react';

const testimonials = [
  {
    text: "A ergonomia visual mudou tudo pra mim. Eu estudava 2h e ficava com dor de cabeça. No Re-Journey consigo fazer blocos de 4h sem sentir o peso na vista.",
    author: "Dra. Camila S."
  },
  {
    text: "O sistema adaptativo não te deixa mentir pra si mesmo. Ele joga na sua cara o que você não sabe, e é isso que faz a gente crescer.",
    author: "Dr. João P."
  },
  {
    text: "As questões diárias viraram meu ritual. Acordo, tomo café e faço as 30 novas. A sensação de progresso é real.",
    author: "Dr. Lucas M."
  },
  {
    text: "Nunca vi uma plataforma que entende tão bem o nível de cada aluno. O motor adaptativo é impressionante.",
    author: "Dra. Ana Carolina R."
  },
  {
    text: "O escalonamento de dificuldade em 6 níveis me deu clareza do meu real progresso. Antes eu achava que sabia, agora eu sei que sei.",
    author: "Dr. Rafael T."
  },
  {
    text: "A base científica não é marketing. Você sente na prática que cada detalhe foi pensado com propósito.",
    author: "Dra. Juliana M."
  },
  {
    text: "As questões oficiais de residências médicas ampliaram minha visão. Não é só Revalida, é formação médica de verdade.",
    author: "Dr. Pedro H."
  },
  {
    text: "Estudar 6 meses aqui valeu mais que 2 anos em outro cursinho. A diferença está na inteligência do sistema.",
    author: "Dra. Mariana F."
  },
  {
    text: "Sou médico formado há 8 anos fora do Brasil. O Re-Journey me reconectou com a medicina brasileira de forma objetiva e profunda.",
    author: "Dr. Carlos E."
  },
  {
    text: "A atualização diária de questões mantém o estudo sempre fresco. Nunca senti que estava repetindo conteúdo vazio.",
    author: "Dra. Beatriz L."
  }
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-[#121212] border-y border-[#1F1F1F]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#E0E0E0]">O que dizem nossos alunos</h2>
        </div>

        <div className="relative bg-[#181818] p-8 md:p-12 rounded-2xl border border-[#252525]">
          <Quote className="absolute top-8 left-8 w-10 h-10 text-[#2A2A2A]" />
          
          <div className="relative z-10 min-h-[200px] flex flex-col justify-center items-center text-center">
            <AnimatePresence mode='wait'>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <h4 className="text-white font-semibold">{testimonials[current].author}</h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full bg-[#252525] text-gray-400 hover:text-white hover:bg-[#333] transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={next} className="p-2 rounded-full bg-[#252525] text-gray-400 hover:text-white hover:bg-[#333] transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
