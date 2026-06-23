'use client'

import { useRef } from 'react'
import { useInView as framerUseInView, type UseInViewOptions } from 'framer-motion'

/**
 * Standardised in-view hook with sensible defaults.
 * @param options — Framer Motion useInView options override
 * @returns ref + boolean flag
 */
export function useInView(options?: UseInViewOptions) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = framerUseInView(ref, {
    once: true,
    margin: '-80px',
    ...options,
  })

  return { ref, isInView }
}
