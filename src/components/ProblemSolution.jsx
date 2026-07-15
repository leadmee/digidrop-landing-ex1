import { ArrowRight, Clock, MailCheck, MailX, ShieldCheck, ShieldOff, Zap } from 'lucide-react'
import FadeIn from './ui/FadeIn'
import GlowButton from './ui/GlowButton'
import Section from './ui/Section'

const pairs = [
  {
    pain: {
      icon: Clock,
      title: 'Ручная рутина',
      text: 'Каждую продажу вы обрабатываете сами: проверяете оплату, ищете файл, пишете письмо. Ночью и в отпуске — тоже.',
    },
    fix: {
      icon: Zap,
      title: 'Полный автопилот',
      text: 'Покупатель получает товар через секунды после оплаты — 24/7, без вашего участия.',
    },
  },
  {
    pain: {
      icon: MailX,
      title: 'Потерянные письма',
      text: 'Вложения не доходят, попадают в спам, «перешлите ещё раз» — и рейтинг магазина падает.',
    },
    fix: {
      icon: MailCheck,
      title: 'Гарантированная доставка',
      text: 'Брендированные письма с высокой доставляемостью + страница повторного доступа для покупателя.',
    },
  },
  {
    pain: {
      icon: ShieldOff,
      title: 'Пиратство',
      text: 'Одна прямая ссылка на файл — и ваш курс уже раздают бесплатно в телеграм-каналах.',
    },
    fix: {
      icon: ShieldCheck,
      title: 'Защищённые ссылки',
      text: 'Срок жизни, лимит скачиваний, привязка к покупателю и водяные знаки в PDF.',
    },
  },
]

export default function ProblemSolution() {
  return (
    <Section
      align="left"
      eyebrow="Проблема → решение"
      title="Продавать цифровое — легко. Доставлять — мучение"
      subtitle="Если вы вручную отправляете файлы после каждой оплаты, вы теряете время, деньги и клиентов."
    >
      <div className="flex flex-col gap-16 md:gap-24">
        {pairs.map((p, i) => (
          <FadeIn key={p.pain.title} delay={i * 0.05}>
            <div
              className={`grid items-center gap-5 md:grid-cols-[auto_1fr_1fr] md:gap-8 ${
                i % 2 ? 'md:pl-16' : 'md:pr-16'
              }`}
            >
              <span
                className="select-none bg-gradient-to-br from-white/25 to-white/5 bg-clip-text font-display text-7xl leading-none font-bold text-transparent md:text-9xl"
                aria-hidden="true"
              >
                0{i + 1}
              </span>

              <div className="group relative rounded-2xl border border-rose-400/20 bg-rose-500/[0.06] p-7 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/15 text-rose-300">
                  <p.pain.icon size={20} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-rose-100">{p.pain.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{p.pain.text}</p>
                <span className="pointer-events-none absolute top-1/2 -right-7 hidden -translate-y-1/2 text-brand md:block">
                  <ArrowRight size={26} />
                </span>
              </div>

              <div className="glass group relative rounded-2xl border-mint/25 p-7 transition-transform duration-300 hover:-translate-y-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint/15 text-mint">
                  <p.fix.icon size={20} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.fix.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{p.fix.text}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-20" delay={0.1}>
        <GlowButton href="#pricing">
          Автоматизировать доставку
          <ArrowRight size={16} />
        </GlowButton>
      </FadeIn>
    </Section>
  )
}
