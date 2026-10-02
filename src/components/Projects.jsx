import { motion } from 'framer-motion'
import SectionHeading, { EASE_OUT } from './SectionHeading'

const FEATURED = {
  title: 'Fuškuj',
  status: 'Ve vývoji',
  summary:
    'On-demand marketplace služeb pro Českou republiku. Klient zadá zakázku, mastr pošle nabídku, domluví se v chatu a práci uzavře oboustranné potvrzení a hodnocení.',
  detail:
    'Celou platformu stavím sám: REST API v NestJS nad PostgreSQL s PostGIS, veřejný web a admin v Next.js, mobilní appku ve Flutteru pro iOS i Android a nasazení v Dockeru na vlastním serveru.',
  image: 'img/fuska-platforma.webp',
  link: 'https://fuskuj.cz',
  tags: ['NestJS', 'PostgreSQL', 'Next.js', 'Flutter', 'Docker'],
}

const PROJECTS = [
  {
    title: 'Web pro Fušku',
    description:
      'Landing page pro startupovou aplikaci Fuška – návrh i vývoj, včetně kontaktního formuláře přes EmailJS.',
    image: 'img/fuska.png',
    link: 'https://fuska.net',
    tags: ['React', 'CSS', 'EmailJS'],
  },
  {
    title: 'Fotostudio Imagia',
    description:
      'Web v Reactu s rezervačním systémem pro fotostudio Imagia v Brně.',
    image: 'img/imagia.png',
    link: 'https://imagiafotostudio.cz',
    tags: ['React', 'Rezervace', 'UI/UX'],
  },
  {
    title: 'Trading API',
    description:
      'REST API v Node.js, které porovnává ceny kryptoměn na 10 burzách a ukládá je do MongoDB.',
    image: 'img/trading.jpg',
    link: 'https://github.com/Fietstopa/Crypto-price-tracker',
    tags: ['Node.js', 'MongoDB', 'REST API'],
  },
  {
    title: 'BookNest',
    description:
      'Mobilní aplikace s mapou nejbližších knihobudek – pro čtenáře i pro ty, kdo se chtějí zbavit starých knih.',
    image: 'img/booknest.png',
    link: 'https://github.com/Fietstopa/booknest-app',
    tags: ['Kotlin', 'Mobilní app'],
  },
  {
    title: 'Cinemati',
    description:
      'Web pro procházení, ukládání a doporučování filmů s přihlášením přes Firebase.',
    image: 'img/cinemati.png',
    link: 'https://cinemati.vercel.app',
    tags: ['React', 'Firebase', 'TMDB API'],
  },
]

const hostOf = (url) => new URL(url).hostname.replace(/^www\./, '')

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 13v8H3V6h8" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

function FeaturedProject({ title, status, summary, detail, image, link, tags }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="featured-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE_OUT }}
      style={{
        background: 'linear-gradient(var(--green-bg), var(--green-bg)), var(--surface)',
        border: '1px solid var(--green-border)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
        marginBottom: '1.5rem',
      }}
    >
      <div style={{ minHeight: '240px', overflow: 'hidden', background: 'var(--surface-2)' }}>
        <img
          src={image}
          alt="Úvodní stránka webu Fuškuj"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }}
        />
      </div>

      <div style={{ padding: 'clamp(1.4rem, 3vw, 2.2rem)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem 1rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem 0.9rem' }}>
            <h3 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              {title}
            </h3>
            <span
              className="mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--green)',
                fontSize: '0.75rem',
                border: '1px solid var(--green-border)',
                padding: '2px 8px',
              }}
            >
              <span aria-hidden="true" style={{ width: '6px', height: '6px', background: 'var(--green)' }} />
              {status}
            </span>
          </div>
          <span
            className="featured-link mono"
            style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)', fontSize: '0.8rem', whiteSpace: 'nowrap' }}
          >
            {hostOf(link)} <ExternalIcon />
          </span>
        </div>

        <p style={{ color: 'var(--text)', fontSize: '1rem', lineHeight: 1.65 }}>{summary}</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>{detail}</p>

        <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
          {tags.map((tag) => (
            <li
              key={tag}
              className="mono"
              style={{
                background: 'var(--green-bg)',
                border: '1px solid var(--green-border)',
                padding: '2px 8px',
                fontSize: '0.75rem',
                color: 'var(--green)',
              }}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.a>
  )
}

function ProjectCard({ title, description, image, link, tags, index }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: EASE_OUT }}
      style={{
        background: 'rgba(20, 20, 20, 0.7)',
        border: '1px solid rgba(255,255,255,0.07)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ overflow: 'hidden', aspectRatio: '16/9', background: 'rgba(30,30,30,0.5)' }}>
        <img
          src={image}
          alt=""
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.25rem 0.75rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{title}</h3>
          <span
            className="project-link mono"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {hostOf(link)} <ExternalIcon />
          </span>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.92rem', lineHeight: 1.65, flex: 1 }}>
          {description}
        </p>

        <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {tags.map((tag) => (
            <li
              key={tag}
              className="mono"
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                padding: '2px 8px',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.a>
  )
}

export default function Projects() {
  return (
    <section
      id="projekty"
      className="dot-grid"
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeading>Co jsem postavil</SectionHeading>

        <FeaturedProject {...FEATURED} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem',
        }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .project-card { transition: border-color 0.2s, background 0.2s; }
        .project-card img { transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .project-card .project-link { transition: color 0.2s; }
        .project-card:hover { border-color: var(--border-strong) !important; background: var(--surface-2) !important; }
        .project-card:hover img { transform: scale(1.03); }
        .project-card:hover .project-link { color: var(--text) !important; }
        .featured-card { transition: border-color 0.2s; }
        .featured-card img { transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .featured-card .featured-link { transition: color 0.2s; }
        .featured-card:hover { border-color: var(--green) !important; }
        .featured-card:hover img { transform: scale(1.02); }
        .featured-card:hover .featured-link { color: var(--green) !important; }
      `}</style>
    </section>
  )
}
