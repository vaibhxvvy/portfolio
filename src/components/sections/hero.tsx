'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/content/config'
import { ArrowDown, ExternalLink } from 'lucide-react'

export function Hero() {
  const { hero } = siteConfig
  const [roleIndex, setRoleIndex] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % hero.roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [hero.roles.length])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.12), rgba(6, 182, 212, 0.06), transparent 60%)`,
        }}
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7C3AED]/10 to-[#06B6D4]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-[#EC4899]/5 to-[#7C3AED]/5 blur-[100px]" />
      </div>

      <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6 flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
          </span>
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.95] tracking-tight text-white"
        >
          <span className="block">VAIBHAV</span>
          <span className="block text-gradient-primary">SURTHI</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex items-center gap-3 text-2xl font-medium text-secondary-foreground md:text-3xl"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.4 }}
              className="inline-block"
            >
              {hero.roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
          <span className="inline-block h-[2px] w-8 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-xl font-serif text-xl italic text-muted-foreground md:text-2xl"
        >
          creating useful software
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-4 max-w-lg text-base text-muted-foreground"
        >
          {hero.statement}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={hero.cta.primary.href}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-white px-8 py-3.5 text-sm font-medium text-[#050505] transition-all hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.3)]"
          >
            <span className="relative z-10">{hero.cta.primary.label}</span>
            <ArrowDown className="relative z-10 size-4 transition-transform group-hover:translate-y-0.5" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] opacity-0 transition-opacity group-hover:opacity-100" />
          </a>

          <a
            href={hero.cta.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/[0.15] hover:bg-white/[0.06]"
          >
            {hero.cta.secondary.label}
          </a>

          <a
            href={hero.cta.tertiary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 text-sm font-medium text-muted-foreground transition-all hover:text-white"
          >
            {hero.cta.tertiary.label}
            <ExternalLink className="size-3.5" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-muted-foreground uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="size-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
