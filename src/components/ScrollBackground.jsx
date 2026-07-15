import { useEffect, useRef } from 'react'

// Scroll-driven morphing background. Written with a plain passive scroll handler
// (not framer-motion) so it updates even in hidden/background tabs, where rAF is
// throttled — the same class of issue the useReveal fallback solves elsewhere.

const RAMP_A = ['#7c3aed', '#22d3ee', '#d946ef', '#6366f1']
const RAMP_B = ['#22d3ee', '#6366f1', '#7c3aed', '#d946ef']

const CUBES = [
  { left: '8%', top: '14%', size: 60, color: '#7c3aed', depth: 0.9, float: 'animate-float-slow' },
  { left: '82%', top: '10%', size: 44, color: '#22d3ee', depth: 0.6, float: 'animate-float' },
  { left: '70%', top: '38%', size: 96, color: '#6366f1', depth: 1.3, float: 'animate-float-slow' },
  { left: '16%', top: '52%', size: 40, color: '#d946ef', depth: 0.5, float: 'animate-float' },
  { left: '88%', top: '68%', size: 72, color: '#7c3aed', depth: 1.1, float: 'animate-float-slow' },
  { left: '30%', top: '80%', size: 52, color: '#22d3ee', depth: 0.8, float: 'animate-float' },
  { left: '54%', top: '92%', size: 64, color: '#d946ef', depth: 1.0, float: 'animate-float-slow' },
]

function hexToRgb(h) {
  const n = parseInt(h.slice(1), 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

function rampColor(ramp, p) {
  const seg = 1 / (ramp.length - 1)
  const i = Math.min(ramp.length - 2, Math.floor(p / seg))
  const t = (p - i * seg) / seg
  const a = hexToRgb(ramp[i])
  const b = hexToRgb(ramp[i + 1])
  const mix = (x, y) => Math.round(x + (y - x) * t)
  return `rgb(${mix(a.r, b.r)}, ${mix(a.g, b.g)}, ${mix(a.b, b.b)})`
}

export default function ScrollBackground() {
  const blobA = useRef(null)
  const blobB = useRef(null)
  const grid = useRef(null)
  const cubeRefs = useRef([])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const apply = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0

      if (blobA.current) {
        blobA.current.style.background = `radial-gradient(circle at center, ${rampColor(RAMP_A, p)} 0%, transparent 68%)`
        if (!reduce) blobA.current.style.transform = `translate(${-10 + p * 35}%, ${-5 + p * 45}%)`
      }
      if (blobB.current) {
        blobB.current.style.background = `radial-gradient(circle at center, ${rampColor(RAMP_B, p)} 0%, transparent 68%)`
        if (!reduce) blobB.current.style.transform = `translate(${20 - p * 35}%, ${10 + p * 45}%)`
      }
      if (grid.current && !reduce) grid.current.style.transform = `translateY(${-p * 140}px)`

      if (!reduce) {
        cubeRefs.current.forEach((el, i) => {
          if (!el) return
          const d = CUBES[i].depth
          el.style.transform = `translateY(${(0.5 - p) * 640 * d}px)`
        })
      }
    }

    apply()
    window.addEventListener('scroll', apply, { passive: true })
    window.addEventListener('resize', apply)
    return () => {
      window.removeEventListener('scroll', apply)
      window.removeEventListener('resize', apply)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-ink" />

      <div
        ref={blobA}
        className="absolute h-[70vh] w-[70vh] rounded-full opacity-50 blur-[120px]"
        style={{ background: `radial-gradient(circle at center, ${RAMP_A[0]} 0%, transparent 68%)`, willChange: 'transform' }}
      />
      <div
        ref={blobB}
        className="absolute right-0 h-[60vh] w-[60vh] rounded-full opacity-40 blur-[130px]"
        style={{ background: `radial-gradient(circle at center, ${RAMP_B[0]} 0%, transparent 68%)`, willChange: 'transform' }}
      />

      <div
        ref={grid}
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,black_20%,transparent_75%)]"
        style={{ willChange: 'transform' }}
      />

      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        {CUBES.map((cfg, i) => {
          const opacity = Math.max(0.06, 0.2 - cfg.depth * 0.05)
          const blur = cfg.depth > 1 ? 3 : cfg.depth > 0.7 ? 1.5 : 0
          return (
            <div
              key={i}
              ref={(el) => (cubeRefs.current[i] = el)}
              className="absolute"
              style={{
                left: cfg.left,
                top: cfg.top,
                opacity,
                filter: blur ? `blur(${blur}px)` : 'none',
                willChange: 'transform',
              }}
            >
              <span className={cfg.float} style={{ display: 'inline-block' }}>
                <span className="iso-cube" style={{ '--s': `${cfg.size}px`, '--c': cfg.color }} />
              </span>
            </div>
          )
        })}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(11,13,23,0.55)_100%)]" />
    </div>
  )
}
