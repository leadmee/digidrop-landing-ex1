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
      <div className="pointer-events-none overflow-x-clip px-5 pt-2 pb-0 md:px-8" aria-hidden="true">
        <p className="mx-auto max-w-7xl whitespace-nowrap bg-gradient-to-b from-white/14 to-white/[0.07] bg-clip-text pb-[0.2em] text-center font-display text-[16vw] leading-[1.05] font-bold text-transparent select-none md:text-[12vw]">
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
            <a
              href="https://github.com/leadmee"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-2 pr-4 pl-2 text-sm text-fog transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:text-snow"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-ink">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </span>
              <span>
                Made by <span className="font-medium text-snow">leadmee</span>
              </span>
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
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
