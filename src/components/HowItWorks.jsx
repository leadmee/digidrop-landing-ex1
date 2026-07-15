import { CreditCard, Link, TrendingUp, Upload } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import FadeIn from './ui/FadeIn'
import GlowButton from './ui/GlowButton'
import Tag from './ui/Tag'

const steps = [
  {
    icon: Upload,
    title: 'Загрузите товар',
    text: 'Перетащите файл или добавьте ключи. Обложка, описание и цена — в том же окне.',
    tags: ['drag & drop', 'до 10 ГБ', 'обложка + цена'],
  },
  {
    icon: CreditCard,
    title: 'Подключите оплату',
    text: 'Stripe, PayPal или Paddle — в два клика. Деньги идут напрямую на ваш счёт.',
    tags: ['Stripe', 'PayPal', 'Paddle'],
  },
  {
    icon: Link,
    title: 'Поделитесь ссылкой',
    text: 'Вставьте платёжную ссылку в соцсети, на сайт или в рассылку. Свой сайт не обязателен.',
    tags: ['1 ссылка', 'любая площадка', 'без сайта'],
  },
  {
    icon: TrendingUp,
    title: 'Получайте деньги',
    text: 'Оплата → мгновенная доставка → довольный клиент. Вы просто смотрите на график продаж.',
    tags: ['0% комиссии', 'выплаты 24/7', 'аналитика'],
  },
]

function StepCard({ step, index, horizontal }) {
  const Icon = step.icon
  return (
    <div
      className={`glass relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 ${
        horizontal ? 'h-[52vh] w-[82vw] shrink-0 sm:w-[56vw] lg:w-[34vw]' : 'min-h-[280px]'
      }`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-2 font-display text-[9rem] leading-none font-bold text-white/[0.05] select-none"
      >
        0{index + 1}
      </span>

      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand/30 to-accent/30 text-accent">
            <Icon size={24} />
          </span>
          <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
            Шаг 0{index + 1}
          </span>
        </div>
        <h3 className="mt-6 text-2xl font-semibold md:text-3xl">{step.title}</h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-fog md:text-lg">{step.text}</p>
      </div>

      <div className="relative mt-8 flex flex-wrap gap-2">
        {step.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
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

    let targetX = 0
    let curX = 0
    let targetBar = 0
    let curBar = 0
    let raf = null

    const paint = (x, bar) => {
      if (trackRef.current) trackRef.current.style.transform = `translate3d(${x}px, 0, 0)`
      if (barRef.current) barRef.current.style.transform = `scaleX(${bar})`
    }

    const setTargets = () => {
      const sec = sectionRef.current
      const track = trackRef.current
      if (!sec || !track) return
      const scrollable = sec.offsetHeight - window.innerHeight
      const p = scrollable > 0 ? Math.min(1, Math.max(0, -sec.getBoundingClientRect().top / scrollable)) : 0
      const dist = Math.max(0, track.scrollWidth - track.parentElement.clientWidth)
      targetX = -p * dist
      targetBar = p
    }

    // rAF lerp gives the horizontal scroll weight and inertia (trails the cursor)
    const tick = () => {
      curX += (targetX - curX) * 0.085
      curBar += (targetBar - curBar) * 0.12
      paint(curX, curBar)
      if (Math.abs(targetX - curX) > 0.3 || Math.abs(targetBar - curBar) > 0.002) {
        raf = requestAnimationFrame(tick)
      } else {
        curX = targetX
        curBar = targetBar
        paint(curX, curBar)
        raf = null
      }
    }

    const onScroll = () => {
      setTargets()
      // Hidden tabs (preview) and reduced motion freeze rAF — apply instantly there
      if (document.visibilityState === 'hidden') {
        curX = targetX
        curBar = targetBar
        paint(curX, curBar)
        return
      }
      if (!raf) raf = requestAnimationFrame(tick)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
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
    <section id="how" ref={sectionRef} style={pinned ? { height: '360vh' } : undefined}>
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
