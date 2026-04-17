import { motion } from 'framer-motion'

const EXPERIENCE = [
  {
    period: '4 měsíce',
    role: 'Junior Web Developer',
    company: 'FOX Media s.r.o. – Praha',
    description:
      'Navrhoval jsem designy ve Figmě od nuly a vyvíjel komponenty do jejich in-house CMS.',
    image: 'img/foxmedia.png',
    active: false,
  },
]

function ExpCard({ period, role, company, description, image, active }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.015 }}
      style={{
        background: 'rgba(20, 20, 20, 0.8)',
        border: `1px solid ${active ? 'rgba(127,0,255,0.35)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: active ? '0 0 40px rgba(127,0,255,0.1)' : 'none',
      }}
    >
      <div style={{ height: '200px', overflow: 'hidden', background: 'rgba(30,30,30,0.5)' }}>
        <img
          src={image}
          alt={company}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
        />
      </div>
      <div style={{ padding: '1.4rem' }}>
        <span style={{
          display: 'inline-block',
          background: active ? 'rgba(127,0,255,0.15)' : 'rgba(255,255,255,0.06)',
          border: `1px solid ${active ? 'rgba(127,0,255,0.35)' : 'rgba(255,255,255,0.1)'}`,
          borderRadius: '999px',
          padding: '2px 12px',
          fontSize: '0.78rem',
          color: active ? '#c060ff' : 'var(--text-muted)',
          marginBottom: '0.7rem',
          fontWeight: 600,
        }}>
          {period}
        </span>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.3rem', lineHeight: 1.35 }}>
          {role}
        </h3>
        <p style={{ color: 'var(--accent-mid)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.6rem' }}>
          {company}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.92rem', lineHeight: 1.65 }}>
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="zkusenosti" className="dot-grid" style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{
            color: 'var(--accent-mid)',
            fontSize: '0.9rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            marginBottom: '0.5rem',
          }}
        >
          {'<Zkušenosti />'}
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
          Moje <span className="gradient-text">zkušenosti</span>
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem',
        }}>
          {EXPERIENCE.map((item) => (
            <ExpCard key={item.company} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
