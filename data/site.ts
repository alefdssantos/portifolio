export const siteConfig = {
  name: 'Alef Santos',
  role: 'Desenvolvedor Fullstack',
  focus: 'Backend com Node.js, TypeScript e integrações orientadas a negócio',
  description:
    'Portfólio de Alef Santos, desenvolvedor fullstack com foco em backend, APIs, automações e aplicações web escaláveis.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portifolio.vercel.app',
  email: 'alefsantospb@gmail.com',
  linkedInUrl: 'https://www.linkedin.com/in/alefs/',
  gitlabUrl: 'https://gitlab.com/alefdssantos',
  location: 'Brasil',
  availability: 'Disponível para oportunidades com foco em backend, produto e arquitetura.',
  keywords: [
    'Alef Santos',
    'desenvolvedor fullstack',
    'desenvolvedor backend',
    'Node.js',
    'TypeScript',
    'React',
    'APIs',
    'portfolio',
  ],
} as const

export const primaryStack = [
  'Node.js',
  'TypeScript',
  'React',
  'SQL',
  'NoSQL',
  'Integrações',
] as const
