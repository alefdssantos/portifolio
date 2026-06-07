'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { siteConfig } from '../../../data/site'
import { featuredProjects } from '../../../data/featured-projects'
import type { AppId } from '../apps'

const PROMPT = (
  <>
    <span className="text-[var(--blue-bright)]">visitante</span>
    <span className="text-[var(--text-3)]">@</span>
    <span className="text-[var(--blue-ice)]">alefos</span>
    <span className="text-[var(--text-3)]">:~$</span>
  </>
)

const skills = [
  'Node.js', 'TypeScript', 'React', 'Next.js', 'Python', 'FastAPI',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Playwright',
]

type Entry = { id: number; cmd?: string; out: ReactNode }

let counter = 0

export default function TerminalApp({ onOpen }: { onOpen: (id: AppId) => void }) {
  const [entries, setEntries] = useState<Entry[]>([])
  const [value, setValue] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [hIdx, setHIdx] = useState(-1)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const push = (out: ReactNode, cmd?: string) =>
    setEntries((e) => [...e, { id: ++counter, cmd, out }])

  // welcome banner
  useEffect(() => {
    setEntries([
      {
        id: ++counter,
        out: (
          <div className="space-y-1">
            <pre className="text-[var(--blue-bright)] leading-[1.15] text-[12px] sm:text-[13px]">{`  _  _   ___ ___ ___
 /_\\| | | __| __/ __|
/ _ \\ |_| _|| _|\\__ \\
\\_/ \\_\\___|___|_| |___/`}</pre>
            <p className="text-[var(--text)]">{siteConfig.name} · Desenvolvedor Fullstack <span className="text-[var(--text-3)]">(foco backend)</span></p>
            <p className="text-[var(--text-2)]">
              Bem-vindo ao AlefOS. Digite <span className="text-[var(--blue-ice)]">help</span> para os comandos,
              ou <span className="text-[var(--blue-ice)]">⌘Space</span> / menu AlefOS.
            </p>
          </div>
        ),
      },
    ])
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [entries])

  const run = (raw: string) => {
    const cmd = raw.trim()
    if (!cmd) {
      push(null, '')
      return
    }
    const [name, ...rest] = cmd.toLowerCase().split(/\s+/)
    const arg = rest.join(' ')

    switch (name) {
      case 'help':
        push(
          <div className="grid grid-cols-[7rem_1fr] gap-x-3 gap-y-0.5 text-[var(--text-2)]">
            {[
              ['help', 'lista de comandos'],
              ['whoami', 'quem é o Alef'],
              ['sobre', 'abre o app Sobre'],
              ['skills', 'stack que eu uso'],
              ['projetos', 'abre o app Projetos'],
              ['contato', 'abre o app Contato'],
              ['stats', 'números rápidos'],
              ['social', 'links (gitlab, linkedin)'],
              ['clear', 'limpa o terminal'],
            ].map(([c, d]) => (
              <span key={c} className="contents">
                <span className="text-[var(--blue-ice)]">{c}</span>
                <span>{d}</span>
              </span>
            ))}
          </div>,
          cmd
        )
        break
      case 'whoami':
        push(
          <p className="text-[var(--text-2)]">
            {siteConfig.name}. Construo aplicações web completas, do backend ao produto final, com foco em{' '}
            <span className="text-[var(--text)]">lógica, arquitetura e dados reais</span>.
          </p>,
          cmd
        )
        break
      case 'sobre':
        push(<p className="text-[var(--text-2)]">abrindo <span className="text-[var(--blue-ice)]">Sobre.app</span>…</p>, cmd)
        onOpen('sobre')
        break
      case 'skills':
        push(
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[var(--text-2)]">
            {skills.map((s) => (
              <span key={s}>
                <span className="text-[var(--blue)]">▸</span> {s}
              </span>
            ))}
          </div>,
          cmd
        )
        break
      case 'projetos':
      case 'projects':
      case 'ls':
        push(
          <div className="text-[var(--text-2)]">
            <p className="mb-1 text-[var(--text-3)]">{featuredProjects.length} projetos em produção:</p>
            <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
              {featuredProjects.map((p) => (
                <span key={p.title}>
                  <span className="text-[var(--blue)]">drwx</span> {p.title}
                </span>
              ))}
            </div>
            <p className="mt-1">abrindo <span className="text-[var(--blue-ice)]">Projetos.app</span>…</p>
          </div>,
          cmd
        )
        onOpen('projetos')
        break
      case 'contato':
      case 'contact':
        push(<p className="text-[var(--text-2)]">abrindo <span className="text-[var(--blue-ice)]">Contato.app</span>…</p>, cmd)
        onOpen('contato')
        break
      case 'stats':
        push(
          <div className="text-[var(--text-2)]">
            <span className="text-[var(--text)]">4+</span> anos &nbsp;·&nbsp;
            <span className="text-[var(--text)]"> 20+</span> projetos &nbsp;·&nbsp;
            <span className="text-[var(--text)]"> 15+</span> tecnologias
          </div>,
          cmd
        )
        break
      case 'social':
        push(
          <div className="flex flex-col text-[var(--text-2)]">
            <a className="hover:text-[var(--blue-ice)]" href={siteConfig.gitlabUrl} target="_blank" rel="noopener noreferrer">→ gitlab.com/alefdssantos</a>
            <a className="hover:text-[var(--blue-ice)]" href={siteConfig.linkedInUrl} target="_blank" rel="noopener noreferrer">→ linkedin.com/in/alefs</a>
            <a className="hover:text-[var(--blue-ice)]" href={`mailto:${siteConfig.email}`}>→ {siteConfig.email}</a>
          </div>,
          cmd
        )
        break
      case 'sudo':
        push(<p className="text-[var(--text-2)]">nice try 😏. você já tem acesso de admin aqui.</p>, cmd)
        break
      case 'clear':
        setEntries([])
        return
      case 'date':
        push(<p className="text-[var(--text-2)]">{new Date().toString()}</p>, cmd)
        break
      default:
        push(
          <p className="text-[var(--text-2)]">
            comando não encontrado: <span className="text-red-400">{arg ? `${name} ${arg}` : name}</span>. digite{' '}
            <span className="text-[var(--blue-ice)]">help</span>.
          </p>,
          cmd
        )
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      run(value)
      if (value.trim()) setHistory((h) => [...h, value])
      setHIdx(-1)
      setValue('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHistory((h) => {
        if (!h.length) return h
        const ni = hIdx < 0 ? h.length - 1 : Math.max(0, hIdx - 1)
        setHIdx(ni)
        setValue(h[ni])
        return h
      })
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHistory((h) => {
        if (hIdx < 0) return h
        const ni = hIdx + 1
        if (ni >= h.length) {
          setHIdx(-1)
          setValue('')
        } else {
          setHIdx(ni)
          setValue(h[ni])
        }
        return h
      })
    }
  }

  return (
    <div
      ref={scrollRef}
      className="os-scroll h-full overflow-auto bg-transparent p-4 text-[15px] leading-relaxed sm:p-6 sm:text-[16px]"
      onClick={() => inputRef.current?.focus()}
    >
      {entries.map((e) => (
        <div key={e.id} className="mb-1.5">
          {e.cmd !== undefined && (
            <div className="flex gap-2">
              <span>{PROMPT}</span>
              <span className="text-[var(--text)]">{e.cmd}</span>
            </div>
          )}
          {e.out && <div className="mt-0.5">{e.out}</div>}
        </div>
      ))}

      <div className="flex items-center gap-2">
        <span>{PROMPT}</span>
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          aria-label="Entrada do terminal"
          className="flex-1 bg-transparent text-[var(--text)] caret-[var(--blue-ice)] outline-none"
          autoFocus
        />
      </div>
    </div>
  )
}
