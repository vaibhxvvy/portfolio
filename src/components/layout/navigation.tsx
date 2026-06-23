'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Journey', href: '#journey' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px' }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((s) => observer.observe(s))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      sections.forEach((s) => observer.unobserve(s))
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-sm font-medium tracking-tight text-white transition-opacity hover:opacity-80"
        >
          VS
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative rounded-xl px-4 py-2 text-sm transition-colors ${
                activeSection === item.href.slice(1)
                  ? 'text-white'
                  : 'text-muted-foreground hover:text-white'
              }`}
            >
              {activeSection === item.href.slice(1) && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-xl bg-white/[0.06]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        <MobileNav />
      </nav>
    </motion.header>
  )
}

function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex size-10 items-center justify-center rounded-xl border border-white/[0.08] text-white"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5">
          <motion.span
            animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="block h-px w-5 bg-current"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-5 bg-current"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="block h-px w-5 bg-current"
          />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 top-full border-b border-white/[0.06] bg-[#050505]/95 p-6 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
