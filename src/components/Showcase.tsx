'use client';

import { motion } from 'framer-motion';

const Showcase = () => {
  const projects = [
    {
      id: 1,
      title: "Automação de entrada de leads → CRM → WhatsApp",
      category: "Automação",
      description: "Fluxo ponta a ponta que captura o lead no formulário, valida e deduplica dados, enriquece informações e qualifica automaticamente (regras/score). Em seguida, dispara mensagens personalizadas no WhatsApp com gatilhos por estágio, registra atividades e monitora SLA de 1º contato, taxa de resposta e conversão por etapa — tudo orquestrado por integrações via API/Webhooks e rotinas de dados para manter o funil limpo e mensurável.",
      technologies: ["Go High Level", "N8N", "Whatsapp API", "SQL", "LLMs"],
      icon: "⚡",
      gradient: "from-[var(--blue-600)] to-[var(--violet-600)]",
      bgGradient: "from-[var(--blue-600)/24] to-[var(--violet-600)/24]"
    },
    {
      id: 2,
      title: "Padronização de funil e campos para reporting",
      category: "CRM & BI",
      description: "Projeto de normalização do CRM: definição de estágios, campos padronizados e nomenclaturas; criação de regras de atualização automática e segmentações; e implantação de dashboards operacionais/gerenciais (conversões por estágio, aging do pipeline e SLA). O objetivo é garantir dados confiáveis para análise e decisões, permitindo comparar times/segmentos e rodar rotinas de ETL/ELT quando necessário.",
      technologies: ["HubSpot", "Power BI", "ETL/ELT", "Webhooks", "N8N"],
      icon: "📊",
      gradient: "from-[var(--violet-500)] to-[var(--blue-500)]",
      bgGradient: "from-[var(--violet-500)/22] to-[var(--blue-500)/22]"
    },
    {
      id: 3,
      title: "Integração tráfego/ads → CRM para provar campanha",
      category: "Marketing + CRM",
      description: "Conexão de UTMs completas (source/medium/campaign) entre canais de aquisição e o CRM, com mapeamento de leads/negócios e atribuição de receita por campanha. Inclui normalização de origem, envio/ingestão via APIs, eventos e webhooks, além de conversions e painéis que fecham o ciclo clique → lead → oportunidade → venda, permitindo cortar mídia ineficiente e escalar o que dá retorno.",
      technologies: [
        "Google Ads",
        "Meta Ads",
        "UTMs",
        "Kommo",
        "N8N",
        "APIs REST",
        "Webhooks",
        "SQL",
        "Analytics"
      ],
      icon: "🎯",
      gradient: "from-[var(--blue-500)] to-[var(--violet-400)]",
      bgGradient: "from-[var(--blue-700)/20] to-[var(--violet-700)/20]"
    },
    {
      id: 4,
      title: "Agente SDR/Closer — Atendimento, Métricas e Agendamento",
      category: "Automação",
      description: "Fluxo completo de pré-venda e fechamento: atendimento imediato ao lead, qualificação com prompts orientados por LLMs, registro e acompanhamento de métricas (SLA de 1º contato, taxa de resposta, taxa de show e conversão por etapa) e agendamento automático com confirmação/lembrantes. Integração direta ao CRM para atualizar estágios, notas e tarefas, além de follow-ups multicanal.",
      technologies: [
        "Evolution API",
        "Kommo",
        "Calendly",
        "N8N",
        "APIs REST",
        "SQL",
        "Webhooks",
        "LangChain",
        "Langfuse",
        "LLMs"
      ],
      icon: "🤝",
      gradient: "from-[var(--violet-600)] to-[var(--blue-600)]",
      bgGradient: "from-[var(--violet-600)/22] to-[var(--blue-600)/22]"
    },
    {
      id: 5,
      title: "Automação Interna — Circuito de NPS (App Próprio)",
      category: "Automação Interna",
      description: "Disparo automático de NPS via WhatsApp API para clientes e colaboradores em marcos da jornada; coleta das notas (0–10) e feedbacks, cálculo de NPS e classificação por temas/sentimento. App próprio em Vibe Coding centraliza histórico, tendências, tags e comparativos por período/equipe — funcionando como um BI de satisfação para a agência, com alertas para fechamento de loop e relatórios executivos.",
      technologies: [
        "WhatsApp API",
        "Vibe Coding",
        "Webhooks/API",
        "Google Sheets/BigQuery"
      ],
      icon: "📈",
      gradient: "from-[var(--blue-600)] to-[var(--violet-600)]",
      bgGradient: "from-[var(--blue-600)/24] to-[var(--violet-600)/24]"
    },
    {
      id: 6,
      title: "Automação Interna — Onboarding para Agência de Marketing",
      category: "Automação Interna",
      description: "Fluxo orquestrado de onboarding: criação automática de tarefas para colaboradores no ClickUp, geração de grupos de WhatsApp, pastas no Drive e documentos dentro dessas pastas; sistema de avisos (lembretes/notificações) e mecanismo de troca/substituição de colaboradores com handoff de responsabilidades. Tudo padronizado para reduzir tempo de ativação e evitar gargalos entre áreas.",
      technologies: [
        "ClickUp",
        "WhatsApp API",
        "Google Drive/Docs",
        "Webhooks/API",
        "N8N"
      ],
      icon: "🚀",
      gradient: "from-[var(--violet-500)] to-[var(--blue-500)]",
      bgGradient: "from-[var(--violet-500)/22] to-[var(--blue-500)/22]"
    }
  ];



  return (
    <section className="py-24 bg-[var(--surface)] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
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
              className="relative group cursor-pointer"
            >
              <div
                className={`magic-card h-full p-8 rounded-3xl backdrop-blur-sm bg-gradient-to-br ${project.bgGradient}`}
                onMouseMove={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  const rect = target.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  target.style.setProperty('--mouse-x', `${x}px`);
                  target.style.setProperty('--mouse-y', `${y}px`);
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.removeProperty('--mouse-x');
                  target.style.removeProperty('--mouse-y');
                }}
              >
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



                
              </div>
            </motion.div>
          ))}
        </div>




      </div>
    </section>
  );
};

export default Showcase;