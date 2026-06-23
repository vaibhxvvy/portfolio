'use client'

import { Reveal } from '@/components/motion/reveal'
import { SectionHeader } from '@/components/shared/section-header'
import { aboutData } from '@/lib/data'
import { useTerminalTyping } from '@/hooks/use-terminal-typing'
import { useState, useEffect } from 'react'

export function About() {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  const terminalLines = [
    '$ whoami',
    ...aboutData.whoami,
    '',
    '$ cat description.txt',
    aboutData.description,
  ]

  const { visibleLines, scrollRef } = useTerminalTyping(terminalLines, {
    speed: 400,
  })

  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeader
            label="/about"
            title=<span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">whoami</span>
          />
        </Reveal>

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
            ref={scrollRef}
            className="p-6 font-mono text-sm leading-loose min-h-[280px] overflow-y-auto"
          >
            {visibleLines.map((line, i) => (
              <div
                key={i}
                className={
                  line.startsWith('$') ? 'text-[#7C3AED] mt-3 first:mt-0' : 'text-secondary-foreground'
                }
              >
                {line || '\u00A0'}
              </div>
            ))}
            <span
              className={`inline-block h-4 w-2 ${showCursor ? 'animate-pulse bg-[#7C3AED]/80' : 'bg-transparent'}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
