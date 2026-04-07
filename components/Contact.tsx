'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'

const contactLinks = [
  {
    name: 'GitLab',
    url: 'https://gitlab.com/alefdssantos',
    color: 'text-[#fc6d26]',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.845.904c-.435 0-.82.28-.955.692C2.639 5.449 1.246 9.728.07 13.335a1.437 1.437 0 0 0 .522 1.607l11.071 8.045c.2.145.472.144.67-.004l11.073-8.04a1.436 1.436 0 0 0 .522-1.61c-1.285-3.942-2.683-8.256-3.817-11.746a1.004 1.004 0 0 0-.957-.684.987.987 0 0 0-.949.69l-2.405 7.408H8.203l-2.41-7.408a.987.987 0 0 0-.942-.69h-.006z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alefs/',
    color: 'text-[#0a66c2]',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/5551980104565',
    color: 'text-[#25d366]',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:alefsantospb@gmail.com',
    color: 'text-[#ea4335]',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
        />
      </svg>
    ),
  },
]

export default function Contact() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="relative min-h-screen min-h-[100svh] flex items-center py-24 md:py-32"
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <div className="scroll-reveal mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
              Vamos conversar?
            </span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Estou disponivel para novos projetos e oportunidades. Entre em contato e vamos criar algo incrivel
            juntos.
          </p>
        </div>

        <div className="scroll-reveal reveal-delay-2 flex flex-wrap justify-center gap-4 mb-12">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-[#0d2a54] hover:bg-zinc-800/50 transition-all duration-300"
            >
              <span
                className={`${link.color} group-hover:scale-110 transition-transform`}
              >
                {link.icon}
              </span>
              <span className="text-zinc-300 group-hover:text-white transition-colors">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="scroll-reveal reveal-delay-3">
          <a
            href="mailto:alefsantospb@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0d2a54] hover:bg-[#1a4a8a] text-white font-semibold rounded-xl transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#0d2a54]/30"
          >
            Enviar mensagem
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="scroll-reveal reveal-delay-4 mt-16 pt-8 border-t border-zinc-800">
          <p className="text-zinc-600 text-sm">
            Desenvolvido por <span className="text-[#3b6cb5]">Alef Santos</span>
          </p>
        </div>
      </div>
    </section>
  )
}
