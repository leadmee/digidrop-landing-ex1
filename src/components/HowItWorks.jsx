import { CreditCard, Link, TrendingUp, Upload } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import FadeIn from './ui/FadeIn'
import GlowButton from './ui/GlowButton'

const steps = [
  {
    icon: Upload,
    title: 'Загрузите товар',
    text: 'Перетащите файл или добавьте ключи. Обложка, описание и цена — в том же окне.',
  },
  {
    icon: CreditCard,
    title: 'Подключите оплату',
    text: 'Stripe, PayPal или Paddle — в два клика. Деньги идут напрямую на ваш счёт.',
  },
  {
    icon: Link,
    title: 'Поделитесь ссылкой',
    text: 'Вставьте платёжную ссылку в соцсети, на сайт или в рассылку. Свой сайт не обязателен.',
  },
  {
    icon: TrendingUp,
    title: 'Получайте деньги',
    text: 'Оплата → мгновенная доставка → довольный клиент. Вы просто смотрите на график продаж.',
  },
]

function StepCard({ step, index, horizontal }) {
  const Icon = step.icon
  return (
    <div
      className={`glass relative flex flex-col rounded-3xl p-8 ${
        horizontal ? 'h-[62vh] w-[78vw] shrink-0 justify-between sm:w-[60vw] lg:w-[38vw]' : ''
      }`}
    >
      <span
        className="select-none bg-gradient-to-br from-brand to-accent bg-clip-text font-display text-6xl font-bold text-transparent md:text-8xl"
        aria-hidden="true"
      >
        0{index + 1}
      </span>
      <div className="mt-8">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand/30 to-accent/30 text-accent">
          <Icon size={24} />
        </span>
        <h3 className="mt-5 text-2xl font-semibold">{step.title}</h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-fog">{step.text}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const barRef = useRef(null)
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const desktop = window.matchMedia('(min-width: 768px)').matches
    const on = desktop && !reduce
    setPinned(on)
    if (!on) return

    const apply = () => {
      const sec = sectionRef.current
      const track = trackRef.current
      if (!sec || !track) return
      const scrollable = sec.offsetHeight - window.innerHeight
      const p = scrollable > 0 ? Math.min(1, Math.max(0, -sec.getBoundingClientRect().top / scrollable)) : 0
      const dist = track.scrollWidth - track.parentElement.clientWidth
      track.style.transform = `translate3d(${-p * Math.max(0, dist)}px, 0, 0)`
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`
    }

    apply()
    window.addEventListener('scroll', apply, { passive: true })
    window.addEventListener('resize', apply)
    return () => {
      window.removeEventListener('scroll', apply)
      window.removeEventListener('resize', apply)
    }
  }, [])

  const Header = (
    <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
      <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
        Как это работает
      </span>
      <h2 className="font-display text-3xl leading-[1.1] font-semibold tracking-tight text-balance md:text-5xl">
        От загрузки файла до первой продажи — 4 шага
      </h2>
    </div>
  )

  return (
    <section id="how" ref={sectionRef} style={pinned ? { height: '340vh' } : undefined}>
      <div
        className={
          pinned ? 'sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-16' : 'py-24 md:py-32'
        }
      >
        {pinned ? (
          <>
            <div className="shrink-0">{Header}</div>
            <div className="mt-10 overflow-hidden">
              <div ref={trackRef} className="flex gap-6 px-5 will-change-transform md:px-8">
                {steps.map((s, i) => (
                  <StepCard key={s.title} step={s} index={i} horizontal />
                ))}
              </div>
            </div>
            <div className="mx-auto mt-10 h-1 w-full max-w-7xl px-5 md:px-8">
              <div className="h-full overflow-hidden rounded-full bg-white/10">
                <div
                  ref={barRef}
                  className="h-full origin-left rounded-full bg-gradient-to-r from-brand to-accent"
                  style={{ transform: 'scaleX(0)' }}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {Header}
            <div className="mx-auto mt-12 grid w-full max-w-7xl gap-5 px-5 md:px-8">
              {steps.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.08}>
                  <StepCard step={s} index={i} horizontal={false} />
                </FadeIn>
              ))}
            </div>
            <div className="mx-auto mt-12 w-full max-w-7xl px-5 md:px-8">
              <GlowButton href="#pricing">Сделать первый шаг</GlowButton>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
