import { motion } from 'framer-motion'

export const EASE_OUT = [0.16, 1, 0.3, 1]

export default function SectionHeading({ children, style }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: '-0.04em',
        marginBottom: '3rem',
        textWrap: 'balance',
        ...style,
      }}
    >
      {children}
    </motion.h2>
  )
}

export function Reveal({ children, delay = 0, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: EASE_OUT }}
      style={style}
    >
      {children}
    </motion.div>
  )
}
