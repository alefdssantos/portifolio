'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative min-h-screen min-h-[100svh] flex items-center py-24 md:py-32"
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <div className="scroll-reveal text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
              Quem sou eu
            </span>
          </h2>
        </div>

        <div className="scroll-reveal reveal-delay-2 space-y-6 text-zinc-400 text-lg leading-relaxed">
          <p>
            Sou um desenvolvedor <span className="text-[#3b6cb5] font-semibold">Fullstack com foco em Backend</span>,
            com experiência na construção de <span className="font-medium">sistemas completos em produção</span>,
            de plataformas de e-commerce e CRMs a aplicações SaaS com inteligência artificial.
          </p>
          <p>
            Trabalho com <span className="text-[#3b6cb5]">Node.js, TypeScript, React, Next.js</span> e bancos de
            dados SQL e NoSQL. Tenho experiência com integrações de mensageria
            (<span className="text-[#3b6cb5]">WhatsApp, Telegram</span>), processamento de filas, automação e
            deploy com Docker e serviços cloud (AWS, Firebase, Supabase).
          </p>
          <p>
            Minha abordagem é centrada em entregar soluções que funcionam: código organizado, arquitetura pensada
            para escalar e foco no problema real do cliente.
          </p>
        </div>

        <div className="scroll-reveal reveal-delay-3 grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { value: '4+', label: 'Anos de experiência' },
            { value: '20+', label: 'Projetos desenvolvidos' },
            { value: '15+', label: 'Tecnologias' },
            { value: '100%', label: 'Comprometimento' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <div className="text-2xl md:text-3xl font-bold text-[#3b6cb5] mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
