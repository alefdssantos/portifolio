import { siteConfig } from './site'

export type FeaturedProjectImage = {
  src: string
  alt?: string
}

export type ProjectCategory = 'IA' | 'SaaS' | 'Automação' | 'Web'

export type FeaturedProject = {
  title: string
  category: ProjectCategory
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
    category: 'SaaS',
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
    category: 'SaaS',
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
    category: 'Web',
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
    category: 'Automação',
    summary: 'Monorepo com painel administrativo, API REST, filas de mensagens assíncronas e worker dedicado para envio em massa no Telegram.',
    problem: 'Enviar mensagens segmentadas para milhares de contatos no Telegram exige controle de filas, agendamento e importação de listas. Sem isso, o processo é manual e falho.',
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
    category: 'Automação',
    summary: 'Bot de automação que se candidata a vagas no LinkedIn automaticamente, preenche formulários e responde perguntas de triagem usando inteligência artificial.',
    problem: 'Candidatar-se manualmente a dezenas de vagas por dia é repetitivo e consome horas. Automatizar esse fluxo libera tempo para focar em entrevistas e preparação.',
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
    category: 'IA',
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
    repoUrl: siteConfig.gitlabUrl,
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
    category: 'Automação',
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
    repoUrl: siteConfig.gitlabUrl,
    demoUrl: 'https://koringaodds.com',
    imageUrl: '/projects/koringa-odds/koringa-odds-futebol.webp',
    imageAlt: 'Monitor de odds de futebol do Koringa Odds com surebets em tempo real, badges PA/Super Odds e cotações de múltiplas casas.',
    images: [
      {
        src: '/projects/koringa-odds/koringa-odds-futebol.webp',
        alt: 'Monitor de odds de futebol do Koringa Odds com surebets em tempo real, badges PA/Super Odds e cotações de múltiplas casas.',
      },
      {
        src: '/projects/koringa-odds/koringa-dashboard.webp',
        alt: 'Dashboard do Koringa Odds com casas online, surebets ativas, melhor ROI e atalhos para os módulos.',
      },
      {
        src: '/projects/koringa-odds/koringa-scraper-status.webp',
        alt: 'Painel de status dos scrapers do Koringa Odds monitorando 24 casas de apostas com eventos e saúde em tempo real.',
      },
      {
        src: '/projects/koringa-odds/koringa-freebet.webp',
        alt: 'Conversor de freebet do Koringa Odds com cálculo de extração balanceada por cenário e calculadora back/lay.',
      },
      {
        src: '/projects/koringa-odds/koringa-odds-basquete.webp',
        alt: 'Monitor de odds de basquete do Koringa Odds com cotações moneyline pré-live das casas monitoradas.',
      },
      {
        src: '/projects/koringa-odds/koringa-home.webp',
        alt: 'Tela de login do Koringa Odds com mascote e formulário de acesso.',
      },
    ],
    featured: true,
  },
  {
    title: 'Interview Copilot',
    category: 'IA',
    summary: 'App nativo de macOS que escuta a entrevista, transcreve a fala do entrevistador, traduz para português e sugere a resposta em tempo real com IA.',
    problem: 'Em entrevistas técnicas em inglês é difícil acompanhar a pergunta e formular uma boa resposta ao vivo, sob pressão e com barreira de idioma.',
    role: 'Aplicativo nativo em Swift/SwiftUI para macOS com painel flutuante e menu bar, captura de áudio do sistema, transcrição de fala (Speech), tradução e sugestão de resposta via DeepSeek, histórico e chave de API guardada no Keychain.',
    impact: 'Captura a pergunta do entrevistador, mostra a transcrição em inglês, a tradução em português e uma sugestão de resposta pronta para usar, com histórico da entrevista.',
    highlights: [
      'App nativo macOS em Swift/SwiftUI com painel flutuante e menu bar',
      'Captura de áudio do sistema e transcrição de fala em tempo real',
      'Tradução automática EN→PT e sugestão de resposta via DeepSeek',
      'Histórico da entrevista e chave de API guardada no Keychain',
      'Empacotamento .app via Swift Package Manager',
    ],
    stack: ['Swift', 'SwiftUI', 'macOS', 'DeepSeek AI', 'Speech'],
    repoUrl: siteConfig.gitlabUrl,
    imageUrl: '/projects/interview-copilot/interview-copilot.webp',
    imageAlt: 'Interface do Interview Copilot com transcrição em inglês, tradução em português e resposta sugerida por IA durante uma entrevista.',
    images: [
      {
        src: '/projects/interview-copilot/interview-copilot.webp',
        alt: 'Interface do Interview Copilot com transcrição em inglês, tradução em português e resposta sugerida por IA durante uma entrevista.',
      },
    ],
    featured: true,
  },
  {
    title: 'Gustavo · Atendimento IA',
    category: 'IA',
    summary: 'Atendimento comercial automatizado no WhatsApp oficial (Meta) com IA que interpreta pedidos, monta pré-orçamento, integra catálogo via Tiny ERP e faz handoff para humano.',
    problem: 'Empresas de brindes personalizados perdem vendas respondendo manualmente cada orçamento no WhatsApp, sem padronizar regras, mínimos e catálogo.',
    role: 'Backend próprio em Python/FastAPI com PostgreSQL e Alembic, integração com WhatsApp Cloud API (Meta), interpretação de mensagens via DeepSeek, sincronização de catálogo com Tiny ERP e painel de atendimento, catálogo e pedidos. Toda a orquestração sem n8n.',
    impact: 'Recebe a mensagem, reconhece o pedido, valida o mínimo, gera pré-orçamento, solicita CEP/frete e aciona handoff humano quando o cliente envia arte ou logomarca.',
    highlights: [
      'WhatsApp Cloud API oficial da Meta como canal',
      'Interpretação de pedidos por IA (DeepSeek)',
      'Catálogo sincronizado com Tiny ERP (660+ produtos)',
      'Painel estilo CRM com atendimento, catálogo e pedidos',
      'Handoff humano automático ao receber arte ou logo',
      'Backend próprio Python/FastAPI + PostgreSQL, deploy Docker/Railway',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'DeepSeek AI', 'WhatsApp Cloud API', 'Tiny ERP', 'Docker'],
    repoUrl: siteConfig.gitlabUrl,
    imageUrl: '/projects/gustavo/gustavo-atendimento.webp',
    imageAlt: 'Painel de atendimento do Gustavo com lista de conversas, chat com IA respondendo e ficha de lead do cliente.',
    images: [
      {
        src: '/projects/gustavo/gustavo-atendimento.webp',
        alt: 'Painel de atendimento do Gustavo com lista de conversas, chat com IA respondendo e ficha de lead do cliente.',
      },
      {
        src: '/projects/gustavo/gustavo-catalogo.webp',
        alt: 'Tela de catálogo do Gustavo com produtos sincronizados do Tiny ERP, status e configuração de pricing.',
      },
      {
        src: '/projects/gustavo/gustavo-pedidos.webp',
        alt: 'Tela de pedidos do Gustavo com indicadores por status, valores e código de rastreio.',
      },
      {
        src: '/projects/gustavo/gustavo-arte.webp',
        alt: 'Fluxo de handoff humano do Gustavo com solicitação de análise de arte/logo enviada pelo cliente.',
      },
    ],
    featured: true,
  },
  {
    title: 'Mapa da Saúde',
    category: 'Web',
    summary: 'Quiz de saúde com diagnóstico personalizado em 6 dimensões, relatório web, geração de PDF e disparo do resultado via WhatsApp.',
    problem: 'O cliente precisava capturar leads qualificados com um diagnóstico de saúde personalizado, entregando um resultado bonito e compartilhável sem trabalho manual.',
    role: 'Desenvolvimento fullstack com Next.js 16 (App Router), React 19 e Tailwind v4, motor de pontuação configurável por dimensão, armazenamento de leads no Vercel Blob, geração de PDF com Puppeteer e testes E2E com Playwright.',
    impact: 'Entrega o quiz em poucos minutos, calcula o mapa de saúde nas 6 dimensões, gera relatório web e PDF e envia o resultado pelo WhatsApp, com painel admin para gerenciar perguntas, pontuação e leads.',
    highlights: [
      'Quiz multi-etapas com diagnóstico em 6 dimensões',
      'Motor de pontuação configurável por pergunta e dimensão',
      'Relatório web e geração de PDF com Puppeteer',
      'Captura de leads no Vercel Blob e envio do resultado por WhatsApp',
      'Painel admin de perguntas, pontuação e leads',
      'Next.js 16 + React 19 + Tailwind v4, testes E2E com Playwright',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel Blob', 'Puppeteer', 'Playwright'],
    repoUrl: siteConfig.gitlabUrl,
    imageUrl: '/projects/quiz-mapa-saude/quiz-landing.webp',
    imageAlt: 'Landing page do Mapa da Saúde com proposta de diagnóstico em seis dimensões e chamada para iniciar o quiz.',
    images: [
      {
        src: '/projects/quiz-mapa-saude/quiz-landing.webp',
        alt: 'Landing page do Mapa da Saúde com proposta de diagnóstico em seis dimensões e chamada para iniciar o quiz.',
      },
      {
        src: '/projects/quiz-mapa-saude/quiz-form.webp',
        alt: 'Etapa inicial do quiz Mapa da Saúde com formulário de identificação e progresso por etapas.',
      },
      {
        src: '/projects/quiz-mapa-saude/quiz-resultado.webp',
        alt: 'Tela de resultado do Mapa da Saúde com pontuação por dimensão e ações para receber o relatório.',
      },
      {
        src: '/projects/quiz-mapa-saude/quiz-admin.webp',
        alt: 'Painel admin do Mapa da Saúde com edição de pergunta e pontuação por dimensão de cada resposta.',
      },
    ],
    featured: true,
  },
  {
    title: 'NossaCarta',
    category: 'Web',
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
    repoUrl: siteConfig.gitlabUrl,
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
    category: 'Automação',
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
    repoUrl: siteConfig.gitlabUrl,
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
    title: 'Gikamo',
    category: 'IA',
    summary: 'Ferramenta web para transcrever vídeos de TikTok e YouTube em lote, com download de áudio, fila de jobs e exportação.',
    problem: 'Transcrever vários vídeos manualmente é lento e depende de serviços online; faltava uma ferramenta local que baixasse o áudio e gerasse a transcrição em lote.',
    role: 'Backend em Python/FastAPI com fila assíncrona de jobs, download de áudio via yt-dlp e transcrição local com Whisper (OpenAI), frontend próprio e empacotamento para Windows.',
    impact: 'Cola um ou vários links, processa em fila com thumbnails e entrega a transcrição com segmentos por tempo, pronta para exportar.',
    highlights: [
      'Transcrição em lote a partir de links (TikTok, YouTube)',
      'Download de áudio com yt-dlp e transcrição local com Whisper',
      'Fila assíncrona de jobs com persistência e retomada',
      'Processamento 100% local, sem enviar áudio a terceiros',
      'Backend Python/FastAPI com frontend próprio e setup para Windows',
    ],
    stack: ['Python', 'FastAPI', 'Whisper', 'yt-dlp', 'JavaScript'],
    repoUrl: siteConfig.gitlabUrl,
    imageUrl: '/projects/gikamo/gikamo-home.webp',
    imageAlt: 'Interface do Gikamo com campo para colar links do TikTok, botão de transcrever e fila de jobs.',
    images: [
      {
        src: '/projects/gikamo/gikamo-home.webp',
        alt: 'Interface do Gikamo com campo para colar links do TikTok, botão de transcrever e fila de jobs.',
      },
    ],
    featured: true,
  },
  {
    title: 'Portfólio pessoal',
    category: 'Web',
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
