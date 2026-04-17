import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: 'Web pro Fušku',
    description:
      'Navrhl a postavil jsem landing page pro startupovou aplikaci Fuška. Responzivní design, e-mailový formulář, čistý kód a rychlé načítání.',
    image: '/img/fuska.png',
    link: 'https://fuska.net',
    tags: ['React', 'CSS', 'EmailJS'],
  },
  {
    title: 'Fotostudio Web',
    description:
      'Webová React stránka s rezervačním systémem pro fotostudio Imagia v Brně.',
    image: '/img/imagia.png',
    link: 'https://imagiafotostudio.cz',
    tags: ['React', 'Reservation', 'UI/UX'],
  },
  {
    title: 'Trading API',
    description:
      'REST API napsané v Node.js, které porovnává ceny kryptoměn na 10 burzách a ukládá je do MongoDB.',
    image: '/img/trading.jpg',
    link: 'https://github.com/Fietstopa/Crypto-price-tracker',
    tags: ['Node.js', 'MongoDB', 'REST API'],
  },
  {
    title: 'Cinemati',
    description:
      'Web pro zobrazení, ukládání a doporučení filmů s registrací přes Firebase.',
    image: '/img/cinemati.png',
    link: 'https://cinemati.vercel.app',
    tags: ['React', 'Firebase', 'TMDB API'],
  },
]

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

function ProjectCard({ title, description, image, link, tags, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      style={{
        background: 'rgba(20, 20, 20, 0.7)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s',
      }}
      data-cursor-hover
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
        <motion.img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(14,14,14,0.85) 100%)',
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.2 }}>{title}</h3>
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              color: 'var(--accent-mid)',
              fontSize: '0.8rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            whileHover={{ color: '#e100ff' }}
          >
            Otevřít <ExternalIcon />
          </motion.a>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.92rem', lineHeight: 1.65, flex: 1 }}>
          {description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: 'rgba(127,0,255,0.12)',
                border: '1px solid rgba(127,0,255,0.25)',
                borderRadius: '6px',
                padding: '3px 10px',
                fontSize: '0.78rem',
                color: '#c060ff',
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
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
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ color: 'var(--accent-mid)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.5rem' }}
        >
          {'<Projekty />'}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '3rem',
          }}
        >
          Co jsem <span className="gradient-text">postavil</span>
        </motion.h2>

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
    </section>
  )
}
