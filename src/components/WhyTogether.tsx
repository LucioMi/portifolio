'use client';

import { motion } from 'framer-motion';

const WhyTogether = () => {
  const cycleSteps = [
    {
      id: 1,
      title: "Captar",
      description: "Campanhas estratégicas de aquisição de leads qualificados",
      icon: "🎯",
      color: "from-orange-500 to-pink-500",
      bgColor: "from-orange-500/10 to-pink-500/10"
    },
    {
      id: 2,
      title: "Registrar",
      description: "Integração automática com CRM e enriquecimento de dados",
      icon: "📝",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      id: 3,
      title: "Qualificar",
      description: "Automações inteligentes de scoring e segmentação",
      icon: "⚡",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-500/10 to-indigo-500/10"
    },
    {
      id: 4,
      title: "Atender",
      description: "Fluxos automatizados de nutrição e follow-up personalizado",
      icon: "🤝",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-500/10"
    },
    {
      id: 5,
      title: "Medir",
      description: "Dashboards e métricas para otimização contínua do funil",
      icon: "📊",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-500/10 to-purple-500/10"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por que{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Junto?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Opero o <strong className="text-blue-400">ciclo completo</strong> de aquisição e conversão. 
            Cada etapa se conecta perfeitamente com a próxima, eliminando vazamentos e maximizando resultados.
          </p>
        </motion.div>

        {/* Cycle Flow */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Flow */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between mb-12">
              {cycleSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center relative"
                >
                  {/* Step Circle */}
                  <div className={`
                    w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4
                    bg-gradient-to-br ${step.bgColor} border border-white/20 backdrop-blur-sm
                    hover:scale-110 transition-all duration-300 cursor-pointer
                    shadow-lg hover:shadow-xl hover:shadow-white/10
                  `}>
                    {step.icon}
                  </div>
                  
                  {/* Step Title */}
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  
                  {/* Step Description */}
                  <p className="text-slate-400 text-sm text-center max-w-32 leading-tight">
                    {step.description}
                  </p>

                  {/* Arrow */}
                  {index < cycleSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="absolute -right-8 top-8 text-blue-400 text-2xl"
                    >
                      →
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="md:hidden space-y-6 mb-12">
            {cycleSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                {/* Step Circle */}
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center text-2xl
                  bg-gradient-to-br ${step.bgColor} border border-white/20 backdrop-blur-sm
                  shadow-lg
                `}>
                  {step.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-tight">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < cycleSteps.length - 1 && (
                  <div className="text-blue-400 text-xl ml-4">↓</div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-16"
          >
            {[
              {
                title: "Integração Perfeita",
                description: "Cada sistema conversa com o outro, eliminando trabalho manual e retrabalho.",
                icon: "🔗"
              },
              {
                title: "Visão 360°",
                description: "Acompanho o lead desde o primeiro clique até o fechamento e pós-venda.",
                icon: "👁️"
              },
              {
                title: "Otimização Contínua",
                description: "Dados de todas as etapas alimentam melhorias constantes no processo.",
                icon: "📈"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-3xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">
                Pronto para um ciclo completo e integrado?
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Vamos conversar sobre como posso otimizar seu processo de aquisição e conversão de leads.
              </p>
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                <span className="relative z-10">Quero Otimizar Meu Processo</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyTogether;