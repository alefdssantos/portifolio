'use client'

import { useCallback, useMemo, useState } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine, ISourceOptions } from 'tsparticles-engine'

type ProjectColors = {
  background: string
  foreground: string
  accent: string
  accentLight: string
  accentLighter: string
}

type LayerSettings = {
  colors: ProjectColors
  allowPointerInteraction: boolean
}

function readLayerSettings(): LayerSettings | null {
  if (typeof window === 'undefined') {
    return null
  }

  const styles = window.getComputedStyle(document.documentElement)
  const read = (variable: string) => styles.getPropertyValue(variable).trim()

  const background = read('--background')
  const foreground = read('--foreground')
  const accent = read('--accent')
  const accentLight = read('--accent-light')
  const accentLighter = read('--accent-lighter')

  if (!background || !foreground || !accent || !accentLight || !accentLighter) {
    return null
  }

  return {
    colors: {
      background,
      foreground,
      accent,
      accentLight,
      accentLighter,
    },
    allowPointerInteraction:
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  }
}

export default function ParticlesLayer() {
  const [settings] = useState<LayerSettings | null>(() => readLayerSettings())

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const options = useMemo<ISourceOptions | undefined>(() => {
    if (!settings) {
      return undefined
    }

    const { colors, allowPointerInteraction } = settings

    return {
      background: {
        color: {
          value: 'transparent',
        },
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 36,
      detectRetina: false,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      interactivity: {
        detectsOn: 'window',
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: allowPointerInteraction,
            mode: ['grab', 'repulse'],
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 124,
            links: {
              opacity: 0.18,
            },
          },
          repulse: {
            distance: 72,
            duration: 0.35,
            factor: 18,
            speed: 0.25,
          },
        },
      },
      particles: {
        color: {
          value: [colors.accentLight, colors.accentLighter],
        },
        links: {
          color: colors.accentLighter,
          distance: 108,
          enable: true,
          opacity: 0.16,
          width: 0.8,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 0.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1200,
          },
          value: 28,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: {
            min: 1.1,
            max: 2.4,
          },
        },
      },
      responsive: [
        {
          maxWidth: 768,
          options: {
            interactivity: {
              events: {
                onHover: {
                  enable: false,
                },
              },
            },
            particles: {
              links: {
                distance: 84,
              },
              move: {
                speed: 0.14,
              },
              number: {
                value: 16,
              },
            },
          },
        },
      ],
    }
  }, [settings])

  if (!options) {
    return null
  }

  return (
    <Particles
      id="portfolio-particles"
      init={particlesInit}
      options={options}
      className="h-full w-full"
    />
  )
}
