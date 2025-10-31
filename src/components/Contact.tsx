'use client';

import { motion } from 'framer-motion';

const Contact = () => {
  const contactMethods = [
    {
      title: "WhatsApp",
      description: "Resposta rápida e direta",
      icon: "💬",
      action: "Chamar no WhatsApp",
      href: "https://wa.me/5511999999999?text=Olá! Vi seu portfólio e gostaria de conversar sobre automações e CRM.",
      isPrimary: true,
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Email",
      description: "Para propostas detalhadas",
      icon: "📧",
      action: "Enviar Email",
      href: "mailto:contato@exemplo.com?subject=Interesse em Automações e CRM",
      isPrimary: false,
      gradient: "from-blue-600 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "LinkedIn",
      description: "Vamos nos conectar",
      icon: "💼",
      action: "Conectar no LinkedIn",
      href: "https://linkedin.com/in/seu-perfil",
      isPrimary: false,
      gradient: "from-blue-700 to-blue-600",
      bgGradient: "from-blue-600/10 to-blue-500/10"
    }
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
            Vamos{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Conversar?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Pronto para otimizar seus processos com automação, CRM e marketing integrados? 
            Entre em contato e vamos discutir como posso ajudar seu projeto.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className={`
                  relative group cursor-pointer
                  ${method.isPrimary ? 'md:scale-105' : ''}
                `}
              >
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className={`
                    h-full p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500
                    bg-gradient-to-br ${method.bgGradient}
                    ${method.isPrimary ? 'border-green-400/30 hover:border-green-400/60' : 'border-white/10 hover:border-white/20'}
                    hover:scale-105 hover:shadow-2xl hover:shadow-white/10
                    ${method.isPrimary ? 'ring-2 ring-green-400/20' : ''}
                  `}>
                    {/* Priority Badge */}
                    {method.isPrimary && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
                          ⚡ Mais Rápido
                        </div>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="text-6xl mb-6 text-center">
                      {method.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2 text-center">
                      {method.title}
                    </h3>
                    <p className={`
                      text-center mb-6 font-medium
                      ${method.isPrimary ? 'text-green-300' : 'text-slate-400'}
                    `}>
                      {method.description}
                    </p>

                    {/* CTA Button */}
                    <div className="text-center">
                      <span className={`
                        inline-block px-6 py-3 rounded-2xl font-semibold transition-all duration-300
                        ${method.isPrimary 
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg hover:shadow-green-500/25' 
                          : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                        }
                        group-hover:scale-105
                      `}>
                        {method.action}
                      </span>
                    </div>

                    {/* Hover Effect */}
                    <div className={`
                      absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-br ${method.gradient} opacity-5
                    `}></div>
                  </div>
                </a>
              </motion.div>
            ))}
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
          className="absolute top-20 left-10 w-20 h-20 bg-green-500/10 rounded-full blur-xl"
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
          className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        />
      </div>
    </section>
  );
};

export default Contact;