'use client';

import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Gestor de Automações",
      subtitle: "Desenvolvedor",
      description: "Orquestro fluxos complexos integrando APIs, bancos de dados e CRMs. Especialista em n8n, Make, Docker e automações que conectam sistemas diversos para otimizar processos de negócio.",
      icon: "⚡",
      technologies: ["N8N", "APIs REST", "Docker", "SQL/NoSQL", "RAG", "Python", "LLMs"],
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
      technologies: ["GoHighLevel", "Kommo", "Pipedrive", "Power BI", "SQL", "Segmentação", "Dashboards"],
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
    <section className="py-24 bg-[var(--surface)] relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            Minhas{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              3 Frentes
            </span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
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
              <motion.div
                className={`
                  relative h-full p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300
                  bg-gradient-to-br ${feature.bgGradient}
                  ${feature.borderColor} ${feature.hoverBorder}
                  ${feature.isPrimary ? 'ring-2 ring-blue-400/20' : ''}
                `}
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'tween', duration: 0.2 }}
              >


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

                {/* Hover Shine Effect (novo e não intrusivo) */}
                <motion.div
                  className="pointer-events-none absolute top-0 left-[-20%] h-full w-1/3 rounded-3xl bg-gradient-to-r from-transparent via-white/12 to-transparent mix-blend-screen"
                  initial={{ opacity: 0, x: -120 }}
                  whileHover={{ opacity: 1, x: 520 }}
                  transition={{ type: 'tween', duration: 0.8, ease: 'easeOut' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Features;