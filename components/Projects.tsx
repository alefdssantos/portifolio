'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { featuredProjects } from '../data/featured-projects'
import type { FeaturedProject } from '../data/featured-projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

const AUTO_ADVANCE_MS = 6800

function getRepositoryMeta(url: string) {
  if (url.includes('gitlab.com')) {
    return {
      label: 'GitLab',
      className:
        'border-[#fc6d26]/40 bg-[#fc6d26]/10 text-[#fc6d26] hover:bg-[#fc6d26]/18 hover:border-[#fc6d26]/70',
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.845.904c-.435 0-.82.28-.955.692C2.639 5.449 1.246 9.728.07 13.335a1.437 1.437 0 0 0 .522 1.607l11.071 8.045c.2.145.472.144.67-.004l11.073-8.04a1.436 1.436 0 0 0 .522-1.61c-1.285-3.942-2.683-8.256-3.817-11.746a1.004 1.004 0 0 0-.957-.684.987.987 0 0 0-.949.69l-2.405 7.408H8.203l-2.41-7.408a.987.987 0 0 0-.942-.69h-.006z" />
        </svg>
      ),
    }
  }

  return {
    label: 'GitHub',
    className:
      'border-white/20 bg-white/8 text-white hover:bg-white/14 hover:border-white/35',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  }
}

