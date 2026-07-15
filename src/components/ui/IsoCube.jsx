export default function IsoCube({ size = 48, color = '#6b6b73', className = '', style = {} }) {
  return (
    <span
      className={`iso-cube ${className}`}
      style={{ '--s': `${size}px`, '--c': color, ...style }}
      aria-hidden="true"
    />
  )
}
