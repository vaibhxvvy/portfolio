'use client'

import { useSmoothScroll } from '@/hooks/use-smooth-scroll'

/**
 * SmoothScroll wrapper component.
 * Instantiates Lenis on mount and cleans up on unmount.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useSmoothScroll()
  return <>{children}</>
}
