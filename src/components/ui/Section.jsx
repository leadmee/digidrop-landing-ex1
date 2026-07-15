import FadeIn from './FadeIn'

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  align = 'center',
  className = '',
}) {
  const left = align === 'left'
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        {(eyebrow || title) && (
          <FadeIn
            className={`mb-14 md:mb-20 ${left ? 'max-w-3xl' : 'mx-auto max-w-3xl text-center'}`}
          >
            {eyebrow && (
              <span
                className={`mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent ${
                  left ? '' : ''
                }`}
              >
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="font-display text-3xl leading-[1.1] font-semibold tracking-tight text-balance md:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`mt-5 text-base leading-relaxed text-fog md:text-lg ${left ? 'max-w-2xl' : ''}`}>
                {subtitle}
              </p>
            )}
          </FadeIn>
        )}
        {children}
      </div>
    </section>
  )
}
