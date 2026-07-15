import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import FadeIn from './ui/FadeIn'
import Section from './ui/Section'

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
    <Section id="faq" eyebrow="FAQ" title="Частые вопросы">
      <div className="mx-auto flex max-w-3xl flex-col gap-3">
        {items.map((item, i) => (
          <FadeIn key={item.q} delay={i * 0.07}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-card">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-[15px] font-semibold">{item.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className={`shrink-0 ${open === i ? 'text-accent' : 'text-fog'}`}
                >
                  <ChevronDown size={18} />
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
                    <p className="px-6 pb-5 text-sm leading-relaxed text-fog">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
