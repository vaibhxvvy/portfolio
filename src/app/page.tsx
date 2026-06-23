import { Hero } from '@/components/sections/hero'
import { CurrentStatus } from '@/components/sections/current-status'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { Capabilities } from '@/components/sections/capabilities'
import { Journey } from '@/components/sections/journey'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <CurrentStatus />
      <FeaturedProjects />
      <Capabilities />
      <Journey />
      <About />
      <Contact />
    </main>
  )
}
