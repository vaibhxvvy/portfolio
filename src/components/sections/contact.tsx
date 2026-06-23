'use client'

import { useState } from 'react'
import { siteConfig } from '@/content/config'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'
import { motion } from 'framer-motion'
import { GitBranch, Link2, Mail, FileText, CornerDownLeft } from 'lucide-react'

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GitBranch,
  linkedin: Link2,
  mail: Mail,
  'file-text': FileText,
}

export function Contact() {
  const { socials } = siteConfig
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const cmd = input.trim().toLowerCase()
    const match = socials.find(
      (s) => s.command.toLowerCase() === cmd || s.platform.toLowerCase() === cmd
    )

    if (match) {
      setOutput((prev) => [...prev, `> ${input}`])
      setTimeout(() => {
        if (match.url.startsWith('mailto:') || match.url.startsWith('/')) {
          window.location.href = match.url
        } else {
          window.open(match.url, '_blank', 'noopener,noreferrer')
        }
      }, 300)
    } else if (cmd === 'help' || cmd === 'ls') {
      setOutput((prev) => [
        ...prev,
        `> ${input}`,
        'Available commands:',
        ...socials.map((s) => `  ${s.command}`),
        '  help',
      ])
    } else {
      setOutput((prev) => [...prev, `> ${input}`, `Command not found: ${cmd}. Type "help" for available commands.`])
    }
    setInput('')
  }

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 font-mono text-xs tracking-wider text-muted-foreground uppercase">
              Connect
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Get In <span className="text-gradient-primary">Touch</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0A0A0A]">
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <div className="size-3 rounded-full bg-[#EF4444]/60" />
              <div className="size-3 rounded-full bg-[#F59E0B]/60" />
              <div className="size-3 rounded-full bg-[#22C55E]/60" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                contact — command palette
              </span>
            </div>

            <Stagger className="p-6 pb-0" staggerDelay={0.08}>
              <div className="mb-4 grid gap-3 sm:grid-cols-2">
                {socials.map((social) => {
                  const Icon = iconComponents[social.icon] || GitBranch
                  return (
                    <StaggerItem key={social.platform}>
                      <motion.a
                        href={social.url}
                        target={social.url.startsWith('/') ? undefined : '_blank'}
                        rel={social.url.startsWith('/') ? undefined : 'noopener noreferrer'}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
                      >
                        <Icon className="size-5 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium text-white">{social.platform}</div>
                          <div className="font-mono text-xs text-muted-foreground">
                            {social.command}
                          </div>
                        </div>
                      </motion.a>
                    </StaggerItem>
                  )
                })}
              </div>
            </Stagger>

            <div className="border-t border-white/[0.06] p-6">
              <div className="mb-2 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                Command Line
              </div>
              <div className="mb-4 max-h-32 overflow-y-auto font-mono text-xs">
                {output.map((line, i) => (
                  <div
                    key={i}
                    className={line.startsWith('>') ? 'text-muted-foreground' : 'text-secondary-foreground'}
                  >
                    {line}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <span className="font-mono text-sm text-[#7C3AED]">{'>'}</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={'Type a command... (try "help")'}
                  className="flex-1 bg-transparent font-mono text-sm text-white outline-none placeholder:text-muted-foreground/50"
                  autoFocus
                />
                <CornerDownLeft className="size-3.5 text-muted-foreground" />
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
