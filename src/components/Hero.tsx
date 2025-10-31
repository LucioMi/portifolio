'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const badges = [
    {
      title: "Gestor de Automações",
      subtitle: "Dev Low-code",
      icon: "⚡",
      priority: 1
    },
    {
      title: "Analista CRM & BI",
      subtitle: "Funis & Métricas",
      icon: "📊",
      priority: 2
    },
    {
      title: "Estrategista Marketing",
      subtitle: "Tráfego & Leads",
      icon: "🎯",
      priority: 3
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Orquestro{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              automações
            </span>
            ,{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              CRM
            </span>
            {' '}e{' '}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              marketing
            </span>
            <br />
            de ponta a ponta
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Integro tecnologia, dados e estratégia para criar ciclos completos de aquisição, 
            qualificação e conversão de leads.
          </motion.p>

          {/* Badges das Competências */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className={`
                  relative group cursor-pointer
                  ${badge.priority === 1 ? 'order-1' : badge.priority === 2 ? 'order-2' : 'order-3'}
                `}
              >
                <div className={`
                  px-6 py-4 rounded-2xl backdrop-blur-sm border transition-all duration-300
                  ${badge.priority === 1 
                    ? 'bg-blue-500/10 border-blue-400/30 hover:border-blue-400/60 hover:bg-blue-500/20' 
                    : badge.priority === 2 
                    ? 'bg-emerald-500/10 border-emerald-400/30 hover:border-emerald-400/60 hover:bg-emerald-500/20'
                    : 'bg-orange-500/10 border-orange-400/30 hover:border-orange-400/60 hover:bg-orange-500/20'
                  }
                  hover:scale-105 hover:shadow-lg hover:shadow-white/10
                `}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{badge.icon}</span>
                    <div className="text-left">
                      <h3 className="text-white font-semibold text-sm md:text-base">
                        {badge.title}
                      </h3>
                      <p className="text-slate-400 text-xs md:text-sm">
                        {badge.subtitle}
                      </p>
                    </div>
                  </div>
                  {badge.priority === 1 && (
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Foco Principal
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* CTA Primário */}
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <span className="relative z-10">Vamos Conversar</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* CTA Secundário */}
            <button className="group px-8 py-4 border border-white/20 text-white font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:scale-105">
              Ver Projetos
            </button>
          </motion.div>
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
    </section>
  );
};

export default Hero;