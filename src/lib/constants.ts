/**
 * Centralized constants for the portfolio.
 * All hardcoded strings, colors, and animation presets live here.
 */

/* -------------------------------------------------------------------------- */
/*  Colors                                                                    */
/* -------------------------------------------------------------------------- */

export const COLORS = {
  primary: '#7C3AED',
  secondary: '#06B6D4',
  accent: '#EC4899',
  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',
  background: '#050505',
  foreground: '#FFFFFF',
} as const

/* -------------------------------------------------------------------------- */
/*  Animation presets                                                         */
/* -------------------------------------------------------------------------- */

export const ANIMATION = {
  /** Default Framer Motion ease curve */
  EASE: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  /** Duration presets nuo (seconds) */
  DURATION: {
    fast: 0.4,
    normal: 0.6,
    slow: 0.8,
  } as const,
  /** Stagger delay between child animations */
  STAGGER: 0.1,
} as const

/* -------------------------------------------------------------------------- */
/*  Layout / Navigation                                                       */
/* -------------------------------------------------------------------------- */

export const NAV_ITEMS = [
  { label: 'Work', href: '#projects' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Journey', href: '#journey' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                  */
/* -------------------------------------------------------------------------- */

export const SITE_METADATA = {
  title: 'Vaibhav Surthi — AI Engineer & Product Builder',
  description:
    'Building intelligent systems, machine learning products, and AI-powered experiences. AI Engineer, ML Engineer, Data Scientist, and Product Builder.',
  url: 'https://vaibhavsurthi.vercel.app',
  ogImage: '/images/og.png',
  author: 'Vaibhav Surthi',
  twitterHandle: '@vaibhavsurthi',
} as const

/* -------------------------------------------------------------------------- */
/*  Social links                                                              */
/* -------------------------------------------------------------------------- */

export const SOCIAL_LINKS = {
  github: 'https://github.com/vaibhxvvy',
  linkedin: 'https://www.linkedin.com/in/vaibhavsurthi/',
  email: 'mailto:vaibhavsurthi08@gmail.com',
  resume: '/resume.pdf',
} as const
