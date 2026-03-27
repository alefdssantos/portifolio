import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
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
  '@graph': [
    personSchema,
    websiteSchema,
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main id="conteudo">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  )
}
