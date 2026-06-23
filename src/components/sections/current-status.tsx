'use client'

import { siteConfig } from '@/content/config'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'
import { motion } from 'framer-motion'
import { Cpu, Code2, Signal, BookOpen } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  '🎯': <Cpu className="size-5" />,
  '⚡': <Code2 className="size-5" />,
  '📶': <Signal className="size-5" />,
  '📖': <BookOpen className="size-5" />,
}

export function CurrentStatus() {
  const { statusModules } = siteConfig

  return (
    <section id="status" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 font-mono text-xs tracking-wider text-muted-foreground uppercase">
              System Status
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Current <span className="text-gradient-primary">Operating State</span>
            </h2>
          </div>
        </Reveal>

        <Stagger className="grid gap-6 sm:grid-cols-2" staggerDelay={0.15}>
          {statusModules.map((module) => (
            <StaggerItem key={module.label}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0A0A0A] p-8 transition-colors hover:border-white/[0.12]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white/[0.05] text-[#7C3AED]">
                      {iconMap[module.icon] || <Cpu className="size-5" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{module.label}</h3>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {module.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-secondary-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
