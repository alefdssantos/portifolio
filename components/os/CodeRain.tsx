'use client'

import { useEffect, useRef } from 'react'

const GLYPHS = '01{}[]()<>=;:+-*/&|!?$#@const let=>fnreturnawaitasyncimportexport.{}'

export default function CodeRain() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let cols = 0
    let drops: number[] = []
    const font = 14

    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.floor(window.innerWidth / font)
      drops = Array.from({ length: cols }, () => Math.floor((Math.random() * window.innerHeight) / font))
    }
    resize()

    let raf = 0
    let last = 0

    const draw = (t: number) => {
      // throttle ~18fps for subtle, cheap motion
      if (t - last < 55) {
        raf = requestAnimationFrame(draw)
        return
      }
      last = t

      ctx.fillStyle = 'rgba(5, 8, 6, 0.16)'
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.font = `${font}px "Iosevka Charon Mono", monospace`

      for (let i = 0; i < cols; i++) {
        const ch = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        const x = i * font
        const y = drops[i] * font
        // leading glyph brighter
        ctx.fillStyle = Math.random() > 0.97 ? 'rgba(143, 227, 173, 0.5)' : 'rgba(47, 158, 99, 0.3)'
        ctx.fillText(ch, x, y)

        if (y > window.innerHeight && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
      raf = requestAnimationFrame(draw)
    }

    if (reduce) {
      // single static pass
      ctx.font = `${font}px "Iosevka Charon Mono", monospace`
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < drops[i]; j++) {
          ctx.fillStyle = 'rgba(47, 158, 99, 0.12)'
          ctx.fillText(GLYPHS[Math.floor(Math.random() * GLYPHS.length)], i * font, j * font)
        }
      }
    } else {
      raf = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 opacity-[0.5]" />
}
