import { ArrowRight } from 'lucide-react'
import FadeIn from './ui/FadeIn'
import MagneticButton from './ui/MagneticButton'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(640px_circle_at_50%_50%,rgba(124,58,237,0.22),transparent_70%)]" />
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_30%,transparent_100%)]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <FadeIn>
          <h2 className="font-display text-3xl leading-snug font-medium text-balance md:text-5xl">
            Ваша первая автоматическая продажа —{' '}
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
              уже сегодня
            </span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-fog md:text-lg">
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
