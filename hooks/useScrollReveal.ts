'use client'

import { useEffect, useRef } from 'react'

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observedNodes = new Set<Element>()

    const revealNode = (node: Element) => {
      node.classList.add('revealed')
      observer.unobserve(node)
      observedNodes.delete(node)
    }

    const revealVisibleNodes = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight

      observedNodes.forEach((node) => {
        const rect = node.getBoundingClientRect()
        const isVisible = rect.top <= viewportHeight * 0.92 && rect.bottom >= 0

        if (isVisible) {
          revealNode(node)
        }
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealNode(entry.target)
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    observer.observe(element)
    observedNodes.add(element)

    const children = element.querySelectorAll('.scroll-reveal')
    children.forEach((child) => {
      observer.observe(child)
      observedNodes.add(child)
    })

    const handleHashNavigation = () => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(revealVisibleNodes)
      })
    }

    revealVisibleNodes()
    handleHashNavigation()

    window.addEventListener('hashchange', handleHashNavigation)
    window.addEventListener('resize', revealVisibleNodes)

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation)
      window.removeEventListener('resize', revealVisibleNodes)
      observer.disconnect()
    }
  }, [])

  return ref
}
