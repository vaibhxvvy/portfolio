'use client'

import { useRef, useState, type ReactNode } from 'react'
import { motion, useInView, type Variant } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  once?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  const directions: Record<string, Variant> = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function Stagger({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function TextReveal({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div ref={ref} className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.4,
            delay: i * 0.02,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function MagneticButton({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.15
    const y = (clientY - (top + height / 2)) * 0.15
    setPosition({ x, y })
  }

  return (
    <motion.button
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.button>
  )
}
