'use client'

import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  /** Color variant (default: primary) */
  variant?: 'primary' | 'secondary'
  className?: string
}

/**
 * Renders text with a gradient clipped to the text fill.
 * Use this instead of arbitrary Tailwind classes for consistency.
 */
export function GradientText({
  children,
  variant = 'primary',
  className,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent',
        variant === 'primary'
          ? 'from-[#7C3AED] to-[#06B6D4]'
          : 'from-[#EC4899] to-[#7C3AED]',
        className
      )}
    >
      {children}
    </span>
  )
}
