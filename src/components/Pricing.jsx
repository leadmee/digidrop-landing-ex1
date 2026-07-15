import { AnimatePresence, motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { useState } from 'react'
import FadeIn from './ui/FadeIn'
import Section from './ui/Section'

const plans = [
  {
    name: 'Старт',
    desc: 'Проверить идею',
    monthly: 0,
    cta: 'Начать бесплатно',
    features: [
      'До 10 товаров',
      'Комиссия 5% с продажи',
      '2 ГБ хранилища',
      'Базовая защита ссылок',
      'Базовая аналитика',
      '1 пользователь',
      'Поддержка по e-mail',
    ],
  },
  {
    name: 'Про',
    desc: 'Для растущих продаж',
    monthly: 19,
    cta: 'Выбрать Про',
    featured: true,
    features: [
      'Безлимит товаров',
      'Комиссия 0%',
      '100 ГБ хранилища',
      'Водяные знаки и лимиты скачиваний',
      'Лицензионные ключи',
      'Полная аналитика',
      'Письма со своим доменом',
      'API и вебхуки',
      '3 пользователя',
      'Приоритетная поддержка',
    ],
  },
  {
    name: 'Бизнес',
    desc: 'Для команд и школ',
    monthly: 49,
    cta: 'Связаться с нами',
    features: [
      'Всё из тарифа «Про»',
      '1 ТБ хранилища',
      'DRM-защита видео',
      'Экспорт данных и отчёты',
      'Безлимит пользователей + роли',
      'Персональный менеджер',
      'SLA 99,9%',
    ],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <Section id="pricing" eyebrow="Тарифы" title="Честные тарифы. Растёте вы — растём мы">
      <FadeIn className="mb-12 flex justify-center">
        <div className="relative inline-flex rounded-full border border-white/10 bg-card p-1">
          {[
            { key: false, label: 'Месяц' },
            { key: true, label: 'Год' },
          ].map(({ key, label }) => (
            <button
              key={label}
              onClick={() => setYearly(key)}
              className="relative rounded-full px-6 py-2 text-sm font-medium transition-colors"
            >
              {yearly === key && (
                <motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-brand to-accent"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className={`relative z-10 ${yearly === key ? 'text-white' : 'text-fog'}`}>
                {label}
                {key && <span className="ml-1.5 text-mint">−20%</span>}
              </span>
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="grid items-stretch gap-5 md:grid-cols-3">
        {plans.map((p, i) => {
          const price = yearly ? Math.round(p.monthly * 0.8) : p.monthly
          return (
            <FadeIn key={p.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-7 ${
                  p.featured
                    ? 'border-brand/60 bg-card shadow-[0_0_50px_rgba(124,58,237,0.25)] md:-translate-y-3'
                    : 'border-white/10 bg-card'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-accent px-4 py-1.5 text-xs font-semibold whitespace-nowrap text-white">
                    <Sparkles size={12} />
                    Популярный
                  </span>
                )}

                <h3 className="font-display text-lg font-medium">{p.name}</h3>
                <p className="mt-1 text-sm text-fog">{p.desc}</p>

                <div className="mt-6 flex h-14 items-end gap-1 overflow-hidden">
                  <span className="pb-1 text-2xl font-semibold">$</span>
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={price}
                      initial={{ y: 18, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -18, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="font-display text-5xl font-medium"
                    >
                      {price}
                    </motion.span>
                  </AnimatePresence>
                  <span className="pb-1.5 text-sm text-fog">/мес</span>
                </div>
                <p className={`mt-1 h-4 text-xs text-mint ${yearly && p.monthly > 0 ? '' : 'invisible'}`}>
                  при оплате за год
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-fog">
                      <Check size={16} className="mt-0.5 shrink-0 text-mint" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    p.featured
                      ? 'bg-gradient-to-r from-brand to-accent text-white shadow-[0_0_24px_rgba(124,58,237,0.45)] hover:shadow-[0_0_40px_rgba(124,58,237,0.65)]'
                      : 'border border-white/15 bg-white/5 text-snow hover:border-white/30 hover:bg-white/10'
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </FadeIn>
          )
        })}
      </div>

      <FadeIn className="mt-10 text-center" delay={0.2}>
        <p className="text-sm text-fog">
          Все тарифы — без ограничения количества продаж. Смена тарифа в любой момент.
        </p>
      </FadeIn>
    </Section>
  )
}
