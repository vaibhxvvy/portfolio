'use client'

import { useRef } from 'react'
import { useScroll, useTransform, type MotionValue } from 'framer-motion'

interface UseScrollProgressOptions {
  /** Horizontal speed of parallax (default: 0.3) */
  speed?: number
}

/**
 * Provides scroll progress and derived motion values for parallax effects.
 * @param options — configuration object
 * @returns ref, scrollYProgress, y motion value
 */
export function useScrollProgress(options: UseScrollProgressOptions = {}) {
  const { speed = 0.3 } = options
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress as MotionValue<number>,
    [0, 1],
    [-50 * speed * 10, 50 * speed * 10]
  )

  const opacity = useTransform(
    scrollYProgress as MotionValue<number>,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  )

  return { ref, scrollYProgress, y, opacity }
}
