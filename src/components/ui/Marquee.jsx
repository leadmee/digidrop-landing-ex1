export default function Marquee({ items, reverse = false, speed = 30 }) {
  // Two identical halves make the -50% translate seamless. Each half repeats the
  // items enough times to always exceed the viewport width, so the belt never
  // shows a gap on wide screens.
  const half = [...items, ...items, ...items]
  const content = [...half, ...half]
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max gap-4 py-2 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {content.map(({ icon: Icon, name }, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 rounded-full border border-white/10 bg-card px-5 py-2.5 text-sm whitespace-nowrap text-fog"
          >
            <Icon size={16} className="text-accent" />
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}
