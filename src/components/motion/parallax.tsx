'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ParallaxSection({
  children,
  className,
  speed = 0.3,
}: {
  children: ReactNode
  className?: string
  speed?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-50 * speed * 10, 50 * speed * 10])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

export function SectionTransition({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div ref={ref} style={{ opacity }} className={className}>
      {children}
    </motion.div>
  )
}
