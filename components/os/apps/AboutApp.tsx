'use client'

import type { AppId } from '../apps'

const stats = [
  ['4+', 'anos de experiência'],
  ['20+', 'projetos entregues'],
  ['15+', 'tecnologias'],
  ['100%', 'comprometimento'],
]

export default function AboutApp({ onOpen }: { onOpen: (id: AppId) => void }) {
  return (
    <div className="h-full bg-[var(--win)] p-5 text-[14px] leading-relaxed">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center border border-[var(--line)] bg-[var(--chrome)] text-lg font-semibold text-[var(--blue-ice)]">
          AS
        </span>
        <div>
          <p className="text-base text-[var(--text)]">Alef Santos</p>
          <p className="text-[var(--text-3)]">Desenvolvedor Fullstack · foco backend · Brasil</p>
        </div>
      </div>

      <div className="space-y-3 text-[var(--text-2)]">
        <p>
          Desenvolvedor <span className="text-[var(--text)]">Fullstack com foco em Backend</span>, com experiência
          construindo <span className="text-[var(--text)]">sistemas completos em produção</span>, de e-commerce e CRMs
          a aplicações SaaS com inteligência artificial.
        </p>
        <p>
          Trabalho com <span className="text-[var(--blue-ice)]">Node.js, TypeScript, React, Next.js</span> e bancos SQL
          e NoSQL. Integrações de mensageria (<span className="text-[var(--blue-ice)]">WhatsApp, Telegram</span>), filas,
          automação e deploy com Docker e cloud (AWS, Firebase, Supabase).
        </p>
        <p>
          Abordagem centrada em entregar o que funciona: código organizado, arquitetura pensada pra escalar e foco no
          problema real do cliente.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-4">
        {stats.map(([v, l]) => (
          <div key={l} className="bg-[var(--win)] p-3 text-center">
            <div className="text-2xl text-[var(--blue-ice)]">{v}</div>
            <div className="mt-0.5 text-[11px] text-[var(--text-3)]">{l}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex gap-2">
        <button
          onClick={() => onOpen('projetos')}
          className="border border-[var(--line)] bg-[var(--chrome)] px-3 py-1.5 text-[var(--text-2)] transition-colors hover:border-[var(--blue)] hover:text-[var(--text)]"
        >
          ver projetos
        </button>
        <button
          onClick={() => onOpen('contato')}
          className="border border-[var(--blue)]/40 bg-[var(--blue)]/10 px-3 py-1.5 text-[var(--blue-ice)] transition-colors hover:bg-[var(--blue)]/20"
        >
          entrar em contato
        </button>
      </div>
    </div>
  )
}
