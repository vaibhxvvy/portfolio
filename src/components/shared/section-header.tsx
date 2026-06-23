'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ANIMATION } from '@/lib/constants'

interface SectionHeaderProps {
  /** Small label above the title */
  label: string
  /** Main title (can include JSX for inline styling) */
  title: React.ReactNode
  /** Optional subtitle paragraph */
  subtitle?: string
  className?: string
}

/**
 * Reusable animated section header.
 * Wraps label, title, and optional subtitle with a reveal animation.
 */
export function SectionHeader({
  label,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: ANIMATION.DURATION.slow, ease: ANIMATION.EASE }}
      className={className}
    >
      <div className="mb-4 flex flex-col items-center text-center">
        <span className="mb-4 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 font-mono text-xs tracking-wider text-muted-foreground uppercase">
          {label}
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 max-w-lg text-lg text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  )
}
