import { motion } from 'framer-motion'
import {
  AppWindow,
  FileArchive,
  FileCode2,
  FileText,
  Image,
  KeyRound,
  Music,
  Zap,
} from 'lucide-react'
import FolderDrop from './ui/FolderDrop'
import GlowButton from './ui/GlowButton'
import Marquee from './ui/Marquee'

const words = ['Оплата', 'прошла.', 'Товар', 'уже', 'у', 'клиента.']

const fileTypes = [
  { icon: FileArchive, name: 'курс.zip' },
  { icon: KeyRound, name: 'licence.key' },
  { icon: FileText, name: 'ebook.pdf' },
  { icon: Music, name: 'sample.wav' },
  { icon: Image, name: 'preset.dng' },
  { icon: AppWindow, name: 'app.dmg' },
  { icon: FileCode2, name: 'plugin.zip' },
]

export default function Hero() {
  const instant = typeof document !== 'undefined' && document.visibilityState === 'hidden'

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10">
          <motion.span
            initial={instant ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-fog"
          >
            <Zap size={13} className="text-accent" fill="currentColor" />
            Доставка за 0,3 секунды после оплаты
          </motion.span>

          <motion.h1
            aria-label={words.join(' ')}
            className="mt-6 font-display text-[2.6rem] leading-[1.12] font-semibold tracking-tight sm:text-6xl lg:text-[5rem] lg:leading-[1.04]"
            initial={instant ? false : 'hidden'}
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
          >
            {words.map((w, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                variants={{
                  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55 } },
                }}
                className={`mr-[0.22em] inline-block pb-[0.14em] ${
                  i >= 2 ? 'bg-gradient-to-br from-brand via-accent to-magenta bg-clip-text text-transparent' : ''
                }`}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={instant ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-fog md:text-lg"
          >
            DigiDrop автоматически доставляет файлы, лицензионные ключи и доступы к курсам сразу
            после оплаты. Безопасно, мгновенно и без вашего участия — даже когда вы спите.
          </motion.p>

          <motion.div
            initial={instant ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          >
            <GlowButton href="#pricing">Запустить автодоставку бесплатно</GlowButton>
            <GlowButton href="#how" variant="secondary">
              Посмотреть, как работает
            </GlowButton>
          </motion.div>

          <motion.p
            initial={instant ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-5 text-xs text-fog/80"
          >
            Без карты · Настройка за 5 минут · Бесплатный тариф навсегда
          </motion.p>
        </div>

        <motion.div
          initial={instant ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex h-[360px] items-center justify-center sm:h-[440px]"
        >
          <div className="animate-pulse-glow absolute h-64 w-64 rounded-full bg-brand/25 blur-[90px]" />
          <div className="[zoom:1.15] sm:[zoom:1.3] lg:[zoom:1.55]">
            <FolderDrop />
          </div>
        </motion.div>
      </div>

      <div className="mt-8 md:mt-4">
        <div className="mx-auto mb-3 max-w-7xl px-5 md:px-8">
          <span className="text-xs tracking-widest text-fog/60 uppercase">Доставляем что угодно</span>
        </div>
        <Marquee items={fileTypes} speed={32} />
      </div>
    </section>
  )
}
