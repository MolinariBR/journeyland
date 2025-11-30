import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Plus, Minus} from 'lucide-react';

const faqs = [
  {
    q: "Como funcionam os níveis de dificuldade?",
    a: "O sistema utiliza a Teoria de Resposta ao Item (TRI) para classificar questões em 6 níveis. Você começa onde o diagnóstico indica e progride conforme acerta questões de nível superior consistentemente."
  },
  {
    q: "O Re-Journey realmente aprende com o aluno?",
    a: "Sim. Nosso algoritmo analisa seus tempos de resposta, padrões de erro e áreas de lacuna para montar trilhas de estudo personalizadas que atacam seus pontos fracos."
  },
  {
    q: "O que é o Edital Esquematizado e como funciona?",
    a: "É nossa metodologia exclusiva de Triangulação de Fontes: cruzamos a análise estatística de todas as provas INEP (2011-2022), protocolos oficiais do SUS (PCDTs e diretrizes do Ministério da Saúde) e dados epidemiológicos nacionais (DATASUS/SINAN). Isso garante que você estude o que é estatisticamente provável, clinicamente correto segundo o SUS e epidemiologicamente relevante no Brasil — eliminando o desperdício de tempo com temas raros ou condutas desatualizadas."
  },
  {
    q: "Como os estudos científicos são aplicados no método?",
    a: "Aplicamos Spaced Repetition para revisões, Cognitive Load Theory para o design da interface e Case-Based Learning na estruturação das questões."
  },
  {
    q: "Como funciona a atualização diária das questões?",
    a: "Nossa equipe editorial médica insere entre 30 a 50 novas questões inéditas todos os dias, baseadas nas tendências mais recentes da literatura médica e provas anteriores."
  },
  {
    q: "O que diferencia o Re-Journey de outros cursinhos?",
    a: "Não somos apenas um banco de PDF. Somos uma plataforma de tecnologia educacional adaptativa com foco em ergonomia e saúde mental do estudante, usando a metodologia de Edital Esquematizado para máxima eficiência: você estuda menos e acerta mais."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#161616]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#E0E0E0] mb-4">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#1A1A1A] rounded-lg border border-[#2A2A2A] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1E1E1E] transition-colors"
              >
                <span className="font-medium text-gray-200">{faq.q}</span>
                {openIndex === index ? <Minus className="w-5 h-5 text-gray-500" /> : <Plus className="w-5 h-5 text-gray-500" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-[#252525]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
