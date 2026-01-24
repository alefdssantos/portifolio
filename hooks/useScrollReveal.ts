'use client'

import { useEffect, useRef } from 'react'

export function useScrollReveal<T extends HTMLElement>() {
    const ref = useRef<T>(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed')
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        )

        // Observe the main element
        observer.observe(element)

        // Also observe children with scroll-reveal class
        const children = element.querySelectorAll('.scroll-reveal')
        children.forEach((child) => observer.observe(child))

        return () => observer.disconnect()
    }, [])

    return ref
}