function TechIcon({ tech }: { tech: string }) {
  const commonClass = 'h-3.5 w-3.5 shrink-0'

  switch (tech) {
    case 'TypeScript':
      return (
        <svg viewBox="0 0 24 24" className={`${commonClass} text-[#3178c6]`} fill="currentColor" aria-hidden="true">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
        </svg>
      )
    case 'Node.js':
      return (
        <svg viewBox="0 0 24 24" className={`${commonClass} text-[#339933]`} fill="currentColor" aria-hidden="true">
          <path d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.049-.139.145-.139.241v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603L11.075.236c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.28.163-.599.247-.925.247z" />
        </svg>
      )
    case 'React':
      return (
        <svg viewBox="0 0 24 24" className={`${commonClass} text-[#61dafb]`} fill="currentColor" aria-hidden="true">
          <path d="M12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
          <path d="M12 5.46c1.92 0 3.68.27 5.05.73 1.67.56 2.77 1.38 3.09 2.31.33.97-.11 2.19-1.08 3.47-.26.35-.56.71-.91 1.06.35.35.65.71.91 1.06.97 1.28 1.41 2.5 1.08 3.47-.32.93-1.42 1.75-3.09 2.31-1.37.46-3.13.73-5.05.73-1.92 0-3.68-.27-5.05-.73-1.67-.56-2.77-1.38-3.09-2.31-.33-.97.11-2.19 1.08-3.47.26-.35.56-.71.91-1.06-.35-.35-.65-.71-.91-1.06-.97-1.28-1.41-2.5-1.08-3.47.32-.93 1.42-1.75 3.09-2.31 1.37-.46 3.13-.73 5.05-.73Zm0 1.53c-1.73 0-3.29.24-4.56.67-1.12.37-1.87.87-2.04 1.36-.19.55.15 1.39.86 2.33.19.26.42.52.67.78 1.05-.84 2.31-1.59 3.69-2.2.23-1.47.58-2.79 1.02-3.86-.22-.01-.43-.02-.64-.02Zm1.27.07c.42 1 .75 2.24.98 3.63 1.47.62 2.8 1.4 3.9 2.28.25-.26.48-.52.67-.78.71-.94 1.05-1.78.86-2.33-.17-.49-.92-.99-2.04-1.36-1.33-.45-2.98-.69-4.81-.67.15.39.3.8.44 1.23ZM8.35 12c.83.61 1.77 1.15 2.79 1.6-.14.95-.31 1.85-.53 2.68-.8-.36-1.53-.77-2.17-1.22-.65-.46-1.23-.93-1.72-1.42.49-.49 1.07-.96 1.63-1.39Zm7.3 0c.56.43 1.14.9 1.63 1.39-.49.49-1.07.96-1.72 1.42-.64.45-1.37.86-2.17 1.22-.22-.83-.39-1.73-.53-2.68 1.02-.45 1.96-.99 2.79-1.6Zm-3.65-1.47c-.82.35-1.58.78-2.27 1.27.69.49 1.45.92 2.27 1.27.82-.35 1.58-.78 2.27-1.27-.69-.49-1.45-.92-2.27-1.27Zm-3.49 4.54c.72.51 1.52.97 2.38 1.35-.28 1.23-.66 2.3-1.12 3.14-1.25-.13-2.37-.37-3.28-.67-1.12-.37-1.87-.87-2.04-1.36-.19-.55.15-1.39.86-2.33.19-.26.42-.52.67-.78.76.7 1.61 1.26 2.53 1.65Zm7-0c.92-.39 1.77-.95 2.53-1.65.25.26.48.52.67.78.71.94 1.05 1.78.86 2.33-.17.49-.92.99-2.04 1.36-.91.3-2.03.54-3.28.67-.46-.84-.84-1.91-1.12-3.14.86-.38 1.66-.84 2.38-1.35ZM12 16.8c-.63 0-1.27-.08-1.9-.23.24 1.04.55 1.93.92 2.62.38.72.75 1.08.98 1.08.23 0 .6-.36.98-1.08.37-.69.68-1.58.92-2.62-.63.15-1.27.23-1.9.23Zm0-9.07c-.23 0-.6.36-.98 1.08-.35.67-.65 1.52-.89 2.52.61-.14 1.23-.21 1.87-.21.64 0 1.26.07 1.87.21-.24-1-.54-1.85-.89-2.52-.38-.72-.75-1.08-.98-1.08Z" />
        </svg>
      )
    case 'Next.js':
      return (
        <svg viewBox="0 0 24 24" className={`${commonClass} text-white`} fill="currentColor" aria-hidden="true">
          <path d="M18.36 20.64c-1.73 1.38-3.93 2.21-6.36 2.21C6.48 22.85 2 18.37 2 12.85S6.48 2.85 12 2.85s10 4.48 10 10c0 2.43-.83 4.63-2.21 6.36l-7.62-9.8v7.41h-1.58V7.34h1.71l8.06 10.37Z" />
        </svg>
      )
    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 24 24" className={`${commonClass} text-[#38bdf8]`} fill="currentColor" aria-hidden="true">
          <path d="M12 6.5c-2.667 0-4.333 1.333-5 4 1-.667 1.917-.917 2.75-.75.475.095 1.015.37 1.617.823l.98.746c1.602 1.2 3.452 1.45 5.553.75 2.667-1 4.333-3 5-6-1 .667-1.917.917-2.75.75-.475-.095-1.015-.37-1.617-.823l-.98-.746C16.951 4.05 15.101 3.8 13 4.5c-.4.133-.734.3-1 .5Zm-5 6c-2.667 0-4.333 1.333-5 4 1-.667 1.917-.917 2.75-.75.475.095 1.015.37 1.617.823l.98.746c1.602 1.2 3.452 1.45 5.553.75 2.667-1 4.333-3 5-6-1 .667-1.917.917-2.75.75-.475-.095-1.015-.37-1.617-.823l-.98-.746c-1.602-1.2-3.452-1.45-5.553-.75-.4.133-.734.3-1 .5Z" />
        </svg>
      )
    case 'Express':
      return (
        <svg viewBox="0 0 24 24" className={`${commonClass} text-zinc-300`} fill="currentColor" aria-hidden="true">
          <path d="M2 12c0-5.523 4.477-10 10-10 3.787 0 7.083 2.104 8.776 5.206h-2.171A8 8 0 1 0 20 12h2c0 5.523-4.477 10-10 10S2 17.523 2 12Zm5.5-.75h9v1.5h-9v-1.5Z" />
        </svg>
      )
    case 'MySQL':
      return (
        <svg viewBox="0 0 24 24" className={`${commonClass} text-[#4479a1]`} fill="currentColor" aria-hidden="true">
          <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 0 0-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.063h1.095c.242 2.015.384 3.86.428 5.53z" />
        </svg>
      )
    case 'MongoDB':
      return (
        <svg viewBox="0 0 24 24" className={`${commonClass} text-[#47a248]`} fill="currentColor" aria-hidden="true">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218z" />
        </svg>
      )
    case 'REST API':
    case 'APIs':
      return (
        <svg viewBox="0 0 24 24" className={`${commonClass} text-[#60a5fa]`} fill="none" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 7h14M5 12h14M5 17h14" />
        </svg>
      )
    case 'JWT':
      return (
        <svg viewBox="0 0 24 24" className={`${commonClass} text-[#f59e0b]`} fill="currentColor" aria-hidden="true">
          <path d="M12 2 4 6v6c0 5.05 3.41 9.74 8 11 4.59-1.26 8-5.95 8-11V6l-8-4Zm0 4.2 4.8 2.4v3.27c0 3.7-2.3 7.2-4.8 8.18-2.5-.98-4.8-4.48-4.8-8.18V8.6L12 6.2Z" />
        </svg>
      )
    case 'Automação':
      return (
        <svg viewBox="0 0 24 24" className={`${commonClass} text-[#a78bfa]`} fill="currentColor" aria-hidden="true">
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className={`${commonClass} text-zinc-400`} fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
        </svg>
      )
  }
}

