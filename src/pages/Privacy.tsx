import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {Shield} from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] font-sans">
      <Navbar />
      
      <main className="py-20 bg-[#161616]">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1F1F1F] rounded-full mb-6">
              <Shield className="w-8 h-8 text-[#E0E0E0]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
              Política de Privacidade
            </h1>
            <p className="text-gray-400">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>

          {/* Content */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 md:p-12 border border-[#252525] space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">1. Introdução</h2>
              <p className="text-gray-400 leading-relaxed">
                A Re-Journey está comprometida com a proteção da sua privacidade e dos seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">2. Dados Coletados</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Coletamos as seguintes categorias de dados:
              </p>
              
              <h3 className="text-xl font-semibold text-[#F5F5F5] mb-3 mt-6">2.1. Dados de Cadastro</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Nome completo</li>
                <li>E-mail</li>
                <li>Senha (armazenada de forma criptografada)</li>
                <li>País de formação médica</li>
                <li>Número de registro profissional (opcional)</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#F5F5F5] mb-3 mt-6">2.2. Dados de Uso da Plataforma</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Histórico de questões respondidas</li>
                <li>Taxa de acerto por área e módulo</li>
                <li>Tempo de estudo e frequência de acesso</li>
                <li>Progresso nos níveis de dificuldade</li>
                <li>Resultados de simulados</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#F5F5F5] mb-3 mt-6">2.3. Dados Técnicos</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Endereço IP</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Sistema operacional</li>
                <li>Cookies e tecnologias similares</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#F5F5F5] mb-3 mt-6">2.4. Dados de Pagamento</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Informações de pagamento (processadas por gateway seguro de terceiros)</li>
                <li>Histórico de transações</li>
                <li>Notas fiscais emitidas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">3. Finalidade do Uso dos Dados</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Utilizamos seus dados para:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Prover acesso e funcionalidades da plataforma</li>
                <li>Personalizar sua experiência de aprendizagem (motor adaptativo)</li>
                <li>Gerar relatórios de desempenho e análises estatísticas</li>
                <li>Processar pagamentos e emitir notas fiscais</li>
                <li>Enviar comunicações sobre sua conta e atualizações da plataforma</li>
                <li>Melhorar nossos serviços através de análises agregadas e anônimas</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Prevenir fraudes e garantir a segurança da plataforma</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">4. Compartilhamento de Dados</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Não vendemos seus dados pessoais. Podemos compartilhar informações apenas nas seguintes situações:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li><strong>Provedores de serviço:</strong> Empresas que nos auxiliam em hospedagem, pagamentos, e-mail e análise de dados (sob rigorosos acordos de confidencialidade)</li>
                <li><strong>Obrigações legais:</strong> Quando exigido por lei, ordem judicial ou autoridade competente</li>
                <li><strong>Proteção de direitos:</strong> Para proteger nossos direitos, propriedade ou segurança, bem como de nossos usuários</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">5. Armazenamento e Segurança</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Implementamos medidas técnicas e organizacionais para proteger seus dados:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Criptografia de dados sensíveis (SSL/TLS)</li>
                <li>Senhas armazenadas com hash seguro</li>
                <li>Servidores em data centers com certificações de segurança</li>
                <li>Controles de acesso rigorosos para nossa equipe</li>
                <li>Backups regulares e planos de recuperação de desastres</li>
                <li>Monitoramento contínuo de vulnerabilidades</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                Seus dados são armazenados pelo período necessário para cumprimento das finalidades descritas ou conforme exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">6. Seus Direitos (LGPD)</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                De acordo com a LGPD, você tem direito a:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li><strong>Acesso:</strong> Confirmar se tratamos seus dados e solicitar cópia</li>
                <li><strong>Correção:</strong> Atualizar dados incompletos, inexatos ou desatualizados</li>
                <li><strong>Anonimização, bloqueio ou eliminação:</strong> De dados desnecessários, excessivos ou tratados em desconformidade</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado e interoperável</li>
                <li><strong>Revogação de consentimento:</strong> Quando o tratamento for baseado em consentimento</li>
                <li><strong>Oposição:</strong> Opor-se ao tratamento em situações específicas</li>
                <li><strong>Informação:</strong> Sobre entidades com as quais compartilhamos dados</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                Para exercer seus direitos, entre em contato através de: privacidade@re-journey.com.br
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">7. Cookies e Tecnologias Similares</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Utilizamos cookies para melhorar sua experiência:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li><strong>Cookies essenciais:</strong> Necessários para funcionamento da plataforma</li>
                <li><strong>Cookies de desempenho:</strong> Análise de uso e melhoria de funcionalidades</li>
                <li><strong>Cookies de preferência:</strong> Lembrar suas configurações e escolhas</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                Você pode gerenciar cookies através das configurações do seu navegador, mas isso pode afetar algumas funcionalidades da plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">8. Menores de Idade</h2>
              <p className="text-gray-400 leading-relaxed">
                Nossa plataforma é destinada a médicos formados. Não coletamos intencionalmente dados de menores de 18 anos. Caso identifiquemos tal situação, os dados serão imediatamente removidos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">9. Alterações nesta Política</h2>
              <p className="text-gray-400 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Mudanças significativas serão comunicadas por e-mail ou através de aviso destacado na plataforma. A data da última atualização sempre estará indicada no topo deste documento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">10. Encarregado de Dados (DPO)</h2>
              <p className="text-gray-400 leading-relaxed">
                Para questões relacionadas à proteção de dados e privacidade, nosso Encarregado de Dados pode ser contatado através de:
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                <strong>E-mail:</strong> dpo@re-journey.com.br<br />
                <strong>Endereço:</strong> [Endereço da empresa]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">11. Legislação Aplicável</h2>
              <p className="text-gray-400 leading-relaxed">
                Esta Política de Privacidade é regida pelas leis brasileiras, especialmente pela Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Qualquer disputa será resolvida no foro da comarca da sede da empresa.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
