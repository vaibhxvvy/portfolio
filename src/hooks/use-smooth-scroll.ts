'use client'

import { useEffect, useRef, useCallback } from 'react'
import Lenis from 'lenis'

/**
 * Initializes and manages Lenis smooth scroll instance.
 * Cleans up on unmount.
 */
export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null)

  const init = useCallback(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const cleanup = init()
    return cleanup
  }, [init])

  return lenisRef
}
