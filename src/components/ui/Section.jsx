import FadeIn from './FadeIn'

export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {(eyebrow || title) && (
          <FadeIn className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
            {eyebrow && (
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="font-display text-3xl leading-snug font-medium text-balance md:text-[2.6rem]">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-5 text-base leading-relaxed text-fog md:text-lg">{subtitle}</p>}
          </FadeIn>
        )}
        {children}
      </div>
    </section>
  )
}
