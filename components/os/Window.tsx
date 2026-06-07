'use client'

import { useRef, type ReactNode } from 'react'

type Rect = { x: number; y: number; w: number; h: number }

type Props = {
  title: string
  state: Rect & { z: number; max?: boolean }
  active: boolean
  onFocus: () => void
  onClose: () => void
  onMinimize: () => void
  onMaximize: () => void
  onGeom: (patch: Partial<Rect>) => void
  children: ReactNode
}

const MIN_W = 340
const MIN_H = 220

const HANDLES: Array<{ dir: string; cls: string }> = [
  { dir: 'n', cls: 'left-2 right-2 top-0 h-1.5 cursor-ns-resize' },
  { dir: 's', cls: 'left-2 right-2 bottom-0 h-1.5 cursor-ns-resize' },
  { dir: 'e', cls: 'top-2 bottom-2 right-0 w-1.5 cursor-ew-resize' },
  { dir: 'w', cls: 'top-2 bottom-2 left-0 w-1.5 cursor-ew-resize' },
  { dir: 'ne', cls: 'top-0 right-0 h-3 w-3 cursor-nesw-resize' },
  { dir: 'nw', cls: 'top-0 left-0 h-3 w-3 cursor-nwse-resize' },
  { dir: 'se', cls: 'bottom-0 right-0 h-3 w-3 cursor-nwse-resize' },
  { dir: 'sw', cls: 'bottom-0 left-0 h-3 w-3 cursor-nesw-resize' },
]

export default function OSWindow({ title, state, active, onFocus, onClose, onMinimize, onMaximize, onGeom, children }: Props) {
  const drag = useRef<{ dx: number; dy: number } | null>(null)

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('[data-win-control]')) return
    if (state.max) return
    onFocus()
    drag.current = { dx: e.clientX - state.x, dy: e.clientY - state.y }
    document.body.style.userSelect = 'none'
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current) return
    const maxX = window.innerWidth - 80
    const maxY = window.innerHeight - 80
    const x = Math.max(-state.w + 120, Math.min(maxX, e.clientX - drag.current.dx))
    const y = Math.max(28, Math.min(maxY, e.clientY - drag.current.dy))
    onGeom({ x, y })
  }

  const onPointerUp = (e: React.PointerEvent) => {
    drag.current = null
    document.body.style.userSelect = ''
    try {
      ;(e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId)
    } catch {}
  }

  const startResize = (dir: string) => (e: React.PointerEvent) => {
    e.stopPropagation()
    e.preventDefault()
    onFocus()
    document.body.style.userSelect = 'none'
    const sx = e.clientX
    const sy = e.clientY
    const s = { x: state.x, y: state.y, w: state.w, h: state.h }
    const move = (ev: PointerEvent) => {
      const dx = ev.clientX - sx
      const dy = ev.clientY - sy
      let { x, y, w, h } = s
      if (dir.includes('e')) w = Math.max(MIN_W, s.w + dx)
      if (dir.includes('s')) h = Math.max(MIN_H, s.h + dy)
      if (dir.includes('w')) {
        const nw = Math.max(MIN_W, s.w - dx)
        x = s.x + (s.w - nw)
        w = nw
      }
      if (dir.includes('n')) {
        const nh = Math.max(MIN_H, s.h - dy)
        y = Math.max(28, s.y + (s.h - nh))
        h = nh
      }
      onGeom({ x, y, w, h })
    }
    const up = () => {
      document.body.style.userSelect = ''
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }

  return (
    <div
      className={`os-window os-win-in ${active ? 'os-window--active' : ''}`}
      style={{ left: state.x, top: state.y, width: state.w, height: state.h, zIndex: state.z }}
      onPointerDown={onFocus}
      role="dialog"
      aria-label={title}
    >
      <div
        className="os-titlebar"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onDoubleClick={onMaximize}
      >
        <div className="group/controls flex items-center gap-1.5">
          <button data-win-control onClick={onClose} aria-label="Fechar" title="Fechar" className="os-dot flex items-center justify-center bg-[#ff5f57]">
            <span className="text-[9px] font-bold leading-none text-black/70 opacity-0 transition-opacity group-hover/controls:opacity-100">×</span>
          </button>
          <button data-win-control onClick={onMinimize} aria-label="Minimizar" title="Minimizar" className="os-dot flex items-center justify-center bg-[#febc2e]">
            <span className="text-[10px] font-bold leading-none text-black/70 opacity-0 transition-opacity group-hover/controls:opacity-100">‒</span>
          </button>
          <button data-win-control onClick={onMaximize} aria-label="Maximizar" title="Maximizar" className="os-dot flex items-center justify-center bg-[#28c840]">
            <span className="text-[9px] font-bold leading-none text-black/70 opacity-0 transition-opacity group-hover/controls:opacity-100">+</span>
          </button>
        </div>
        <div className="ml-1.5 flex items-center gap-1.5 text-[var(--text-2)]">
          <span className="text-[13px] tracking-wide">
            <span className="text-[var(--text-3)]">~/</span>
            {title.toLowerCase()}
          </span>
        </div>
      </div>

      <div className="os-body">{children}</div>

      {/* resize handles */}
      {!state.max &&
        HANDLES.map((h) => (
          <div key={h.dir} onPointerDown={startResize(h.dir)} className={`absolute z-10 ${h.cls}`} aria-hidden="true" />
        ))}

      {/* visible resize grip (affordance) */}
      {!state.max && (
        <span
          className="pointer-events-none absolute bottom-[3px] right-[3px] z-[9] h-2.5 w-2.5 opacity-50"
          style={{ backgroundImage: 'repeating-linear-gradient(135deg, var(--blue) 0 1px, transparent 1px 3px)' }}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
