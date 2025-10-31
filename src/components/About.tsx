'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const education = [
    {
      title: "Técnico em Eletromecânica",
      institution: "SENAI",
      year: "2014",
      icon: "⚙️"
    },
    {
      title: "Eng. Controle e Automação",
      institution: "Una",
      year: "2020",
      icon: "🎓"
    },
    {
      title: "Pós em Eng. de Software",
      institution: "Anhanguera",
      year: "2023",
      icon: "💻"
    }
  ];

  const experience = [
    {
      title: "Gestor de Automações",
      period: "06/2024 - Atual",
      icon: "⚡"
    },
    {
      title: "Gestor de Tráfego/Estrategista de Marketing",
      period: "01/2022 - 06/2024",
      icon: "🎯"
    }
  ];

  const skills = [
    "N8N",
    "Make",
    "APIs REST",
    "Bancos de dados",
    "LangChain",
    "CRM & BI",
    "Python / JavaScript"
  ];

  const personality = [
    { label: "MBTI", value: "INTJ-T" },
    { label: "DISC", value: "DC" },
    { label: "Eneagrama", value: "5 asa 4" },
    { label: "Big Five", value: "O42 C68 E49 A34 N71" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sobre
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Gestor de automações, Analista de CRM & BI e estrategista de marketing.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Card com Foto e Informações Pessoais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                 {/* Foto - Menor */}
                 <div className="text-center">
                   <div className="relative w-40 h-40 mx-auto mb-4">
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-lg"></div>
                     <div className="relative w-full h-full bg-white/10 rounded-2xl border border-white/20 overflow-hidden">
                       <Image
                         src="/lucio.png"
                         alt="Lucio Henrique"
                         fill
                         className="object-cover"
                         sizes="(max-width: 768px) 100vw, 160px"
                         priority
                       />
                     </div>
                   </div>
                   <h4 className="text-xl font-bold text-white mb-1">Lucio Henrique</h4>
                   <p className="text-blue-400 font-medium text-sm">Gestor de Automações & CRM/BI</p>
                 </div>

                 {/* Formação - Compacta */}
                 <div>
                   <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                     <span className="text-lg">🎓</span>
                     Formação
                   </h3>
                   
                   <div className="space-y-2">
                     {education.map((edu, index) => (
                       <motion.div
                         key={index}
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.4, delay: 0.1 * index }}
                         viewport={{ once: true }}
                         className="bg-white/5 rounded-lg p-2 border border-white/5"
                       >
                         <div className="flex items-start gap-2">
                           <span className="text-sm">{edu.icon}</span>
                           <div className="flex-1">
                             <h4 className="text-white font-medium text-xs leading-tight">{edu.title}</h4>
                             <p className="text-slate-400 text-xs">{edu.institution}</p>
                             <span className="text-blue-400 text-xs font-medium">{edu.year}</span>
                           </div>
                         </div>
                       </motion.div>
                     ))}
                   </div>
                 </div>

                 {/* Experiência - Compacta */}
                 <div>
                   <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                     <span className="text-lg">💼</span>
                     Experiência
                   </h3>
                   
                   <div className="space-y-2">
                     {experience.map((exp, index) => (
                       <motion.div
                         key={index}
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.4, delay: 0.1 * index }}
                         viewport={{ once: true }}
                         className="bg-white/5 rounded-lg p-2 border border-white/5"
                       >
                         <div className="flex items-start gap-2">
                           <span className="text-sm">{exp.icon}</span>
                           <div className="flex-1">
                             <h4 className="text-white font-medium text-xs leading-tight">{exp.title}</h4>
                             <span className="text-blue-400 text-xs font-medium">{exp.period}</span>
                           </div>
                         </div>
                       </motion.div>
                     ))}
                   </div>
                 </div>

                 {/* Competências - Compacta */}
                 <div>
                   <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                     <span className="text-lg">⚡</span>
                     Competências
                   </h3>
                   
                   <div className="space-y-1">
                     {skills.map((skill, index) => (
                       <motion.div
                         key={index}
                         initial={{ opacity: 0, x: 10 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.4, delay: 0.05 * index }}
                         viewport={{ once: true }}
                         className="flex items-center gap-2 bg-white/5 rounded-md p-1.5 border border-white/5"
                       >
                         <div className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                         <span className="text-slate-300 text-xs font-medium">{skill}</span>
                       </motion.div>
                     ))}
                   </div>
                 </div>
               </div>
             </div>
          </motion.div>

          {/* Card com Texto Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">👨‍💻</span>
                Minha Trajetória
              </h3>
              
              <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                <p>
                  Sou o Lucio Henrique, desenvolvedor e arquiteto de automações com base em engenharia. Sou técnico em <strong className="text-blue-400">Eletromecânica (SENAI, 2014)</strong>, formado em <strong className="text-blue-400">Engenharia de Controle e Automação (Una, 2020)</strong> e pós-graduado em <strong className="text-blue-400">Engenharia de Software (Anhanguera, 2023)</strong>, o que me deu uma base forte de lógica, processos e integração entre sistemas. Durante a pós eu estagiei como desenvolvedor, então antes de ir para o low-code eu já tinha contato com código e boas práticas.
                </p>
                <p>
                  De jan/2022 a jun/2024 atuei no marketing como <strong className="text-orange-400">gestor de tráfego e estrategista</strong>, o que me deu visão prática de funil, origem de lead, mensuração e das dores reais do comercial. A partir de 2024 passei a focar no que mais gosto: <strong className="text-purple-400">desenvolver soluções de automação e IA de ponta a ponta</strong> — não só conectando em CRM, mas criando fluxos completos com <strong className="text-cyan-400">N8N</strong>, Make, APIs REST, bancos de dados SQL e NoSQL, Docker e orquestração de LLMs com LangChain para que sistemas, atendimentos e dados conversem entre si.
                </p>
                <p>
                  Hoje eu desenho e opero fluxos inteligentes e <strong className="text-emerald-400">agentes conversacionais de atendimento e pré-venda (SDR e Closer)</strong> totalmente integrados ao WhatsApp, CRM e bancos de dados, usando <strong className="text-cyan-400">N8N</strong>, Make, Docker, APIs REST e bancos SQL/NoSQL, além de orquestradores de IA como <strong className="text-purple-400">LangChain/LangGraph</strong>, RAG, ETL/ELT e pipelines de dados. Esses agentes não ficam soltos: eles registram e atualizam conversa no CRM, preenchem campos e funis, disparam follow-ups, fazem handoff para humano e podem consumir fontes externas (Postgres/Supabase) para falar com contexto do negócio. Como muitas dessas automações terminam em <strong className="text-orange-400">CRM e BI</strong>, também estruturo jornadas, segmentação e dashboards para marketing/vendas quando necessário, mas isso entra como complemento técnico do mesmo ecossistema que inclui <strong className="text-blue-400">Python, JavaScript</strong>, vibe code (Cursor, Trae), automações internas e integrações event-driven para deixar tudo observável e escalável.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card com Perfil Comportamental */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Título e Descrição */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <span className="text-xl">🧠</span>
                      Perfil Comportamental
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      Perfil analítico e estruturado, orientado a solução e automação do que é repetitivo. Combino pensamento estratégico com execução técnica detalhada.
                    </p>
                  </div>
                  
                  {/* Testes de Personalidade */}
                  <div className="flex-shrink-0">
                    <div className="grid grid-cols-2 gap-2">
                       {personality.map((item, index) => (
                         <div key={index} className="bg-white/5 rounded-lg p-2 text-center min-w-[80px]">
                           <div className="text-xs text-slate-400 font-medium">{item.label}</div>
                           <div className="text-white font-semibold text-sm">{item.value}</div>
                         </div>
                       ))}
                     </div>
                  </div>
                </div>
              </div>
          </motion.div>
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