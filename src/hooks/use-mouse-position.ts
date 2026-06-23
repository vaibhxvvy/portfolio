'use client'

import { useState, useEffect, type RefObject } from 'react'

/**
 * Tracks mouse position relative to a given element.
 * @param ref — target element ref
 * @returns { x: number, y: number } relative coordinates
 */
export function useMousePosition(ref: RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    element.addEventListener('mousemove', handleMouseMove)
    return () => element.removeEventListener('mousemove', handleMouseMove)
  }, [ref])

  return position
}
