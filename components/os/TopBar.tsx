'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '../../data/site'
import { APPS, type AppId } from './apps'
import AsMark from './AsMark'

type MenuItem =
  | { kind: 'item'; label: string; hint?: string; run: () => void }
  | { kind: 'sep' }

export default function TopBar({
  activeTitle,
  onOpen,
  onOpenPalette,
  minimized,
  onRestore,
}: {
  activeTitle: string
  onOpen: (id: AppId) => void
  onOpenPalette: () => void
  minimized: AppId[]
  onRestore: (id: AppId) => void
}) {
  const [clock, setClock] = useState('')
  const [menu, setMenu] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tick = () => {
      const d = new Date()
      const day = d.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' })
      const time = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      setClock(`${day} ${time}`)
    }
    tick()
    const t = setInterval(tick, 15000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (!menu) return
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setMenu(false)
    }
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(false)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('keydown', onEsc)
    return () => {
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('keydown', onEsc)
    }
  }, [menu])

  const go = (fn: () => void) => () => {
    fn()
    setMenu(false)
  }

  const items: MenuItem[] = [
    { kind: 'item', label: 'Sobre o AlefOS', run: go(() => onOpen('sobre')) },
    { kind: 'sep' },
    { kind: 'item', label: 'Abrir Terminal', run: go(() => onOpen('terminal')) },
    { kind: 'item', label: 'Abrir Projetos', run: go(() => onOpen('projetos')) },
    { kind: 'item', label: 'Abrir Sobre', run: go(() => onOpen('sobre')) },
    { kind: 'item', label: 'Abrir Contato', run: go(() => onOpen('contato')) },
    { kind: 'sep' },
    { kind: 'item', label: 'Comandos…', hint: '⌘Space', run: go(onOpenPalette) },
    { kind: 'sep' },
    { kind: 'item', label: 'GitLab ↗', run: go(() => window.open(siteConfig.gitlabUrl, '_blank')) },
    { kind: 'item', label: 'LinkedIn ↗', run: go(() => window.open(siteConfig.linkedInUrl, '_blank')) },
  ]

  return (
    <div className="absolute inset-x-0 top-0 z-[60] flex h-9 items-center justify-between border-b border-[var(--line)] bg-[rgba(6,9,7,0.72)] px-2 text-[12px] backdrop-blur-md">
      <div className="flex items-center gap-1.5">
        <div ref={wrapRef} className="relative">
          <button
            onClick={() => setMenu((m) => !m)}
            className={`flex items-center gap-2 px-1.5 py-1 font-semibold text-[var(--text)] transition-colors ${menu ? 'bg-[var(--blue)]/20' : 'hover:bg-white/[0.06]'}`}
            aria-haspopup="menu"
            aria-expanded={menu}
          >
            <AsMark className="h-5 w-5 text-[11px]" />
            AlefOS
          </button>

          {menu && (
            <div
              role="menu"
              className="os-win-in absolute left-0 top-[calc(100%+4px)] min-w-[220px] border border-[var(--line)] bg-[rgba(7,11,9,0.97)] py-1 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md"
            >
              {items.map((it, i) =>
                it.kind === 'sep' ? (
                  <div key={`s${i}`} className="my-1 h-px bg-[var(--line)]" />
                ) : (
                  <button
                    key={it.label}
                    role="menuitem"
                    onClick={it.run}
                    className="flex w-full items-center justify-between gap-6 px-3 py-1.5 text-left text-[var(--text-2)] transition-colors hover:bg-[var(--blue)]/15 hover:text-[var(--text)]"
                  >
                    <span>{it.label}</span>
                    {it.hint && <span className="text-[11px] text-[var(--text-3)]">{it.hint}</span>}
                  </button>
                )
              )}
            </div>
          )}
        </div>
        <span className="hidden px-1 text-[var(--text-3)] sm:inline">{activeTitle}</span>

        {/* minimized windows tray */}
        {minimized.length > 0 && (
          <div className="ml-1 flex items-center gap-1.5 border-l border-[var(--line)] pl-2">
            {minimized.map((id) => (
              <button
                key={id}
                onClick={() => onRestore(id)}
                title={`Restaurar ${APPS[id].title}`}
                className="flex items-center gap-1.5 border border-[var(--line)] bg-[var(--chrome)] px-2 py-0.5 text-[11px] text-[var(--text-2)] transition-colors hover:border-[var(--blue)] hover:text-[var(--text)]"
              >
                <span className="h-1.5 w-1.5 bg-[var(--blue)]" />
                {APPS[id].title.toLowerCase()}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 text-[var(--text-2)]">
        <button
          onClick={onOpenPalette}
          className="hidden items-center gap-1.5 border border-[var(--line)] px-2 py-0.5 text-[11px] transition-colors hover:border-[var(--blue)] hover:text-[var(--text)] sm:flex"
          aria-label="Abrir menu de comandos"
        >
          <span className="text-[var(--blue-bright)]">⌘</span>
          <span>Space</span>
        </button>
        <span className="hidden items-center gap-1.5 sm:flex">
          <span className="h-1.5 w-1.5 animate-pulse bg-emerald-400" />
          online
        </span>
        <span className="tabular-nums">{clock || '··'}</span>
      </div>
    </div>
  )
}
