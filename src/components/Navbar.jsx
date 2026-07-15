import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import GlowButton from './ui/GlowButton'

const links = [
  { href: '#features', label: 'Функции' },
  { href: '#how', label: 'Как это работает' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-ink/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-accent">
            <Zap size={17} className="text-white" fill="currentColor" />
          </span>
          <span className="font-display text-base font-medium tracking-tight">DigiDrop</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-fog transition-colors hover:text-snow">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <GlowButton href="#pricing" className="!px-5 !py-2.5 !text-[13px]">
            Попробовать бесплатно
          </GlowButton>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-snow md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/5 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-fog transition-colors hover:bg-white/5 hover:text-snow"
                >
                  {l.label}
                </a>
              ))}
              <GlowButton href="#pricing" className="mt-2">
                Попробовать бесплатно
              </GlowButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
