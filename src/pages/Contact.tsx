import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {Mail, MessageSquare, Send, CheckCircle, Clock, Target, CreditCard, BookOpen, Shield, Lock} from 'lucide-react';
import { motion } from "framer-motion";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your backend/email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] font-sans">
      <Navbar />
      
      <main className="py-20 bg-[#161616]">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1F1F1F] rounded-full mb-6">
              <MessageSquare className="w-8 h-8 text-[#E0E0E0]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
              Entre em Contato
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Tem dúvidas sobre a plataforma, metodologia ou sua assinatura? 
              Estamos aqui para ajudar. Responderemos em até 24 horas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#1A1A1A] rounded-2xl p-8 border border-[#252525]"
            >
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6">Envie sua Mensagem</h2>
              
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-gray-400">
                    Obrigado pelo contato. Responderemos em breve.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#121212] border border-[#2A2A2A] rounded-lg text-[#E0E0E0] focus:outline-none focus:border-[#404040] transition-colors"
                      placeholder="Dr(a). João Silva"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#121212] border border-[#2A2A2A] rounded-lg text-[#E0E0E0] focus:outline-none focus:border-[#404040] transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#121212] border border-[#2A2A2A] rounded-lg text-[#E0E0E0] focus:outline-none focus:border-[#404040] transition-colors"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="metodologia">Dúvidas sobre Metodologia</option>
                      <option value="assinatura">Assinatura e Pagamento</option>
                      <option value="tecnico">Suporte Técnico</option>
                      <option value="trial">Trial de 7 dias</option>
                      <option value="conteudo">Conteúdo e Questões</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-[#121212] border border-[#2A2A2A] rounded-lg text-[#E0E0E0] focus:outline-none focus:border-[#404040] transition-colors resize-none"
                      placeholder="Descreva sua dúvida ou solicitação..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#E0E0E0] text-[#121212] font-bold rounded-lg hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </button>

                  {/* Security Badges */}
                  <div className="mt-6 pt-6 border-t border-[#252525]">
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-green-400" />
                        <span>Conexão Segura SSL</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-400" />
                        <span>Dados Protegidos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-green-400" />
                        <span>Pagamento Seguro</span>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Info & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Direct Contact */}
              <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-[#252525]">
                <h3 className="text-xl font-bold text-[#F5F5F5] mb-6">Contato Direto</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#252525] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#E0E0E0]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">E-mail Geral</p>
                      <a 
                        href="mailto:contato@re-journey.com.br" 
                        className="text-[#E0E0E0] hover:text-white transition-colors"
                      >
                        contato@re-journey.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#252525] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#E0E0E0]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Suporte Técnico</p>
                      <a 
                        href="mailto:suporte@re-journey.com.br" 
                        className="text-[#E0E0E0] hover:text-white transition-colors"
                      >
                        suporte@re-journey.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#252525] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#E0E0E0]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Privacidade (DPO)</p>
                      <a 
                        href="mailto:privacidade@re-journey.com.br" 
                        className="text-[#E0E0E0] hover:text-white transition-colors"
                      >
                        privacidade@re-journey.com.br
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-[#252525]">
                <h3 className="text-xl font-bold text-[#F5F5F5] mb-6">Perguntas Frequentes</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#E0E0E0] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#F5F5F5] mb-2">
                        Qual o prazo de resposta?
                      </p>
                      <p className="text-gray-400">
                        Respondemos todas as mensagens em até 24 horas úteis.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-[#E0E0E0] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#F5F5F5] mb-2">
                        Como funciona o trial de 7 dias?
                      </p>
                      <p className="text-gray-400">
                        Acesso completo e gratuito por 7 dias. Cancele antes do término para não ser cobrado.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-[#E0E0E0] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#F5F5F5] mb-2">
                        Como funciona o pagamento?
                      </p>
                      <p className="text-gray-400 mb-3">
                        Pagamento seguro via cartão de crédito. Cancele a qualquer momento durante o trial.
                      </p>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mt-2">
                        <p className="text-xs text-green-400 font-semibold mb-1 flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          Transparência de Cobrança
                        </p>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          A primeira cobrança ocorre apenas após o término do trial de 7 dias. Se cancelar durante o trial, não será cobrado.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-[#E0E0E0] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#F5F5F5] mb-2">
                        Mais dúvidas sobre metodologia?
                      </p>
                      <p className="text-gray-400">
                        Visite nossa seção de FAQ completa na página inicial.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-[#252525]">
                <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">Horário de Atendimento</h3>
                <p className="text-gray-400 text-sm">
                  Segunda a Sexta: 9h às 18h (Brasília)<br />
                  Sábados: 9h às 13h<br />
                  Domingos e Feriados: Fechado
                </p>
                <p className="text-gray-500 text-xs mt-4">
                  * Mensagens recebidas fora do horário serão respondidas no próximo dia útil.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
