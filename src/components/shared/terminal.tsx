'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TerminalProps {
  lines: string[]
  /** Optional extra classes */
  className?: string
}

/**
 * Shared terminal-like card component.
 * Displays text lines with a cursor, auto-scrolling to the bottom.
 */
export const Terminal = forwardRef<HTMLDivElement, TerminalProps>(
  function Terminal({ lines, className }, ref) {
    return (
      <div className={cn('overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0A0A0A]', className)}>
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <div className="size-3 rounded-full bg-[#EF4444]/60" />
          <div className="size-3 rounded-full bg-[#F59E0B]/60" />
          <div className="size-3 rounded-full bg-[#22C55E]/60" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            about — vaibhav@portfolio
          </span>
        </div>

        <div
          ref={ref}
          className="p-6 font-mono text-sm leading-loose min-h-[280px] overflow-y-auto"
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className={
                line.startsWith('$')
                  ? 'text-[#7C3AED] mt-3 first:mt-0'
                  : 'text-secondary-foreground'
              }
            >
              {line || '\u00A0'}
            </div>
          ))}
          <span className="inline-block h-4 w-2 animate-pulse bg-[#7C3AED]/80" />
        </div>
      </div>
    )
  }
)

Terminal.displayName = 'Terminal'
