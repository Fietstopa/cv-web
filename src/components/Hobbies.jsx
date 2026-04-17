import { motion } from 'framer-motion'

const HOBBIES = [
  {
    icon: '📷',
    title: 'Fotografie',
    description: 'Baví mě zachycovat momenty – portréty, krajiny i street fotografie. Pracuju s mirrorless výbavou a post-processing v Adobe Lightroom.',
    featured: false,
  },
  {
    icon: '🎹',
    title: 'Piano',
    description: 'Hraju na piano ve volném čase – od klasiky po filmové soundtracky. Hudba mi pomáhá odpočinout od obrazovky.',
    featured: false,
  },
  {
    icon: '🎮',
    title: 'Gaming',
    description: 'Čas od času si zahraju – převážně single-player příběhové hry. Víc mě ale zajímá technika za nimi než samotné hraní.',
    featured: false,
  },
]

const PRINT_HIGHLIGHTS = [
  { label: 'Tiskárna', value: 'Bambu Lab P1S' },
  { label: 'Materiály', value: 'PLA, PETG, ABS, TPU' },
  { label: 'Software', value: 'Bambu Studio, Fusion 360' },
  { label: 'Zaměření', value: 'Funkční díly & prototypy' },
]

const HOMELAB_SERVICES = [
  { icon: '💾', label: 'Úložiště', value: '4TB HDD' },
  { icon: '⚙️', label: 'Procesor', value: 'Intel Core i7-7700K' },
  { icon: '🧠', label: 'RAM', value: '32 GB DDR4' },
  { icon: '🐧', label: 'OS', value: 'Ubuntu Server' },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="grid-bg">
      <div style={{
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
      {/* Section header */}
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
        {'<Koníčky />'}
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
        Co dělám <span className="gradient-text">mimo kód</span>
      </motion.h2>

      {/* Hobby cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: '1rem',
          marginBottom: '4rem',
        }}
      >
        {HOBBIES.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            style={{
              background: 'rgba(20, 20, 20, 0.7)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '14px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem',
            }}
          >
            <span style={{ fontSize: '2rem' }}>{h.icon}</span>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{h.title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: '0.9rem', lineHeight: 1.65 }}>
              {h.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ── 3D tisk – featured block ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          background: 'rgba(18, 18, 18, 0.85)',
          border: '1px solid rgba(127,0,255,0.25)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 0 60px rgba(127,0,255,0.08)',
        }}
      >
        {/* Top accent bar */}
        <div style={{
          height: '3px',
          background: 'linear-gradient(to right, #7f00ff, #e100ff)',
        }} />

        <div style={{
          padding: 'clamp(1.8rem, 4vw, 2.8rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 'clamp(2rem, 5vw, 3.5rem)',
          alignItems: 'center',
        }}>
          {/* Left – text */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(127,0,255,0.12)',
              border: '1px solid rgba(127,0,255,0.3)',
              borderRadius: '999px',
              padding: '4px 14px',
              fontSize: '0.78rem',
              color: '#c060ff',
              fontWeight: 600,
              letterSpacing: '0.05em',
              marginBottom: '1.2rem',
            }}>
              <span style={{
                width: '7px', height: '7px',
                borderRadius: '50%',
                background: '#9a06df',
                display: 'inline-block',
                animation: 'pulse3d 2s infinite',
              }} />
              FEATURED HOBBY
            </div>

            <h3 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}>
              🖨️ 3D tisk
            </h3>

            <p style={{
              color: 'rgba(255,255,255,0.68)',
              lineHeight: 1.8,
              fontSize: '1rem',
              marginBottom: '1rem',
            }}>
              Před dvěma roky jsem si koupil 3D tiskárnu, protože se rozbil jeden otravný díl na
              okenních roletách. Postupně kvůli degradaci materiálu se stejný dílek začalničit
              u všech rolet a celkově jich doma máme kolem dvaceti – takže bylo finančně levnější
              vytisknout náhradní díly než objednávat nové rolety.
            </p>
            <p style={{
              color: 'rgba(255,255,255,0.68)',
              lineHeight: 1.8,
              fontSize: '1rem',
            }}>
              Omylem jsem se tím dostal do hobby printingu různých miniaturních modelů, což mě
              baví dodnes.
            </p>
          </div>

          {/* Right – specs grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {/* Photo grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px',
              marginBottom: '0.8rem',
            }}>
              {['3dprint-1.webp','3dprint-2.jpg','3dprint-3.jpg','3dprint-4.jpg'].map((file, i) => (
                <motion.div
                  key={file}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    aspectRatio: '4/3',
                    background: 'rgba(30,30,30,0.5)',
                  }}
                >
                  <img
                    src={`img/${file}`}
                    alt={`3D tisk ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </motion.div>

      {/* ── Homelab – featured block ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          marginTop: '2rem',
          background: 'rgba(18, 18, 18, 0.85)',
          border: '1px solid rgba(127,0,255,0.25)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 0 60px rgba(127,0,255,0.08)',
        }}
      >
        {/* Top accent bar */}
        <div style={{ height: '3px', background: 'linear-gradient(to right, #7f00ff, #e100ff)' }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: 'clamp(2rem, 5vw, 3.5rem)',
          alignItems: 'stretch',
        }}>
          {/* Left – image */}
          <div style={{ overflow: 'hidden', minHeight: '280px' }}>
            <motion.img
              src="img/homelab.jpg"
              alt="Homelab server"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.85 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Right – text + specs */}
          <div style={{ padding: 'clamp(1.8rem, 4vw, 2.8rem)', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {/* Left – text */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(127,0,255,0.12)',
              border: '1px solid rgba(127,0,255,0.3)',
              borderRadius: '999px',
              padding: '4px 14px',
              fontSize: '0.78rem',
              color: '#c060ff',
              fontWeight: 600,
              letterSpacing: '0.05em',
              marginBottom: '1.2rem',
            }}>
              <span style={{
                width: '7px', height: '7px',
                borderRadius: '50%',
                background: '#9a06df',
                display: 'inline-block',
                animation: 'pulse3d 2s infinite',
              }} />
              FEATURED HOBBY
            </div>

            <h3 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}>
              🖥️ Homelab Server
            </h3>

            <p style={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1rem' }}>
              V pokoji mám Ubuntu server, který slouží jako homelab. Hostuju na něm různé
              testovací aplikace a self-hosted služby – od správy fotek přes organizaci dokumentů
              až po Minecraft server pro kamarády.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.8, fontSize: '1rem' }}>
              Baví mě spravovat server, experimentovat s novými službami a mít vlastní
              infrastrukturu pod kontrolou.
            </p>
          </div>

          {/* Right – specs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <p style={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              marginBottom: '0.4rem',
            }}>
              SPECS
            </p>
            {HOMELAB_SERVICES.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.85rem 1.1rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px',
                  gap: '1rem',
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span>{s.icon}</span> {s.label}
                </span>
                <span style={{ fontWeight: 600, fontSize: '0.92rem', color: 'white', textAlign: 'right' }}>
                  {s.value}
                </span>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse3d {
          0%, 100% { box-shadow: 0 0 0 0 rgba(154,6,223,0.5) }
          50% { box-shadow: 0 0 0 5px rgba(154,6,223,0) }
        }
      `}</style>
      </div>
    </section>
  )
}
