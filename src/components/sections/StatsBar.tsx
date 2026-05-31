'use client'

const stats = [
  { value: '5.0★', label: 'Google Rating', sub: '23 reviews' },
  { value: '10 ₾', label: 'Starting Price', sub: 'Cocktails & Shots' },
  { value: '4 AM', label: 'Closing Time', sub: 'Fri & Sat & Sun' },
  { value: '100%', label: 'Recommend', sub: 'By Our Guests' },
]

export default function StatsBar() {
  return (
    <div className="relative border-y border-stone-800/80 bg-stone-900/20 backdrop-blur-md z-10">
      {/* High-fidelity top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
          {stats.map((stat, index) => {
            const delays = ['delay-100', 'delay-150', 'delay-200', 'delay-250']
            const chosenDelay = delays[index] || 'delay-100'

            return (
              <div
                key={stat.label}
                className={`text-center group cursor-default animate-fade-up ${chosenDelay}`}
              >
                <div 
                  className="font-display text-3xl lg:text-4xl font-bold mb-1 transition-transform duration-300 group-hover:scale-105 inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #fbbf24, #d97706)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div className="font-body font-semibold text-stone-200 text-sm tracking-wide mb-0.5">
                  {stat.label}
                </div>
                <div className="font-body text-stone-500 text-xs">
                  {stat.sub}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Matching bottom glow line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-400/10 to-transparent" />
    </div>
  )
}