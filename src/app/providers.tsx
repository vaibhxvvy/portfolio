'use client'

import { SmoothScroll } from '@/components/layout/smooth-scroll'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </SmoothScroll>
  )
}
