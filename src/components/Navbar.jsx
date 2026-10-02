import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Domov', href: '#' },
  { label: 'O mně', href: '#aboutmi' },
  { label: 'Projekty', href: '#projekty' },
  { label: 'Vzdělání', href: '#vzdelani' },
  { label: 'Zkušenosti', href: '#zkusenosti' },
  { label: 'Hobby', href: '#/konicky' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = () => setOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(1.5rem, 5vw, 3rem)',
          background: scrolled
            ? 'rgba(0, 0, 0, 0.8)'
            : 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(16px)',
          borderBottom: scrolled
            ? '1px solid var(--border)'
            : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ fontWeight: 600, fontSize: '1.1rem', letterSpacing: '-0.03em' }}>
          <span>Bohdan</span>
          <span style={{ color: 'var(--text-muted)' }}>Myshko</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '2.2rem', alignItems: 'center' }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
          <motion.a
            href={`${import.meta.env.BASE_URL}bohdan_myshko_cv.pdf`}
            download="Bohdan-Myshko-CV.pdf"
            className="mono"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1 }}
            whileTap={{ y: 0, scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'var(--text)',
              color: 'var(--bg)',
              fontWeight: 600,
              fontSize: '0.9rem',
              padding: '8px 16px',
              letterSpacing: '0.02em',
            }}
          >
            cv.pdf
          </motion.a>
        </nav>

        {/* Hamburger */}
        <button
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="burger"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            padding: '6px',
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={
                open
                  ? i === 0
                    ? { rotate: 45, y: 7 }
                    : i === 1
                    ? { opacity: 0, scaleX: 0 }
                    : { rotate: -45, y: -7 }
                  : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.3 }}
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: 'var(--text)',
                transformOrigin: 'center',
              }}
            />
          ))}
        </button>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: 'min(320px, 85vw)',
              background: 'rgba(0, 0, 0, 0.97)',
              backdropFilter: 'blur(20px)',
              borderLeft: '1px solid var(--border)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2rem',
              gap: '0.5rem',
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleLink}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid var(--border)',
                  display: 'block',
                }}
                whileHover={{ x: 8, color: 'var(--text-muted)' }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={`${import.meta.env.BASE_URL}bohdan_myshko_cv.pdf`}
              download="Bohdan-Myshko-CV.pdf"
              className="mono"
            className="mono"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLink}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.3 }}
              style={{
                marginTop: '1rem',
                background: 'var(--text)',
                color: 'var(--bg)',
                fontWeight: 600,
                fontSize: '1.1rem',
                padding: '0.8rem 1.4rem',
                textAlign: 'center',
                letterSpacing: '0.02em',
                alignSelf: 'flex-start',
              }}
            >
              cv.pdf
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 998,
            }}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger { display: flex !important; }
        }
      `}</style>
    </>
  )
}

function NavLink({ href, children }) {
  return (
    <motion.a
      href={href}
      style={{
        fontSize: '0.92rem',
        fontWeight: 400,
        color: 'var(--text-muted)',
      }}
      whileHover={{ color: '#ededed' }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.a>
  )
}
