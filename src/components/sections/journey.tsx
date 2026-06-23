'use client'

import { siteConfig } from '@/content/config'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Rocket, Star } from 'lucide-react'

const typeIcons: Record<string, React.ReactNode> = {
  education: <GraduationCap className="size-4" />,
  experience: <Briefcase className="size-4" />,
  project: <Rocket className="size-4" />,
  milestone: <Star className="size-4" />,
}

const typeColors: Record<string, string> = {
  education: '#7C3AED',
  experience: '#06B6D4',
  project: '#22C55E',
  milestone: '#EC4899',
}

export function Journey() {
  const { journey } = siteConfig

  return (
    <section id="journey" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 font-mono text-xs tracking-wider text-muted-foreground uppercase">
              Timeline
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              The <span className="text-gradient-primary">Journey</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[19px] top-0 h-full w-px bg-white/[0.06]" />

          <Stagger className="space-y-0" staggerDelay={0.12}>
            {journey.map((entry) => (
              <StaggerItem key={`${entry.year}-${entry.title}`}>
                <div className="group relative flex gap-6 py-6 pl-0">
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="flex size-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#0A0A0A]"
                      style={{
                        borderColor: `${typeColors[entry.type]}30`,
                        color: typeColors[entry.type],
                      }}
                    >
                      {typeIcons[entry.type]}
                    </motion.div>
                  </div>

                  <div className="flex-1 pb-2">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-mono text-sm text-muted-foreground">
                        {entry.year}
                      </span>
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider"
                        style={{
                          backgroundColor: `${typeColors[entry.type]}10`,
                          color: typeColors[entry.type],
                        }}
                      >
                        {entry.type}
                      </span>
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
