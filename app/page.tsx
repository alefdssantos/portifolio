import Desktop from '../components/os/Desktop'
import { featuredProjects } from '../data/featured-projects'
import { siteConfig } from '../data/site'

const personSchema = {
  '@type': 'Person',
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  email: siteConfig.email,
  knowsAbout: siteConfig.keywords,
  sameAs: [siteConfig.linkedInUrl, siteConfig.gitlabUrl],
}

const websiteSchema = {
  '@type': 'WebSite',
  name: `${siteConfig.name} | Portfolio`,
  url: siteConfig.url,
  inLanguage: 'pt-BR',
  description: siteConfig.description,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [personSchema, websiteSchema],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Interactive desktop (client) */}
      <Desktop />

      {/* SSR content for crawlers / no-JS */}
      <main id="conteudo" className="sr-only">
        <h1>{siteConfig.name} · {siteConfig.role}</h1>
        <p>{siteConfig.description}</p>
        <h2>Projetos</h2>
        <ul>
          {featuredProjects.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <p>Stack: {p.stack.join(', ')}</p>
              <a href={p.demoUrl ?? p.repoUrl}>{p.demoUrl ? 'Ver ao vivo' : 'Repositório'}</a>
            </li>
          ))}
        </ul>
        <h2>Contato</h2>
        <ul>
          <li><a href={siteConfig.gitlabUrl}>GitLab</a></li>
          <li><a href={siteConfig.linkedInUrl}>LinkedIn</a></li>
          <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
        </ul>
      </main>
    </>
  )
}
