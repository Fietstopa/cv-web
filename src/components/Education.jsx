import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import SectionHeading, { EASE_OUT } from './SectionHeading'

const EDUCATION = [
  {
    years: '2017 – 2019',
    school: 'ZŠ Morávkova 40',
    image: 'img/moravkova.png',
    side: 'left',
    active: false,
  },
  {
    years: '2019 – 2023',
    school: 'Gymnázium a SŠE Vyškov',
    description: 'Maturitní obor s důrazem na informatiku, matematiku a ekonomii. Čtyřleté studium zakončené maturitní zkouškou.',
    image: 'img/gycovid.png',
    side: 'right',
    active: false,
  },
  {
    years: '2023 – 2026',
    school: 'Mendelova univerzita – Otevřená informatika',
    description: 'Bakalářský program zaměřený na softwarové inženýrství, databáze a moderní technologie. PEF – Provozně ekonomická fakulta.',
    image: 'img/pef.png',
    side: 'left',
    active: true,
  },
]

function useIsMobile(bp = 680) {
  const [mobile, setMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(`(max-width: ${bp}px)`).matches : false
  )
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${bp}px)`)
    const handler = (e) => setMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [bp])
  return mobile
}

function EduCard({ years, school, description, image, active }) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        border: `1px solid ${active ? 'var(--accent-border)' : 'var(--border)'}`,
        overflow: 'hidden',
      }}
    >
      <div style={{ height: '200px', overflow: 'hidden', background: 'var(--surface-2)' }}>
        <img
          src={image}
          alt=""
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
        />
      </div>
      <div style={{ padding: '1.2rem' }}>
        <span className="mono" style={{
          display: 'inline-block',
          background: active ? 'var(--accent-bg)' : 'var(--surface-2)',
          border: `1px solid ${active ? 'var(--accent-border)' : 'var(--border)'}`,
          padding: '2px 8px',
          fontSize: '0.75rem',
          color: active ? 'var(--accent-text)' : 'var(--text-muted)',
          marginBottom: '0.8rem',
        }}>
          {years}{active ? ' · aktuálně' : ''}
        </span>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '0.4rem', lineHeight: 1.35 }}>
          {school}
        </h3>
        {description && (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65 }}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

function Dot({ active }) {
  return (
    <div
      style={{
        width: active ? '16px' : '12px',
        height: active ? '16px' : '12px',
        background: active ? 'var(--accent)' : 'var(--bg)',
        border: `1px solid ${active ? 'var(--accent)' : 'var(--border-strong)'}`,
        outline: active ? '4px solid var(--accent-bg)' : 'none',
        flexShrink: 0,
      }}
    />
  )
}

function TimelineItem({ item, index }) {
  const { years, school, description, image, side, active } = item
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isMobile = useIsMobile()
  const isLeft = side === 'left'
  const delay = index * 0.08

  const cardEl = <EduCard years={years} school={school} description={description} image={image} active={active} />

  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE_OUT, delay }}
        style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', marginBottom: '2rem' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: '1.2rem' }}>
          <Dot active={active} />
        </div>
        <div style={{ flex: 1 }}>{cardEl}</div>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE_OUT, delay }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 48px 1fr',
        marginBottom: '2.5rem',
        alignItems: 'start',
      }}
    >
      {/* Left cell */}
      <div style={{ paddingRight: '2rem' }}>
        {isLeft && cardEl}
      </div>

      {/* Dot */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '1.2rem' }}>
        <Dot active={active} />
      </div>

      {/* Right cell */}
      <div style={{ paddingLeft: '2rem' }}>
        {!isLeft && cardEl}
      </div>
    </motion.div>
  )
}

export default function Education() {
  const isMobile = useIsMobile()

  return (
    <section id="vzdelani" className="grid-bg" style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}>
      <SectionHeading style={{ marginBottom: '4rem' }}>Vzdělání</SectionHeading>

      <div style={{ position: 'relative' }}>
        {/* Center line (desktop only) */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            width: '1px',
            background: 'var(--border-strong)',
            pointerEvents: 'none',
          }} />
        )}
        {/* Left line (mobile only) */}
        {isMobile && (
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '6px',
            width: '1px',
            background: 'var(--border-strong)',
            pointerEvents: 'none',
          }} />
        )}

        {EDUCATION.map((item, i) => (
          <TimelineItem key={item.school} item={item} index={i} />
        ))}
      </div>
      </div>
    </section>
  )
}
