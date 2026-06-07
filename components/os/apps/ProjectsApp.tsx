'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { featuredProjects } from '../../../data/featured-projects'
import type { FeaturedProject, ProjectCategory } from '../../../data/featured-projects'

const CATEGORY_COLOR: Record<ProjectCategory, string> = {
  IA: '#9cc4ff',
  SaaS: '#5b8fd6',
  Automação: '#a78bfa',
  Web: '#38bdf8',
}

const STACK_COLORS: Record<string, string> = {
  TypeScript: '#3178c6', React: '#61dafb', 'Next.js': '#ffffff', 'Node.js': '#339933',
  MySQL: '#4479a1', PostgreSQL: '#4169e1', MongoDB: '#47a248', 'Tailwind CSS': '#38bdf8',
  Express: '#aaaaaa', 'Socket.io': '#ffffff', Redis: '#dc382d', BullMQ: '#dc382d',
  Docker: '#2496ed', Vercel: '#ffffff', Railway: '#8b5cf6', Supabase: '#3ecf8e',
  Playwright: '#45ba4b', JWT: '#f59e0b', CLI: '#a78bfa', Automação: '#a78bfa',
  'REST API': '#60a5fa', Fastify: '#ffffff', 'DeepSeek AI': '#60a5fa', 'Telegram API': '#2aabee',
  'OpenAI SDK': '#10a37f', 'WhatsApp API': '#25d366', 'Spotify API': '#1db954', AbacatePay: '#16a34a',
  LastLink: '#f43f5e', Grafana: '#f46800', Python: '#3776ab', 'WhatsApp Cloud API': '#25d366',
  'Tiny ERP': '#2563eb', 'Vercel Blob': '#ffffff', Puppeteer: '#40b5a4', Whisper: '#10a37f',
  'yt-dlp': '#ef4444', JavaScript: '#f7df1e', Swift: '#f05138', SwiftUI: '#2396f3',
  macOS: '#a3a3a3', Speech: '#a855f7',
}

function images(p: FeaturedProject) {
  if (p.images?.length) return p.images
  if (p.imageUrl) return [{ src: p.imageUrl, alt: p.imageAlt }]
  return []
}

function Badge({ tech }: { tech: string }) {
  const c = STACK_COLORS[tech] ?? '#71717a'
  return (
    <span className="border px-1.5 py-0.5 text-[10px]" style={{ color: c, borderColor: `${c}33`, backgroundColor: `${c}0d` }}>
      {tech}
    </span>
  )
}

function Frame({ src, alt, cli }: { src: string; alt: string; cli: boolean }) {
  return (
    <div className="overflow-hidden border border-[var(--line)] bg-[#0a0a0a]">
      <div className="flex items-center gap-1.5 border-b border-[var(--line)] bg-[var(--chrome)] px-2 py-1">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]/80" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]/80" />
        <span className="ml-1 truncate text-[9px] text-[var(--text-3)]">{cli ? '~ /bin/run' : 'localhost:3000'}</span>
      </div>
      <div className="relative h-40 bg-[#0a0a0a]">
        {cli ? (
          <Image src={src} alt={alt} fill className="object-contain p-6 opacity-85 transition-opacity group-hover:opacity-100" />
        ) : (
          <Image src={src} alt={alt} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
        )}
      </div>
    </div>
  )
}

const FILTERS: Array<'Todos' | ProjectCategory> = ['Todos', 'IA', 'SaaS', 'Automação', 'Web']

