import SectionHeading, { Reveal } from './SectionHeading'

const EXPERIENCE = [
  {
    period: '4 měsíce',
    role: 'Junior Web Developer',
    company: 'FOX Media s.r.o. – Praha',
    description:
      'Navrhoval jsem designy ve Figmě od nuly a vyvíjel komponenty do jejich in-house CMS.',
    image: 'img/foxmedia.png',
  },
]

function ExpCard({ period, role, company, description, image }) {
  return (
    <Reveal
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
      }}
    >
      <div style={{ minHeight: '200px', overflow: 'hidden', background: 'var(--surface-2)' }}>
        <img
          src={image}
          alt=""
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
        />
      </div>
      <div style={{ padding: 'clamp(1.4rem, 3vw, 2rem)', alignSelf: 'center' }}>
        <span className="mono" style={{
          display: 'inline-block',
          background: 'var(--surface-2)',
          border: '1px solid var(--border)',
          padding: '2px 8px',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          marginBottom: '0.8rem',
        }}>
          {period}
        </span>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '0.3rem', lineHeight: 1.3 }}>
          {role}
        </h3>
        <p style={{ color: 'var(--accent-text)', fontSize: '0.92rem', fontWeight: 500, marginBottom: '0.8rem' }}>
          {company}
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '55ch' }}>
          {description}
        </p>
      </div>
    </Reveal>
  )
}

export default function Experience() {
  return (
    <section id="zkusenosti" className="dot-grid" style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <SectionHeading>Pracovní zkušenosti</SectionHeading>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px' }}>
          {EXPERIENCE.map((item) => (
            <ExpCard key={item.company} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
