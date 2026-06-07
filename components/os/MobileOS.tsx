'use client'

import { useEffect, useState } from 'react'
import { APPS, type AppId } from './apps'
import TerminalApp from './apps/TerminalApp'
import ProjectsApp from './apps/ProjectsApp'
import AboutApp from './apps/AboutApp'
import ContactApp from './apps/ContactApp'

export default function MobileOS() {
  const [active, setActive] = useState<AppId | null>(null)
  const [clock, setClock] = useState('')

  useEffect(() => {
    const tick = () => setClock(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }))
    tick()
    const t = setInterval(tick, 15000)
    return () => clearInterval(t)
  }, [])

  const render = (id: AppId) => {
    switch (id) {
      case 'terminal': return <TerminalApp onOpen={setActive} />
      case 'projetos': return <ProjectsApp />
      case 'sobre': return <AboutApp onOpen={setActive} />
      case 'contato': return <ContactApp />
    }
  }

  return (
    <div className="relative flex h-[100svh] flex-col overflow-hidden">
      <div className="os-wallpaper" />
      <div className="os-bg" />
      <div className="os-grid" />

      {/* status bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-[var(--line)] bg-[rgba(6,9,7,0.8)] px-4 py-2 text-[12px] backdrop-blur-md">
        <span className="flex items-center gap-1.5 font-semibold">
          <span className="h-2.5 w-2.5 bg-[var(--blue-bright)]" />
          AlefOS
        </span>
        <span className="tabular-nums text-[var(--text-2)]">{clock || '··'}</span>
      </div>

      {active === null ? (
        <div className="relative z-10 flex-1 overflow-auto px-5 py-7">
          <p className="text-[12px] text-[var(--text-3)]">$ whoami</p>
          <h1 className="mt-1 text-3xl text-[var(--text)]">
            Alef <span className="text-[var(--blue-ice)]">Santos</span>
          </h1>
          <p className="mt-2 max-w-sm text-[13px] text-[var(--text-2)]">
            Desenvolvedor Fullstack com foco em backend. Apps abaixo, toque pra abrir.
          </p>

          <div className="mt-7 grid grid-cols-3 gap-4">
            {(Object.keys(APPS) as AppId[]).map((id) => (
              <button key={id} onClick={() => setActive(id)} className="flex flex-col items-center gap-2">
                <span className="flex h-16 w-16 items-center justify-center border border-[var(--line)] bg-[var(--chrome)] text-[var(--blue-ice)]">
                  {APPS[id].icon}
                </span>
                <span className="text-[11px] text-[var(--text-2)]">{APPS[id].title}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex flex-1 flex-col overflow-hidden">
          <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--chrome)] px-3 py-2 text-[13px]">
            <button onClick={() => setActive(null)} className="border border-[var(--line)] px-2 py-1 text-[var(--text-2)]" aria-label="Voltar">
              ←
            </button>
            <span className="text-[var(--text-2)]">
              <span className="text-[var(--text-3)]">~/</span>
              {APPS[active].title.toLowerCase()}
            </span>
          </div>
          <div className="os-scroll flex-1 overflow-auto">{render(active)}</div>
        </div>
      )}
    </div>
  )
}
