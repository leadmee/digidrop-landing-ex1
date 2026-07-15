export default function GlowButton({ href = '#', variant = 'primary', children, className = '' }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300'
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-brand to-accent text-white shadow-[0_0_24px_rgba(124,58,237,0.45)] hover:shadow-[0_0_44px_rgba(124,58,237,0.65)] hover:brightness-110'
      : 'border border-white/15 bg-white/5 text-snow hover:border-white/30 hover:bg-white/10'
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  )
}
