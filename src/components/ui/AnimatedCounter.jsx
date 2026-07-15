import { animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useReveal } from './FadeIn'

export default function AnimatedCounter({ to, decimals = 0, suffix = '', locale = false, duration = 2 }) {
  const [ref, shown] = useReveal()
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!shown) return
    if (document.visibilityState === 'hidden') {
      setVal(to)
      return
    }
    const controls = animate(0, to, { duration, ease: 'easeOut', onUpdate: (v) => setVal(v) })
    return () => controls.stop()
  }, [shown, to, duration])

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
