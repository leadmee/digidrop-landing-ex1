import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import FadeIn from './ui/FadeIn'

const items = [
  {
    q: 'Нужен ли мне свой сайт?',
    a: 'Нет. DigiDrop создаёт готовую страницу товара и платёжную ссылку — её можно публиковать где угодно: в соцсетях, мессенджерах, рассылках. Если сайт есть — встройте кнопку покупки одной строкой кода.',
  },
  {
    q: 'Как защищены мои файлы?',
    a: 'Файлы хранятся в зашифрованном виде и никогда не отдаются прямой ссылкой. Покупатель получает персональную ссылку с ограничением по сроку, числу скачиваний и привязкой к его e-mail. Для PDF доступны водяные знаки с именем покупателя.',
  },
  {
    q: 'Какие комиссии я заплачу?',
    a: 'На тарифе «Старт» — 5% с продажи, на платных тарифах комиссия DigiDrop — 0%. Остаётся только стандартная комиссия платёжной системы (например, Stripe — от 2,9% + 30¢). Деньги поступают напрямую на ваш счёт.',
  },
  {
    q: 'Что делать, если покупатель потерял письмо?',
    a: 'Ничего: покупатель сам восстановит доступ на странице «Мои покупки», указав e-mail. Ваша поддержка больше не разбирает такие обращения.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:px-8">
        <FadeIn>
          <div className="md:sticky md:top-28">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
              FAQ
            </span>
            <h2 className="font-display text-3xl leading-[1.1] font-semibold tracking-tight text-balance md:text-5xl">
              Частые вопросы
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-fog">
              Не нашли ответ? Напишите нам — команда поддержки на связи каждый день.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <FadeIn key={item.q} delay={i * 0.06}>
              <div className="glass overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="text-base font-semibold md:text-lg">{item.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 135 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`shrink-0 ${open === i ? 'text-accent' : 'text-fog'}`}
                  >
                    <Plus size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[15px] leading-relaxed text-fog">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
