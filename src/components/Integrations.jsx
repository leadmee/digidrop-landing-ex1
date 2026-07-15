import {
  Bitcoin,
  Braces,
  ChartLine,
  Citrus,
  Coins,
  CreditCard,
  Mail,
  Puzzle,
  Send,
  Target,
  Wallet,
  Webhook,
  Workflow,
  Building2,
} from 'lucide-react'
import FadeIn from './ui/FadeIn'
import Marquee from './ui/Marquee'
import Section from './ui/Section'

const row1 = [
  { icon: CreditCard, name: 'Stripe' },
  { icon: Wallet, name: 'PayPal' },
  { icon: Coins, name: 'Paddle' },
  { icon: Citrus, name: 'Lemon Squeezy' },
  { icon: Bitcoin, name: 'Крипто: BTC / USDT' },
  { icon: Mail, name: 'Mailchimp' },
  { icon: Send, name: 'ConvertKit' },
  { icon: Building2, name: 'HubSpot' },
]

const row2 = [
  { icon: Send, name: 'Telegram-уведомления' },
  { icon: Workflow, name: 'Zapier' },
  { icon: Puzzle, name: 'Make' },
  { icon: Webhook, name: 'Webhooks' },
  { icon: Braces, name: 'REST API' },
  { icon: ChartLine, name: 'Google Analytics' },
  { icon: Target, name: 'Meta Pixel' },
]

export default function Integrations() {
  return (
    <Section
      eyebrow="Интеграции"
      title="Встраивается в ваш рабочий процесс"
      subtitle="DigiDrop дружит с инструментами, которыми вы уже пользуетесь."
    >
      <FadeIn>
        <div className="flex flex-col gap-4">
          <Marquee items={row1} speed={34} />
          <Marquee items={row2} speed={28} reverse />
        </div>
      </FadeIn>

      <FadeIn className="mt-10 text-center" delay={0.15}>
        <p className="text-sm text-fog">
          Нет нужной интеграции? Подключите через API за один вечер —{' '}
          <a href="#" className="text-accent underline-offset-4 hover:underline">
            документация с примерами кода
          </a>
          .
        </p>
      </FadeIn>
    </Section>
  )
}
