import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'

// ============================================================
// Nastav tyto hodnoty po registraci na emailjs.com
// Nebo pouzij .env soubor (viz .env.example)
// ============================================================
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xxxxxxx'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'xxxxxxxxxxxxxxxxxxxx'

const SOCIAL = [
  {
    name: 'GitHub',
    icon: 'img/gh.png',
    href: 'https://github.com/Fietstopa',
    color: '#6e7681',
    hoverColor: '#e0e0e0',
  },
  {
    name: 'LinkedIn',
    icon: 'img/linkedin.png',
    href: 'https://www.linkedin.com/in/bohdan-mauser-716577206/',
    color: '#0a66c2',
    hoverColor: '#0a66c2',
  },
  {
    name: 'Instagram',
    icon: 'img/ig.png',
    href: 'https://www.instagram.com/bohdxn.x/',
    color: '#e1306c',
    hoverColor: '#e1306c',
  },
  {
    name: 'Facebook',
    icon: 'img/fb.png',
    href: 'https://www.facebook.com/profile.php?id=100014153014796',
    color: '#4267b2',
    hoverColor: '#4267b2',
  },
]

function FloatingInput({ id, label, type = 'text', value, onChange, required, textarea }) {
  const [focused, setFocused] = useState(false)
  const raised = focused || value.length > 0

  const sharedStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused ? 'rgba(127,0,255,0.6)' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: '10px',
    padding: textarea ? '2.2rem 1.1rem 0.9rem' : '1.6rem 1.1rem 0.5rem',
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'Space Grotesk, sans-serif',
    outline: 'none',
    resize: textarea ? 'vertical' : undefined,
    minHeight: textarea ? '130px' : undefined,
    transition: 'border-color 0.25s, box-shadow 0.25s',
    boxShadow: focused ? '0 0 0 3px rgba(127,0,255,0.12)' : 'none',
  }

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <motion.label
        htmlFor={id}
        animate={{
          top: raised ? '10px' : textarea ? '1.1rem' : '50%',
          translateY: raised ? '0%' : '-50%',
          fontSize: raised ? '0.72rem' : '0.95rem',
          color: raised ? (focused ? '#b060ff' : 'rgba(255,255,255,0.45)') : 'rgba(255,255,255,0.45)',
        }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'absolute',
          left: '1.1rem',
          pointerEvents: 'none',
          fontWeight: 500,
          letterSpacing: '0.02em',
          zIndex: 1,
        }}
      >
        {label}
        {required && <span style={{ color: '#9a06df' }}> *</span>}
      </motion.label>

      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          style={sharedStyle}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          style={sharedStyle}
        />
      )}
    </div>
  )
}

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          message: `Předmět: ${form.subject}\nEmail: ${form.email}\n\n${form.message}`,
          time: new Date().toLocaleString('cs-CZ'),
          reply_to: form.email,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section
      id="kontakt"
      className="dot-grid"
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ color: 'var(--accent-mid)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.5rem' }}
        >
          {'<Kontakt />'}
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
            marginBottom: '3.5rem',
          }}
        >
          Pojďme <span className="gradient-text">spolupracovat</span>
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'start',
        }}>

          {/* ── Left panel – info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              <p style={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Máš projekt, nápad nebo chceš jen říct ahoj? Napiš mi – odpovím co nejdříve.
              </p>
            </div>

            {/* Contact info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <InfoCard
                label="Email"
                value="bohdan@example.com"
                icon={<MailIcon />}
              />
              <InfoCard
                label="Dostupnost"
                value="Otevřen novým projektům"
                icon={<CalendarIcon />}
                highlight
              />
            </div>

            {/* Social links */}
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.9rem', letterSpacing: '0.05em' }}>
                NAJDEŠ MĚ TÉŽ NA
              </p>
              <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
                {SOCIAL.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '46px',
                      height: '46px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                    }}
                    data-cursor-hover
                  >
                    <img src={s.icon} alt={s.name} style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right panel – form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                background: 'rgba(16, 16, 16, 0.75)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                <FloatingInput
                  id="name"
                  label="Jméno"
                  value={form.name}
                  onChange={update('name')}
                  required
                />
                <FloatingInput
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  required
                />
              </div>

              <FloatingInput
                id="subject"
                label="Předmět"
                value={form.subject}
                onChange={update('subject')}
                required
              />

              <FloatingInput
                id="message"
                label="Zpráva"
                value={form.message}
                onChange={update('message')}
                required
                textarea
              />

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                whileHover={status === 'idle' ? { scale: 1.02, boxShadow: '0 0 30px rgba(127,0,255,0.3)' } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '10px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '0.03em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'background 0.3s, opacity 0.2s',
                  background:
                    status === 'success'
                      ? 'linear-gradient(135deg, #0d9f4f, #16c265)'
                      : status === 'error'
                      ? 'rgba(220, 38, 38, 0.8)'
                      : 'linear-gradient(135deg, #7f00ff, #e100ff)',
                  color: 'white',
                  opacity: status === 'sending' ? 0.7 : 1,
                }}
                data-cursor-hover
              >
                <AnimatePresence mode="wait">
                  {status === 'idle' && (
                    <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      Odeslat zprávu <SendIcon />
                    </motion.span>
                  )}
                  {status === 'sending' && (
                    <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SpinnerIcon /> Odesílám...
                    </motion.span>
                  )}
                  {status === 'success' && (
                    <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckIcon /> Zpráva odeslána!
                    </motion.span>
                  )}
                  {status === 'error' && (
                    <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Chyba – zkus to znovu
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', textAlign: 'center' }}>
                Email ti přijde přímo do mé schránky.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ label, value, icon, highlight }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.9rem 1.1rem',
      background: highlight ? 'rgba(127,0,255,0.08)' : 'rgba(255,255,255,0.03)',
      border: `1px solid ${highlight ? 'rgba(127,0,255,0.25)' : 'rgba(255,255,255,0.07)'}`,
      borderRadius: '12px',
    }}>
      <div style={{
        width: '38px',
        height: '38px',
        borderRadius: '9px',
        background: highlight ? 'rgba(127,0,255,0.2)' : 'rgba(255,255,255,0.07)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: highlight ? '#c060ff' : 'rgba(255,255,255,0.5)',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1px', letterSpacing: '0.05em' }}>
          {label}
        </div>
        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: highlight ? '#c060ff' : 'white' }}>
          {value}
        </div>
      </div>
    </div>
  )
}

const SpinnerIcon = () => (
  <motion.svg
    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
  >
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </motion.svg>
)

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
  </svg>
)

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
  </svg>
)
