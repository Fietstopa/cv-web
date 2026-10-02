import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ROLES = ['programátor', 'grafický designér', 'fotograf', 'IT Student']

function useTypewriter(words, typeSpeed = 90, deleteSpeed = 50, pauseMs = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const word = words[wordIndex]
    let timeout

    if (typing) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), typeSpeed)
      } else {
        timeout = setTimeout(() => setTyping(false), pauseMs)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed)
      } else {
        setWordIndex((i) => (i + 1) % words.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, wordIndex, words, typeSpeed, deleteSpeed, pauseMs])

  return displayed
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section
      id="home"
      className="dot-grid"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'var(--nav-height)',
        paddingInline: 'clamp(1.5rem, 6vw, 5rem)',
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: '900px', width: '100%' }}
      >
        {/* Name */}
        <motion.h1 variants={itemVariants} style={{
          fontSize: 'clamp(2rem, 8.5vw, 5.5rem)',
          whiteSpace: 'nowrap',
          fontWeight: 600,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          marginBottom: '0.6rem',
        }}>
          Bohdan Myshko
        </motion.h1>

        {/* Typewriter */}
        <motion.div variants={itemVariants} style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
          fontWeight: 500,
          letterSpacing: '-0.02em',
          color: 'var(--text-muted)',
          marginBottom: '1.5rem',
          minHeight: '1.2em',
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
        }}>
          <span className="sr-only">{ROLES.join(', ')}</span>
          <span aria-hidden="true">{role}</span>
          <span aria-hidden="true" style={{
            display: 'inline-block',
            width: '3px',
            height: '1em',
            background: 'var(--accent)',
            animation: 'blink 1s step-end infinite',
            marginLeft: '2px',
            verticalAlign: 'text-bottom',
          }} />
        </motion.div>

        <motion.p variants={itemVariants} style={{
          color: 'rgba(255,255,255,0.72)',
          fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
          lineHeight: 1.7,
          maxWidth: '46ch',
          marginBottom: '2.5rem',
        }}>
          Studuju Otevřenou informatiku na Mendelově univerzitě v Brně a stavím weby, aplikace
          a grafiku.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <motion.a
            href="#projekty"
            style={{
              display: 'inline-block',
              background: 'var(--text)',
              color: 'var(--bg)',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '13px 28px',
              letterSpacing: '0.02em',
            }}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0, scale: 0.98 }}
          >
            Moje projekty
          </motion.a>
          <motion.a
            href="#kontakt"
            style={{
              display: 'inline-block',
              background: 'var(--bg)',
              color: 'var(--text)',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '13px 28px',
              border: '1px solid rgba(255,255,255,0.15)',
              letterSpacing: '0.02em',
            }}
            whileHover={{
              y: -2,
              background: 'var(--surface-2)',
            }}
            whileTap={{ y: 0, scale: 0.98 }}
          >
            Kontaktuj mě
          </motion.a>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
      `}</style>
    </section>
  )
}
