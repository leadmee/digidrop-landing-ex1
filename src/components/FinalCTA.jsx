import { ArrowRight } from 'lucide-react'
import FadeIn from './ui/FadeIn'
import IsoCube from './ui/IsoCube'
import MagneticButton from './ui/MagneticButton'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(680px_circle_at_50%_45%,rgba(124,58,237,0.28),transparent_70%)]" />

      <div className="pointer-events-none absolute top-16 left-[12%] hidden opacity-40 md:block">
        <span className="animate-float inline-block">
          <IsoCube size={56} color="#7c3aed" />
        </span>
      </div>
      <div className="pointer-events-none absolute right-[14%] bottom-20 hidden opacity-40 md:block">
        <span className="animate-float-slow inline-block">
          <IsoCube size={72} color="#22d3ee" />
        </span>
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <FadeIn>
          <h2 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl">
            Ваша первая автоматическая продажа —{' '}
            <span className="bg-gradient-to-br from-brand via-accent to-magenta bg-clip-text text-transparent">
              уже сегодня
            </span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-fog md:text-lg">
            Регистрация за минуту. Загрузите товар — и забудьте о ручной доставке навсегда.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-10">
          <MagneticButton href="#pricing">
            Создать магазин бесплатно
            <ArrowRight size={18} />
          </MagneticButton>
          <p className="mt-5 text-xs text-fog/80">
            Бесплатный тариф навсегда · Апгрейд — когда вырастете
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
