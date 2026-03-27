import { ImageResponse } from 'next/og'
import { siteConfig } from '../data/site'

export const alt = `Portfolio de ${siteConfig.name}`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          padding: '56px',
          background:
            'radial-gradient(circle at top right, rgba(30, 64, 175, 0.45), transparent 35%), linear-gradient(135deg, #050816 0%, #0f172a 60%, #111827 100%)',
          color: '#f8fafc',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: '36px',
            padding: '48px',
            background: 'rgba(15, 23, 42, 0.72)',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div
              style={{
                display: 'flex',
                fontSize: 24,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#93c5fd',
              }}
            >
              Portfolio técnico
            </div>
            <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: '78%' }}>
              {siteConfig.name}
            </div>
            <div style={{ display: 'flex', fontSize: 30, color: '#cbd5e1', maxWidth: '72%', lineHeight: 1.4 }}>
              {siteConfig.focus}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', fontSize: 22, color: '#e2e8f0' }}>
                APIs, automações e aplicações web escaláveis
              </div>
              <div style={{ display: 'flex', fontSize: 20, color: '#94a3b8' }}>{siteConfig.url}</div>
            </div>
            <div
              style={{
                display: 'flex',
                padding: '16px 22px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#f8fafc',
                fontSize: 22,
              }}
            >
              {siteConfig.role}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  )
}
