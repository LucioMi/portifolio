'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Automação & Integração",
      subtitle: "Foco Principal",
      icon: "⚡",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-400/30",
      isPrimary: true,
      skills: [
        { name: "n8n", level: 95, description: "Automações complexas e integrações" },
        { name: "Make (Zapier)", level: 90, description: "Workflows e conectores" },
        { name: "APIs REST", level: 88, description: "Integração entre sistemas" },
        { name: "Docker", level: 85, description: "Containerização e deploy" },
        { name: "PostgreSQL", level: 82, description: "Banco de dados relacional" },
        { name: "MongoDB", level: 78, description: "Banco de dados NoSQL" },
        { name: "Webhooks", level: 92, description: "Comunicação em tempo real" },
        { name: "JSON/XML", level: 90, description: "Manipulação de dados" }
      ]
    },
    {
      id: 2,
      title: "CRM & Business Intelligence",
      subtitle: "Análise e Funis",
      icon: "📊",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-400/30",
      isPrimary: false,
      skills: [
        { name: "HubSpot", level: 92, description: "CRM completo e automações" },
        { name: "Pipedrive", level: 88, description: "Gestão de pipeline de vendas" },
        { name: "Power BI", level: 85, description: "Dashboards e relatórios" },
        { name: "SQL", level: 80, description: "Consultas e análise de dados" },
        { name: "Google Analytics", level: 87, description: "Análise de comportamento" },
        { name: "Segmentação", level: 90, description: "Qualificação de leads" },
        { name: "Lead Scoring", level: 88, description: "Pontuação automática" },
        { name: "Funis de Vendas", level: 93, description: "Modelagem e otimização" }
      ]
    },
    {
      id: 3,
      title: "Marketing & Aquisição",
      subtitle: "Tráfego e Conversão",
      icon: "🎯",
      gradient: "from-orange-600 to-pink-600",
      bgGradient: "from-orange-500/10 to-pink-500/10",
      borderColor: "border-orange-400/30",
      isPrimary: false,
      skills: [
        { name: "Google Ads", level: 85, description: "Campanhas de busca e display" },
        { name: "Facebook Ads", level: 88, description: "Social media advertising" },
        { name: "Landing Pages", level: 90, description: "Páginas de conversão" },
        { name: "UTM Tracking", level: 92, description: "Rastreamento de campanhas" },
        { name: "A/B Testing", level: 85, description: "Testes e otimização" },
        { name: "Email Marketing", level: 87, description: "Automação de email" },
        { name: "Copywriting", level: 80, description: "Textos persuasivos" },
        { name: "Pixel Tracking", level: 88, description: "Rastreamento de conversões" }
      ]
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
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ferramentas e tecnologias organizadas por área de atuação, 
            com <strong className="text-blue-400">automação</strong> como especialidade principal.
          </p>
        </motion.div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className={`
                relative
                ${category.isPrimary ? 'order-1' : ''}
              `}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center text-3xl
                  bg-gradient-to-br ${category.bgGradient} border ${category.borderColor} backdrop-blur-sm
                `}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    {category.title}
                    {category.isPrimary && (
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                        🚀 Principal
                      </span>
                    )}
                  </h3>
                  <p className={`
                    text-lg font-medium
                    ${category.isPrimary ? 'text-blue-300' : 'text-slate-400'}
                  `}>
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className={`
                      p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300
                      bg-gradient-to-br ${category.bgGradient}
                      ${category.borderColor} hover:border-opacity-60
                      hover:scale-105 hover:shadow-lg hover:shadow-white/5
                      group cursor-pointer
                    `}
                  >
                    {/* Skill Name */}
                    <h4 className="text-white font-semibold text-lg mb-2">
                      {skill.name}
                    </h4>
                    
                    {/* Skill Description */}
                    <p className="text-slate-400 text-sm mb-3 leading-tight">
                      {skill.description}
                    </p>

                    {/* Skill Level Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-xs font-medium">Proficiência</span>
                        <span className="text-slate-300 text-xs font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.05 + 0.3 }}
                          viewport={{ once: true }}
                          className={`
                            h-full rounded-full bg-gradient-to-r ${category.gradient}
                            shadow-lg
                          `}
                        />
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className={`
                      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      bg-gradient-to-br ${category.gradient} opacity-5
                    `}></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-3xl p-8 max-w-3xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stack Integrado para Resultados Máximos
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Cada ferramenta é escolhida estrategicamente para se integrar perfeitamente com as outras, 
              criando um ecossistema tecnológico coeso e eficiente.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {["Integração Total", "Automação Inteligente", "Dados Centralizados", "Escalabilidade"].map((feature, index) => (
                <span
                  key={feature}
                  className="px-4 py-2 bg-blue-500/20 border border-blue-400/40 text-blue-300 rounded-full text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <span className="relative z-10">Vamos Discutir Sua Stack Ideal</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;