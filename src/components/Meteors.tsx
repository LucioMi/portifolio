"use client"

import { useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

type MeteorsProps = {
  count?: number
  className?: string
}

export default function Meteors({ count = 12, className = '' }: MeteorsProps) {
  const reduced = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  // Evita diferenças entre SSR e cliente: só renderiza após montar no cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  const meteors = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 90, // vh
        left: Math.random() * 90, // vw
        delay: Math.random() * 6, // s
        duration: 6 + Math.random() * 4, // s
        scale: 0.8 + Math.random() * 0.6 // scale factor
      })),
    [count]
  )

  if (!mounted || reduced) return null

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      {meteors.map(m => (
        <span
          key={m.id}
          className="meteor"
          style={{
            top: `${m.top}vh`,
            left: `${m.left}vw`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
            transform: `rotate(45deg) scale(${m.scale})`
          }}
        />
      ))}
    </div>
  )
}