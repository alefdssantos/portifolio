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
          backgroundColor: '#07080b',
          backgroundImage:
            'radial-gradient(circle at 80% 85%, rgba(59,108,181,0.55), transparent 45%), radial-gradient(circle at 12% 8%, rgba(13,42,84,0.6), transparent 40%)',
          color: '#f4f5f8',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '36px',
            padding: '52px',
            backgroundColor: 'rgba(10,12,17,0.55)',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.14)',
                backgroundImage: 'linear-gradient(135deg, rgba(26,74,138,0.5), rgba(13,42,84,0.3))',
                fontSize: 26,
                fontWeight: 600,
              }}
            >
              AS
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#9cc4ff',
              }}
            >
              Desenvolvedor Fullstack · Backend
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', fontSize: 116, fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.03em' }}>
              {siteConfig.name}
            </div>
            <div style={{ display: 'flex', fontSize: 30, color: '#aab1c0', maxWidth: '78%', lineHeight: 1.4 }}>
              {siteConfig.focus}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '40px' }}>
              {[
                ['4+', 'anos'],
                ['20+', 'projetos'],
                ['15+', 'tecnologias'],
              ].map(([v, l]) => (
                <div key={l} style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: 40, fontWeight: 700 }}>{v}</span>
                  <span style={{ fontSize: 20, color: '#707682' }}>{l}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', fontSize: 20, color: '#707682' }}>{siteConfig.url.replace('https://', '')}</div>
          </div>
        </div>
      </div>
    ),
    size
  )
}
