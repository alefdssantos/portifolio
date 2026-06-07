import type { ReactNode } from 'react'

export type AppId = 'terminal' | 'projetos' | 'sobre' | 'contato'

export type AppDef = {
  title: string
  icon: ReactNode
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const APPS: Record<AppId, AppDef> = {
  terminal: {
    title: 'Terminal',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
        <rect x="3" y="4" width="18" height="16" />
        <path d="M7 9l3 3-3 3" />
        <path d="M13 15h4" />
      </svg>
    ),
  },
  projetos: {
    title: 'Projetos',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
        <rect x="3" y="4" width="18" height="16" />
        <path d="M3 9h18" />
        <path d="M8 4v5" />
      </svg>
    ),
  },
  sobre: {
    title: 'Sobre',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
      </svg>
    ),
  },
  contato: {
    title: 'Contato',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
        <rect x="3" y="5" width="18" height="14" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    ),
  },
}
