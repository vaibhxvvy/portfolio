'use client'

import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'
import { SectionHeader } from '@/components/shared/section-header'
import { journey } from '@/lib/data'
import { JourneyType } from '@/types'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Rocket, Star } from 'lucide-react'

/* -------------------------------------------------------------------------- */
/*  Asset maps (kept outside component to avoid re-creation)                  */
/* -------------------------------------------------------------------------- */

const typeIcons: Record<JourneyType, React.ReactNode> = {
  education: <GraduationCap className="size-4" />,
  experience: <Briefcase className="size-4" />,
  project: <Rocket className="size-4" />,
  milestone: <Star className="size-4" />,
}

const typeColors: Record<JourneyType, string> = {
  education: '#7C3AED',
  experience: '#06B6D4',
  project: '#22C55E',
  milestone: '#EC4899',
}

export function Journey() {
  return (
    <section id="journey" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeader
            label="Timeline"
            title={<>
              The <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">Journey</span>
            </>}
          />
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
