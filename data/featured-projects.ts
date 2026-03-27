import { siteConfig } from './site'

export type FeaturedProjectImage = {
  src: string
  alt?: string
}

export type FeaturedProject = {
  title: string
  summary: string
  problem: string
  role: string
  impact: string
  stack: string[]
  repoUrl: string
  demoUrl?: string
  imageUrl?: string
  imageAlt?: string
  images?: FeaturedProjectImage[]
  featured: true
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Creators Studio',
    summary: 'Downloader fullstack para YouTube, TikTok e Twitter/X.',
    problem: 'Unificar downloads multi-plataforma com fluxo resiliente e direto.',
    role: 'Node.js + TypeScript no backend, Next.js/React no frontend e arquitetura de resiliência.',
    impact: 'Download robusto com fallback de qualidade, retry automático e UX objetiva.',
    stack: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Express'],
    repoUrl: 'https://github.com/alefdssantos/creators-studio',
    imageUrl: '/projects/creators-studio.webp',
    imageAlt:
      'Screenshot da interface do projeto Creators Studio com downloader para YouTube, TikTok e Twitter/X.',
    images: [
      {
        src: '/projects/creators-studio.webp',
        alt: 'Screenshot da interface do projeto Creators Studio com downloader para YouTube, TikTok e Twitter/X.',
      },
    ],
    featured: true,
  },
  {
    title: 'Gika Finance',
    summary: 'Sistema fullstack para finanças pessoais com dashboard, transações, relatórios e rotinas complementares.',
    problem: 'Centralizar contas, categorias, lançamentos e acompanhamento pessoal em uma única aplicação web.',
    role: 'Monorepo com React/Vite no frontend, Node.js/Express no backend, MySQL, autenticação JWT e cobertura E2E.',
    impact: 'Entrega visão consolidada de saldo, receitas, despesas, relatórios, treino, lembretes e controle de horas.',
    stack: ['React', 'TypeScript', 'Node.js', 'MySQL', 'JWT', 'REST API'],
    repoUrl: siteConfig.gitlabUrl,
    imageUrl: '/projects/gika-finance/summary.webp?v=2',
    imageAlt:
      'Screenshot do dashboard do projeto Gika Finance com indicadores financeiros, sequência de treino e gráficos.',
    images: [
      {
        src: '/projects/gika-finance/login.webp?v=2',
        alt: 'Tela de login do Gika Finance com formulário de autenticação.',
      },
      {
        src: '/projects/gika-finance/summary.webp?v=2',
        alt: 'Dashboard do Gika Finance com indicadores financeiros, sequência de treino e gráficos.',
      },
      {
        src: '/projects/gika-finance/transactions.webp?v=2',
        alt: 'Tela de transações do Gika Finance com listagem de lançamentos e totais do período.',
      },
      {
        src: '/projects/gika-finance/accounts.webp?v=2',
        alt: 'Tela de contas do Gika Finance com cards de saldo e tipos de conta.',
      },
      {
        src: '/projects/gika-finance/categories.webp?v=2',
        alt: 'Tela de categorias do Gika Finance com receitas e despesas cadastradas.',
      },
      {
        src: '/projects/gika-finance/reports.webp?v=2',
        alt: 'Tela de relatórios do Gika Finance com gráficos, pareto e indicadores financeiros.',
      },
      {
        src: '/projects/gika-finance/training.webp?v=2',
        alt: 'Tela de treino do Gika Finance com bloco do treino ativo e progresso.',
      },
      {
        src: '/projects/gika-finance/reminders.webp?v=2',
        alt: 'Tela de lembretes do Gika Finance com calendário mensal.',
      },
      {
        src: '/projects/gika-finance/hours.webp?v=2',
        alt: 'Tela de horas do Gika Finance com meta mensal e saldo trabalhado.',
      },
      {
        src: '/projects/gika-finance/settings.webp?v=2',
        alt: 'Tela de configurações do Gika Finance com perfil e sessão ativa.',
      },
    ],
    featured: true,
  },
  {
    title: 'Portfólio pessoal',
    summary: 'Site institucional autoral para apresentar experiência, projetos e canais de contato com recorte visual mais forte.',
    problem: 'Concentrar apresentação profissional, provas visuais de trabalho e acesso rápido a contato em uma experiência direta e bem organizada.',
    role: 'Arquitetura e implementação com Next.js, React, TypeScript, Tailwind CSS, SEO técnico e curadoria visual das seções.',
    impact: 'Entrega uma vitrine clara do perfil técnico, melhora a navegação entre seções e organiza projetos com contexto e galeria própria.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    repoUrl: 'https://github.com/alefdssantos/portifolio',
    demoUrl: siteConfig.url,
    imageUrl: '/projects/portfolio/portfolio-hero.webp',
    imageAlt:
      'Seção inicial do portfólio de Alef Santos com apresentação principal, tecnologias e avatar.',
    images: [
      {
        src: '/projects/portfolio/portfolio-hero.webp',
        alt: 'Seção inicial do portfólio de Alef Santos com apresentação principal, tecnologias e avatar.',
      },
      {
        src: '/projects/portfolio/portfolio-projects.webp',
        alt: 'Seção de projetos em destaque do portfólio com carrossel e cards detalhados.',
      },
      {
        src: '/projects/portfolio/portfolio-about.webp',
        alt: 'Seção sobre do portfólio com apresentação pessoal e indicadores profissionais.',
      },
      {
        src: '/projects/portfolio/portfolio-contact.webp',
        alt: 'Seção de contato do portfólio com links para GitLab, LinkedIn e email.',
      },
    ],
    featured: true,
  },
  {
    title: 'Automação de processos internos',
    summary: 'Jobs e integrações para reduzir tarefas repetitivas.',
    problem: 'Eliminar atrasos e inconsistências de processos manuais.',
    role: 'Implementação de jobs, integrações externas e tratamento de falhas.',
    impact: 'Menos esforço manual e rotina mais previsível e confiável.',
    stack: ['Node.js', 'TypeScript', 'APIs', 'MongoDB', 'Automação'],
    repoUrl: siteConfig.gitlabUrl,
    featured: true,
  },
]
