'use client'

import { useState, useEffect } from 'react'

/**
 * Tracks a CSS media query.
 * @param query — valid CSS media query string (e.g. '(max-width: 768px)')
 * @returns boolean — true if the query currently matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}
