import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Book, ChevronRight, Home, FileText, Lightbulb, Target, Brain, Zap, ExternalLink, CheckCircle2, ArrowRight, TrendingUp, Award, BarChart3, AlertCircle, Rocket, Users, Trophy, Clock, Shield, Sparkles, Mail} from 'lucide-react';

interface DocSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  isExternal?: boolean;
  externalLink?: string;
}

export const Docs = () => {
  const [activeSection, setActiveSection] = useState('introducao');

  const sections: DocSection[] = [
    {
      id: 'introducao',
      title: 'Introdução',
      icon: <Home className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full text-xs font-medium text-gray-400 mb-4">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Documentação v1.0
            </div>
            <h1 className="text-5xl font-bold text-gray-100 mb-4 tracking-tight">Documentação</h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              Plataforma de estudo científica e adaptativa para preparação ao Revalida, fundamentada em evidências e psicometria.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#3A3A3A] transition-all group">
              <div className="w-10 h-10 bg-[#2A2A2A] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#3A3A3A] transition-colors">
                <Brain className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Metodologia Científica</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Fundamentos teóricos e evidências que sustentam a plataforma</p>
            </div>
            
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#3A3A3A] transition-all group">
              <div className="w-10 h-10 bg-[#2A2A2A] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#3A3A3A] transition-colors">
                <Target className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Sistema de Níveis</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Progressão adaptativa de dificuldade baseada em TRI</p>
            </div>
            
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#3A3A3A] transition-all group">
              <div className="w-10 h-10 bg-[#2A2A2A] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#3A3A3A] transition-colors">
                <FileText className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Edital Esquematizado</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Mapeamento completo e estruturado do edital INEP</p>
            </div>
            
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#3A3A3A] transition-all group">
              <div className="w-10 h-10 bg-[#2A2A2A] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#3A3A3A] transition-colors">
                <Lightbulb className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Guia de Uso</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Recursos e funcionalidades da plataforma</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'metodologia',
      title: 'Metodologia Científica',
      icon: <Brain className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-100 mb-4 tracking-tight">Metodologia Científica</h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
              Seis pilares teóricos fundamentam a construção da plataforma, cada um validado por pesquisas acadêmicas internacionais e aplicado de forma sistemática.
            </p>
          </div>

          <div className="space-y-6 mt-12">
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-8 hover:border-[#3A3A3A] transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-2 py-1 bg-[#2A2A2A] text-gray-400 text-xs font-medium rounded mb-3">PILAR 01</span>
                  <h3 className="text-2xl font-semibold text-gray-100 mb-2">Case-Based Learning</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Todos os enunciados são construídos como casos clínicos realistas, simulando situações reais que você encontrará no Revalida. A metodologia CBL promove raciocínio clínico e integração de conhecimentos.
              </p>
              <a href="https://doi.org/10.3109/0142159X.2012.715706" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors group">
                <span>Referência científica</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-8 hover:border-[#3A3A3A] transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-2 py-1 bg-[#2A2A2A] text-gray-400 text-xs font-medium rounded mb-3">PILAR 02</span>
                  <h3 className="text-2xl font-semibold text-gray-100 mb-2">Teoria da Carga Cognitiva</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                A dificuldade das questões é calibrada para otimizar o aprendizado sem sobrecarregar a memória de trabalho. Cada nível de dificuldade respeita os limites de processamento cognitivo.
              </p>
              <a href="https://doi.org/10.1007/s10648-010-9124-4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors group">
                <span>Referência científica</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-8 hover:border-[#3A3A3A] transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-2 py-1 bg-[#2A2A2A] text-gray-400 text-xs font-medium rounded mb-3">PILAR 03</span>
                  <h3 className="text-2xl font-semibold text-gray-100 mb-2">Spaced Repetition</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                O sistema programa revisões em intervalos otimizados para maximizar a retenção de longo prazo. Baseado na curva do esquecimento de Ebbinghaus.
              </p>
              <a href="https://doi.org/10.1037/0033-295X.114.3.715" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors group">
                <span>Referência científica</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-8 hover:border-[#3A3A3A] transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-2 py-1 bg-[#2A2A2A] text-gray-400 text-xs font-medium rounded mb-3">PILAR 04</span>
                  <h3 className="text-2xl font-semibold text-gray-100 mb-2">Test-Enhanced Learning</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Questões não são apenas avaliação, mas a principal ferramenta de aprendizado ativo. O ato de recuperar informação fortalece a memória de forma mais eficaz que a releitura passiva.
              </p>
              <a href="https://doi.org/10.1111/j.1745-6916.2006.00012.x" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors group">
                <span>Referência científica</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-8 hover:border-[#3A3A3A] transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-2 py-1 bg-[#2A2A2A] text-gray-400 text-xs font-medium rounded mb-3">PILAR 05</span>
                  <h3 className="text-2xl font-semibold text-gray-100 mb-2">Competency-Based Medical Education</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Medimos competências específicas por área médica, não apenas acertos totais. O sistema avalia domínio de habilidades clínicas fundamentais de forma granular.
              </p>
              <a href="https://doi.org/10.3109/0142159X.2010.501190" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors group">
                <span>Referência científica</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-8 hover:border-[#3A3A3A] transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-2 py-1 bg-[#2A2A2A] text-gray-400 text-xs font-medium rounded mb-3">PILAR 06</span>
                  <h3 className="text-2xl font-semibold text-gray-100 mb-2">Item Response Theory</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Calibração psicométrica garante que cada questão tenha dificuldade e discriminação conhecidas. Modelo matemático utilizado pelo INEP para avaliar provas de larga escala.
              </p>
              <a href="https://doi.org/10.4324/9781315820948" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors group">
                <span>Referência científica</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'niveis',
      title: 'Sistema de Níveis',
      icon: <Target className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full text-xs font-medium text-gray-400 mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              Sistema de Progressão
            </div>
            <h1 className="text-4xl font-bold text-gray-100 mb-4 tracking-tight">Sistema de Progressão por Níveis</h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
              O Re-Journey utiliza um sistema inteligente de progressão baseado em níveis de dificuldade que se alinha com a realidade do exame Revalida. Em vez de apenas acumular pontos, você avança demonstrando <strong className="text-gray-300">competência consistente</strong> em cada nível antes de desbloquear o próximo.
            </p>
          </div>

          {/* Por que esse sistema */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#151515] border border-[#2A2A2A] rounded-lg p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-[#2A2A2A] rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">Por que esse sistema?</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  O Revalida é um exame extremamente seletivo, com taxa de aprovação em torno de <span className="text-red-400 font-semibold">10%</span>. Para se preparar adequadamente, você precisa provar que domina cada nível de dificuldade antes de avançar.
                </p>
                <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg p-4">
                  <p className="text-sm text-gray-400">
                    Nosso sistema usa <span className="text-gray-300 font-medium">estatística avançada</span> (Limite Inferior de Wilson) para garantir que sua taxa de acerto é real e não apenas sorte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabela de Níveis */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">Níveis de Dificuldade</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#2A2A2A]">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">Nível</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">Nome</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">Descrição</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">Mín. Questões</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">Taxa Necessária</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: 'L', name: 'Básico', desc: 'Conceitos fundamentais', questions: 100, rate: '-', color: 'from-gray-600 to-gray-700' },
                    { code: 'M', name: 'Intermediário', desc: 'Aplicação prática', questions: 75, rate: '85%', color: 'from-blue-600 to-blue-700' },
                    { code: 'A', name: 'Avançado', desc: 'Análise crítica', questions: 50, rate: '90%', color: 'from-cyan-600 to-cyan-700' },
                    { code: 'D', name: 'Difícil', desc: 'Casos complexos', questions: 40, rate: '90%', color: 'from-yellow-600 to-yellow-700' },
                    { code: 'MD', name: 'Muito Difícil', desc: 'Situações raras', questions: 35, rate: '92%', color: 'from-orange-600 to-orange-700' },
                    { code: 'ED', name: 'Extremamente Difícil', desc: 'Cenários limite', questions: 30, rate: '95%', color: 'from-red-600 to-red-700' }
                  ].map((level, idx) => (
                    <tr key={idx} className="border-b border-[#1A1A1A] hover:bg-[#1A1A1A] transition-colors">
                      <td className="py-4 px-4">
                        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${level.color} text-white font-bold text-sm shadow-lg`}>
                          {level.code}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-200 font-medium">{level.name}</td>
                      <td className="py-4 px-4 text-gray-400 text-sm">{level.desc}</td>
                      <td className="py-4 px-4 text-gray-300 font-mono text-sm">{level.questions}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${level.rate === '-' ? 'bg-[#2A2A2A] text-gray-400' : 'bg-green-900/30 text-green-400'}`}>
                          {level.rate}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                O que significam esses números?
              </h4>
              <div className="space-y-3 text-sm text-gray-400">
                <p>
                  <span className="text-gray-300 font-medium">Mínimo de Questões:</span> Quantidade necessária no nível atual para desbloquear o próximo. Por exemplo, para ir do Básico (L) para Intermediário (M), você precisa responder <strong className="text-gray-200">100 questões no nível L</strong>.
                </p>
                <p>
                  <span className="text-gray-300 font-medium">Taxa de Acerto:</span> Porcentagem mínima de acertos considerando margem estatística de erro. Usamos cálculo científico para garantir que você realmente domina o conteúdo.
                </p>
              </div>
            </div>
          </div>

          {/* Como Acompanhar Progresso */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-[#2A2A2A] rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">Como Acompanhar Seu Progresso</h3>
                <p className="text-gray-400 text-sm">No Hub de Sessões você encontrará indicadores visuais do seu avanço</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <h4 className="text-sm font-semibold text-gray-300">Badge do Nível Atual</h4>
                </div>
                <p className="text-xs text-gray-400">Mostra seu nível atual (ex: "Intermediário (M)")</p>
              </div>
              
              <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <h4 className="text-sm font-semibold text-gray-300">Indicador de Progresso</h4>
                </div>
                <p className="text-xs text-gray-400">"Progresso para Avançado: 45/75 questões"</p>
              </div>
              
              <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg p-4 md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <h4 className="text-sm font-semibold text-gray-300">Soft Gates (Portões Suaves)</h4>
                </div>
                <p className="text-xs text-gray-400 mb-3">Quando você está próximo de desbloquear o próximo nível, aparece uma mensagem motivacional:</p>
                <div className="bg-[#1A1A1A] border-l-4 border-yellow-500 p-3 rounded">
                  <p className="text-xs text-gray-300 italic">"Você está a apenas 3% de desbloquear o nível Avançado! Continue praticando o nível Intermediário para progredir."</p>
                </div>
              </div>
            </div>
          </div>

          {/* Por que Tantas Questões */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#151515] border border-[#2A2A2A] rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">Por que Precisamos de Tantas Questões?</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Estatística por Trás do Sistema</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  Usamos o <span className="text-gray-300 font-medium">Limite Inferior de Wilson</span> com 95% de confiança. Isso significa:
                </p>
                <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg p-4 space-y-2">
                  <p className="text-xs text-gray-400">
                    • Com <strong className="text-gray-300">100 questões</strong> e <strong className="text-gray-300">85% de acerto</strong>, temos 95% de certeza de que sua taxa real é pelo menos <strong className="text-green-400">78%</strong>
                  </p>
                  <p className="text-xs text-gray-400">
                    • Isso evita "falsos positivos" - você não avança só por acertar algumas questões fáceis
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Alinhamento com Revalida</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">100</div>
                    <div className="text-xs text-gray-400">questões objetivas</div>
                  </div>
                  <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">5</div>
                    <div className="text-xs text-gray-400">discursivas</div>
                  </div>
                  <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">10</div>
                    <div className="text-xs text-gray-400">estações práticas</div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Aprovação média: <strong className="text-red-400">6-10%</strong> nos primeiros anos. Nosso sistema prepara você para essa realidade, exigindo consistência.
                </p>
              </div>
            </div>
          </div>

          {/* Dicas para Progredir */}
          <div className="bg-[#1A1A1A] border border-blue-900/30 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">Dicas para Progredir</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 text-xs font-bold">1</span>
                </div>
                <div>
                  <p className="text-sm text-gray-300 font-medium mb-1">Seja Consistente</p>
                  <p className="text-xs text-gray-400">Não adianta acertar tudo em um dia e errar depois</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="text-sm text-gray-300 font-medium mb-1">Pratique Regularmente</p>
                  <p className="text-xs text-gray-400">O sistema conta todas as suas respostas ao longo do tempo</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="text-sm text-gray-300 font-medium mb-1">Preste Atenção no Feedback</p>
                  <p className="text-xs text-gray-400">O app analisa seus padrões e dá dicas personalizadas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 text-xs font-bold">4</span>
                </div>
                <div>
                  <p className="text-sm text-gray-300 font-medium mb-1">Não Pule Níveis</p>
                  <p className="text-xs text-gray-400">Cada nível constrói sobre o anterior</p>
                </div>
              </div>
            </div>
          </div>

          {/* Diferença entre Sistemas */}
          <div className="bg-gradient-to-br from-yellow-900/10 to-orange-900/10 border border-yellow-900/30 rounded-lg p-8">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">Diferença entre Níveis de Dificuldade e XP</h3>
                <p className="text-sm text-gray-400 mb-4">Existem dois sistemas separados no Re-Journey:</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Níveis de Dificuldade (L/M/A/D/MD/ED)</h4>
                <p className="text-xs text-gray-400">Determinam a complexidade das questões que você recebe</p>
              </div>
              
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">XP e Níveis de Gamificação (1-10)</h4>
                <p className="text-xs text-gray-400">Sistema de pontuação para manter você motivado</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 mt-4">
              Você pode ter <strong className="text-gray-300">nível 5 em XP</strong> mas ainda estar no <strong className="text-gray-300">nível Básico (L)</strong> de dificuldade. Ambos são importantes!
            </p>
          </div>

          {/* FAQ Rápido */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Perguntas Frequentes</h3>
            <div className="space-y-3">
              <details className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 group">
                <summary className="font-medium text-gray-200 cursor-pointer list-none flex items-center justify-between text-sm">
                  <span>Por que preciso de tantas questões?</span>
                  <ChevronRight className="w-4 h-4 text-gray-500 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                  Para garantir que seu desempenho é consistente e não apenas sorte. O Revalida exige excelência consistente.
                </p>
              </details>

              <details className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 group">
                <summary className="font-medium text-gray-200 cursor-pointer list-none flex items-center justify-between text-sm">
                  <span>E se eu errar algumas questões?</span>
                  <ChevronRight className="w-4 h-4 text-gray-500 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                  Tudo bem! O importante é a taxa geral de acerto ao longo do tempo. Use o feedback para identificar áreas de melhoria.
                </p>
              </details>

              <details className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 group">
                <summary className="font-medium text-gray-200 cursor-pointer list-none flex items-center justify-between text-sm">
                  <span>Posso voltar para níveis anteriores?</span>
                  <ChevronRight className="w-4 h-4 text-gray-500 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                  Sim! Você sempre pode praticar níveis anteriores para reforçar conceitos.
                </p>
              </details>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'edital',
      title: 'Edital Journey',
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full text-xs font-medium text-gray-400 mb-4">
              <Rocket className="w-3.5 h-3.5" />
              Preparação Completa
            </div>
            <h1 className="text-4xl font-bold text-gray-100 mb-4 tracking-tight">Edital Journey</h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
              O coração da nossa plataforma. Uma <strong className="text-gray-300">experiência imersiva e prática</strong> baseada no edital oficial do Revalida, transformando sua preparação em uma jornada estruturada e eficaz.
            </p>
          </div>

          {/* O que é */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#151515] border border-[#2A2A2A] rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">O que é o Edital Journey?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg p-6">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Alinhamento Total</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Todas as questões e conteúdos seguem rigorosamente o edital do Revalida</p>
              </div>
              
              <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg p-6">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Cobertura Completa</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Dos conceitos básicos aos casos mais complexos exigidos no exame</p>
              </div>
              
              <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg p-6">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-green-400" />
                </div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Atualização Constante</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Conteúdo revisado conforme mudanças no edital</p>
              </div>
            </div>
          </div>

          {/* Como Funciona */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">Como Funciona</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-200 mb-2">Sistema de Progressão Inteligente</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-gray-300">6 Níveis de Dificuldade:</strong> De Básico (L) até Extremamente Difícil (ED)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-gray-300">Avaliação Estatística:</strong> Usa cálculo científico para garantir domínio real</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-gray-300">Desbloqueio Progressivo:</strong> Só avança com competência consistente</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-200 mb-2">Gamificação Integrada</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-gray-300">XP e Níveis:</strong> Sistema de pontuação que mantém você motivado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-gray-300">Achievements:</strong> Conquistas por marcos importantes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-gray-300">Competições:</strong> Desafios semanais com outros estudantes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Benefícios Exclusivos */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">Benefícios Exclusivos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#3A3A3A] transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <Trophy className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <h4 className="text-base font-semibold text-gray-200">Preparação Realista e Eficaz</h4>
                </div>
                <ul className="space-y-1.5 text-xs text-gray-400">
                  <li>• Simula exatamente a experiência do Revalida</li>
                  <li>• Foco em competência prática, não memorização</li>
                  <li>• Taxa de aprovação comprovada entre alunos</li>
                </ul>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#3A3A3A] transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <Brain className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <h4 className="text-base font-semibold text-gray-200">Personalização Inteligente</h4>
                </div>
                <ul className="space-y-1.5 text-xs text-gray-400">
                  <li>• Algoritmos adaptativos que aprendem seu ritmo</li>
                  <li>• Feedback personalizado baseado em desempenho</li>
                  <li>• Recomendações de estudo sob medida</li>
                </ul>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#3A3A3A] transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <Users className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <h4 className="text-base font-semibold text-gray-200">Comunidade e Suporte</h4>
                </div>
                <ul className="space-y-1.5 text-xs text-gray-400">
                  <li>• Fóruns de discussão com outros candidatos</li>
                  <li>• Tutoria IA avançada para dúvidas específicas</li>
                  <li>• Suporte 24/7 via chat</li>
                </ul>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#3A3A3A] transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <BarChart3 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <h4 className="text-base font-semibold text-gray-200">Acompanhamento Detalhado</h4>
                </div>
                <ul className="space-y-1.5 text-xs text-gray-400">
                  <li>• Relatórios de progresso em tempo real</li>
                  <li>• Análise de pontos fortes e fracos</li>
                  <li>• Previsão de aprovação baseada em dados</li>
                </ul>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#3A3A3A] transition-colors md:col-span-2">
                <div className="flex items-start gap-3 mb-3">
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <h4 className="text-base font-semibold text-gray-200">Flexibilidade Total</h4>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-gray-400">
                  <li>• Estude quando e onde quiser</li>
                  <li>• Acesso vitalício ao conteúdo</li>
                  <li>• Sincronização entre dispositivos</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comparação */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#151515] border border-[#2A2A2A] rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">Por que o Journey é Superior</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#2A2A2A]">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">Aspecto</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">Cursos Tradicionais</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-blue-300">Journey Edital</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#1A1A1A] hover:bg-[#1A1A1A] transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-300 font-medium">Foco</td>
                    <td className="py-3 px-4 text-sm text-gray-400">Aulas teóricas</td>
                    <td className="py-3 px-4 text-sm text-blue-300 font-medium">Prática intensiva</td>
                  </tr>
                  <tr className="border-b border-[#1A1A1A] hover:bg-[#1A1A1A] transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-300 font-medium">Avaliação</td>
                    <td className="py-3 px-4 text-sm text-gray-400">Provas simples</td>
                    <td className="py-3 px-4 text-sm text-blue-300 font-medium">Sistema estatístico</td>
                  </tr>
                  <tr className="border-b border-[#1A1A1A] hover:bg-[#1A1A1A] transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-300 font-medium">Personalização</td>
                    <td className="py-3 px-4 text-sm text-gray-400">Genérica</td>
                    <td className="py-3 px-4 text-sm text-blue-300 font-medium">100% adaptativa</td>
                  </tr>
                  <tr className="border-b border-[#1A1A1A] hover:bg-[#1A1A1A] transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-300 font-medium">Tempo</td>
                    <td className="py-3 px-4 text-sm text-gray-400">Cronograma fixo</td>
                    <td className="py-3 px-4 text-sm text-blue-300 font-medium">Ritmo individual</td>
                  </tr>
                  <tr className="hover:bg-[#1A1A1A] transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-300 font-medium">Custo-Benefício</td>
                    <td className="py-3 px-4 text-sm text-gray-400">Alto custo mensal</td>
                    <td className="py-3 px-4 text-sm text-blue-300 font-medium">Acesso vitalício</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Resultados Comprovados */}
          <div className="bg-gradient-to-br from-green-900/10 to-emerald-900/10 border border-green-900/30 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-green-300 mb-6">Resultados Comprovados</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0F0F0F] border border-green-900/30 rounded-lg p-6">
                <div className="text-sm text-gray-400 mb-2">Taxa de Aprovação Journey</div>
                <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
                <p className="text-xs text-gray-400">dos alunos que completam o programa passam no Revalida</p>
              </div>
              
              <div className="bg-[#0F0F0F] border border-red-900/30 rounded-lg p-6">
                <div className="text-sm text-gray-400 mb-2">Média Nacional</div>
                <div className="text-4xl font-bold text-red-400 mb-2">6-10%</div>
                <p className="text-xs text-gray-400">de aprovação geral no Revalida</p>
              </div>
            </div>

            <div className="mt-6 bg-[#0F0F0F] border border-green-900/30 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-sm font-semibold text-green-300">Redução de 60% no tempo de preparação</div>
                  <p className="text-xs text-gray-400">Eficiência máxima: foco no que realmente importa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Como Começar */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">Como Começar</h3>
            
            <div className="space-y-4">
              {[
                { step: 1, title: 'Avaliação Inicial', items: ['Teste diagnóstico para identificar seu nível atual', 'Definição de plano de estudo personalizado'] },
                { step: 2, title: 'Jornada Estruturada', items: ['Progressão por níveis com metas claras', 'Sessões diárias de 1-2 horas'] },
                { step: 3, title: 'Acompanhamento Contínuo', items: ['Relatórios semanais de progresso', 'Ajustes automáticos no plano de estudo'] },
                { step: 4, title: 'Preparação Final', items: ['Simulados completos do Revalida', 'Revisão intensiva das áreas críticas'] }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg p-5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-200 mb-2">{item.title}</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                      {item.items.map((text, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dicas */}
          <div className="bg-gradient-to-br from-blue-900/10 to-cyan-900/10 border border-blue-900/30 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">Dicas para Maximizar o Edital Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Seja Consistente: Estude diariamente, mesmo que por pouco tempo',
                'Use o Feedback: A IA identifica seus pontos fracos com precisão',
                'Participe da Comunidade: Aprenda com quem já passou',
                'Acompanhe Métricas: Foque nas estatísticas de progresso',
                'Mantenha o Ritmo: O sistema é otimizado para progresso constante'
              ].map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'guia',
      title: 'Guia de Uso',
      icon: <Lightbulb className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-100">Guia de Uso da Plataforma</h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Aprenda a usar todos os recursos do Re-Journey para maximizar sua preparação.
          </p>

          <div className="space-y-8 mt-8">
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                Primeiros Passos
              </h3>
              <ol className="space-y-3 text-gray-400 list-decimal list-inside">
                <li>Crie sua conta e faça login</li>
                <li>Complete a avaliação diagnóstica inicial (30 questões)</li>
                <li>O sistema calibrará seu nível em cada área médica</li>
                <li>Receba seu plano de estudos personalizado</li>
              </ol>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-400" />
                Modos de Estudo
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">Modo Treino</h4>
                    <p className="text-gray-400 text-sm">Questões isoladas com feedback imediato e explicações detalhadas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">Modo Edital</h4>
                    <p className="text-gray-400 text-sm">Estudo estruturado seguindo o Edital Esquematizado</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">Modo Simulado</h4>
                    <p className="text-gray-400 text-sm">Simulações completas no formato INEP com cronômetro</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">Modo Revisão</h4>
                    <p className="text-gray-400 text-sm">Repetição espaçada de questões que você errou</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-green-400" />
                Dashboard de Desempenho
              </h3>
              <p className="text-gray-400 mb-4">Acompanhe métricas detalhadas:</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Taxa de acerto por área médica</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Evolução temporal (gráficos semanais/mensais)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Nível atual em cada especialidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Cobertura do edital (%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Tempo médio por questão</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Questões respondidas (total e por dia)</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1A1A1A] border border-blue-900/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-3 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                Dicas de Ouro
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-300">Consistência &gt; Volume:</strong> 30 questões/dia é melhor que 200 no fim de semana</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-300">Revise seus erros:</strong> O sistema programa revisões automáticas, não ignore</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-300">Não pule níveis:</strong> A progressão foi desenhada para ser gradual</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-300">Use simulados semanalmente:</strong> Para calibrar seu ritmo de prova</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: 'Perguntas Frequentes',
      icon: <Book className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-100">Perguntas Frequentes</h1>
          
          <div className="space-y-4 mt-8">
            <details className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 group">
              <summary className="font-semibold text-gray-200 cursor-pointer list-none flex items-center justify-between">
                <span>Quantas questões novas são adicionadas por dia?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Entre 30 e 50 questões novas são adicionadas diariamente, garantindo um banco sempre atualizado e alinhado com as últimas tendências do Revalida.
              </p>
            </details>

            <details className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 group">
              <summary className="font-semibold text-gray-200 cursor-pointer list-none flex items-center justify-between">
                <span>O sistema realmente se adapta ao meu nível?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Sim! O motor adaptativo analisa sua performance em tempo real e ajusta a dificuldade das questões, o ritmo de revisões e as áreas prioritárias automaticamente.
              </p>
            </details>

            <details className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 group">
              <summary className="font-semibold text-gray-200 cursor-pointer list-none flex items-center justify-between">
                <span>Posso estudar pelo celular?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Sim! A plataforma é totalmente responsiva e funciona perfeitamente em smartphones, tablets e desktops. O tema Dark/Black Paper foi otimizado para conforto visual em qualquer tela.
              </p>
            </details>

            <details className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 group">
              <summary className="font-semibold text-gray-200 cursor-pointer list-none flex items-center justify-between">
                <span>Como funciona o Edital Esquematizado?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-400 mt-4 leading-relaxed">
                É uma decomposição completa do edital INEP em subtópicos organizados hierarquicamente, com questões mapeadas para cada item e progressão de dificuldade. Veja mais na seção "Edital Esquematizado" desta documentação.
              </p>
            </details>

            <details className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 group">
              <summary className="font-semibold text-gray-200 cursor-pointer list-none flex items-center justify-between">
                <span>Posso cancelar minha assinatura?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Sim, você pode cancelar a qualquer momento. Seu acesso permanece ativo até o fim do período já pago.
              </p>
            </details>

            <details className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 group">
              <summary className="font-semibold text-gray-200 cursor-pointer list-none flex items-center justify-between">
                <span>Há garantia de reembolso?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Sim! Oferecemos 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor.
              </p>
            </details>
          </div>
        </div>
      )
    },
    {
      id: 'contato',
      title: 'Contato',
      icon: <Mail className="w-5 h-5" />,
      isExternal: true,
      externalLink: '/contato',
      content: null as any
    }
  ];

  const activeContent = sections.find(s => s.id === activeSection)?.content;

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0]">
      {/* Standalone Docs Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#1F1F1F]">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors group">
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Voltar para Home</span>
            </Link>
            <div className="w-px h-4 bg-[#2A2A2A]"></div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-gray-300" />
              <span className="text-lg font-bold text-[#E0E0E0]">Re-Journey</span>
              <span className="text-xs text-gray-500 font-medium">/ Docs</span>
            </div>
          </div>
          <div className="text-xs text-gray-500">v1.0</div>
        </div>
      </header>
      
      <div className="pt-14 flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 fixed left-0 top-14 bottom-0 bg-[#0F0F0F] border-r border-[#1F1F1F] overflow-y-auto">
          <div className="p-6">
            <h2 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">Documentação</h2>
            <nav className="space-y-1">
              {sections.map((section) => (
                section.isExternal ? (
                  <Link
                    key={section.id}
                    to={section.externalLink || '/'}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-gray-400 hover:text-white hover:bg-[#1A1A1A]"
                  >
                    {section.icon}
                    <span>{section.title}</span>
                  </Link>
                ) : (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-[#2A2A2A] text-white font-medium'
                        : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]'
                    }`}
                  >
                    {section.icon}
                    <span>{section.title}</span>
                  </button>
                )
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile Dropdown */}
        <div className="lg:hidden fixed top-14 left-0 right-0 bg-[#0F0F0F] border-b border-[#1F1F1F] z-40">
          <select
            value={activeSection}
            onChange={(e) => {
              const section = sections.find(s => s.id === e.target.value);
              if (section?.isExternal) {
                window.location.href = section.externalLink || '/';
              } else {
                setActiveSection(e.target.value);
              }
            }}
            className="w-full px-6 py-4 bg-transparent text-gray-200 border-none outline-none cursor-pointer"
          >
            {sections.map((section) => (
              <option key={section.id} value={section.id} className="bg-[#161616]">
                {section.title}
              </option>
            ))}
          </select>
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 px-6 py-12 mt-0 lg:mt-0 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              {activeContent}
            </div>
          </div>
        </main>
      </div>

      {/* Standalone Docs Footer */}
      <footer className="border-t border-[#1F1F1F] bg-[#0F0F0F] py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span>&copy; {new Date().getFullYear()} Re-Journey Docs</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Última atualização: {new Date().toLocaleDateString('pt-BR')}</span>
              <span className="text-gray-600">•</span>
              <Link to="/" className="hover:text-gray-300 transition-colors">Voltar para Home</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
