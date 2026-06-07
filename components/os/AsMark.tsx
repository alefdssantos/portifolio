export default function AsMark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center border border-[var(--blue)]/55 bg-[var(--blue)]/12 font-bold leading-none tracking-tight text-[var(--text)] ${className}`}
      aria-hidden="true"
    >
      A<span className="text-[var(--blue-ice)]">S</span>
    </span>
  )
}
