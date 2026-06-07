'use client'

import { useEffect } from 'react'
import AsMark from './AsMark'

const lines = [
  'AlefOS v4.0 booting...',
  '[ ok ] mounting /dev/skills',
  '[ ok ] loading node · typescript · postgres',
  '[ ok ] starting window manager',
  '[ ok ] ready',
]

export default function Boot({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1400)
    const skip = () => onDone()
    window.addEventListener('keydown', skip)
    window.addEventListener('pointerdown', skip)
    return () => {
      clearTimeout(t)
      window.removeEventListener('keydown', skip)
      window.removeEventListener('pointerdown', skip)
    }
  }, [onDone])

  return (
    <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg)] text-[13px]">
      <div className="w-[min(460px,86vw)]">
        <div className="mb-5 flex flex-col items-center gap-3 text-center">
          <AsMark className="h-11 w-11 text-xl" />
          <span className="text-2xl font-semibold tracking-tight text-[var(--text)]">
            Alef<span className="text-[var(--blue-bright)]">OS</span>
          </span>
        </div>
        <div className="space-y-1 text-[var(--text-2)]">
          {lines.map((l, i) => (
            <div key={l} className="os-fade" style={{ animationDelay: `${i * 0.16}s`, opacity: 0 }}>
              <span className="text-[var(--text-3)]">$</span> {l}
            </div>
          ))}
        </div>
        <div className="mt-5 h-1 w-full bg-[var(--line)]">
          <div className="boot-bar h-full bg-[var(--blue)]" />
        </div>
        <p className="mt-3 text-center text-[11px] text-[var(--text-3)]">clique para entrar</p>
      </div>
    </div>
  )
}
