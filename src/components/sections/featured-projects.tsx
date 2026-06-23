'use client'

import { Reveal } from '@/components/motion/reveal'
import { SectionHeader } from '@/components/shared/section-header'
import { projects } from '@/lib/data'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            label="Selected Work"
            title={<>
              Featured <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">Projects</span>
            </>}
            subtitle="Products and systems I have designed, built, and shipped."
          />
        </Reveal>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.article
                whileHover={{ y: -2 }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0A0A0A] transition-all hover:border-white/[0.12]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative grid gap-0 lg:grid-cols-2">
                  {/* Thumbnail */}
                  <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent p-12 lg:p-16">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111]">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-[#06B6D4]/5" />
                      <div className="flex h-full items-center justify-center">
                        <span className="text-6xl font-bold text-white/[0.06]">{project.title.charAt(0)}</span>
                      </div>
                    </div>
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7C3AED]/5 blur-3xl" />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-center p-8 lg:p-12 xl:p-16">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="rounded-full bg-white/[0.05] px-3 py-1 font-mono text-xs text-muted-foreground">
                        {project.year}
                      </span>
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.06] px-3 py-1 text-xs text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mb-3 text-3xl font-bold tracking-tight text-white lg:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mb-8 text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                          Problem
                        </h4>
                        <p className="text-sm text-secondary-foreground">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                          Solution
                        </h4>
                        <p className="text-sm text-secondary-foreground">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                          Impact
                        </h4>
                        <p className="text-sm font-medium text-[#22C55E]">{project.impact}</p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-secondary-foreground transition-colors hover:border-[#7C3AED]/30 hover:text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm text-white transition-all hover:border-white/[0.15] hover:bg-white/[0.06]"
                        >
                          <ArrowUpRight className="size-4" />
                          Source
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl text-sm text-[#7C3AED] transition-colors hover:text-white"
                        >
                          View Live
                          <ArrowUpRight className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
