'use client';

import { motion } from 'framer-motion';

const Showcase = () => {
  const projects = [
    {
      id: 1,
      title: "Automação de Lead Scoring",
      category: "Automação",
      description: "Sistema automatizado que qualifica leads em tempo real baseado em comportamento, dados demográficos e interações, integrando CRM com ferramentas de marketing.",
      technologies: ["n8n", "HubSpot", "APIs", "Webhooks"],
      results: [
        "85% redução no tempo de qualificação",
        "40% aumento na taxa de conversão",
        "Eliminação de trabalho manual"
      ],
      icon: "⚡",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      id: 2,
      title: "Dashboard Executivo de Vendas",
      category: "CRM & BI",
      description: "Painel centralizado conectando múltiplas fontes de dados para visão 360° do funil de vendas, com métricas em tempo real e alertas automáticos.",
      technologies: ["Power BI", "SQL", "HubSpot", "Google Analytics"],
      results: [
        "Visibilidade completa do funil",
        "Decisões baseadas em dados",
        "Identificação rápida de gargalos"
      ],
      icon: "📊",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
      id: 3,
      title: "Funil de Aquisição Integrado",
      category: "Marketing",
      description: "Campanha completa desde anúncios até conversão, com tracking avançado e integração automática com CRM para nutrição de leads.",
      technologies: ["Google Ads", "Facebook Ads", "Landing Pages", "UTMs"],
      results: [
        "60% redução no CAC",
        "3x aumento no LTV",
        "Rastreamento completo da jornada"
      ],
      icon: "🎯",
      gradient: "from-orange-600 to-pink-600",
      bgGradient: "from-orange-500/10 to-pink-500/10"
    },
    {
      id: 4,
      title: "Orquestração Multi-Canal",
      category: "Integração Completa",
      description: "Solução que conecta aquisição, CRM, automação e BI em um fluxo único, eliminando silos e maximizando a eficiência operacional.",
      technologies: ["n8n", "Make", "HubSpot", "Power BI", "APIs"],
      results: [
        "Integração de 8 sistemas",
        "90% automação de processos",
        "ROI 300% em 6 meses"
      ],
      icon: "🔗",
      gradient: "from-purple-600 to-indigo-600",
      bgGradient: "from-purple-500/10 to-indigo-500/10"
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

                {/* Results */}
                <div>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                    Resultados Alcançados
                  </h4>
                  <ul className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-3xl p-8 max-w-3xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para Resultados Similares?
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Cada projeto é único, mas a metodologia é comprovada. 
              Vamos conversar sobre como posso adaptar essas soluções para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                <span className="relative z-10">Quero Discutir Meu Projeto</span>
              </button>
              <button className="group px-8 py-4 border border-white/20 text-white font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:scale-105">
                Ver Mais Casos
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;