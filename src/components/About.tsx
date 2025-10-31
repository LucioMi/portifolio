'use client';

import { motion } from 'framer-motion';

const About = () => {
  const journey = [
    {
      period: "Início",
      title: "Marketing Digital",
      description: "Comecei criando campanhas e entendendo a jornada do cliente",
      icon: "🎯",
      color: "from-orange-500 to-pink-500"
    },
    {
      period: "Evolução",
      title: "CRM & Análise",
      description: "Mergulhei em dados, funis e otimização de processos de vendas",
      icon: "📊",
      color: "from-emerald-500 to-teal-500"
    },
    {
      period: "Especialização",
      title: "Automação & Integração",
      description: "Descobri minha paixão por conectar sistemas e automatizar processos",
      icon: "⚡",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const differentials = [
    {
      title: "Visão de Negócio",
      description: "Entendo o impacto de cada automação no resultado final",
      icon: "💡"
    },
    {
      title: "Experiência Prática",
      description: "Já estive do outro lado, sei as dores reais dos times",
      icon: "🎯"
    },
    {
      title: "Integração Natural",
      description: "Conecto tecnologia com estratégia de forma orgânica",
      icon: "🔗"
    },
    {
      title: "Resultados Mensuráveis",
      description: "Cada projeto tem métricas claras de sucesso",
      icon: "📈"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/50 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mim
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Minha jornada me levou de marketing para automação, 
            criando uma perspectiva única que integra estratégia e tecnologia.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">
                  Gestor de Automações com{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    DNA de Marketing
                  </span>
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Hoje atuo principalmente como <strong className="text-blue-400">gestor de automações</strong>, 
                  desenvolvendo soluções low-code que conectam sistemas e otimizam processos. 
                  Mas também posso atuar como <strong className="text-emerald-400">analista de CRM</strong>, 
                  modelando funis e criando dashboards estratégicos.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Meu background em <strong className="text-orange-400">marketing digital</strong> é o diferencial: 
                  entendo profundamente a jornada do cliente e sei como integrar aquisição de leads 
                  com CRM e automação para criar ciclos completos de conversão.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">
                    <strong className="text-blue-400">Foco principal:</strong> Automações e integrações complexas
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-300">
                    <strong className="text-emerald-400">Competência secundária:</strong> Análise de CRM e BI
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300">
                    <strong className="text-orange-400">Diferencial:</strong> Visão estratégica de marketing
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-3xl p-8 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-4xl shadow-lg">
                    ⚡
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Automação + Estratégia</h4>
                    <p className="text-slate-300 leading-relaxed">
                      A combinação perfeita entre conhecimento técnico e visão de negócio
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl mb-2">🔧</div>
                      <div className="text-white font-semibold text-sm">Técnico</div>
                    </div>
                    <div>
                      <div className="text-2xl mb-2">📊</div>
                      <div className="text-white font-semibold text-sm">Analítico</div>
                    </div>
                    <div>
                      <div className="text-2xl mb-2">🎯</div>
                      <div className="text-white font-semibold text-sm">Estratégico</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Minha{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Jornada
              </span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {journey.map((step, index) => (
                <motion.div
                  key={step.period}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  {/* Connection Line */}
                  {index < journey.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-400/50 to-purple-400/50 transform translate-x-4"></div>
                  )}
                  
                  {/* Step Content */}
                  <div className="relative z-10">
                    <div className={`
                      w-24 h-24 mx-auto rounded-full flex items-center justify-center text-4xl mb-4
                      bg-gradient-to-br ${step.color} shadow-lg
                    `}>
                      {step.icon}
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                      <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                        {step.period}
                      </span>
                      <h4 className="text-white font-bold text-xl mt-2 mb-3">{step.title}</h4>
                      <p className="text-slate-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Differentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Meus{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Diferenciais
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentials.map((differential, index) => (
                <motion.div
                  key={differential.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {differential.icon}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3">{differential.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">{differential.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-3xl p-8 max-w-3xl mx-auto backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">
                Vamos Trabalhar Juntos?
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Se você busca alguém que entende tanto de tecnologia quanto de negócio, 
                que pode atuar como gestor de automações ou analista de CRM, 
                vamos conversar sobre como posso ajudar seu projeto.
              </p>
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                <span className="relative z-10">Iniciar Conversa</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;