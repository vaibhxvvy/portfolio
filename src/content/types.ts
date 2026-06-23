export interface HeroData {
  name: string
  roles: string[]
  statement: string
  cta: {
    primary: { label: string; href: string }
    secondary: { label: string; href: string }
    tertiary: { label: string; href: string }
  }
}

export interface StatusModule {
  label: string
  icon: string
  items: string[]
  description: string
}

export interface Project {
  title: string
  description: string
  problem: string
  solution: string
  techStack: string[]
  impact: string
  image: string
  github?: string
  live?: string
  tags: string[]
  year: string
}

export interface CapabilityCategory {
  category: string
  skills: string[]
  color: string
}

export interface JourneyEntry {
  year: string
  title: string
  description: string
  type: 'education' | 'experience' | 'project' | 'milestone'
}

export interface SocialLink {
  platform: string
  url: string
  command: string
  icon: string
}

export interface SiteConfig {
  metadata: {
    title: string
    description: string
    url: string
    ogImage: string
    author: string
    twitterHandle: string
  }
  hero: HeroData
  statusModules: StatusModule[]
  projects: Project[]
  capabilities: CapabilityCategory[]
  journey: JourneyEntry[]
  about: {
    whoami: string[]
    description: string
  }
  socials: SocialLink[]
}
