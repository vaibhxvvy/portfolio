'use client'

import { Cpu, Code2, Signal, BookOpen } from 'lucide-react'
import { statusModules } from '@/lib/data'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'
import { SectionHeader } from '@/components/shared/section-header'
import { motion } from 'framer-motion'

/* Map icon keys to actual Lucide components (avoids emoji keys) */
const iconLookup: Record<string, React.ReactNode> = {
  target: <Cpu className="size-5" />,
  zap: <Code2 className="size-5" />,
  signal: <Signal className="size-5" />,
  'book-open': <BookOpen className="size-5" />,
}

export function CurrentStatus() {
  return (
    <section id="status" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            label="System Status"
            title={<>
              Current <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">Operating State</span>
            </>}
          />
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
                      {iconLookup[module.icon] ?? <Cpu className="size-5" />}
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
