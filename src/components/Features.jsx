import { motion } from 'framer-motion'
import { ChartColumn, KeyRound, Layers, MailCheck, ShieldCheck, Zap } from 'lucide-react'
import FadeIn from './ui/FadeIn'
import Section from './ui/Section'
import SpotlightCard from './ui/SpotlightCard'

function IconBadge({ icon: Icon }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-brand/25 to-accent/25 text-accent">
      <Icon size={20} />
    </span>
  )
}

function AnalyticsChart() {
  return (
    <div className="mt-6 rounded-xl border border-white/5 bg-ink/60 p-4">
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
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C3AED" stopOpacity="0.25" />
            <stop offset="1" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 74 C 36 66, 54 42, 92 50 S 150 24, 196 32 250 10 320 16 L 320 90 L 0 90 Z"
          fill="url(#chart-fill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.path
          d="M0 74 C 36 66, 54 42, 92 50 S 150 24, 196 32 250 10 320 16"
          stroke="url(#chart-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

function EmailPreview() {
  return (
    <div className="w-full shrink-0 rounded-xl border border-white/10 bg-ink/60 p-5 md:w-80">
      <div className="flex items-center gap-2.5 border-b border-white/5 pb-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-xs font-semibold text-white">
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
      <span className="mt-4 inline-block rounded-lg bg-gradient-to-r from-brand to-accent px-4 py-2 text-[12px] font-semibold text-white">
        Скачать файлы
      </span>
    </div>
  )
}

export default function Features() {
  return (
    <Section
      id="features"
      eyebrow="Возможности"
      title="Всё, что нужно между «оплатил» и «получил»"
    >
      <div className="grid gap-4 md:grid-cols-3">
        <FadeIn className="md:col-span-2">
          <SpotlightCard className="h-full">
            <IconBadge icon={ChartColumn} />
            <h3 className="mt-4 text-lg font-semibold">Аналитика продаж</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-fog">
              Выручка, конверсия, география и повторные покупки в реальном времени. Понимайте,
              какой товар приносит деньги.
            </p>
            <AnalyticsChart />
          </SpotlightCard>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SpotlightCard className="h-full">
            <IconBadge icon={Zap} />
            <h3 className="mt-4 text-lg font-semibold">Мгновенная доставка</h3>
            <p className="mt-2 text-sm leading-relaxed text-fog">
              Файлы, ключи и доступы уходят покупателю в среднем за 0,3 секунды после
              подтверждения оплаты.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/5 bg-ink/60 px-4 py-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
              </span>
              <p className="text-[12px] text-fog">
                Доставка работает: <span className="text-snow">аптайм 99,98%</span>
              </p>
            </div>
          </SpotlightCard>
        </FadeIn>

        <FadeIn delay={0.05}>
          <SpotlightCard className="h-full">
            <IconBadge icon={ShieldCheck} />
            <h3 className="mt-4 text-lg font-semibold">Защита контента</h3>
            <p className="mt-2 text-sm leading-relaxed text-fog">
              Ссылки с истечением срока, лимитом скачиваний и привязкой к e-mail. Водяные знаки
              для PDF — имя покупателя на каждой странице.
            </p>
          </SpotlightCard>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SpotlightCard className="h-full">
            <IconBadge icon={KeyRound} />
            <h3 className="mt-4 text-lg font-semibold">Лицензионные ключи</h3>
            <p className="mt-2 text-sm leading-relaxed text-fog">
              Генерируйте ключи автоматически или загрузите свой список. Активации, отзыв ключей
              и статистика — в одном окне.
            </p>
          </SpotlightCard>
        </FadeIn>

        <FadeIn delay={0.15}>
          <SpotlightCard className="h-full">
            <IconBadge icon={Layers} />
            <h3 className="mt-4 text-lg font-semibold">Любые форматы</h3>
            <p className="mt-2 text-sm leading-relaxed text-fog">
              E-book, видеокурсы, софт, пресеты, сэмплы, шаблоны — файлы до 10 ГБ, стриминг видео
              без скачивания.
            </p>
          </SpotlightCard>
        </FadeIn>

        <FadeIn className="md:col-span-3" delay={0.1}>
          <SpotlightCard className="h-full">
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <IconBadge icon={MailCheck} />
                <h3 className="mt-4 text-lg font-semibold">Письма под вашим брендом</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  Свой домен, логотип и шаблоны. Покупатель видит вас, а не нас.
                </p>
              </div>
              <EmailPreview />
            </div>
          </SpotlightCard>
        </FadeIn>
      </div>
    </Section>
  )
}
