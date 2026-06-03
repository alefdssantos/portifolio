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
  highlights: string[]
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
    highlights: [
      'Monorepo React/Vite + Node.js/Express + MySQL',
      'Autenticação JWT com controle de sessão ativa',
      'Dashboard consolidado: saldo, receitas e despesas',
      'Módulos extras: relatórios com Pareto, treino, lembretes e horas',
      'Cobertura de testes E2E',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'MySQL', 'JWT', 'REST API'],
    repoUrl: siteConfig.gitlabUrl,
    imageUrl: '/projects/gika-finance/summary.webp',
    imageAlt:
      'Screenshot do dashboard do projeto Gika Finance com indicadores financeiros, sequência de treino e gráficos.',
    images: [
      {
        src: '/projects/gika-finance/login.webp',
        alt: 'Tela de login do Gika Finance com formulário de autenticação.',
      },
      {
        src: '/projects/gika-finance/summary.webp',
        alt: 'Dashboard do Gika Finance com indicadores financeiros, sequência de treino e gráficos.',
      },
      {
        src: '/projects/gika-finance/transactions.webp',
        alt: 'Tela de transações do Gika Finance com listagem de lançamentos e totais do período.',
      },
      {
        src: '/projects/gika-finance/accounts.webp',
        alt: 'Tela de contas do Gika Finance com cards de saldo e tipos de conta.',
      },
      {
        src: '/projects/gika-finance/categories.webp',
        alt: 'Tela de categorias do Gika Finance com receitas e despesas cadastradas.',
      },
      {
        src: '/projects/gika-finance/reports.webp',
        alt: 'Tela de relatórios do Gika Finance com gráficos, pareto e indicadores financeiros.',
      },
      {
        src: '/projects/gika-finance/training.webp',
        alt: 'Tela de treino do Gika Finance com bloco do treino ativo e progresso.',
      },
      {
        src: '/projects/gika-finance/reminders.webp',
        alt: 'Tela de lembretes do Gika Finance com calendário mensal.',
      },
      {
        src: '/projects/gika-finance/hours.webp',
        alt: 'Tela de horas do Gika Finance com meta mensal e saldo trabalhado.',
      },
      {
        src: '/projects/gika-finance/settings.webp',
        alt: 'Tela de configurações do Gika Finance com perfil e sessão ativa.',
      },
    ],
    featured: true,
  },
  {
    title: 'ChiwaCRM',
    summary: 'Sistema de CRM comercial operado via WhatsApp com gestão de leads, conversas em tempo real e dashboard de vendas.',
    problem: 'Equipes comerciais precisam centralizar leads e conversas de WhatsApp em um único painel, sem depender de soluções caras ou limitadas.',
    role: 'Desenvolvimento do backend com Node.js/Express, frontend com React, integração com WhatsApp Web via whatsapp-web.js e comunicação em tempo real com Socket.io.',
    impact: 'Painel unificado para gestão de leads, histórico de conversas e acompanhamento comercial com autenticação via QR Code.',
    highlights: [
      'Integração com WhatsApp Web via whatsapp-web.js',
      'Conversas em tempo real com Socket.io',
      'Autenticação por QR Code',
      'Gestão de leads, histórico e dashboard de vendas',
    ],
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Socket.io', 'WhatsApp API'],
    repoUrl: siteConfig.gitlabUrl,
    imageUrl: '/projects/chiwacrm/chiwacrm-home.webp',
    imageAlt: 'Tela de login do ChiwaCRM com formulário de acesso ao sistema de leads e conversas.',
    images: [
      {
        src: '/projects/chiwacrm/chiwacrm-home.webp',
        alt: 'Tela de login do ChiwaCRM com formulário de acesso ao sistema de leads e conversas.',
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
    highlights: [
      'Downloader multi-plataforma: YouTube, TikTok e Twitter/X',
      'Fallback de qualidade + retry automático',
      'Backend Node.js/TypeScript + frontend Next.js/React',
      'Arquitetura focada em resiliência',
    ],
    stack: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Express'],
    repoUrl: siteConfig.gitlabUrl,
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
    highlights: [
      'Monorepo: admin Next.js + API Fastify + worker dedicado',
      'Filas resilientes com BullMQ/Redis e retry automático',
      'Importação de CSV com 1.000+ contatos',
      'Agendamento de campanhas + painel em tempo real',
      'Drizzle ORM com PostgreSQL e SDK grammy',
    ],
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
    highlights: [
      'Automação de browser com Playwright e sessão persistente',
      'Respostas de triagem geradas por IA (DeepSeek via OpenAI SDK)',
      'Filtros configuráveis por cargo e localidade',
      'CLI interativa com Inquirer',
    ],
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
    title: 'Skopus Legal Insight',
    summary: 'Plataforma de inteligência jurídica para escritórios de advocacia com copiloto IA, dashboard de métricas e gestão de documentos.',
    problem: 'Escritórios precisam centralizar processos, analisar decisões e acompanhar métricas sem depender de planilhas ou sistemas caros.',
    role: 'Fullstack com React + Vite no frontend, Node.js/Express no backend, MySQL, JWT, upload de documentos, pagamentos via AbacatePay e integração com IA via DeepSeek.',
    impact: 'Copiloto jurídico com análise de processos, dashboard de taxa de sucesso, gestão de teses e autenticação com Google.',
    highlights: [
      'Copiloto jurídico com IA (DeepSeek) para análise de processos',
      'Dashboard de taxa de sucesso e métricas do escritório',
      'Gestão de teses e upload de documentos',
      'Autenticação com Google + JWT',
      'Pagamentos e assinaturas via AbacatePay (PIX)',
      'Deploy: frontend na Vercel + backend na Railway',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'MySQL', 'DeepSeek AI', 'AbacatePay', 'Vercel', 'Railway'],
    repoUrl: 'https://gitlab.com/diordan/skopus-legal-insight',
    demoUrl: 'https://skopus.app',
    imageUrl: '/projects/skopus-legal-insight/skopus-dashboard.webp',
    imageAlt: 'Dashboard do Skopus Legal Insight com KPIs, taxa de sucesso por tese, decisões recentes e fila de revisão.',
    images: [
      {
        src: '/projects/skopus-legal-insight/skopus-dashboard.webp',
        alt: 'Dashboard do Skopus Legal Insight com KPIs, taxa de sucesso por tese, decisões recentes e fila de revisão.',
      },
      {
        src: '/projects/skopus-legal-insight/skopus-copiloto.webp',
        alt: 'Copiloto jurídico (Assistente IA) do Skopus com sugestões de análise baseadas nos dados do escritório.',
      },
      {
        src: '/projects/skopus-legal-insight/skopus-teses.webp',
        alt: 'Tela de teses jurídicas do Skopus com taxa de sucesso, volume de decisões e tendência por tese.',
      },
      {
        src: '/projects/skopus-legal-insight/skopus-busca.webp',
        alt: 'Busca jurídica do Skopus com decisões indexadas, ementas e resultado (procedente/improcedente/parcial).',
      },
      {
        src: '/projects/skopus-legal-insight/skopus-relatorios.webp',
        alt: 'Tela de relatórios do Skopus com indicadores e geração de relatórios estratégicos em PDF.',
      },
      {
        src: '/projects/skopus-legal-insight/skopus-legal-home.webp',
        alt: 'Tela de login do Skopus Legal Insight com preview do dashboard jurídico.',
      },
    ],
    featured: true,
  },
  {
    title: 'Koringa Odds',
    summary: 'Plataforma de monitoramento de odds esportivas em tempo real com detecção de surebets, alertas via Telegram e painel web.',
    problem: 'Apostadores profissionais perdem oportunidades de surebet por não conseguir monitorar múltiplas casas em tempo real de forma centralizada.',
    role: 'Monorepo com Fastify na API, React/Vite no frontend, worker Telegram, scraper de odds, Drizzle ORM com PostgreSQL e observabilidade com Prometheus + Grafana. Deploy próprio em VPS com domínio dedicado e pagamentos via LastLink.',
    impact: 'Detecção automática de surebets, super odds e freebets com alertas instantâneos no Telegram e painel de controle em tempo real, rodando em produção em VPS própria.',
    highlights: [
      'Deploy próprio em VPS com domínio dedicado (koringaodds.com)',
      'Pagamentos e assinaturas via LastLink',
      'Detecção automática de surebets, super odds e freebets em tempo real',
      'Scraper de odds multi-casas + alertas instantâneos no Telegram',
      'Observabilidade com Prometheus + Grafana',
      'Monorepo Fastify + React/Vite + worker, Drizzle/PostgreSQL, Docker',
    ],
    stack: ['Node.js', 'TypeScript', 'Fastify', 'React', 'PostgreSQL', 'Docker', 'Telegram API', 'LastLink', 'Grafana'],
    repoUrl: 'https://gitlab.com/diordan',
    demoUrl: 'https://koringaodds.com',
    imageUrl: '/projects/koringa-odds/koringa-home.webp',
    imageAlt: 'Tela de login do Koringa Odds com mascote e formulário de acesso.',
    images: [
      {
        src: '/projects/koringa-odds/koringa-home.webp',
        alt: 'Tela de login do Koringa Odds com mascote e formulário de acesso.',
      },
    ],
    featured: true,
  },
  {
    title: 'NossaCarta',
    summary: 'Site personalizado de carta de amor com contador regressivo, galeria de fotos, música do Spotify, cápsulas do tempo e QR code.',
    problem: 'Criar uma experiência digital única e memorável para presentear em datas especiais, indo além de mensagens comuns.',
    role: 'Next.js no frontend com Supabase como backend, autenticação, storage de fotos, integração com Spotify e pagamentos via AbacatePay.',
    impact: 'Experiência interativa e personalizada com ritual de envelope, cápsulas do tempo e conteúdo exclusivo por casal.',
    highlights: [
      'Pagamentos via AbacatePay (PIX)',
      'Backend Supabase: autenticação + storage de fotos',
      'Integração com Spotify (música do casal)',
      'Contador regressivo, cápsulas do tempo e QR code',
      'Ritual de envelope interativo e conteúdo exclusivo por casal',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Spotify API', 'AbacatePay'],
    repoUrl: 'https://gitlab.com/diordan',
    imageUrl: '/projects/nossacarta/nossacarta-home.webp',
    imageAlt: 'Landing page do NossaCarta com headline "Para você, a história de nós em uma só carta" e preview do envelope.',
    images: [
      {
        src: '/projects/nossacarta/nossacarta-home.webp',
        alt: 'Landing page do NossaCarta com headline "Para você, a história de nós em uma só carta" e preview do envelope.',
      },
      {
        src: '/projects/nossacarta/nossacarta-recursos.webp',
        alt: 'Seção de recursos do NossaCarta: ritual do envelope, trilha sonora do Spotify, galeria em alta, contador regressivo e QR code.',
      },
      {
        src: '/projects/nossacarta/nossacarta-planos.webp',
        alt: 'Seção de planos do NossaCarta com as opções "Sete dias de carta" (R$ 17,90) e "Para sempre" (R$ 29,90).',
      },
      {
        src: '/projects/nossacarta/nossacarta-faq.webp',
        alt: 'Seção de perguntas frequentes e rodapé do NossaCarta com privacidade, segurança e links institucionais.',
      },
    ],
    featured: true,
  },
  {
    title: '99Freelas Bot',
    summary: 'Bot de automação que busca projetos no 99Freelas, avalia compatibilidade com IA e envia propostas personalizadas automaticamente.',
    problem: 'Freelancers perdem oportunidades por não monitorar constantemente novas publicações e demorar para enviar propostas relevantes.',
    role: 'TypeScript com Playwright para automação de browser, DeepSeek para avaliar compatibilidade e gerar propostas personalizadas com sessão persistente.',
    impact: 'Candidaturas automáticas com avaliação inteligente de fit, filtros por score de compatibilidade e propostas geradas por IA.',
    highlights: [
      'Automação de browser com Playwright e sessão persistente',
      'Avaliação de fit por IA (DeepSeek) com score de compatibilidade',
      'Propostas personalizadas geradas automaticamente',
      'Filtros por score para priorizar projetos relevantes',
    ],
    stack: ['TypeScript', 'Node.js', 'Playwright', 'DeepSeek AI', 'CLI'],
    repoUrl: 'https://gitlab.com/diordan/99freelas-bot',
    imageUrl: '/projects/linkedin-apply/terminal.svg',
    imageAlt: 'Terminal mostrando o 99Freelas Bot em execução com avaliação de projetos por IA.',
    images: [
      {
        src: '/projects/linkedin-apply/terminal.svg',
        alt: 'Terminal mostrando o 99Freelas Bot em execução com avaliação de projetos por IA.',
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
    highlights: [
      'Next.js + React + TypeScript + Tailwind CSS',
      'SEO técnico e metadados otimizados',
      'Galeria/lightbox próprio com navegação por teclado',
      'Curadoria visual das seções',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    repoUrl: siteConfig.gitlabUrl,
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
