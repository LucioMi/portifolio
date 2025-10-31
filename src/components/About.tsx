'use client';

import { motion } from 'framer-motion';

const About = () => {
  const education = [
    {
      title: "Técnico em Eletromecânica",
      institution: "SENAI",
      year: "2014",
      icon: "⚙️"
    },
    {
      title: "Engenharia de Controle e Automação",
      institution: "Una",
      year: "2020",
      icon: "🎓"
    },
    {
      title: "Pós-graduação em Engenharia de Software",
      institution: "Anhanguera",
      year: "2023",
      icon: "💻"
    }
  ];

  const skills = [
    "Automações e LLMs com N8N",
    "Make, Docker",
    "APIs REST e integrações entre sistemas",
    "Bancos de dados (Postgres/SQL)",
    "LangChain (fluxo de IA orquestrado)",
    "RAG & vetores",
    "CRM & BI (modelagem, dashboards)",
    "Python e JavaScript"
  ];

  const personality = [
    { label: "MBTI", value: "INTJ-T" },
    { label: "DISC", value: "DC" },
    { label: "Eneagrama", value: "5 asa 4" },
    { label: "Big Five", value: "Abertura 42, Conscienciosidade 68, Extroversão 49, Amabilidade 34, Neuroticism 71" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
            Sobre{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mim
            </span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* História Principal */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-3xl">👨‍💻</span>
                  Minha Trajetória
                </h3>
                
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Minha base vem da <strong className="text-blue-400">engenharia</strong> - formado em Controle e Automação pela Una (2020), com técnico em Eletromecânica pelo SENAI (2014) e pós-graduação em Engenharia de Software (Anhanguera, 2023). Essa formação me deu pensamento estruturado, entendimento de processos e base técnica sólida. Durante a pós, estagiei como desenvolvedor, então <strong className="text-blue-400">não comecei do zero - já tinha código antes de ir pro low-code</strong>. De janeiro/2022 a junho/2024, atuei como <strong className="text-orange-400">gestor de tráfego e estrategista de marketing</strong> (Meta Ads, Google Ads, GA4, GTM). A partir de 06/2024, migrei para o mercado de <strong className="text-purple-400">desenvolvimento, automações e IA</strong>, focando em <strong className="text-cyan-400">N8N</strong>, Make, APIs REST, bancos de dados e integração com CRM, evoluindo depois para <strong className="text-emerald-400">CRM com foco em BI</strong>.
                  </p>
                  
                  <p className="text-lg font-medium text-white">
                    Hoje meu foco principal é <strong className="text-cyan-400">Gestão de Automações / Dev low-code</strong>, depois <strong className="text-emerald-400">CRM & BI</strong>; marketing e tráfego ficam como competência de apoio, mas tenho ~5 anos de experiência.
                  </p>
                </div>
              </div>

              {/* Perfil Comportamental */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-3xl">🧠</span>
                  Perfil Comportamental
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {personality.slice(0, 3).map((item, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-3">
                      <div className="text-sm text-slate-400">{item.label}</div>
                      <div className="text-white font-semibold">{item.value}</div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/5 rounded-xl p-3 mb-4">
                  <div className="text-sm text-slate-400">Big Five</div>
                  <div className="text-white font-semibold text-sm">{personality[3].value}</div>
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  Perfil analítico e orientado a solução, que gosta de estruturar processos e automatizar o que é repetitivo. Combino pensamento estratégico com execução técnica detalhada.
                </p>
              </motion.div>
            </motion.div>

            {/* Sidebar com Formação e Competências */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Formação */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-3xl">🎓</span>
                  Formação
                </h3>
                
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="bg-white/5 rounded-xl p-4 border border-white/5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{edu.icon}</span>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-sm">{edu.title}</h4>
                          <p className="text-slate-400 text-sm">{edu.institution}</p>
                          <span className="text-blue-400 text-xs font-medium">{edu.year}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Competências Principais */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-3xl">⚡</span>
                  Competências Principais
                </h3>
                
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.05 * index }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
        />
      </div>
    </section>
  );
};

export default About;