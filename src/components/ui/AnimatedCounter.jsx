import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function AnimatedCounter({ to, decimals = 0, suffix = '', locale = false, duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, { duration, ease: 'easeOut', onUpdate: (v) => setVal(v) })
    return () => controls.stop()
  }, [inView, to, duration])

  const text = locale
    ? Math.round(val).toLocaleString('ru-RU')
    : val.toFixed(decimals).replace('.', ',')

  return (
    <span ref={ref}>
      {text}
      {suffix}
    </span>
  )
}
