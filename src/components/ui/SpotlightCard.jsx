import { useRef } from 'react'

export default function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null)

  function onMove(e) {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`glass group relative overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-brand/40 md:p-7 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.07), transparent 65%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
