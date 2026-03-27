'use client'

import dynamic from 'next/dynamic'

const ParticlesLayer = dynamic(() => import('./ParticlesLayer'), {
  ssr: false,
  loading: () => null,
})

export default function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--background)]" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: `
            radial-gradient(circle at 18% 18%, var(--accent) 0%, transparent 28%),
            radial-gradient(circle at 82% 22%, var(--accent-light) 0%, transparent 26%),
            linear-gradient(180deg, transparent 0%, var(--background) 100%)
          `,
        }}
      />
      <div className="pointer-events-auto absolute inset-0">
        <ParticlesLayer />
      </div>
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(circle at center, transparent 0%, color-mix(in srgb, var(--background) 30%, transparent) 74%, var(--background) 100%)',
        }}
      />
    </div>
  )
}
