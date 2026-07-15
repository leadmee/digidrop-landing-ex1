import { AnimatePresence, motion } from 'framer-motion'
import {
  ChartColumn,
  CircleCheck,
  FileArchive,
  LayoutDashboard,
  Lock,
  Mail,
  Package,
  Settings,
  ShoppingBag,
  Zap,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import GlowButton from './ui/GlowButton'

const words = ['Оплата', 'прошла', '—', 'товар', 'уже', 'у', 'клиента']

const stages = [
  { icon: FileArchive, label: 'курс.zip', color: 'text-accent' },
  { icon: Lock, label: 'защищено', color: 'text-brand' },
  { icon: Mail, label: 'доставлено', color: 'text-mint' },
]

const bars = [42, 65, 48, 80, 56, 90, 70, 100, 62, 85, 74, 95]

const orders = [
  { email: 'm.chen@gmail.com', product: 'Пресеты Neon Pack', price: '$29' },
  { email: 'a.silva@proton.me', product: 'Курс «UI с нуля»', price: '$79' },
  { email: 'k.tanaka@mail.com', product: 'Лицензия FigmaKit Pro', price: '$49' },
]

const sidebar = [
  { icon: LayoutDashboard, label: 'Обзор', active: true },
  { icon: Package, label: 'Товары' },
  { icon: ShoppingBag, label: 'Заказы' },
  { icon: ChartColumn, label: 'Аналитика' },
  { icon: Settings, label: 'Настройки' },
]

function DeliveryCycleCard() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setStage((s) => (s + 1) % stages.length), 1600)
    return () => clearInterval(t)
  }, [])

  const { icon: Icon, label, color } = stages[stage]

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-card/95 px-5 py-3.5 shadow-xl backdrop-blur">
      <AnimatePresence mode="wait">
        <motion.span
          key={stage}
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          className={`flex ${color}`}
        >
          <Icon size={22} />
        </motion.span>
      </AnimatePresence>
      <div>
        <AnimatePresence mode="wait">
          <motion.p
            key={stage}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="text-sm font-medium"
          >
            {label}
          </motion.p>
        </AnimatePresence>
        <p className="text-[11px] text-fog">заказ #4817</p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black_35%,transparent_100%)]" />
      <div className="absolute top-[-180px] left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand/25 blur-[140px]" />
      <div className="absolute top-[60px] right-[8%] h-[280px] w-[280px] rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-fog"
          >
            <Zap size={13} className="text-accent" fill="currentColor" />
            Доставка за 0,3 секунды после оплаты
          </motion.span>

          <motion.h1
            aria-label={words.join(' ')}
            className="mt-7 font-display text-[2.1rem] leading-[1.2] font-medium text-balance sm:text-5xl md:text-[3.4rem]"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } } }}
          >
            {words.map((w, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                variants={{
                  hidden: { opacity: 0, y: 26, filter: 'blur(8px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55 } },
                }}
                className={`mr-[0.28em] inline-block ${
                  i >= 3 ? 'bg-gradient-to-r from-brand via-accent to-mint bg-clip-text text-transparent' : ''
                }`}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fog md:text-lg"
          >
            DigiDrop автоматически доставляет файлы, лицензионные ключи и доступы к курсам сразу
            после оплаты. Безопасно, мгновенно и без вашего участия — даже когда вы спите.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <GlowButton href="#pricing">Попробовать бесплатно</GlowButton>
            <GlowButton href="#how" variant="secondary">
              Посмотреть, как работает
            </GlowButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.35 }}
            className="mt-5 text-xs text-fog/80"
          >
            Без карты · Настройка за 5 минут · Бесплатный тариф навсегда
          </motion.p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl [perspective:1600px] md:mt-20">
          <div className="animate-pulse-glow absolute -inset-8 rounded-[2.5rem] bg-gradient-to-r from-brand/30 via-accent/20 to-brand/30 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 70, rotateX: 18 }}
            animate={{ opacity: 1, y: 0, rotateX: 7 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/90 shadow-2xl backdrop-blur"
          >
            <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-4 rounded-md bg-white/5 px-3 py-1 text-[11px] text-fog">
                app.digidrop.io/dashboard
              </span>
            </div>

            <div className="grid md:grid-cols-[190px_1fr]">
              <aside className="hidden flex-col gap-1 border-r border-white/5 p-4 md:flex">
                {sidebar.map(({ icon: Icon, label, active }) => (
                  <span
                    key={label}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] ${
                      active ? 'bg-white/5 text-snow' : 'text-fog'
                    }`}
                  >
                    <Icon size={15} />
                    {label}
                  </span>
                ))}
              </aside>

              <div className="p-5 md:p-6">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Выручка сегодня', value: '$1 284', delta: '+12%' },
                    { label: 'Продажи', value: '47', delta: '+8%' },
                    { label: 'Доставлено', value: '47 из 47', delta: '100%' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-white/5 bg-white/[0.03] p-3.5">
                      <p className="truncate text-[11px] text-fog">{s.label}</p>
                      <p className="mt-1 text-base font-semibold md:text-lg">{s.value}</p>
                      <p className="text-[11px] text-mint">{s.delta}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex h-32 items-end gap-1.5 rounded-xl border border-white/5 bg-white/[0.03] p-4 md:h-36">
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.7, delay: 1.2 + i * 0.06, ease: 'easeOut' }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-brand/60 to-accent/80"
                    />
                  ))}
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  {orders.map((o) => (
                    <div
                      key={o.email}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-2.5"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-[13px]">{o.product}</p>
                        <p className="truncate text-[11px] text-fog">{o.email}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <span className="text-[13px] font-medium">{o.price}</span>
                        <span className="flex items-center gap-1 rounded-full bg-mint/10 px-2.5 py-1 text-[11px] text-mint">
                          <CircleCheck size={12} />
                          Доставлено
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="absolute top-14 -right-4 hidden lg:block xl:-right-16"
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
              <DeliveryCycleCard />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="absolute bottom-16 -left-4 hidden lg:block xl:-left-16"
          >
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-card/95 px-5 py-3.5 shadow-xl backdrop-blur">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint/15 text-mint">
                  <CircleCheck size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium">Оплата $49 получена</p>
                  <p className="text-[11px] text-fog">доставлено за 0,3 с</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
