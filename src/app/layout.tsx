import type { Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  style: 'italic',
})

export const metadata: Metadata = {
  title: 'Vaibhav Surthi — AI Engineer & Product Builder',
  description:
    'Building intelligent systems, machine learning products, and AI-powered experiences. AI Engineer, ML Engineer, Data Scientist, and Product Builder.',
  metadataBase: new URL('https://vaibhavsurthi.vercel.app'),
  openGraph: {
    title: 'Vaibhav Surthi — AI Engineer & Product Builder',
    description:
      'Building intelligent systems, machine learning products, and AI-powered experiences.',
    url: 'https://vaibhavsurthi.vercel.app',
    siteName: 'Vaibhav Surthi',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Surthi — AI Engineer & Product Builder',
    description:
      'Building intelligent systems, machine learning products, and AI-powered experiences.',
    creator: '@vaibhavsurthi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} dark h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Vaibhav Surthi',
              url: 'https://vaibhavsurthi.vercel.app',
              jobTitle: 'AI Engineer',
              description:
                'Building intelligent systems, machine learning products, and AI-powered experiences.',
              sameAs: [
                'https://github.com/vaibhxvvy',
                'https://www.linkedin.com/in/vaibhavsurthi/',
              ],
              knowsAbout: [
                'Artificial Intelligence',
                'Machine Learning',
                'Data Science',
                'Python',
                'FastAPI',
                'PyTorch',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full bg-[#050505] font-sans text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
