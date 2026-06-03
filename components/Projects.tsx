'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { featuredProjects } from '../data/featured-projects'
import type { FeaturedProject } from '../data/featured-projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

/* ─── helpers ─────────────────────────────────────────────────────────────── */

function getRepositoryMeta(url: string) {
  if (url.includes('gitlab.com')) {
    return {
      label: 'GitLab',
      color: '#fc6d26',
      icon: (
        <svg className="h-3.5 w-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.845.904c-.435 0-.82.28-.955.692C2.639 5.449 1.246 9.728.07 13.335a1.437 1.437 0 0 0 .522 1.607l11.071 8.045c.2.145.472.144.67-.004l11.073-8.04a1.436 1.436 0 0 0 .522-1.61c-1.285-3.942-2.683-8.256-3.817-11.746a1.004 1.004 0 0 0-.957-.684.987.987 0 0 0-.949.69l-2.405 7.408H8.203l-2.41-7.408a.987.987 0 0 0-.942-.69h-.006z" />
        </svg>
      ),
    }
  }
  return {
    label: 'GitHub',
    color: '#ffffff',
    icon: (
      <svg className="h-3.5 w-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  }
}

function getProjectImages(project: FeaturedProject) {
  if (project.images?.length) return project.images
  if (project.imageUrl) return [{ src: project.imageUrl, alt: project.imageAlt }]
  return []
}

function isCLI(project: FeaturedProject) {
  const imgs = getProjectImages(project)
  return imgs.length > 0 && imgs[0].src?.endsWith('.svg')
}

/* ─── stack badge ─────────────────────────────────────────────────────────── */

const STACK_COLORS: Record<string, string> = {
  'TypeScript':   '#3178c6',
  'React':        '#61dafb',
  'Next.js':      '#ffffff',
  'Node.js':      '#339933',
  'MySQL':        '#4479a1',
  'PostgreSQL':   '#4169e1',
  'MongoDB':      '#47a248',
  'Tailwind CSS': '#38bdf8',
  'Express':      '#aaaaaa',
  'Socket.io':    '#ffffff',
  'Redis':        '#dc382d',
  'BullMQ':       '#dc382d',
  'Docker':       '#2496ed',
  'Vercel':       '#ffffff',
  'Railway':      '#8b5cf6',
  'Supabase':     '#3ecf8e',
  'Playwright':   '#45ba4b',
  'JWT':          '#f59e0b',
  'CLI':          '#a78bfa',
  'Automação':    '#a78bfa',
  'REST API':     '#60a5fa',
  'Fastify':      '#ffffff',
  'Drizzle ORM':  '#c5f74f',
  'DeepSeek AI':  '#60a5fa',
  'Telegram API': '#2aabee',
  'OpenAI SDK':   '#10a37f',
  'WhatsApp API': '#25d366',
  'Mercado Pago': '#009ee3',
  'Spotify API':  '#1db954',
  'Drizzle':      '#c5f74f',
  'AbacatePay':   '#16a34a',
  'LastLink':     '#f43f5e',
  'Grafana':      '#f46800',
}

function StackBadge({ tech }: { tech: string }) {
  const color = STACK_COLORS[tech] ?? '#71717a'
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono border"
      style={{
        color,
        borderColor: `${color}33`,
        backgroundColor: `${color}0d`,
      }}
    >
      {tech}
    </span>
  )
}

/* ─── project card ────────────────────────────────────────────────────────── */

type CardProps = {
  project: FeaturedProject
  index: number
  featured?: boolean
  onImageClick: (project: FeaturedProject, imgIdx: number) => void
}

function ProjectCard({ project, index, featured = false, onImageClick }: CardProps) {
  const images = getProjectImages(project)
  const thumbnailSrc = project.imageUrl ?? images[0]?.src
  const thumbnailAlt = project.imageAlt ?? images[0]?.alt ?? project.title
  const cli = thumbnailSrc?.endsWith('.svg') ?? false
  const repo = getRepositoryMeta(project.repoUrl)
  const num = String(index + 1).padStart(2, '0')

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border border-zinc-800/70 bg-zinc-900/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-[#3b6cb5]/40 hover:bg-zinc-900/60`}
      style={{ boxShadow: '0 0 0 0 rgba(59,108,181,0)' }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px -12px rgba(59,108,181,0.25)'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 rgba(59,108,181,0)'
      }}
    >
      {/* ── thumbnail ── */}
      <div
        className={`relative overflow-hidden bg-zinc-800/60 cursor-zoom-in ${featured ? 'h-72 md:h-80' : 'h-52'}`}
        onClick={() => images.length > 0 && onImageClick(project, 0)}
        role="button"
        tabIndex={0}
        aria-label={`Ver screenshots de ${project.title}`}
        onKeyDown={e => e.key === 'Enter' && images.length > 0 && onImageClick(project, 0)}
      >
        {thumbnailSrc ? (
          cli ? (
            <div className="flex items-center justify-center h-full p-8">
              <Image
                src={thumbnailSrc}
                alt={thumbnailAlt}
                fill
                className="object-contain p-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ) : (
            <Image
              src={thumbnailSrc}
              alt={thumbnailAlt}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          )
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-3 text-zinc-600">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-mono tracking-widest uppercase">CLI Tool</span>
          </div>
        )}

        {/* gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-70 pointer-events-none" />

        {/* image count badge */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-zinc-400 text-xs font-mono border border-zinc-700/50">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            {images.length}
          </div>
        )}

        {/* live badge */}
        {project.demoUrl && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#3b6cb5]/20 border border-[#3b6cb5]/40 text-[#3b6cb5] text-xs font-mono backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b6cb5] animate-pulse" />
            live
          </div>
        )}
      </div>

      {/* ── body ── */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono text-zinc-600 tracking-widest tabular-nums">
                {num}
              </span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>
            <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
          </div>
        </div>

        {/* summary */}
        <p className="text-sm text-zinc-400 leading-relaxed">{project.summary}</p>

        {/* highlights */}
        {project.highlights.length > 0 && (
          <ul className="flex flex-col gap-1.5">
            {project.highlights.map(item => (
              <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-zinc-300">
                <span className="mt-[3px] text-[#3b6cb5] shrink-0" aria-hidden="true">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map(tech => (
            <StackBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* spacer */}
        <div className="flex-1" />

        {/* actions */}
        <div className="flex items-center gap-2 pt-2 border-t border-zinc-800/60">
          {!project.demoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-200"
              style={{
                color: repo.color,
                borderColor: `${repo.color}33`,
                backgroundColor: `${repo.color}0d`,
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = `${repo.color}1a`
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = `${repo.color}0d`
              }}
            >
              {repo.icon}
              {repo.label}
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#3b6cb5] text-white hover:bg-[#2d5a9e] transition-colors duration-200"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver ao vivo
            </a>
          )}

          {images.length > 1 && (
            <button
              type="button"
              onClick={() => onImageClick(project, 0)}
              className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-500 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
              {images.length} fotos
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

/* ─── lightbox ────────────────────────────────────────────────────────────── */

type LightboxState = {
  project: FeaturedProject
  imageIndex: number
}

function Lightbox({ state, onClose }: { state: LightboxState; onClose: () => void }) {
  const images = getProjectImages(state.project)
  const [idx, setIdx] = useState(state.imageIndex)
  const current = images[idx]

  const go = useCallback(
    (dir: number) => setIdx(i => (i + dir + images.length) % images.length),
    [images.length]
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [go, onClose])

  if (!current) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] overflow-y-auto rounded-2xl overflow-hidden border border-zinc-700/60 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* image */}
        <div className="relative w-full" style={{ aspectRatio: '16/9', background: '#0a0a0a' }}>
          <Image
            src={current.src!}
            alt={current.alt ?? state.project.title}
            fill
            className="object-contain"
          />
        </div>

        {/* details */}
        <div className="grid gap-4 sm:grid-cols-3 px-5 pt-4 bg-zinc-900/95 border-t border-zinc-800">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 mb-1.5">Problema</p>
            <p className="text-xs text-zinc-400 leading-relaxed">{state.project.problem}</p>
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 mb-1.5">Meu papel</p>
            <p className="text-xs text-zinc-400 leading-relaxed">{state.project.role}</p>
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 mb-1.5">Impacto</p>
            <p className="text-xs text-zinc-400 leading-relaxed">{state.project.impact}</p>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-zinc-900/95">
          <div>
            <p className="text-sm font-bold text-white">{state.project.title}</p>
            {images.length > 1 && (
              <p className="text-xs text-zinc-500 font-mono mt-0.5">
                {idx + 1} / {images.length}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {images.length > 1 && (
              <>
                <button
                  onClick={() => go(-1)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                  aria-label="Anterior"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => go(1)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                  aria-label="Próxima"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors ml-1"
              aria-label="Fechar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* dot nav */}
        {images.length > 1 && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === idx ? 'bg-white scale-125' : 'bg-white/30'}`}
                aria-label={`Imagem ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── section ─────────────────────────────────────────────────────────────── */

export default function Projects() {
  const sectionRef = useScrollReveal<HTMLElement>()
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const openLightbox = useCallback((project: FeaturedProject, imageIndex: number) => {
    const images = getProjectImages(project)
    if (images.length === 0) return
    setLightbox({ project, imageIndex })
  }, [])

  const [featured, ...rest] = featuredProjects

  return (
    <section ref={sectionRef} id="projetos" className="relative py-24 md:py-32">
      {/* ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #3b6cb5 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* heading */}
        <div className="scroll-reveal mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-mono text-zinc-600 tracking-[0.3em] uppercase">
              trabalhos selecionados
            </span>
            <div className="h-px flex-1 bg-zinc-800 max-w-xs" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-white to-zinc-600 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-zinc-500 text-base mt-3 max-w-md">
            {featuredProjects.length} projetos — do backend ao produto final.
          </p>
        </div>

        {/* featured project — full width */}
        {featured && (
          <div className="mb-6">
            <ProjectCard
              project={featured}
              index={0}
              featured
              onImageClick={openLightbox}
            />
          </div>
        )}

        {/* grid — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i + 1}
              onImageClick={openLightbox}
            />
          ))}
        </div>

        {/* footer note */}
        <div className="mt-12 flex items-center gap-3 text-xs font-mono text-zinc-700">
          <div className="h-px flex-1 bg-zinc-800/60" />
          <span>gitlab.com/diordan</span>
          <div className="h-px flex-1 bg-zinc-800/60" />
        </div>
      </div>

      {/* lightbox */}
      {lightbox && (
        <Lightbox state={lightbox} onClose={() => setLightbox(null)} />
      )}
    </section>
  )
}
