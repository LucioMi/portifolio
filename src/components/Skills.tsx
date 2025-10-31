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
        { name: "n8n", level: "Domínio", description: "Automações complexas e integrações" },
        { name: "Make (Zapier)", level: "Domínio", description: "Workflows e conectores" },
        { name: "APIs REST", level: "Domínio", description: "Integração entre sistemas" },
        { name: "PostgreSQL", level: "Domínio", description: "Banco de dados relacional" },
        { name: "Webhooks", level: "Domínio", description: "Comunicação em tempo real" },
        { name: "JSON/XML", level: "Domínio", description: "Manipulação de dados" },
        { name: "Docker", level: "Avançado", description: "Containerização e deploy" },
        { name: "MongoDB", level: "Avançado", description: "Banco de dados NoSQL" }
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
        { name: "Funis de Vendas", level: "Avançado", description: "Modelagem e otimização" },
        { name: "Segmentação", level: "Avançado", description: "Qualificação de leads" },
        { name: "HubSpot", level: "Avançado", description: "CRM completo e automações" },
        { name: "Dashboards Looker/BI", level: "Avançado", description: "Relatórios e visualizações" },
        { name: "Lead Scoring", level: "Avançado", description: "Pontuação automática" },
        { name: "Pipedrive", level: "Operacional", description: "Gestão de pipeline de vendas" },
        { name: "SQL", level: "Operacional", description: "Consultas e análise de dados" },
        { name: "Google Analytics", level: "Operacional", description: "Análise de comportamento" }
      ]
    },
    {
      id: 3,
      title: "Marketing (5 anos de experiência)",
      subtitle: "Competência de apoio",
      icon: "🎯",
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-400/30",
      isPrimary: false,
      skills: [
        { name: "UTM Tracking", level: "Operacional", description: "Rastreamento de campanhas" },
        { name: "Landing Pages", level: "Operacional", description: "Páginas de conversão" },
        { name: "Google Ads", level: "Operacional", description: "Campanhas de busca e display" },
        { name: "Facebook Ads", level: "Operacional", description: "Social media advertising" },
        { name: "Email Marketing", level: "Operacional", description: "Automação de email" },
        { name: "A/B Testing", level: "Operacional", description: "Testes e otimização" },
        { name: "Pixel Tracking", level: "Operacional", description: "Rastreamento de conversões" },
        { name: "Copywriting", level: "Operacional", description: "Textos persuasivos" }
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Venho do marketing e tráfego (5 anos), então sei conversar com a área e integrar leads à operação. 
            Hoje meu foco é montar a <strong className="text-blue-400">máquina</strong>, não só a campanha.
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

                    {/* Skill Level Badge */}
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-xs font-medium">Nível</span>
                      <span className={`
                        text-xs font-medium px-2 py-1 rounded-full
                        ${skill.level === 'Domínio' ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' :
                          skill.level === 'Avançado' ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30' :
                          'bg-slate-500/20 text-slate-300 border border-slate-400/30'}
                      `}>
                        {skill.level}
                      </span>
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


      </div>
    </section>
  );
};

export default Skills;