import { useReducedMotion } from 'framer-motion'

// Eight cubes fly in, assemble into a stack, a ground plate flashes, the stack
// drops — an endless "digital parcel is assembled and delivered" loop.
// Falls back to a static assembled stack for reduced-motion / hidden tabs.
export default function CubeAssembly({ className = '' }) {
  const reduce = useReducedMotion()
  const staticStack =
    reduce || (typeof document !== 'undefined' && document.visibilityState === 'hidden')

  return (
    <div
      className={`grid place-items-center ${className}`}
      role="img"
      aria-label="Кубы собираются в цифровую посылку и доставляются"
    >
      <div className={`cube-scene ${staticStack ? 'is-static' : ''}`}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={`box box${i}`}>
            <div />
          </div>
        ))}
      </div>
    </div>
  )
}
