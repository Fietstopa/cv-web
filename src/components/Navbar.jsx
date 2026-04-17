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
    window.addEventListener('scroll', onScroll)
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
            ? 'rgba(12, 12, 12, 0.92)'
            : 'rgba(12, 12, 12, 0.6)',
          backdropFilter: 'blur(16px)',
          borderBottom: scrolled
            ? '1px solid rgba(127, 0, 255, 0.15)'
            : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
          <span className="gradient-text">Bohdan</span>
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
            href="cv.pdf"
            download="Bohdan-Myshko-CV.pdf"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(127,0,255,0.45)' }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'linear-gradient(135deg, #7f00ff, #e100ff)',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9rem',
              padding: '8px 16px',
              borderRadius: '8px',
              letterSpacing: '0.02em',
            }}
            data-cursor-hover
          >
            .pdf
          </motion.a>
        </nav>

        {/* Hamburger */}
        <button
          aria-label="Menu"
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
                backgroundColor: 'white',
                borderRadius: '2px',
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
              background: 'rgba(10, 10, 10, 0.97)',
              backdropFilter: 'blur(20px)',
              borderLeft: '1px solid rgba(127, 0, 255, 0.2)',
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
                  color: 'white',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  display: 'block',
                }}
                whileHover={{ x: 8, color: '#9a06df' }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="cv.pdf"
              download="Bohdan-Myshko-CV.pdf"
              onClick={handleLink}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.3 }}
              style={{
                marginTop: '1rem',
                background: 'linear-gradient(135deg, #7f00ff, #e100ff)',
                color: 'white',
                fontWeight: 600,
                fontSize: '1.1rem',
                padding: '0.8rem 1.4rem',
                borderRadius: '10px',
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
        fontSize: '1rem',
        fontWeight: 500,
        color: 'var(--text-muted)',
        position: 'relative',
      }}
      whileHover={{ color: '#ffffff' }}
      transition={{ duration: 0.15 }}
    >
      {children}
      <motion.span
        style={{
          position: 'absolute',
          bottom: '-3px',
          left: 0,
          height: '1.5px',
          background: 'linear-gradient(to right, #7f00ff, #e100ff)',
          width: '0%',
        }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.25 }}
      />
    </motion.a>
  )
}
