import { motion } from 'framer-motion'
import { CreditCard, Link, TrendingUp, Upload } from 'lucide-react'
import FadeIn, { useReveal } from './ui/FadeIn'
import GlowButton from './ui/GlowButton'
import Section from './ui/Section'

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

export default function HowItWorks() {
  const [lineRef, lineShown] = useReveal()
  return (
    <Section id="how" eyebrow="Как это работает" title="От загрузки файла до первой продажи — 4 шага">
      <div ref={lineRef} className="relative">
        <motion.div
          className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-brand via-accent to-brand md:block"
          style={{ originX: 0 }}
          initial={{ scaleX: 0 }}
          animate={lineShown ? { scaleX: 1 } : undefined}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />

        <div className="grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <FadeIn key={title} delay={i * 0.15} className="text-center">
              <div className="relative mx-auto w-fit">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-card text-accent shadow-[0_0_20px_rgba(124,58,237,0.25)]">
                  <Icon size={22} />
                </span>
                <span className="absolute -top-2 -right-3 z-20 rounded-full bg-gradient-to-r from-brand to-accent px-2 py-0.5 text-[10px] font-bold text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold">{title}</h3>
              <p className="mx-auto mt-2 max-w-[260px] text-sm leading-relaxed text-fog">{text}</p>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn className="mt-14 text-center" delay={0.3}>
        <GlowButton href="#pricing">Сделать первый шаг</GlowButton>
      </FadeIn>
    </Section>
  )
}
