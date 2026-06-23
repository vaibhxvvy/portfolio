'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/* ── Parallax section ──────────────────────────────────────────────────── */

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function ParallaxSection({
  children,
  className,
  speed = 0.3,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-50 * speed * 10, 50 * speed * 10]
  )

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

/* ── Section transition (opacity-only) ─────────────────────────────────── */

interface SectionTransitionProps {
  children: React.ReactNode
  className?: string
}

export function SectionTransition({
  children,
  className,
}: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  )

  return (
    <motion.div ref={ref} style={{ opacity }} className={className}>
      {children}
    </motion.div>
  )
}
