'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Boot from './Boot'
import TopBar from './TopBar'
import OSWindow from './Window'
import MobileOS from './MobileOS'
import CodeRain from './CodeRain'
import CommandPalette, { type Command } from './CommandPalette'
import Hint from './Hint'
import TerminalApp from './apps/TerminalApp'
import ProjectsApp from './apps/ProjectsApp'
import AboutApp from './apps/AboutApp'
import ContactApp from './apps/ContactApp'
import { APPS, type AppId } from './apps'
import { siteConfig } from '../../data/site'

type Rect = { x: number; y: number; w: number; h: number }

type WinState = Rect & {
  open: boolean
  min: boolean
  max: boolean
  z: number
  prev?: Rect
}

const DEFAULT_SIZE: Record<AppId, { w: number; h: number }> = {
  terminal: { w: 660, h: 440 },
  projetos: { w: 900, h: 580 },
  sobre: { w: 580, h: 460 },
  contato: { w: 500, h: 440 },
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v))
}

export default function Desktop() {
  const [booted, setBooted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [ready, setReady] = useState(false)
  const [palette, setPalette] = useState(false)
  const zCounter = useRef(10)

  const [wins, setWins] = useState<Record<AppId, WinState>>(() => {
    const base = {} as Record<AppId, WinState>
    ;(Object.keys(DEFAULT_SIZE) as AppId[]).forEach((id) => {
      base[id] = { open: false, min: false, max: false, z: 0, x: 0, y: 0, ...DEFAULT_SIZE[id] }
    })
    return base
  })

  // viewport / mobile detection + initial window placement
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 820px)')
    const apply = () => setIsMobile(mq.matches)
    apply()
    mq.addEventListener('change', apply)

    const vw = window.innerWidth
    const vh = window.innerHeight
    setWins((prev) => {
      const next = { ...prev }
      const place: Array<[AppId, number, number]> = [
        ['terminal', 0.06, 0.16],
        ['projetos', 0.34, 0.1],
        ['sobre', 0.12, 0.4],
        ['contato', 0.45, 0.42],
      ]
      for (const [id, fx, fy] of place) {
        const w = Math.min(next[id].w, vw - 40)
        const h = Math.min(next[id].h, vh - 120)
        next[id] = { ...next[id], w, h, x: clamp(vw * fx, 12, vw - w - 12), y: clamp(vh * fy, 52, vh - h - 90) }
      }
      return next
    })
    setReady(true)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const focus = useCallback((id: AppId) => {
    setWins((prev) => ({ ...prev, [id]: { ...prev[id], z: ++zCounter.current, min: false } }))
  }, [])

  const open = useCallback((id: AppId) => {
    setWins((prev) => ({ ...prev, [id]: { ...prev[id], open: true, min: false, z: ++zCounter.current } }))
  }, [])

  const close = useCallback((id: AppId) => {
    setWins((prev) => ({ ...prev, [id]: { ...prev[id], open: false } }))
  }, [])

  const minimize = useCallback((id: AppId) => {
    setWins((prev) => ({ ...prev, [id]: { ...prev[id], min: true } }))
  }, [])

  const setGeom = useCallback((id: AppId, patch: Partial<Rect>) => {
    setWins((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }))
  }, [])

  const maximize = useCallback((id: AppId) => {
    setWins((prev) => {
      const w = prev[id]
      if (w.max && w.prev) {
        return { ...prev, [id]: { ...w, ...w.prev, max: false, prev: undefined, z: ++zCounter.current } }
      }
      const vw = window.innerWidth
      const vh = window.innerHeight
      return {
        ...prev,
        [id]: { ...w, prev: { x: w.x, y: w.y, w: w.w, h: w.h }, x: 8, y: 44, w: vw - 16, h: vh - 60, max: true, z: ++zCounter.current },
      }
    })
  }, [])

  // global shortcuts: ⌘Space / ⌘K toggle command palette
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey
      if (meta && (e.code === 'Space' || e.key.toLowerCase() === 'k')) {
        e.preventDefault()
        setPalette((p) => !p)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const commands: Command[] = [
    { id: 'app-terminal', group: 'app', label: 'Abrir Terminal', hint: '~/terminal', run: () => open('terminal') },
    { id: 'app-projetos', group: 'app', label: 'Abrir Projetos', hint: '~/projetos', run: () => open('projetos') },
    { id: 'app-sobre', group: 'app', label: 'Abrir Sobre', hint: '~/sobre', run: () => open('sobre') },
    { id: 'app-contato', group: 'app', label: 'Abrir Contato', hint: '~/contato', run: () => open('contato') },
    { id: 'link-gitlab', group: 'link', label: 'GitLab', hint: '↗', run: () => window.open(siteConfig.gitlabUrl, '_blank') },
    { id: 'link-linkedin', group: 'link', label: 'LinkedIn', hint: '↗', run: () => window.open(siteConfig.linkedInUrl, '_blank') },
    { id: 'link-email', group: 'link', label: 'Enviar e-mail', hint: siteConfig.email, run: () => window.open(`mailto:${siteConfig.email}`) },
  ]

  const renderApp = (id: AppId) => {
    switch (id) {
      case 'terminal':
        return <TerminalApp onOpen={open} />
      case 'projetos':
        return <ProjectsApp />
      case 'sobre':
        return <AboutApp onOpen={open} />
      case 'contato':
        return <ContactApp />
    }
  }

  const activeId = (Object.keys(wins) as AppId[])
    .filter((id) => wins[id].open && !wins[id].min)
    .sort((a, b) => wins[a].z - wins[b].z)
    .pop()

  const minimized = (Object.keys(wins) as AppId[]).filter((id) => wins[id].open && wins[id].min)

  if (isMobile) {
    return <MobileOS />
  }

  return (
    <div className="relative h-[100svh] w-screen overflow-hidden">
      <div className="os-wallpaper" />
      <div className="os-bg" />
      <CodeRain />
      <div className="os-grid" />
      <div className="os-scanline" />

      {!booted && <Boot onDone={() => setBooted(true)} />}

      {booted && (
        <>
          <TopBar
            activeTitle={activeId ? APPS[activeId].title : 'terminal'}
            onOpen={open}
            onOpenPalette={() => setPalette(true)}
            minimized={minimized}
            onRestore={open}
          />
          <CommandPalette open={palette} onClose={() => setPalette(false)} commands={commands} />

          {/* maximized terminal — the shell, fills below the top bar */}
          <div className="absolute inset-x-0 bottom-0 top-9 border-t border-[var(--line)] bg-[rgba(6,9,7,0.78)]">
            <TerminalApp onOpen={open} />
          </div>

          {/* floating app windows (above the terminal) */}
          {ready &&
            (Object.keys(wins) as AppId[]).map((id) => {
              if (id === 'terminal') return null
              const w = wins[id]
              if (!w.open || w.min) return null
              return (
                <OSWindow
                  key={id}
                  title={APPS[id].title}
                  state={w}
                  active={activeId === id}
                  onFocus={() => focus(id)}
                  onClose={() => close(id)}
                  onMinimize={() => minimize(id)}
                  onMaximize={() => maximize(id)}
                  onGeom={(patch) => setGeom(id, patch)}
                >
                  {renderApp(id)}
                </OSWindow>
              )
            })}

          <Hint />
        </>
      )}
    </div>
  )
}
