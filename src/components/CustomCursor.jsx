import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)

  const springConfig = { damping: 28, stiffness: 500, mass: 0.5 }
  const dotX = useSpring(cursorX, { damping: 35, stiffness: 700, mass: 0.3 })
  const dotY = useSpring(cursorY, { damping: 35, stiffness: 700, mass: 0.3 })
  const ringX = useSpring(cursorX, springConfig)
  const ringY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const onMove = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    const onDown = () => setClicked(true)
    const onUp = () => setClicked(false)

    const onEnter = (e) => {
      if (e.target.matches('a, button, [data-cursor-hover]')) {
        setHovered(true)
      }
    }
    const onLeave = (e) => {
      if (e.target.matches('a, button, [data-cursor-hover]')) {
        setHovered(false)
      }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: clicked ? '8px' : '6px',
          height: clicked ? '8px' : '6px',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
        }}
        animate={{ scale: clicked ? 0.5 : 1 }}
        transition={{ duration: 0.1 }}
      />
      {/* Ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
          border: `1.5px solid ${hovered ? '#9a06df' : 'rgba(255,255,255,0.7)'}`,
          pointerEvents: 'none',
          zIndex: 9998,
        }}
        animate={{
          width: hovered ? '48px' : clicked ? '22px' : '30px',
          height: hovered ? '48px' : clicked ? '22px' : '30px',
          opacity: hovered ? 0.8 : 0.5,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  )
}
