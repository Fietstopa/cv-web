import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const SKILLS = [
  { name: 'React', icon: 'img/react.svg' },
  { name: 'Tailwind', icon: 'img/tailwind.svg' },
  { name: 'Figma', icon: 'img/figma.svg' },
  { name: 'HTML', icon: 'img/html.svg' },
  { name: 'CSS', icon: 'img/css.svg' },
  { name: 'JavaScript', icon: 'img/js.svg' },
  { name: 'C++', icon: 'img/cpp.svg' },
  { name: 'Python', icon: 'img/python.svg' },
  { name: 'Kotlin', icon: 'img/kotlin.svg' },
  { name: 'Node.js', icon: 'img/node.svg' },
  { name: 'MongoDB', icon: 'img/mongo.svg' },
  { name: 'SQL', icon: 'img/db.svg' },
  { name: 'Photoshop', icon: 'img/ps.svg' },
  { name: 'Illustrator', icon: 'img/ai.svg' },
]

function SkillBadge({ name, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: 'backOut' }}
      whileHover={{ scale: 1.08, y: -3 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(30, 30, 30, 0.7)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '10px',
        padding: '10px 16px',
        fontSize: '0.9rem',
        fontWeight: 500,
        transition: 'border-color 0.2s',
      }}
      data-cursor-hover
    >
      <img
        src={icon}
        alt={name}
        style={{ width: '20px', height: '20px', objectFit: 'contain' }}
        onError={(e) => { e.target.style.display = 'none' }}
      />
      <span>{name}</span>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="aboutmi" ref={ref} className="grid-bg" style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ color: 'var(--accent-mid)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.5rem' }}
      >
        {'<O mně />'}
      </motion.p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
        gap: 'clamp(2rem, 5vw, 4rem)',
        alignItems: 'start',
      }}>
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
          }}>
            Student &amp; <span className="gradient-text">developer</span>
            <br />z Brna
          </h2>

          <div style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p>
              Studuji <strong style={{ color: 'white' }}>Otevřenou Informatiku</strong> na Mendelově
              univerzitě v Brně. Baví mě tvořit věci – od webových aplikací přes grafiku až po 3D tisk.
            </p>
            <p>
              Dělám <strong style={{ color: 'white' }}>frontend i backend</strong> a také aplikace
              v <strong style={{ color: 'white' }}>Kotlinu</strong>. Snažím se o čistý kód a dobrý user experience.
            </p>
            <p>
              Mimo programování se věnuju fotografii, hraju na piano a čas od času hraju hry.
            </p>
          </div>

        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 600,
            color: 'var(--text-muted)',
            marginBottom: '1.2rem',
            letterSpacing: '0.05em',
          }}>
            TECHNOLOGIE &amp; NÁSTROJE
          </h3>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
          }}>
            {SKILLS.map((skill, i) => (
              <SkillBadge key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}
