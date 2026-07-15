import {
  Bitcoin,
  Braces,
  Building2,
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
      align="left"
      eyebrow="Интеграции"
      title="Встраивается в ваш рабочий процесс"
      subtitle="DigiDrop дружит с инструментами, которыми вы уже пользуетесь."
    >
      <FadeIn>
        <div className="relative -mx-5 overflow-hidden py-8 md:-mx-8">
          <div className="flex origin-center flex-col gap-4 [transform:rotate(-3deg)_scale(1.06)]">
            <Marquee items={row1} speed={38} />
            <Marquee items={row2} speed={30} reverse />
          </div>
        </div>
      </FadeIn>

      <FadeIn className="mt-8" delay={0.15}>
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
