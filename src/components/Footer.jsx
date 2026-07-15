import { Globe, Mail, Send, Zap } from 'lucide-react'

const columns = [
  {
    title: 'Продукт',
    links: ['Функции', 'Тарифы', 'Интеграции', 'Changelog'],
  },
  {
    title: 'Ресурсы',
    links: ['Документация', 'API', 'Блог', 'Статус системы'],
  },
  {
    title: 'Компания',
    links: ['О нас', 'Контакты', 'Партнёрам'],
  },
  {
    title: 'Правовое',
    links: ['Условия использования', 'Конфиденциальность'],
  },
]

const socials = [
  { icon: Globe, label: 'Сайт' },
  { icon: Send, label: 'Telegram' },
  { icon: Mail, label: 'Почта' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="pointer-events-none overflow-hidden px-5 pt-14 md:px-8" aria-hidden="true">
        <p className="mx-auto max-w-7xl bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-center font-display text-[18vw] leading-none font-bold text-transparent select-none md:text-[13vw]">
          DigiDrop
        </p>
      </div>
      <div className="mx-auto w-full max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-accent">
                <Zap size={17} className="text-ink" fill="currentColor" />
              </span>
              <span className="font-display text-base font-medium tracking-tight">DigiDrop</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">
              © 2026 DigiDrop. Доставляем цифровое с любовью.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-fog transition-colors hover:border-white/25 hover:text-snow"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-fog transition-colors hover:text-snow">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
