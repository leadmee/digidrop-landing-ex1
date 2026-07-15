import { Quote, Star } from 'lucide-react'
import AnimatedCounter from './ui/AnimatedCounter'
import FadeIn from './ui/FadeIn'
import Section from './ui/Section'

const reviews = [
  {
    initials: 'АК',
    name: 'Анна Ковалёва',
    role: 'Автор онлайн-курсов по иллюстрации',
    text: 'Раньше я тратила 2–3 часа в день на отправку курсов и ответы «мне не пришло письмо». DigiDrop вернул мне эти часы: за полгода — 1 400 продаж, и ни одной ручной отправки.',
    offset: 'md:mt-0',
  },
  {
    initials: 'МШ',
    name: 'Марк Штайнер',
    role: 'Инди-разработчик, плагины для Figma',
    text: 'Генерация лицензионных ключей из коробки — то, ради чего я перешёл. Раньше вёл ключи в таблице и однажды продал один ключ дважды. Больше такого не случится.',
    offset: 'md:mt-12',
  },
  {
    initials: 'ДЧ',
    name: 'Дэвид Чен',
    role: 'Продюсер, сэмпл-паки и пресеты',
    text: 'Мои паки перестали всплывать на форумах через день после релиза. Ссылки с привязкой к покупателю решили проблему, о которой я думал годами.',
    offset: 'md:mt-4',
  },
]

const stats = [
  { render: <AnimatedCounter to={2.4} decimals={1} suffix=" млн" />, label: 'доставок' },
  { render: <AnimatedCounter to={12000} locale />, label: 'продавцов' },
  { render: <AnimatedCounter to={99.98} decimals={2} suffix="%" />, label: 'аптайм' },
  { render: <AnimatedCounter to={140} suffix="+" />, label: 'стран' },
]

export default function Testimonials() {
  return (
    <Section align="left" eyebrow="Отзывы" title="Им больше не приходится отправлять файлы вручную">
      <div className="grid items-start gap-5 md:grid-cols-3">
        {reviews.map((r, i) => (
          <FadeIn key={r.name} delay={i * 0.1} className={r.offset}>
            <figure className="glass relative flex h-full flex-col rounded-3xl p-7">
              <Quote size={44} className="absolute top-6 right-6 text-brand/20" aria-hidden="true" />
              <div className="flex gap-1" aria-label="Оценка 5 из 5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={15} className="fill-snow/70 text-snow/70" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-snow/90">
                «{r.text}»
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-sm font-semibold text-ink">
                  {r.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-fog">{r.role}</p>
                </div>
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-20 grid grid-cols-2 gap-y-10 border-t border-white/10 pt-14 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="bg-gradient-to-br from-snow via-accent to-brand bg-clip-text font-display text-4xl font-bold text-transparent md:text-6xl">
                {s.render}
              </p>
              <p className="mt-2 text-sm text-fog">{s.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  )
}
