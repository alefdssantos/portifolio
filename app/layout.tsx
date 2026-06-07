import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { siteConfig } from '../data/site'
import './globals.css'

const sans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-src',
  display: 'swap',
})

const siteTitle = `AlefOS · ${siteConfig.name} · ${siteConfig.role}`

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} | Portfolio`,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteConfig.description,
    url: '/',
    siteName: `${siteConfig.name} | Portfolio`,
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `Portfolio de ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={sans.variable}>
      <body className="font-mono antialiased">
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  )
}
