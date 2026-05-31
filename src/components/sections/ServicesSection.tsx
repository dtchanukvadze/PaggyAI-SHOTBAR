'use client'

const services = [
  {
    emoji: '🍸',
    category: 'Signature',
    title: 'Craft Cocktails',
    description:
      "Hand-crafted cocktails made with quality spirits, fresh ingredients, and Benjamin's signature creativity. Each sip is designed to surprise and delight.",
    features: ['Fresh ingredients', 'Creative recipes', 'Classic & modern styles'],
    price: 'From 15 ₾',
    cta: 'Order Tonight',
  },
  {
    emoji: '🥃',
    category: 'Popular',
    title: 'Premium Shots',
    description:
      "Our namesake specialty. Whether you're celebrating, daring your friends, or just want to kick the night up a gear — our shots deliver every time.",
    features: ['Single & double', 'Chaser options', 'Group-friendly'],
    price: 'From 10 ₾',
    cta: 'Come Try Them',
    featured: true,
  },
  {
    emoji: '🎉',
    category: 'Experience',
    title: 'Group Nights Out',
    description:
      'SHOT BAR is built for groups. The bar is social by design — easy to meet new people, share rounds, and create memories your whole crew will talk about.',
    features: ['Social seating', 'Group deals', 'Meet new people'],
    price: 'From 10 ₾ / person',
    cta: 'Bring the Crew',
  },
  {
    emoji: '🌙',
    category: 'Late Night',
    title: 'After-Hours Vibe',
    description:
      'When the rest of the city winds down, SHOT BAR stays alive. Open until 4 AM on weekends — your perfect last stop or the place you end up staying all night.',
    features: ['Open until 4 AM', 'Friday–Sunday late', 'Always buzzing'],
    price: 'Same great prices',
    cta: 'Find Us Late',
  },
  {
    emoji: '🌍',
    category: 'Community',
    title: 'International Crowd',
    description:
      'Guests fly in from Turkey, Germany, across Asia and beyond — and they all find their way to SHOT BAR. A truly global social scene in the heart of Tbilisi.',
    features: ['English-friendly', 'Welcoming to tourists', 'Local regulars too'],
    price: 'Open to everyone',
    cta: 'Join the Community',
  },
  {
    emoji: '🍹',
    category: 'Non-Alcoholic',
    title: 'Mocktails & Soft Drinks',
    description:
      "Great nights aren't exclusive to drinkers. We keep everyone refreshed with a selection of creative non-alcoholic options so nobody feels left out.",
    features: ['Creative mocktails', 'Soft drinks', 'Inclusive vibe'],
    price: 'Ask the bartender',
    cta: "You're Welcome Here",
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,158,11,0.03) 0%, transparent 70%), linear-gradient(180deg, #0c0a09 0%, #141211 50%, #0c0a09 100%)',
      }}
    >
      {/* Fine Grain Background Overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.03] z-0" />

      {/* Deep Center Background Radial Glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-5 pointer-events-none rounded-full blur-3xl z-0"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up delay-100">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-amber-400/60" />
            <span className="text-amber-400 font-body text-xs tracking-[0.3em] uppercase">What We Offer</span>
            <div className="h-px w-10 bg-amber-400/60" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-100 leading-tight mb-5">
            Drinks. Vibes.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #d97706)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Memories.
            </span>
          </h2>
          <p className="font-body text-stone-400 text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need for a great night in Tbilisi — all under one roof, at prices that won&apos;t make you wince.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const delays = ['delay-100', 'delay-150', 'delay-200', 'delay-250', 'delay-300', 'delay-350']
            const chosenDelay = delays[index] || 'delay-100'

            return (
              <div
                key={service.title}
                className={`group relative rounded-2xl p-7 transition-all duration-400 cursor-default animate-fade-up ${chosenDelay} ${
                  service.featured
                    ? 'bg-amber-400/[0.03] border border-amber-400/30 shadow-[0_0_40px_rgba(245,158,11,0.03)]'
                    : 'glass-card hover:border-amber-400/20'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-amber-400 text-stone-900 font-body font-bold text-xs px-3 py-1 rounded-full tracking-widest uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="font-body text-amber-400 text-xs tracking-widest uppercase font-medium block mb-1">
                      {service.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-stone-100">{service.title}</h3>
                  </div>
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300 inline-block">
                    {service.emoji}
                  </span>
                </div>

                <p className="font-body text-stone-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-body text-stone-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Bottom row */}
                <div className="flex items-center justify-between pt-4 border-t border-stone-800">
                  <span className="font-display font-bold text-amber-400 text-sm">{service.price}</span>
                  <a
                    href="#contact"
                    className={`font-body text-sm font-semibold tracking-wide transition-all duration-200 ${
                      service.featured
                        ? 'text-amber-400 hover:text-amber-300'
                        : 'text-stone-400 hover:text-amber-400'
                    }`}
                  >
                    {service.cta} →
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 animate-fade-up delay-450">
          <p className="font-body text-stone-500 text-sm mb-5">
            Ready to see for yourself? We&apos;re open tonight.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+995592681188"
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-900 font-body font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 tracking-wide shadow-lg shadow-amber-400/20"
            >
              📞 Call +995 592 68 11 88
            </a>
            <a
              href="#contact"
              className="border border-stone-700 hover:border-amber-400/40 text-stone-300 hover:text-amber-400 font-body font-medium text-sm px-8 py-4 rounded-full transition-all duration-300 tracking-wide"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}