import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const EDUCATION = [
  {
    years: '2017 – 2019',
    school: 'ZŠ Morávkova 40',
    description: 'Základní škola – základ vzdělání.',
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
    school: 'Mendelova Univerzita – Otevřená Informatika',
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
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
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
          alt={school}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }}
        />
      </div>
      <div style={{ padding: '1.2rem' }}>
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
          {years}{active ? ' · aktuálně' : ''}
        </span>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', lineHeight: 1.35 }}>
          {school}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: '0.88rem', lineHeight: 1.65 }}>
          {description}
        </p>
      </div>
    </motion.div>
  )
}

function Dot({ active, inView, delay }) {
  return (
    <motion.div
      animate={inView ? { scale: [0, 1.4, 1] } : {}}
      transition={{ duration: 0.45, delay }}
      style={{
        width: active ? '18px' : '13px',
        height: active ? '18px' : '13px',
        borderRadius: '50%',
        background: active ? 'linear-gradient(135deg, #7f00ff, #e100ff)' : 'rgba(127,0,255,0.5)',
        border: active ? '3px solid rgba(225,0,255,0.35)' : '2px solid rgba(127,0,255,0.3)',
        boxShadow: active ? '0 0 20px rgba(127,0,255,0.5)' : 'none',
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
  const delay = index * 0.12

  const cardEl = <EduCard years={years} school={school} description={description} image={image} active={active} />

  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay }}
        style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', marginBottom: '2rem' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: '1.2rem' }}>
          <Dot active={active} inView={inView} delay={delay + 0.2} />
        </div>
        <div style={{ flex: 1 }}>{cardEl}</div>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
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
        <Dot active={active} inView={inView} delay={delay + 0.2} />
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
    <section id="vzdelani" className="grid-bg">
      <div style={{
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
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
        {'<Vzdělání />'}
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
          marginBottom: '4rem',
        }}
      >
        Moje <span className="gradient-text">vzdělání</span>
      </motion.h2>

      <div style={{ position: 'relative' }}>
        {/* Center line (desktop only) */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 'calc(50% - 1px)',
            width: '2px',
            background: 'linear-gradient(to bottom, transparent, rgba(127,0,255,0.45) 8%, rgba(127,0,255,0.4) 92%, transparent)',
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
            width: '2px',
            background: 'linear-gradient(to bottom, transparent, rgba(127,0,255,0.45) 8%, rgba(127,0,255,0.4) 92%, transparent)',
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
