'use client';

import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Gestor de Automações",
      subtitle: "Desenvolvimento Low-code",
      description: "Orquestro fluxos complexos integrando APIs, bancos de dados e CRMs. Especialista em n8n, Make, Docker e automações que conectam sistemas diversos para otimizar processos de negócio.",
      icon: "⚡",
      technologies: ["n8n", "Make", "APIs REST", "Docker", "PostgreSQL", "MongoDB"],
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-400/30",
      hoverBorder: "hover:border-blue-400/60",
      isPrimary: true
    },
    {
      id: 2,
      title: "Analista CRM & BI",
      subtitle: "Funis e Métricas",
      description: "Modelo funis de vendas, crio campos customizados, segmento leads e desenvolvo automações internas. Transformo dados em insights acionáveis através de dashboards e relatórios estratégicos.",
      icon: "📊",
      technologies: ["HubSpot", "Pipedrive", "Power BI", "SQL", "Segmentação", "Dashboards"],
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-400/30",
      hoverBorder: "hover:border-emerald-400/60",
      isPrimary: false
    },
    {
      id: 3,
      title: "Estrategista de Marketing",
      subtitle: "Tráfego e Aquisição",
      description: "Planejo e executo campanhas de aquisição de leads, integrando perfeitamente com CRM e automações. Foco na qualidade do lead e na otimização do ciclo completo de conversão.",
      icon: "🎯",
      technologies: ["Google Ads", "Facebook Ads", "Landing Pages", "UTMs", "Analytics", "Conversão"],
      gradient: "from-orange-600 to-pink-600",
      bgGradient: "from-orange-500/10 to-pink-500/10",
      borderColor: "border-orange-400/30",
      hoverBorder: "hover:border-orange-400/60",
      isPrimary: false
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
            Minhas{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              3 Frentes
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Atuo em três áreas complementares, com <strong className="text-blue-400">automação como foco principal</strong>, 
            criando sinergia entre tecnologia, dados e estratégia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`
                relative group cursor-pointer h-full
                ${feature.isPrimary ? 'md:scale-105' : ''}
              `}
            >
              {/* Card */}
              <div className={`
                h-full p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500
                bg-gradient-to-br ${feature.bgGradient}
                ${feature.borderColor} ${feature.hoverBorder}
                hover:scale-105 hover:shadow-2xl hover:shadow-white/10
                ${feature.isPrimary ? 'ring-2 ring-blue-400/20' : ''}
              `}>
                {/* Priority Badge */}
                {feature.isPrimary && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
                      🚀 Foco Principal
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="text-6xl mb-6 text-center">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 text-center">
                  {feature.title}
                </h3>
                <p className={`
                  text-center mb-6 font-medium
                  ${feature.isPrimary ? 'text-blue-300' : 'text-slate-400'}
                `}>
                  {feature.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-8 text-center">
                  {feature.description}
                </p>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                    Principais Ferramentas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {feature.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`
                          px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm
                          ${feature.isPrimary 
                            ? 'bg-blue-500/20 border-blue-400/40 text-blue-300' 
                            : 'bg-white/5 border-white/20 text-slate-300'
                          }
                        `}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`
                  absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  bg-gradient-to-br ${feature.gradient} opacity-5
                `}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            Interessado em como essas competências podem se integrar ao seu projeto?
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            <span className="relative z-10">Vamos Conversar sobre Seu Projeto</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;