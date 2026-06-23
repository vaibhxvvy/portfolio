'use client'

import { metadata } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-medium text-white">VS</span>
          <span className="text-sm text-muted-foreground">
            &copy; {currentYear} {metadata.author}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/vaibhxvvy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhavsurthi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:vaibhavsurthi08@gmail.com"
            className="text-sm text-muted-foreground transition-colors hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