function getProjectImages(project: FeaturedProject) {
  if (project.images?.length) {
    return project.images
  }

  if (project.imageUrl) {
    return [{ src: project.imageUrl, alt: project.imageAlt }]
  }

  return []
}

export default function Projects() {
  const sectionRef = useScrollReveal<HTMLElement>()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isInteracting, setIsInteracting] = useState(false)
  const [isManuallyPaused, setIsManuallyPaused] = useState(false)
  const [imageIndexes, setImageIndexes] = useState<Record<string, number>>({})
  const [lightbox, setLightbox] = useState<{
    projectTitle: string
    imageIndex: number
    zoomed: boolean
  } | null>(null)
  const touchStartRef = useRef<{ projectKey: string; x: number } | null>(null)
  const totalProjects = featuredProjects.length
  const isPaused = isInteracting || isManuallyPaused

  useEffect(() => {
    if (isPaused || totalProjects < 2) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalProjects)
    }, AUTO_ADVANCE_MS)

    return () => window.clearInterval(intervalId)
  }, [isPaused, totalProjects])

  useEffect(() => {
    if (!lightbox) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightbox(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightbox])

  const goToProject = (index: number) => {
    setActiveIndex((index + totalProjects) % totalProjects)
  }

  const goToPreviousProject = () => {
    goToProject(activeIndex - 1)
  }

  const goToNextProject = () => {
    goToProject(activeIndex + 1)
  }

  const getImageIndex = (project: FeaturedProject) => {
    const totalImages = getProjectImages(project).length

    if (totalImages <= 1) {
      return 0
    }

    return imageIndexes[project.title] ?? 0
  }

  const goToProjectImage = (project: FeaturedProject, nextIndex: number) => {
    const totalImages = getProjectImages(project).length

    if (totalImages <= 1) {
      return
    }

    setImageIndexes((current) => ({
      ...current,
      [project.title]: (nextIndex + totalImages) % totalImages,
    }))
  }

  const handleImageTouchStart = (projectTitle: string, clientX: number) => {
    touchStartRef.current = { projectKey: projectTitle, x: clientX }
  }

  const handleImageTouchEnd = (project: FeaturedProject, clientX: number) => {
    const touchStart = touchStartRef.current
    touchStartRef.current = null

    if (!touchStart || touchStart.projectKey !== project.title) {
      return
    }

    const deltaX = clientX - touchStart.x

    if (Math.abs(deltaX) < 32) {
      return
    }

    if (deltaX < 0) {
      goToProjectImage(project, getImageIndex(project) + 1)
      return
    }

    goToProjectImage(project, getImageIndex(project) - 1)
  }

  const openLightbox = (project: FeaturedProject, imageIndex: number) => {
    setLightbox({
      projectTitle: project.title,
      imageIndex,
      zoomed: false,
    })
  }

  const lightboxProject = lightbox
    ? featuredProjects.find((project) => project.title === lightbox.projectTitle) ?? null
    : null
  const lightboxImages = lightboxProject ? getProjectImages(lightboxProject) : []
  const lightboxImage = lightbox ? lightboxImages[lightbox.imageIndex] : null

  const shiftLightboxImage = (direction: number) => {
    if (!lightbox || !lightboxProject || lightboxImages.length <= 1) {
      return
    }

    setLightbox((current) => {
      if (!current) {
        return current
      }

      return {
        ...current,
        imageIndex: (current.imageIndex + direction + lightboxImages.length) % lightboxImages.length,
        zoomed: false,
      }
    })
  }

  const getCardState = (index: number) => {
    const diff = (index - activeIndex + totalProjects) % totalProjects

    if (diff === 0) {
      return 'center'
    }

    if (diff === 1) {
      return 'right'
    }

    if (diff === totalProjects - 1) {
      return 'left'
    }

    return 'hidden'
  }

  const getCardStyle = (state: 'center' | 'left' | 'right' | 'hidden') => {
    switch (state) {
      case 'left':
        return {
          transform: 'translateX(calc(-50% - 54%)) scale(0.84)',
          opacity: 0.34,
          zIndex: 20,
        }
      case 'right':
        return {
          transform: 'translateX(calc(-50% + 54%)) scale(0.84)',
          opacity: 0.34,
          zIndex: 20,
        }
      case 'hidden':
        return {
          transform: 'translateX(-50%) scale(0.78)',
          opacity: 0,
          zIndex: 10,
        }
      default:
        return {
          transform: 'translateX(-50%) scale(1)',
          opacity: 1,
          zIndex: 30,
        }
    }
  }

  return (
    <section
      ref={sectionRef}
      id="projetos"
      className="relative min-h-screen min-h-[100svh] flex items-center py-14 md:py-16"
    >
      <div className="relative z-10 w-full max-w-[92rem] mx-auto px-6">
        <div className="scroll-reveal text-center mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
              Projetos em destaque
            </span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Alguns recortes de trabalho que mostram como estruturo backend, conecto regras de negócio e entrego
            aplicações com base sólida.
          </p>
        </div>

        <div
          className="scroll-reveal"
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onFocusCapture={() => setIsInteracting(true)}
          onBlurCapture={() => setIsInteracting(false)}
        >
          <div
            className="relative mx-auto h-[27rem] w-full overflow-hidden sm:h-[25rem] lg:h-[25rem]"
            role="region"
            aria-roledescription="carousel"
            aria-label="Projetos em destaque"
          >
            {featuredProjects.map((project, index) => {
              const state = getCardState(index)
              const repo = getRepositoryMeta(project.repoUrl)
              const projectImages = getProjectImages(project)
              const activeImageIndex = getImageIndex(project)

              return (
                <article
                  key={project.title}
                  aria-hidden={state !== 'center'}
                  className="absolute left-1/2 top-0 h-full w-[min(86vw,58rem)] rounded-[1.75rem] border border-zinc-800/80 bg-zinc-950/82 shadow-[0_28px_90px_-48px_rgba(0,0,0,0.95)] transition-[transform,opacity,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                  style={{
                    ...getCardStyle(state),
                    filter: state === 'center' ? 'none' : 'saturate(0.72)',
                    pointerEvents: state === 'center' ? 'auto' : 'none',
                  }}
                >
                  <div className="grid h-full overflow-hidden rounded-[1.6rem] lg:grid-cols-[20.5rem_minmax(0,1fr)]">
                    {projectImages.length > 0 ? (
                      <div
                        className="group relative h-48 overflow-hidden border-b border-zinc-800/80 bg-zinc-950 lg:h-full lg:border-b-0 lg:border-r"
                        onClick={() => openLightbox(project, activeImageIndex)}
                        onTouchStart={(event) => {
                          handleImageTouchStart(project.title, event.touches[0].clientX)
                        }}
                        onTouchEnd={(event) => {
                          handleImageTouchEnd(project, event.changedTouches[0].clientX)
                        }}
                        onTouchCancel={() => {
                          touchStartRef.current = null
                        }}
                      >
                        <div className="relative h-full w-full cursor-zoom-in">
                          {projectImages.map((image, imageIndex) => (
                            <div
                              key={image.src}
                              className={`absolute inset-0 transition-opacity duration-200 motion-reduce:transition-none ${
                                imageIndex === activeImageIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
                              }`}
                            >
                              <Image
                                src={image.src}
                                alt={image.alt ?? project.imageAlt ?? project.title}
                                fill
                                sizes="(min-width: 1280px) 20.5rem, (min-width: 768px) 38vw, 86vw"
                                className="object-contain object-center"
                                priority={index === 0 && imageIndex === 0}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/8 via-transparent to-transparent lg:bg-gradient-to-r lg:from-zinc-950/6 lg:via-transparent lg:to-zinc-950/10" />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                        <div className="pointer-events-none absolute right-3 top-3 rounded-full border border-white/10 bg-black/45 px-2 py-1 text-[10px] tracking-[0.18em] text-white/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                          Zoom
                        </div>

                        {projectImages.length > 1 ? (
                          <>
                            <div className="pointer-events-none absolute inset-x-0 top-3 flex items-center justify-between px-3">
                              <span className="rounded-full border border-white/10 bg-black/45 px-2 py-1 text-[10px] tracking-[0.18em] text-white/80">
                                {String(activeImageIndex + 1).padStart(2, '0')} / {String(projectImages.length).padStart(2, '0')}
                              </span>
                            </div>

                            <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-3">
                              <button
                                type="button"
                                onClick={(event) => {
                                  event.stopPropagation()
                                  goToProjectImage(project, activeImageIndex - 1)
                                }}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white/85 transition-colors hover:bg-black/65"
                                aria-label={`Ver imagem anterior de ${project.title}`}
                              >
                                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m15 18-6-6 6-6" />
                                </svg>
                              </button>

                              <button
                                type="button"
                                onClick={(event) => {
                                  event.stopPropagation()
                                  goToProjectImage(project, activeImageIndex + 1)
                                }}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white/85 transition-colors hover:bg-black/65"
                                aria-label={`Ver próxima imagem de ${project.title}`}
                              >
                                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m9 6 6 6-6 6" />
                                </svg>
                              </button>
                            </div>

                            <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5 px-3">
                              {projectImages.map((image, imageIndex) => (
                                <button
                                  key={`${project.title}-${image.src}`}
                                  type="button"
                                  onClick={(event) => {
                                    event.stopPropagation()
                                    goToProjectImage(project, imageIndex)
                                  }}
                                  className={`h-1.5 rounded-full transition-all ${
                                    imageIndex === activeImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/65'
                                  }`}
                                  aria-label={`Ver imagem ${imageIndex + 1} de ${project.title}`}
                                  aria-pressed={imageIndex === activeImageIndex}
                                />
                              ))}
                            </div>
                          </>
                        ) : null}
                      </div>
                    ) : null}

                    <div className="flex min-w-0 flex-col justify-between p-5 sm:p-6 lg:p-6">
                      <div className="min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0 max-w-full">
                            <h3 className="break-words text-[1.58rem] font-bold leading-[1.12] text-white sm:text-[1.72rem]">
                              {project.title}
                            </h3>
                            <p className="mt-1.5 max-w-[40rem] break-words pr-1 text-[12.5px] leading-[1.55] text-white sm:text-[13px]">
                              {project.summary}
                            </p>
                          </div>

                          <span className="hidden shrink-0 text-[11px] uppercase tracking-[0.28em] text-white sm:inline">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <div className="mt-4 divide-y divide-zinc-800/80 border-y border-zinc-800/80 text-[11.5px] leading-[1.48] text-white sm:text-[12px]">
                          <div className="grid gap-1 py-2 sm:grid-cols-[5.2rem_minmax(0,1fr)] sm:gap-3">
                            <p className="text-[9px] uppercase tracking-[0.22em] text-white">Problema</p>
                            <p className="break-words pr-1">{project.problem}</p>
                          </div>
                          <div className="grid gap-1 py-2 sm:grid-cols-[5.2rem_minmax(0,1fr)] sm:gap-3">
                            <p className="text-[9px] uppercase tracking-[0.22em] text-white">Atuação</p>
                            <p className="break-words pr-1">{project.role}</p>
                          </div>
                          <div className="grid gap-1 py-2 sm:grid-cols-[5.2rem_minmax(0,1fr)] sm:gap-3">
                            <p className="text-[9px] uppercase tracking-[0.22em] text-white">Impacto</p>
                            <p className="break-words pr-1">{project.impact}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 border-t border-zinc-800/70 pt-3">
                        <div className="flex flex-wrap gap-1">
                          {project.stack.map((item) => (
                            <span
                              key={item}
                              className="inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950/35 px-2.5 py-1 text-[9.5px] text-white sm:text-[10px]"
                            >
                              <TechIcon tech={item} />
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[12px] transition-colors ${repo.className}`}
                          >
                            {repo.icon}
                            {repo.label}
                          </a>
                          {project.demoUrl ? (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/35 px-3 py-1.5 text-[12px] text-white transition-colors hover:border-[#3b6cb5]/50 hover:text-white"
                            >
                              Demo
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={() => setIsManuallyPaused((current) => !current)}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-950/28 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white transition-colors hover:border-zinc-700 hover:text-white"
              aria-pressed={isManuallyPaused}
              aria-label={isManuallyPaused ? 'Retomar carrossel de projetos' : 'Pausar carrossel de projetos'}
            >
              {isManuallyPaused ? (
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M8 6.5v11l8.5-5.5L8 6.5Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M7 6h3v12H7zM14 6h3v12h-3z" />
                </svg>
              )}
              {isManuallyPaused ? 'Retomar' : 'Pausar'}
            </button>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goToPreviousProject}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/45 text-zinc-300 transition-colors hover:border-[#3b6cb5]/55 hover:text-white"
              aria-label="Projeto anterior"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {featuredProjects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => goToProject(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? 'w-8 bg-[#3b6cb5]' : 'w-2.5 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                  aria-label={`Ir para ${project.title}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNextProject}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/45 text-zinc-300 transition-colors hover:border-[#3b6cb5]/55 hover:text-white"
              aria-label="Próximo projeto"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m9 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {lightbox && lightboxProject && lightboxImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-8"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria ampliada de ${lightboxProject.title}`}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white transition-colors hover:bg-black/75"
            aria-label="Fechar galeria"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          <div
            className="relative flex h-full w-full max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {lightboxImages.length > 1 ? (
              <button
                type="button"
                onClick={() => shiftLightboxImage(-1)}
                className="absolute left-0 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white transition-colors hover:bg-black/75"
                aria-label={`Ver imagem anterior de ${lightboxProject.title}`}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m15 18-6-6 6-6" />
                </svg>
              </button>
            ) : null}

            <button
              type="button"
              onClick={() =>
                setLightbox((current) => (current ? { ...current, zoomed: !current.zoomed } : current))
              }
              className="relative h-full w-full overflow-auto rounded-2xl border border-white/10 bg-black/35"
              aria-label={lightbox.zoomed ? 'Reduzir imagem' : 'Ampliar imagem'}
            >
              <div
                className={`relative h-[78vh] w-full transition-transform duration-200 ${
                  lightbox.zoomed ? 'scale-[1.55] cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                }`}
              >
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.alt ?? lightboxProject.imageAlt ?? lightboxProject.title}
                  fill
                  sizes="100vw"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </button>

            {lightboxImages.length > 1 ? (
              <button
                type="button"
                onClick={() => shiftLightboxImage(1)}
                className="absolute right-0 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white transition-colors hover:bg-black/75"
                aria-label={`Ver próxima imagem de ${lightboxProject.title}`}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m9 6 6 6-6 6" />
                </svg>
              </button>
            ) : null}

            <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/55 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-white/80">
              <span>
                {String(lightbox.imageIndex + 1).padStart(2, '0')} / {String(lightboxImages.length).padStart(2, '0')}
              </span>
              <span>{lightbox.zoomed ? 'Zoom 155%' : 'Clique para zoom'}</span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
