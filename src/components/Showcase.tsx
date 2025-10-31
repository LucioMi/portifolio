'use client';

import { motion } from 'framer-motion';

const Showcase = () => {
  const projects = [
    {
      id: 1,
      title: "Automação de entrada de leads → CRM → WhatsApp",
      category: "Automação",
      description: "Fluxo que captura leads de formulários, qualifica automaticamente no CRM e dispara mensagens personalizadas no WhatsApp.",
      technologies: ["n8n", "HubSpot", "WhatsApp API"],
      icon: "⚡",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      id: 2,
      title: "Padronização de funil e campos para reporting",
      category: "CRM & BI",
      description: "Organização da base de dados, criação de campos padronizados e dashboards para acompanhamento de métricas de vendas.",
      technologies: ["HubSpot", "Looker Studio", "SQL"],
      icon: "📊",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
      id: 3,
      title: "Integração tráfego/ads → CRM para provar campanha",
      category: "Marketing + CRM",
      description: "Conexão entre campanhas de tráfego e CRM para rastreamento completo do ROI e atribuição de conversões.",
      technologies: ["Google Ads", "Facebook Ads", "HubSpot", "UTMs"],
      icon: "🎯",
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    }
  ];

  const deliveryTypes = [
    {
      title: "Automações Personalizadas",
      description: "Fluxos sob medida para suas necessidades específicas",
      icon: "⚙️"
    },
    {
      title: "Integrações Complexas",
      description: "Conectando sistemas que não conversam nativamente",
      icon: "🔌"
    },
    {
      title: "Dashboards Estratégicos",
      description: "Visualizações que transformam dados em insights",
      icon: "📈"
    },
    {
      title: "Otimização de Funis",
      description: "Melhorias contínuas baseadas em dados reais",
      icon: "🎯"
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
            Exemplos de{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Entregas
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Projetos reais que demonstram como integro automação, CRM e marketing 
            para gerar resultados mensuráveis.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className={`
                h-full p-8 rounded-3xl backdrop-blur-sm border border-white/10 transition-all duration-500
                bg-gradient-to-br ${project.bgGradient}
                hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-white/10
              `}>
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center text-3xl
                    bg-gradient-to-br ${project.gradient} shadow-lg
                  `}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <span className="px-3 py-1 bg-white/10 border border-white/20 text-slate-300 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                    Tecnologias Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 border border-white/20 text-slate-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>



                {/* Hover Effect */}
                <div className={`
                  absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  bg-gradient-to-br ${project.gradient} opacity-5
                `}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Delivery Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Tipos de{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projetos
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {deliveryTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-3">{type.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Showcase;