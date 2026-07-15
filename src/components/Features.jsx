import { motion } from 'framer-motion'
import { ChartColumn, KeyRound, Layers, MailCheck, ShieldCheck, Zap } from 'lucide-react'
import FadeIn, { useReveal } from './ui/FadeIn'
import Section from './ui/Section'
import SpotlightCard from './ui/SpotlightCard'
import Tag from './ui/Tag'

function IconBadge({ icon: Icon }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-brand/30 to-accent/30 text-accent">
      <Icon size={22} />
    </span>
  )
}

function AnalyticsChart() {
  const [ref, shown] = useReveal()
  return (
    <div ref={ref} className="mt-6 rounded-xl border border-white/5 bg-ink/40 p-4">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-[11px] text-fog">Выручка за неделю</p>
          <p className="text-xl font-semibold">$4 920</p>
        </div>
        <span className="rounded-full bg-mint/10 px-2.5 py-1 text-[11px] font-medium text-mint">+18%</span>
      </div>
      <svg viewBox="0 0 320 90" className="mt-3 w-full" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="chart-line" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8a8a93" />
            <stop offset="1" stopColor="#e9e9ee" />
          </linearGradient>
          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e9e9ee" stopOpacity="0.18" />
            <stop offset="1" stopColor="#e9e9ee" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 74 C 36 66, 54 42, 92 50 S 150 24, 196 32 250 10 320 16 L 320 90 L 0 90 Z"
          fill="url(#chart-fill)"
          initial={{ opacity: 0 }}
          animate={shown ? { opacity: 1 } : undefined}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.path
          d="M0 74 C 36 66, 54 42, 92 50 S 150 24, 196 32 250 10 320 16"
          stroke="url(#chart-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={shown ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

function EmailPreview() {
  return (
    <div className="w-full shrink-0 rounded-xl border border-white/10 bg-ink/40 p-5 md:w-80">
      <div className="flex items-center gap-2.5 border-b border-white/5 pb-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-xs font-semibold text-ink">
          Y
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-medium">orders@yourbrand.com</p>
          <p className="truncate text-[11px] text-fog">Ваш заказ готов к скачиванию</p>
        </div>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-fog">
        Спасибо за покупку! Ваши файлы уже ждут вас — ссылка действует 72 часа.
      </p>
      <span className="mt-4 inline-block rounded-lg bg-gradient-to-r from-brand to-accent px-4 py-2 text-[12px] font-semibold text-ink">
        Скачать файлы
      </span>
    </div>
  )
}

export default function Features() {
  return (
    <Section
      id="features"
      align="left"
      eyebrow="Возможности"
      title="Всё, что нужно между «оплатил» и «получил»"
    >
      <div className="grid auto-rows-[minmax(0,auto)] grid-cols-1 gap-4 md:grid-cols-6">
        <FadeIn className="md:col-span-4">
          <SpotlightCard className="h-full">
            <IconBadge icon={ChartColumn} />
            <h3 className="mt-5 text-2xl font-semibold">Аналитика продаж</h3>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-fog">
              Выручка, конверсия, география и повторные покупки в реальном времени. Понимайте,
              какой товар приносит деньги.
            </p>
            <AnalyticsChart />
          </SpotlightCard>
        </FadeIn>

        <FadeIn className="md:col-span-2" delay={0.08}>
          <SpotlightCard className="flex h-full flex-col justify-between">
            <div>
              <IconBadge icon={Zap} />
              <h3 className="mt-5 text-2xl font-semibold">Мгновенная доставка</h3>
              <p className="mt-3 text-base leading-relaxed text-fog">
                Файлы, ключи и доступы уходят покупателю в среднем за 0,3 секунды после оплаты.
              </p>
            </div>
            <div>
              <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/5 bg-ink/40 px-4 py-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
                </span>
                <p className="text-[13px] text-fog">
                  Аптайм <span className="text-snow">99,98%</span>
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag>~0,3 с</Tag>
                <Tag>вебхуки</Tag>
              </div>
            </div>
          </SpotlightCard>
        </FadeIn>

        <FadeIn className="md:col-span-2" delay={0.04}>
          <SpotlightCard className="flex h-full flex-col justify-between">
            <div>
              <IconBadge icon={ShieldCheck} />
              <h3 className="mt-5 text-xl font-semibold">Защита контента</h3>
              <p className="mt-3 text-base leading-relaxed text-fog">
                Ссылки с истечением срока, лимитом скачиваний и привязкой к e-mail. Водяные знаки
                для PDF — имя покупателя на каждой странице.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Tag>TTL-ссылки</Tag>
              <Tag>лимиты</Tag>
              <Tag>водяные знаки</Tag>
            </div>
          </SpotlightCard>
        </FadeIn>

        <FadeIn className="md:col-span-2" delay={0.08}>
          <SpotlightCard className="flex h-full flex-col justify-between">
            <div>
              <IconBadge icon={KeyRound} />
              <h3 className="mt-5 text-xl font-semibold">Лицензионные ключи</h3>
              <p className="mt-3 text-base leading-relaxed text-fog">
                Генерируйте ключи автоматически или загрузите свой список. Активации, отзыв ключей
                и статистика — в одном окне.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Tag>авто-генерация</Tag>
              <Tag>отзыв</Tag>
              <Tag>активации</Tag>
            </div>
          </SpotlightCard>
        </FadeIn>

        <FadeIn className="md:col-span-2" delay={0.12}>
          <SpotlightCard className="flex h-full flex-col justify-between">
            <div>
              <IconBadge icon={Layers} />
              <h3 className="mt-5 text-xl font-semibold">Любые форматы</h3>
              <p className="mt-3 text-base leading-relaxed text-fog">
                E-book, видеокурсы, софт, пресеты, сэмплы, шаблоны — файлы до 10 ГБ, стриминг видео
                без скачивания.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Tag>до 10 ГБ</Tag>
              <Tag>стриминг видео</Tag>
            </div>
          </SpotlightCard>
        </FadeIn>

        <FadeIn className="md:col-span-6" delay={0.06}>
          <SpotlightCard className="h-full">
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <IconBadge icon={MailCheck} />
                <h3 className="mt-5 text-2xl font-semibold">Письма под вашим брендом</h3>
                <p className="mt-3 text-base leading-relaxed text-fog">
                  Свой домен, логотип и шаблоны. Покупатель видит вас, а не нас.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Tag>свой домен</Tag>
                  <Tag>логотип</Tag>
                  <Tag>шаблоны</Tag>
                </div>
              </div>
              <EmailPreview />
            </div>
          </SpotlightCard>
        </FadeIn>
      </div>
    </Section>
  )
}
