# Alef Santos | Portfolio

Portfolio pessoal desenvolvido com Next.js 16, React 19 e Tailwind CSS 4.

## Tecnologias

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript 5
- **Estilizacao:** Tailwind CSS 4
- **Linting:** ESLint 9
- **Formatacao:** Prettier

## Estrutura do Projeto

```
portifolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Layout raiz
│   ├── page.tsx            # Pagina principal
│   ├── globals.css         # Estilos globais
│   └── favicon.ico
├── components/             # Componentes React
│   ├── Hero.tsx            # Secao hero com typing effect
│   ├── About.tsx           # Secao sobre mim
│   └── Contact.tsx         # Secao de contato
├── hooks/                  # Custom hooks
│   └── useScrollReveal.ts  # Hook para animacoes de scroll
└── public/                 # Assets estaticos
    ├── profile/
    │   └── alef.webp       # Foto de perfil otimizada
    └── projects/
        ├── creators-studio.webp
        └── gika-finance/   # Screenshots otimizados em WebP
```

## Instalacao

```bash
# Instalar dependencias
npm install

# Rodar em desenvolvimento
npm run dev

# Build para producao
npm run build

# Rodar em producao
npm start
```

## Scripts Disponiveis

| Script | Descricao |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de producao |
| `npm start` | Inicia servidor de producao |
| `npm run lint` | Executa ESLint |
| `npm run lint:fix` | Corrige erros do ESLint |
| `npm run format` | Formata codigo com Prettier |
| `npm run type-check` | Verifica tipos TypeScript |

## Contato

- **GitLab:** [gitlab.com/alefdssantos](https://gitlab.com/alefdssantos)
- **LinkedIn:** [linkedin.com/in/alefs](https://www.linkedin.com/in/alefs/)
- **Email:** alefsantospb@gmail.com

## Licenca

Este projeto e de uso pessoal.
