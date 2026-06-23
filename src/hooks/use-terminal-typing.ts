'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Simulates a terminal typing effect over an array of text lines.
 * @param lines — strings to type out sequentially
 * @param options.speed — delay between lines (ms)
 * @param options.delay — initial delay (ms)
 * @returns visibleLines + completion flag
 */
export function useTerminalTyping(
  lines: string[],
  options: { speed?: number; delay?: number } = {}
) {
  const { speed = 400, delay = 0 } = options
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)

  const startTyping = useCallback(() => {
    let index = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < lines.length) {
          setVisibleLines((prev) => [...prev, lines[index]])
          index++
        } else {
          clearInterval(interval)
          setIsComplete(true)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [lines, speed, delay])

  useEffect(() => {
    const cleanup = startTyping()
    return cleanup
  }, [startTyping])

  /** Scroll ref for the terminal window */
  const scrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [visibleLines.length])

  return { visibleLines, isComplete, scrollRef }
}
