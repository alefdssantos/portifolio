import type { MetadataRoute } from 'next'
import { siteConfig } from '../data/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} | Portfolio`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#050816',
    theme_color: '#0f172a',
    lang: 'pt-BR',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
