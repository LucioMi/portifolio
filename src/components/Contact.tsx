'use client';

import { motion } from 'framer-motion';
import { RainbowButton } from '@/components/ui/rainbow-button';

const Contact = () => {
  const contactMethods = [
    {
      title: "WhatsApp",
      description: "Resposta rápida e direta",
      icon: "💬",
      action: "Chamar no WhatsApp",
      href: "https://wa.me/5531999692838?text=Olá! Vi seu portfólio e gostaria de conversar sobre automações e CRM.",
      isPrimary: true,
      gradient: "from-[var(--blue-500)] to-[var(--violet-500)]",
      bgGradient: "from-[var(--blue-500)]/10 to-[var(--violet-500)]/10"
    },
    {
      title: "Email",
      description: "Para propostas detalhadas",
      icon: "📧",
      action: "Enviar Email",
      href: "mailto:luciohenrick@gmail.com?subject=Interesse em Automações e CRM",
      isPrimary: false,
      gradient: "from-[var(--blue-500)] to-[var(--violet-500)]",
      bgGradient: "from-[var(--blue-500)]/10 to-[var(--violet-500)]/10"
    },
    {
      title: "LinkedIn",
      description: "Vamos nos conectar",
      icon: "💼",
      action: "Conectar no LinkedIn",
      href: "https://www.linkedin.com/in/lucio-henrique-225334138/",
      isPrimary: false,
      gradient: "from-[var(--blue-600)] to-[var(--violet-600)]",
      bgGradient: "from-[var(--blue-600)]/10 to-[var(--violet-600)]/10"
    }
  ];



  return (
    <section className="py-24 bg-[var(--bg)] relative overflow-hidden">
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
              Contato
            </span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
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
                  <div
                    className={`magic-card h-full p-8 rounded-3xl backdrop-blur-sm bg-gradient-to-br ${method.bgGradient}`}
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
                    {/* Priority Badge */}
                    {method.isPrimary && method.title !== "WhatsApp" && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-[var(--blue-500)] to-[var(--violet-500)] text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
                          ⚡ Mais Rápido
                        </div>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="text-6xl mb-6 text-center">
                      {method.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[var(--text)] mb-2 text-center">
                      {method.title}
                    </h3>
                    <p className={`
                      text-center mb-6 font-medium text-[var(--text-muted)]
                    `}>
                      {method.description}
                    </p>

                    {/* CTA Button */}
                    <div className="text-center">
                      <RainbowButton 
                        size="lg"
                        variant={method.isPrimary ? "default" : "outline"}
                        className={`${method.title === "WhatsApp" 
                          ? "bg-none bg-green-600 hover:bg-green-500 text-white animate-none" 
                          : "brand-rainbow"
                        } group-hover:scale-[1.03] transition-transform duration-200`}
                      >
                        {method.action}
                      </RainbowButton>
                    </div>


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