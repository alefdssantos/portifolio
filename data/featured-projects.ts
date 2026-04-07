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
    title: 'WhatsCRM',
    summary: 'Sistema de CRM comercial operado via WhatsApp com gestão de leads, conversas em tempo real e dashboard de vendas.',
    problem: 'Equipes comerciais precisam centralizar leads e conversas de WhatsApp em um único painel, sem depender de soluções caras ou limitadas.',
    role: 'Desenvolvimento do backend com Node.js/Express, frontend com React, integração com WhatsApp Web via whatsapp-web.js e comunicação em tempo real com Socket.io.',
    impact: 'Painel unificado para gestão de leads, histórico de conversas e acompanhamento comercial com autenticação via QR Code.',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Socket.io', 'WhatsApp API'],
    repoUrl: siteConfig.gitlabUrl,
    imageUrl: '/projects/whatscrm/whatscrm-home.webp',
    imageAlt: 'Tela de login do WhatsCRM com formulário de acesso ao sistema de leads e conversas.',
    images: [
      {
        src: '/projects/whatscrm/whatscrm-home.webp',
        alt: 'Tela de login do WhatsCRM com formulário de acesso ao sistema de leads e conversas.',
      },
    ],
    featured: true,
  },
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
    title: 'Telegram Broadcast Bot',
    summary: 'Monorepo com painel administrativo, API REST, filas de mensagens assíncronas e worker dedicado para envio em massa no Telegram.',
    problem: 'Enviar mensagens segmentadas para milhares de contatos no Telegram exige controle de filas, agendamento e importação de listas — sem isso, o processo é manual e falho.',
    role: 'Arquitetura de monorepo com Next.js no admin, Fastify na API, BullMQ/Redis para filas resilientes, Drizzle ORM com PostgreSQL e grammy como SDK do Telegram.',
    impact: 'Sistema completo de broadcast com agendamento, importação de CSV com 1.000+ contatos, filas com retry automático e painel de controle em tempo real.',
    stack: ['Next.js', 'Fastify', 'TypeScript', 'PostgreSQL', 'Redis', 'BullMQ'],
    repoUrl: siteConfig.gitlabUrl,
    imageUrl: '/projects/telegrambot/terminal.svg',
    imageAlt: 'Terminal mostrando a inicialização do Telegram Broadcast Bot com API, worker e filas conectados.',
    images: [
      {
        src: '/projects/telegrambot/terminal.svg',
        alt: 'Terminal mostrando a inicialização do Telegram Broadcast Bot com API, worker e filas conectados.',
      },
    ],
    featured: true,
  },
  {
    title: 'LinkedIn Auto Apply',
    summary: 'Bot de automação que se candidata a vagas no LinkedIn automaticamente, preenche formulários e responde perguntas de triagem usando inteligência artificial.',
    problem: 'Candidatar-se manualmente a dezenas de vagas por dia é repetitivo e consome horas — automatizar esse fluxo libera tempo para focar em entrevistas e preparação.',
    role: 'Desenvolvimento com TypeScript, automação de browser com Playwright, integração com DeepSeek (via OpenAI SDK) para respostas inteligentes e interface CLI interativa com Inquirer.',
    impact: 'Executa candidaturas automáticas com sessão persistente, filtros configuráveis por cargo/localidade e respostas geradas por IA para perguntas genéricas de triagem.',
    stack: ['TypeScript', 'Playwright', 'OpenAI SDK', 'Node.js', 'CLI'],
    repoUrl: siteConfig.gitlabUrl,
    imageUrl: '/projects/linkedin-apply/terminal.svg',
    imageAlt: 'Terminal mostrando a execução do LinkedIn Auto Apply com candidaturas automáticas e respostas por IA.',
    images: [
      {
        src: '/projects/linkedin-apply/terminal.svg',
        alt: 'Terminal mostrando a execução do LinkedIn Auto Apply com candidaturas automáticas e respostas por IA.',
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
]
