import { ArrowDown, ArrowRight, Clock, MailCheck, MailX, ShieldCheck, ShieldOff, Zap } from 'lucide-react'
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

function PainCard({ icon: Icon, title, text }) {
  return (
    <div className="h-full rounded-2xl border border-rose-400/15 bg-card p-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400">
        <Icon size={20} />
      </span>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-fog">{text}</p>
    </div>
  )
}

function FixCard({ icon: Icon, title, text }) {
  return (
    <div className="h-full rounded-2xl border border-mint/20 bg-mint/[0.04] p-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint/10 text-mint">
        <Icon size={20} />
      </span>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-fog">{text}</p>
    </div>
  )
}

export default function ProblemSolution() {
  return (
    <Section
      eyebrow="Проблема → решение"
      title="Продавать цифровое — легко. Доставлять — мучение"
      subtitle="Если вы вручную отправляете файлы после каждой оплаты, вы теряете время, деньги и клиентов."
    >
      <div className="flex flex-col gap-6">
        {pairs.map((p, i) => (
          <FadeIn key={p.pain.title} delay={i * 0.1}>
            <div className="grid items-stretch gap-3 md:grid-cols-[1fr_52px_1fr] md:gap-2">
              <PainCard {...p.pain} />
              <div className="flex items-center justify-center text-brand">
                <ArrowRight size={22} className="hidden md:block" />
                <ArrowDown size={20} className="md:hidden" />
              </div>
              <FixCard {...p.fix} />
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-14 text-center" delay={0.2}>
        <GlowButton href="#pricing">
          Автоматизировать доставку
          <ArrowRight size={16} />
        </GlowButton>
      </FadeIn>
    </Section>
  )
}
