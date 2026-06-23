'use client'

import { useRef, useEffect, useState } from 'react'
import { siteConfig } from '@/content/config'
import { Reveal } from '@/components/motion/reveal'

export function About() {
  const { about } = siteConfig
  const [lines, setLines] = useState<string[]>([])
  const [showCursor, setShowCursor] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const allLines = [
      '$ whoami',
      ...about.whoami,
      '',
      '$ cat description.txt',
      about.description,
    ]
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < allLines.length) {
        setLines((prev) => [...prev, allLines[currentIndex]])
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 400)
    return () => clearInterval(interval)
  }, [about.whoami, about.description])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 font-mono text-xs tracking-wider text-muted-foreground uppercase">
              /about
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              <span className="text-gradient-primary">whoami</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0A0A0A]">
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <div className="size-3 rounded-full bg-[#EF4444]/60" />
              <div className="size-3 rounded-full bg-[#F59E0B]/60" />
              <div className="size-3 rounded-full bg-[#22C55E]/60" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                about — vaibhav@portfolio
              </span>
            </div>

            <div
              ref={terminalRef}
              className="p-6 font-mono text-sm leading-loose min-h-[280px]"
            >
              {lines.map((line, i) => (
                <div key={i} className={typeof line === 'string' && line.startsWith('$') ? 'text-[#7C3AED] mt-3 first:mt-0' : 'text-secondary-foreground'}>
                  {line || '\u00A0'}
                </div>
              ))}
              {showCursor && (
                <span className="inline-block h-4 w-2 animate-pulse bg-[#7C3AED]/80" />
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
