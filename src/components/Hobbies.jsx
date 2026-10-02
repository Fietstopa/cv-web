import SectionHeading, { Reveal } from './SectionHeading'

const HOBBIES = [
  {
    title: 'Fotografie',
    description: 'Baví mě zachycovat momenty – portréty, krajiny i street fotografie. Pracuju s mirrorless výbavou a post-processing v Adobe Lightroom.',
  },
  {
    title: 'Piano',
    description: 'Hraju na piano ve volném čase – od klasiky po filmové soundtracky. Hudba mi pomáhá odpočinout od obrazovky.',
  },
  {
    title: 'Gaming',
    description: 'Čas od času si zahraju – převážně single-player příběhové hry. Víc mě ale zajímá technika za nimi než samotné hraní.',
  },
]

const HOMELAB_SPECS = [
  { label: 'Úložiště', value: '4TB HDD' },
  { label: 'Procesor', value: 'Intel Core i7-7700K' },
  { label: 'RAM', value: '32 GB DDR4' },
  { label: 'OS', value: 'Ubuntu Server' },
]

const PRINT_PHOTOS = ['3dprint-1.webp', '3dprint-2.jpg', '3dprint-3.jpg', '3dprint-4.jpg']

const panelStyle = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  overflow: 'hidden',
}

const panelTitleStyle = {
  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: '-0.03em',
  marginBottom: '1rem',
}

const bodyStyle = {
  color: 'var(--text-muted)',
  lineHeight: 1.8,
  fontSize: '1rem',
  maxWidth: '62ch',
}

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 13v8H3V6h8" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

export default function Hobbies() {
  return (
    <section id="hobbies" className="grid-bg" style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <SectionHeading>Co dělám mimo kód</SectionHeading>

        {/* Short hobbies */}
        <Reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '2rem clamp(1.5rem, 4vw, 3rem)',
            marginBottom: 'clamp(3.5rem, 7vw, 5rem)',
          }}
        >
          {HOBBIES.map((h) => (
            <div key={h.title} style={{ borderTop: '1px solid var(--border-strong)', paddingTop: '1.2rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{h.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                {h.description}
              </p>
            </div>
          ))}
        </Reveal>

        {/* ── 3D tisk ── */}
        <Reveal style={panelStyle}>
          <div style={{
            padding: 'clamp(1.8rem, 4vw, 2.8rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(2rem, 5vw, 3.5rem)',
            alignItems: 'start',
          }}>
            <div>
              <h3 style={panelTitleStyle}>3D tisk</h3>
              <p style={{ ...bodyStyle, marginBottom: '1rem' }}>
                Před dvěma roky jsem si koupil 3D tiskárnu, protože se rozbil jeden otravný díl na
                okenních roletách. Postupně kvůli degradaci materiálu se stejný dílek začal ničit
                u všech rolet a celkově jich doma máme kolem dvaceti – takže bylo finančně levnější
                vytisknout náhradní díly než objednávat nové rolety.
              </p>
              <p style={bodyStyle}>
                Omylem jsem se tím dostal do hobby printingu různých miniaturních modelů, což mě
                baví dodnes.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px',
            }}>
              {PRINT_PHOTOS.map((file) => (
                <div
                  key={file}
                  style={{
                    overflow: 'hidden',
                    aspectRatio: '4/3',
                    background: 'var(--surface-2)',
                  }}
                >
                  <img
                    src={`img/${file}`}
                    alt="Výtisk z 3D tiskárny"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Homelab ── */}
        <Reveal style={{ ...panelStyle, marginTop: '2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            alignItems: 'stretch',
          }}>
            <div style={{ overflow: 'hidden', minHeight: '280px' }}>
              <img
                src="img/homelab.jpg"
                alt="Homelab server"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.85 }}
              />
            </div>

            <div style={{ padding: 'clamp(1.8rem, 4vw, 2.8rem)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h3 style={panelTitleStyle}>Homelab server</h3>

                <p style={{ ...bodyStyle, marginBottom: '1rem' }}>
                  V pokoji mám Ubuntu server, který slouží jako homelab. Hostuju na něm různé
                  testovací aplikace a self-hosted služby – od správy fotek přes organizaci dokumentů
                  až po Minecraft server pro kamarády.
                </p>
                <p style={{ ...bodyStyle, marginBottom: '1.4rem' }}>
                  Baví mě spravovat server, experimentovat s novými službami a mít vlastní
                  infrastrukturu pod kontrolou.
                </p>
                <a
                  href="https://mausserver.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="homelab-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '0.7rem 1.2rem',
                    background: 'var(--text)',
                    color: 'var(--bg)',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                  }}
                >
                  mausserver.cz <ExternalIcon />
                </a>
              </div>

              <div>
                <h4 className="label" style={{ marginBottom: '0.6rem' }}>
                  Hardware
                </h4>
                <dl>
                  {HOMELAB_SPECS.map((s) => (
                    <div
                      key={s.label}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        gap: '1rem',
                        padding: '0.7rem 0',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      <dt style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{s.label}</dt>
                      <dd className="mono" style={{ fontSize: '0.88rem', textAlign: 'right' }}>{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .homelab-link { transition: background 0.2s; }
        .homelab-link:hover { background: #fff !important; }
      `}</style>
    </section>
  )
}
