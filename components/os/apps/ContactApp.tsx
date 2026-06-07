'use client'

import { siteConfig } from '../../../data/site'

const links = [
  { name: 'GitLab', handle: 'gitlab.com/alefdssantos', url: 'https://gitlab.com/alefdssantos', glyph: 'git' },
  { name: 'LinkedIn', handle: 'linkedin.com/in/alefs', url: 'https://www.linkedin.com/in/alefs/', glyph: 'in' },
  { name: 'WhatsApp', handle: '+55 51 98010-4565', url: 'https://wa.me/5551980104565', glyph: 'wa' },
  { name: 'Email', handle: siteConfig.email, url: `mailto:${siteConfig.email}`, glyph: '@' },
]

export default function ContactApp() {
  return (
    <div className="h-full bg-[var(--win)] p-5 text-[14px]">
      <p className="text-[var(--text-3)]">$ cat contato.txt</p>
      <h2 className="mt-1 text-xl text-[var(--text)]">
        Vamos <span className="text-[var(--blue-ice)]">conversar?</span>
      </h2>
      <p className="mt-2 max-w-md text-[var(--text-2)]">
        Disponível para novos projetos e oportunidades. Escolhe um canal:
      </p>

      <div className="mt-4 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
        {links.map((l) => (
          <a
            key={l.name}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[var(--win)] p-3 transition-colors hover:bg-[var(--chrome)]"
          >
            <span className="flex h-9 w-9 items-center justify-center border border-[var(--line)] bg-[var(--chrome)] text-[12px] uppercase text-[var(--blue-bright)] group-hover:border-[var(--blue)]">
              {l.glyph}
            </span>
            <span>
              <span className="block text-[var(--text)]">{l.name}</span>
              <span className="block text-[11px] text-[var(--text-3)]">{l.handle}</span>
            </span>
            <span className="ml-auto text-[var(--text-3)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--blue-ice)]">→</span>
          </a>
        ))}
      </div>

      <a
        href={`mailto:${siteConfig.email}`}
        className="mt-5 inline-flex items-center gap-2 border border-[var(--blue)]/40 bg-[var(--blue)]/10 px-4 py-2 text-[var(--blue-ice)] transition-colors hover:bg-[var(--blue)]/20"
      >
        enviar mensagem →
      </a>

      <p className="mt-6 border-t border-[var(--line)] pt-3 text-[11px] text-[var(--text-3)]">
        AlefOS · feito com Next.js + React · {siteConfig.name}
      </p>
    </div>
  )
}
