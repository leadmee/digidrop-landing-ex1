import { useEffect, useRef, useState } from 'react'

export function useReveal(fallbackMs = 2000) {
  const ref = useRef(null)
  // Hidden/background tabs don't run rendering steps, so IntersectionObserver
  // callbacks never fire there — start revealed to never leave content invisible
  const [shown, setShown] = useState(
    () => typeof document !== 'undefined' && document.visibilityState === 'hidden',
  )

  useEffect(() => {
    const el = ref.current
    if (!el) {
      setShown(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          obs.disconnect()
        }
      },
      { rootMargin: '-80px 0px' },
    )
    obs.observe(el)
    // IntersectionObserver never fires in hidden/background tabs — reveal by timer there
    const fallback = setTimeout(() => {
      if (document.visibilityState === 'hidden') setShown(true)
    }, fallbackMs)
    return () => {
      obs.disconnect()
      clearTimeout(fallback)
    }
  }, [fallbackMs])

  return [ref, shown]
}

export default function FadeIn({ children, delay = 0, y = 28, className = '' }) {
  const [ref, shown] = useReveal()

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        shown ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        transform: shown ? 'none' : `translateY(${y}px)`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