export default function ProjectsApp() {
  const [filter, setFilter] = useState<'Todos' | ProjectCategory>('Todos')
  const [box, setBox] = useState<{ p: FeaturedProject; i: number } | null>(null)

  const counts = useMemo(() => {
    const c: Record<string, number> = { Todos: featuredProjects.length }
    for (const p of featuredProjects) c[p.category] = (c[p.category] ?? 0) + 1
    return c
  }, [])

  const list = useMemo(
    () => (filter === 'Todos' ? featuredProjects : featuredProjects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <div className="flex h-full flex-col bg-[var(--win)]">
      {/* toolbar */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-[var(--line)] bg-[var(--chrome)] px-3 py-2 text-[12px]">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`border px-2.5 py-1 transition-colors ${
              filter === f
                ? 'border-[var(--blue)]/50 bg-[var(--blue)]/15 text-[var(--text)]'
                : 'border-[var(--line)] text-[var(--text-3)] hover:text-[var(--text-2)]'
            }`}
          >
            {f} <span className="text-[var(--text-3)]">{counts[f] ?? 0}</span>
          </button>
        ))}
      </div>

      {/* grid */}
      <div className="os-scroll grid flex-1 grid-cols-1 gap-3 overflow-auto p-3 md:grid-cols-2">
        {list.map((p) => {
          const imgs = images(p)
          const src = p.imageUrl ?? imgs[0]?.src
          const alt = p.imageAlt ?? p.title
          const cli = src?.endsWith('.svg') ?? false
          const cat = CATEGORY_COLOR[p.category]
          return (
            <article key={p.title} className="group flex flex-col border border-[var(--line)] bg-[var(--win)] p-2">
              {src && (
                <button className="relative cursor-zoom-in text-left" onClick={() => setBox({ p, i: 0 })} aria-label={`Ver ${p.title}`}>
                  <Frame src={src} alt={alt} cli={cli} />
                  <span
                    className="absolute left-2 top-8 border px-1.5 py-0.5 text-[10px] backdrop-blur-sm"
                    style={{ color: cat, borderColor: `${cat}40`, backgroundColor: `${cat}1a` }}
                  >
                    {p.category}
                  </span>
                  {p.demoUrl && (
                    <span className="absolute right-2 top-8 flex items-center gap-1 border border-emerald-400/40 bg-emerald-500/15 px-1.5 py-0.5 text-[10px] text-emerald-300 backdrop-blur-sm">
                      <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" /> live
                    </span>
                  )}
                  {imgs.length > 1 && (
                    <span className="absolute bottom-2 right-2 border border-[var(--line)] bg-black/60 px-1.5 py-0.5 text-[10px] text-[var(--text-2)]">
                      {imgs.length} fotos
                    </span>
                  )}
                </button>
              )}

              <div className="flex flex-1 flex-col gap-2 p-2">
                <h3 className="text-[16px] text-[var(--text)]">{p.title}</h3>
                <p className="text-[13px] leading-snug text-[var(--text-2)]">{p.summary}</p>
                <div className="flex flex-wrap gap-1">
                  {p.stack.slice(0, 5).map((t) => (
                    <Badge key={t} tech={t} />
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-2 pt-2">
                  {p.demoUrl ? (
                    <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="border border-[var(--blue)]/40 bg-[var(--blue)]/10 px-2.5 py-1 text-[11px] text-[var(--blue-ice)] hover:bg-[var(--blue)]/20">
                      ver ao vivo →
                    </a>
                  ) : (
                    <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="border border-[var(--line)] px-2.5 py-1 text-[11px] text-[var(--text-2)] hover:border-[var(--blue)] hover:text-[var(--text)]">
                      repositório
                    </a>
                  )}
                  {imgs.length > 1 && (
                    <button onClick={() => setBox({ p, i: 0 })} className="ml-auto border border-[var(--line)] px-2.5 py-1 text-[11px] text-[var(--text-3)] hover:text-[var(--text-2)]">
                      galeria
                    </button>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {box && <Lightbox p={box.p} start={box.i} onClose={() => setBox(null)} />}
    </div>
  )
}

function Lightbox({ p, start, onClose }: { p: FeaturedProject; start: number; onClose: () => void }) {
  const imgs = images(p)
  const [i, setI] = useState(start)
  const cur = imgs[i]
  const go = useCallback((d: number) => setI((x) => (x + d + imgs.length) % imgs.length), [imgs.length])

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [go, onClose])

  if (!cur) return null

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md" onClick={onClose}>
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-[var(--line)] bg-[var(--win)]" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full" style={{ aspectRatio: '16/9', background: '#0a0a0a' }}>
          <Image src={cur.src!} alt={cur.alt ?? p.title} fill className="object-contain" />
        </div>
        <div className="grid gap-3 border-t border-[var(--line)] p-4 sm:grid-cols-3">
          {[['Problema', p.problem], ['Meu papel', p.role], ['Impacto', p.impact]].map(([k, v]) => (
            <div key={k}>
              <p className="mb-1 text-[10px] uppercase tracking-widest text-[var(--blue-bright)]">{k}</p>
              <p className="text-[11px] leading-relaxed text-[var(--text-2)]">{v}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-[var(--line)] p-3">
          <div className="text-[13px] text-[var(--text)]">
            {p.title}
            {imgs.length > 1 && <span className="ml-2 text-[11px] text-[var(--text-3)]">{i + 1}/{imgs.length}</span>}
          </div>
          <div className="flex gap-1.5">
            {imgs.length > 1 && (
              <>
                <button onClick={() => go(-1)} className="h-7 w-7 border border-[var(--line)] text-[var(--text-2)] hover:border-[var(--blue)]" aria-label="Anterior">‹</button>
                <button onClick={() => go(1)} className="h-7 w-7 border border-[var(--line)] text-[var(--text-2)] hover:border-[var(--blue)]" aria-label="Próxima">›</button>
              </>
            )}
            <button onClick={onClose} className="h-7 w-7 border border-[var(--line)] text-[var(--text-2)] hover:border-[var(--blue)]" aria-label="Fechar">✕</button>
          </div>
        </div>
      </div>
    </div>
  )
}
