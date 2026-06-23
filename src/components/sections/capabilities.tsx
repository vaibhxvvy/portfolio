'use client'

import { useState } from 'react'
import { siteConfig } from '@/content/config'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'
import { motion } from 'framer-motion'

export function Capabilities() {
  const { capabilities } = siteConfig
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section id="capabilities" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 font-mono text-xs tracking-wider text-muted-foreground uppercase">
              System Capabilities
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              What I <span className="text-gradient-primary">Build With</span>
            </h2>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              Capabilities organized by domain, not percentages.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {capabilities.map((cat) => (
            <StaggerItem key={cat.category}>
              <motion.div
                onHoverStart={() => setHoveredCategory(cat.category)}
                onHoverEnd={() => setHoveredCategory(null)}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0A0A0A] p-8 transition-colors hover:border-white/[0.12]"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at top right, ${cat.color}06, transparent 70%)`,
                  }}
                />

                <div className="relative">
                  <div className="mb-2 flex items-center gap-3">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />
                    <h3 className="text-base font-semibold text-white">{cat.category}</h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0.6 }}
                        animate={{
                          opacity: hoveredCategory === cat.category || hoveredCategory === null ? 1 : 0.3,
                          scale: hoveredCategory === cat.category ? 1 : 0.98,
                        }}
                        transition={{ duration: 0.3, delay: i * 0.03 }}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-secondary-foreground transition-colors hover:border-white/[0.12] hover:text-white"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
