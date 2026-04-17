import { motion } from 'framer-motion'

const FOOTER_LINKS = [
  { label: 'Domov', href: '#' },
  { label: 'O mně', href: '#aboutmi' },
  { label: 'Projekty', href: '#projekty' },
  { label: 'Vzdělání', href: '#vzdelani' },
  { label: 'Koníčky', href: '#hobbies' },
  { label: 'Kontakt', href: '#kontakt' },
]

const SOCIAL = [
  { name: 'GitHub', icon: 'img/gh.png', href: 'https://github.com/Fietstopa' },
  { name: 'LinkedIn', icon: 'img/linkedin.png', href: 'https://www.linkedin.com/in/bohdan-myshko-716577206/' },
  { name: 'Instagram', icon: 'img/ig.png', href: 'https://www.instagram.com/bohdxn.x/' },
  { name: 'Facebook', icon: 'img/fb.png', href: 'https://www.facebook.com/profile.php?id=100014153014796' },
]

export default function Footer() {
  return (
    <footer style={{
      background: '#0a0a0a',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 5rem)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <a href="#" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.3rem', fontWeight: 700 }}>
                <span className="gradient-text">Bohdan</span>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>Myshko</span>
              </span>
            </a>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Student &amp; developer z Brna.
              <br />
              Tvořím weby, grafiku a pišu kód.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              NAVIGACE
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {FOOTER_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem' }}
                  whileHover={{ color: 'white', x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              SOCIÁLNÍ SÍTĚ
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.92rem',
                  }}
                  whileHover={{ color: 'white', x: 4 }}
                  transition={{ duration: 0.15 }}
                  data-cursor-hover
                >
                  <img src={s.icon} alt={s.name} style={{ width: '18px', height: '18px', objectFit: 'contain', opacity: 0.6 }} />
                  {s.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} Bohdan Myshko. Všechna práva vyhrazena.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.82rem' }}>
            Made with{' '}
            <span style={{ color: 'var(--accent-mid)' }}>♥</span>
            {' '}by Bohdanidze
          </p>
        </div>
      </div>
    </footer>
  )
}
