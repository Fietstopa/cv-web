import SectionHeading, { Reveal } from './SectionHeading'

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

function SkillBadge({ name, icon }) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        padding: '8px 14px',
        fontSize: '0.88rem',
        fontWeight: 400,
      }}
    >
      <img
        src={icon}
        alt=""
        width="20"
        height="20"
        style={{ width: '20px', height: '20px', objectFit: 'contain' }}
        onError={(e) => { e.target.style.display = 'none' }}
      />
      <span>{name}</span>
    </li>
  )
}

export default function About() {
  return (
    <section id="aboutmi" className="grid-bg" style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
        gap: 'clamp(2rem, 5vw, 4rem)',
        alignItems: 'start',
      }}>
        {/* Bio */}
        <div>
          <SectionHeading style={{ lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Student &amp; developer
            <br />z Brna
          </SectionHeading>

          <Reveal style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '62ch' }}>
            <p>
              Studuji <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Otevřenou informatiku</strong> na Mendelově
              univerzitě v Brně. Baví mě tvořit věci – od webových aplikací přes grafiku až po 3D tisk.
            </p>
            <p>
              Dělám <strong style={{ color: 'var(--text)', fontWeight: 500 }}>frontend i backend</strong> a píšu aplikace
              v <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Kotlinu</strong>.
            </p>
            <p>
              Mimo programování se věnuju fotografii, hraju na piano a čas od času hraju hry.
            </p>
          </Reveal>
        </div>

        {/* Skills */}
        <Reveal delay={0.1} style={{ paddingTop: 'clamp(0rem, 1vw, 0.75rem)' }}>
          <h3 className="label" style={{ marginBottom: '1.2rem' }}>
            Technologie a nástroje
          </h3>

          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
          }}>
            {SKILLS.map((skill) => (
              <SkillBadge key={skill.name} {...skill} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
