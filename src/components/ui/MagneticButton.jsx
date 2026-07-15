import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function MagneticButton({ href = '#', children, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 180, damping: 14 })
  const sy = useSpring(y, { stiffness: 180, damping: 14 })

  function onMove(e) {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.35)
    y.set((e.clientY - r.top - r.height / 2) * 0.35)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-accent px-10 py-5 text-base font-semibold text-ink shadow-[0_0_36px_rgba(255,255,255,0.16)] transition-shadow duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.26)] ${className}`}
    >
      {children}
    </motion.a>
  )
}
