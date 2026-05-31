'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: '5.0★', label: 'Google Rating', sub: '23 reviews' },
  { value: '10 ₾', label: 'Starting Price', sub: 'Cocktails & Shots' },
  { value: '4 AM', label: 'Closing Time', sub: 'Fri & Sat & Sun' },
  { value: '100%', label: 'Recommend', sub: 'By Our Guests' },
]

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach((child) => {
            child.classList.add('visible')
          })
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative border-y border-amber-400/10 bg-stone-900/40 backdrop-blur-sm"
    >
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="reveal text-center group"
            >
              <div className="font-display text-3xl lg:text-4xl font-bold text-amber-400 mb-1 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="font-body font-semibold text-stone-200 text-sm tracking-wide mb-0.5">
                {stat.label}
              </div>
              <div className="font-body text-stone-500 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
