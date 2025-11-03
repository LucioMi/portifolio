'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

export default function Hero() {
  const titles = useMemo(
    () => [
      // Editar títulos e ordem aqui
      'Desenvolvedor & Arquiteto de Automação',
      'Agentes, Automações e CRM em Produção',
      'ETL/ELT e CRM & BI para operação mensurável',
      'Arquitetura de automações orientada a dados',
      'Fluxos low-code + código sob medida'
    ],
    []
  )


  const subtitle = 'N8N/Make, APIs, SQL/NoSQL, Docker, LangChain/RAG. Integro sistemas e CRM/BI para operação mensurável; marketing como camada de apoio.'

  const prefersReduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<number | null>(null)

  // Editar intervalo de rotação (~2.8s)
  useEffect(() => {
    if (prefersReduced) return
    if (intervalRef.current) window.clearInterval(intervalRef.current)
    intervalRef.current = window.setInterval(() => {
      if (!paused) {
        setIndex(prev => (prev + 1) % titles.length)
      }
    }, 2800)
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [prefersReduced, paused, titles.length])

  // Destaque sutil (usar no máximo 2–3 spans por título)
  const highlight = 'bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent'

  // Render do título com spans destacados
  const renderTitle = (i: number) => {
    switch (i) {
      case 0:
        return (
          <>
            Desenvolvedor & <span className={highlight}>Arquiteto</span> de <span className={highlight}>Automação</span>
          </>
        )
      case 1:
        return (
          <>
            Agentes, <span className={highlight}>Automações</span> e <span className={highlight}>CRM</span> em Produção
          </>
        )
      case 2:
        return (
          <>
            <span className={highlight}>ETL/ELT</span> e <span className={highlight}>CRM & BI</span> para operação mensurável
          </>
        )
      case 3:
        return (
          <>
            <span className={highlight}>Arquitetura</span> de automações orientada a <span className={highlight}>dados</span>
          </>
        )
      case 4:
        return (
          <>
            Fluxos <span className={highlight}>low-code</span> + <span className={highlight}>código</span> sob medida
          </>
        )
      default:
        return titles[i]
    }
  }

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* H1 semântico estático (acessibilidade) */}
        <h1 className="sr-only">{titles[0]}</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 md:space-y-12"
        >
          {/* Título Rotativo Visual */}
          <div
            aria-live="polite"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative h-[3.4rem] md:h-[4.6rem]"
          >
            {prefersReduced ? (
              <div className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {/* Título estático quando reduzida a animação */}
                {renderTitle(0)}
              </div>
            ) : (
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={`${index}-${titles[index]}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    {renderTitle(index)}
                  </span>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Subtítulo fixo */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            {/* Subtítulo com 1 destaque máximo */}
            N8N/Make, APIs, SQL/NoSQL, Docker, <span className={highlight}>LangChain/RAG</span>. Integro sistemas e CRM/BI para operação mensurável; marketing como camada de apoio.
          </motion.p>


        </motion.div>
      </div>
      {/* Bottom fade to blend into Roles */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-slate-800/80" />
    </section>
  )
}