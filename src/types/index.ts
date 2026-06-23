/**
 * Reusable data types for the portfolio.
 * Strictly defined to ensure type safety across all components.
 */

/** Call-to-action link */
export interface CTA {
  label: string
  href: string
}

/** Hero section data model */
export interface HeroData {
  name: string
  roles: string[]
  statement: string
  cta: {
    primary: CTA
    secondary: CTA
    tertiary: CTA
  }
}

/** Current status module card */
export interface StatusModule {
  label: string
  icon: string
  items: string[]
  description: string
}

/** Portfolio project entry */
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

/** Skill category for capabilities section */
export interface CapabilityCategory {
  category: string
  skills: string[]
  color: string
}

/** Valid journey entry types */
export type JourneyType = 'education' | 'experience' | 'project' | 'milestone'

/** Timeline journey entry */
export interface JourneyEntry {
  year: string
  title: string
  description: string
  type: JourneyType
}

/** Social media / contact link */
export interface SocialLink {
  platform: string
  url: string
  command: string
  icon: string
}

/** Site-wide SEO metadata */
export interface SiteMetadata {
  title: string
  description: string
  url: string
  ogImage: string
  author: string
  twitterHandle: string
}

/** About section data */
export interface AboutData {
  whoami: string[]
  description: string
}

/** Complete site configuration shape */
export interface SiteConfig {
  metadata: SiteMetadata
  hero: HeroData
  statusModules: StatusModule[]
  projects: Project[]
  capabilities: CapabilityCategory[]
  journey: JourneyEntry[]
  about: AboutData
  socials: SocialLink[]
}
