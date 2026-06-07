'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

export type Command = {
  id: string
  label: string
  hint?: string
  group: string
  run: () => void
}

export default function CommandPalette({
  open,
  onClose,
  commands,
}: {
  open: boolean
  onClose: () => void
  commands: Command[]
}) {
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase()
    if (!t) return commands
    return commands.filter((c) => (c.label + ' ' + c.group + ' ' + (c.hint ?? '')).toLowerCase().includes(t))
  }, [q, commands])

  useEffect(() => {
    if (open) {
      setQ('')
      setSel(0)
      const t = setTimeout(() => inputRef.current?.focus(), 10)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    setSel(0)
  }, [q])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSel((s) => Math.min(filtered.length - 1, s + 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSel((s) => Math.max(0, s - 1))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        const cmd = filtered[sel]
        if (cmd) {
          cmd.run()
          onClose()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, filtered, sel, onClose])

  useEffect(() => {
    const el = listRef.current?.querySelector('[data-sel="true"]') as HTMLElement | null
    el?.scrollIntoView({ block: 'nearest' })
  }, [sel])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[150] flex items-start justify-center bg-black/55 px-4 pt-[14vh] backdrop-blur-sm" onClick={onClose}>
      <div
        className="os-win-in w-full max-w-xl border border-[var(--line)] bg-[rgba(7,11,9,0.97)] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9),0_0_60px_-30px_rgba(47,158,99,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-[var(--line)] px-3 py-2.5">
          <span className="text-[var(--blue-bright)]">⌘</span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar comando ou app…"
            spellCheck={false}
            className="flex-1 bg-transparent text-[14px] text-[var(--text)] caret-[var(--blue-ice)] outline-none placeholder:text-[var(--text-3)]"
          />
          <kbd className="border border-[var(--line)] px-1.5 py-0.5 text-[10px] text-[var(--text-3)]">esc</kbd>
        </div>

        <div ref={listRef} className="os-scroll max-h-[46vh] overflow-auto py-1.5">
          {filtered.length === 0 && (
            <p className="px-3 py-4 text-center text-[13px] text-[var(--text-3)]">nada encontrado</p>
          )}
          {filtered.map((c, i) => {
            const active = i === sel
            return (
              <button
                key={c.id}
                data-sel={active}
                onMouseEnter={() => setSel(i)}
                onClick={() => {
                  c.run()
                  onClose()
                }}
                className={`flex w-full items-center gap-3 px-3 py-2 text-left text-[13px] transition-colors ${
                  active ? 'bg-[var(--blue)]/15 text-[var(--text)]' : 'text-[var(--text-2)]'
                }`}
              >
                <span className={`w-16 shrink-0 text-[10px] uppercase tracking-wider ${active ? 'text-[var(--blue-ice)]' : 'text-[var(--text-3)]'}`}>
                  {c.group}
                </span>
                <span className="flex-1">{c.label}</span>
                {c.hint && <span className="text-[11px] text-[var(--text-3)]">{c.hint}</span>}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
