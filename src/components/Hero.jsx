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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
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
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow blobs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(127,0,255,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(225,0,255,0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: '900px', width: '100%' }}
      >
        {/* Greeting badge */}
        <motion.div variants={itemVariants}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(127,0,255,0.12)',
            border: '1px solid rgba(127,0,255,0.3)',
            borderRadius: '999px',
            padding: '5px 16px',
            fontSize: '0.85rem',
            color: '#c060ff',
            letterSpacing: '0.05em',
            marginBottom: '1.5rem',
          }}>
            <span style={{
              width: '7px', height: '7px',
              borderRadius: '50%',
              background: '#9a06df',
              display: 'inline-block',
              animation: 'pulse 2s infinite',
            }} />
            Ahoj, vítej na mém portfóliu
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={itemVariants} style={{
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          marginBottom: '0.4rem',
        }}>
          Jsem{' '}
          <span className="gradient-text">Bohdan Myshko</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div variants={itemVariants} style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
          fontWeight: 600,
          color: 'var(--text-muted)',
          marginBottom: '2rem',
          minHeight: '1.2em',
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
        }}>
          <span>{role}</span>
          <span style={{
            display: 'inline-block',
            width: '3px',
            height: '1em',
            background: 'linear-gradient(to bottom, #7f00ff, #e100ff)',
            borderRadius: '2px',
            animation: 'blink 1s step-end infinite',
            marginLeft: '2px',
            verticalAlign: 'text-bottom',
          }} />
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <motion.a
            href="#projekty"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #7f00ff, #e100ff)',
              color: 'white',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '13px 28px',
              borderRadius: '10px',
              letterSpacing: '0.02em',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(127,0,255,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            Moje projekty
          </motion.a>
          <motion.a
            href="#kontakt"
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: 'white',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '13px 28px',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.15)',
              letterSpacing: '0.02em',
            }}
            whileHover={{
              scale: 1.04,
              borderColor: 'rgba(127,0,255,0.5)',
              background: 'rgba(127,0,255,0.08)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            Kontaktuj mě
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--text-muted)',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
        }}
      >
        <span>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '30px',
            background: 'linear-gradient(to bottom, #7f00ff, transparent)',
          }}
        />
      </motion.div>

      <style>{`
        @keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(154, 6, 223, 0.5) }
          50% { box-shadow: 0 0 0 5px rgba(154, 6, 223, 0) }
        }
      `}</style>
    </section>
  )
}
