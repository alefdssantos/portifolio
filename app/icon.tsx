import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#0a0f0c',
          border: '3px solid #1a5638',
          color: '#e7f2ea',
          fontSize: 34,
          fontWeight: 800,
          fontFamily: 'monospace',
          letterSpacing: '-0.04em',
        }}
      >
        A<span style={{ color: '#5fcf95' }}>S</span>
      </div>
    ),
    size
  )
}
