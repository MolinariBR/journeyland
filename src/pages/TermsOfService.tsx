import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {FileText} from 'lucide-react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] font-sans">
      <Navbar />
      
      <main className="py-20 bg-[#161616]">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1F1F1F] rounded-full mb-6">
              <FileText className="w-8 h-8 text-[#E0E0E0]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
              Termos de Uso
            </h1>
            <p className="text-gray-400">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>

          {/* Content */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 md:p-12 border border-[#252525] space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-400 leading-relaxed">
                Ao acessar e usar a plataforma Re-Journey, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá usar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">2. Descrição do Serviço</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                O Re-Journey é uma plataforma digital de preparação para o exame Revalida, oferecendo:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Banco de questões atualizado diariamente (30-50 novas questões/dia)</li>
                <li>Sistema adaptativo de aprendizagem baseado em evidências científicas</li>
                <li>Simulados realistas no formato INEP</li>
                <li>Análise de desempenho e progressão personalizada</li>
                <li>Conteúdo alinhado com protocolos do SUS e diretrizes do Ministério da Saúde</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">3. Período de Trial</h2>
              <p className="text-gray-400 leading-relaxed">
                Oferecemos um período de trial gratuito de 7 dias para novos usuários. Durante este período, você terá acesso completo à plataforma. Caso não cancele antes do término do trial, sua assinatura será automaticamente convertida para o plano escolhido e você será cobrado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">4. Assinatura e Pagamento</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                A plataforma opera sob modelo de assinatura com as seguintes condições:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Planos disponíveis: 6 meses e 12 meses</li>
                <li>Pagamento único no início do período contratado</li>
                <li>Valores promocionais válidos apenas para novas assinaturas</li>
                <li>Acesso imediato após confirmação do pagamento</li>
                <li>Não há renovação automática ao final do período</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">5. Política de Cancelamento e Reembolso</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Você pode cancelar sua assinatura a qualquer momento através das configurações da sua conta. As seguintes condições se aplicam:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Reembolso integral se solicitado dentro de 7 dias após a compra</li>
                <li>Após 7 dias, não há reembolso proporcional, mas você mantém acesso até o fim do período contratado</li>
                <li>Cancelamento durante o trial não gera cobrança</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">6. Uso Adequado da Plataforma</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Ao usar o Re-Journey, você concorda em:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Não compartilhar suas credenciais de acesso com terceiros</li>
                <li>Não copiar, reproduzir ou distribuir o conteúdo da plataforma</li>
                <li>Não usar ferramentas automatizadas para acessar ou extrair dados</li>
                <li>Não tentar burlar sistemas de segurança ou limitações técnicas</li>
                <li>Usar a plataforma apenas para fins de estudo pessoal</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">7. Propriedade Intelectual</h2>
              <p className="text-gray-400 leading-relaxed">
                Todo o conteúdo disponível na plataforma Re-Journey, incluindo textos, questões, imagens, logotipos, design e código, é protegido por direitos autorais e propriedade intelectual. O uso não autorizado pode resultar em ações legais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">8. Limitação de Responsabilidade</h2>
              <p className="text-gray-400 leading-relaxed">
                O Re-Journey é uma ferramenta de apoio ao estudo e não garante aprovação no exame Revalida. Não nos responsabilizamos por resultados individuais, decisões clínicas tomadas com base no conteúdo, ou incompatibilidades técnicas com dispositivos específicos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">9. Modificações nos Termos</h2>
              <p className="text-gray-400 leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. Mudanças significativas serão comunicadas por e-mail com 30 dias de antecedência. O uso continuado da plataforma após as alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">10. Contato</h2>
              <p className="text-gray-400 leading-relaxed">
                Para dúvidas sobre estes termos, entre em contato através da nossa página de contato ou pelo e-mail: contato@re-journey.com.br
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
