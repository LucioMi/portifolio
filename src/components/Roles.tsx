'use client'

import { motion } from 'framer-motion'

export default function Roles() {
  const roles = [
    {
      title: "Automação & integrações",
      description: "Conecto ferramentas, APIs e bancos para criar fluxos automáticos que eliminam trabalho manual.",
      icon: "⚡",
      color: "blue"
    },
    {
      title: "CRM, dados e jornada",
      description: "Organizo bases, modelo funis, crio segmentações e dashboards para decisões baseadas em dados.",
      icon: "📊", 
      color: "purple"
    },
    {
      title: "Marketing como apoio",
      description: "Tenho 5 anos de experiência com marketing e tráfego, uso isso para integrar aquisição ao CRM e provar resultado, mas não é meu foco principal.",
      icon: "🎯",
      color: "green"
    }
  ]

  return (
    <section className="py-16 bg-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700/50 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Em que papel posso te ajudar
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm
                ${role.color === 'blue' ? 'bg-blue-500/10 border-blue-400/30 hover:border-blue-400/50' :
                  role.color === 'purple' ? 'bg-purple-500/10 border-purple-400/30 hover:border-purple-400/50' :
                  'bg-green-500/10 border-green-400/30 hover:border-green-400/50'}
              `}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{role.icon}</div>
                <h3 className={`
                  text-xl font-semibold mb-3
                  ${role.color === 'blue' ? 'text-blue-300' :
                    role.color === 'purple' ? 'text-purple-300' :
                    'text-green-300'}
                `}>
                  {role.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {role.description}
                </p>
                {role.title === "Marketing como apoio" && (
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 text-sm font-medium rounded-full border border-green-400/30">
                      Competência de apoio
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}