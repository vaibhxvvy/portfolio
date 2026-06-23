'use client'

import { SmoothScroll } from '@/components/layout/smooth-scroll'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { AmbientBackground } from '@/components/layout/ambient-background'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <AmbientBackground />
      <Navigation />
      <main className="relative z-10 min-h-screen">{children}</main>
      <Footer />
    </SmoothScroll>
  )
}
