'use client'

import { useEffect, useState } from 'react'

const HINT_STORAGE_ID = 'alefos-hint-v1'

export default function Hint() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(HINT_STORAGE_ID)) setShow(true)
    } catch {
      setShow(true)
    }
  }, [])

  if (!show) return null

  const dismiss = () => {
    setShow(false)
    try {
    localStorage.setItem(HINT_STORAGE_ID, '1')
    } catch {}
  }

  return (
    <div className="os-fade absolute bottom-4 left-1/2 z-[55] -translate-x-1/2">
      <div className="flex items-center gap-3 border border-[var(--line)] bg-[rgba(7,11,9,0.9)] px-3.5 py-2 text-[12px] text-[var(--text-2)] backdrop-blur-md">
        <span className="flex items-center gap-1.5">
          <kbd className="border border-[var(--line)] px-1.5 py-0.5 text-[10px] text-[var(--blue-ice)]">⌘ Space</kbd>
          comandos
        </span>
        <span className="h-3 w-px bg-[var(--line)]" />
        <span>
          digite <span className="text-[var(--blue-ice)]">help</span> no terminal
        </span>
        <span className="h-3 w-px bg-[var(--line)]" />
        <span>arraste bordas p/ redimensionar</span>
        <button onClick={dismiss} aria-label="Fechar dica" className="ml-1 text-[var(--text-3)] transition-colors hover:text-[var(--text)]">
          ✕
        </button>
      </div>
    </div>
  )
}
