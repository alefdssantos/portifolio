import type { MetadataRoute } from 'next'
import { siteConfig } from '../data/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} | Portfolio`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#07080b',
    theme_color: '#07080b',
    lang: 'pt-BR',
    icons: [
      {
        src: '/icon',
        sizes: '64x64',
        type: 'image/png',
      },
    ],
  }
}
