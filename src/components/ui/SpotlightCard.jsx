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
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition-colors duration-300 hover:border-brand/40 md:p-7 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(124,58,237,0.16), transparent 65%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
