'use client'

import { useEffect, useRef } from 'react'

const highlights = [
  {
    icon: '🤗',
    title: 'The Friendliest Bar in Tbilisi',
    description:
      'Benjamin, our owner and bartender, makes every guest feel like a regular from the very first visit. No strangers — only friends you haven\'t met yet.',
  },
  {
    icon: '🌍',
    title: 'A Global Meeting Point',
    description:
      'Guests from Turkey, Germany, Asia, and beyond all find their way here. SHOT BAR is where Tbilisi\'s international community gathers night after night.',
  },
  {
    icon: '💸',
    title: 'Premium Taste, Honest Prices',
    description:
      'Great cocktails and shots shouldn\'t cost a fortune. At 10–20 ₾ per person, you get quality drinks and a world-class atmosphere without the hefty price tag.',
  },
  {
    icon: '📍',
    title: 'Prime Fabrika Location',
    description:
      'Nestled steps from Fabrika — Tbilisi\'s legendary nightlife hub — we\'re perfectly placed at the heart of where the city comes alive after dark.',
  },
]

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll('.reveal').forEach((child) => {
              child.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background detail */}
      <div
        className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at right center, #f59e0b, transparent 70%)',
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-20 max-w-2xl">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-10 bg-amber-400" />
            <span className="text-amber-400 font-body text-xs tracking-[0.3em] uppercase">Our Story</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-100 leading-tight mb-6">
            Not Just a Bar.
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #d97706)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              A Community.
            </span>
          </h2>
          <p className="font-body text-stone-400 text-lg leading-relaxed">
            SHOT BAR opened its doors on Egnate Ninoshvili Street with one mission: create a space where everyone feels welcome, every night feels special, and every drink is worth every lari.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: story text */}
          <div className="reveal space-y-6">
            <p className="font-body text-stone-300 text-base leading-relaxed">
              What started as a small cocktail and shots bar near the vibrant Fabrika district has become one of Tbilisi&apos;s most-loved nightlife spots. With a perfect 5-star rating and a steady stream of returning guests — locals and tourists alike — SHOT BAR has earned its place in the city&apos;s social fabric.
            </p>
            <p className="font-body text-stone-400 text-base leading-relaxed">
              The secret? A warm, electric atmosphere led by Benjamin — our host, bartender, and the soul of SHOT BAR. Guests who planned to stay for one drink end up returning for three nights in a row. That&apos;s the SHOT BAR effect.
            </p>
            <p className="font-body text-stone-400 text-base leading-relaxed">
              With prices starting from just 10 ₾ and a kitchen of creativity behind the bar, you get premium cocktails and signature shots that punch well above their price. Open late — until 4 AM on weekends — we&apos;re here for the full night, every night.
            </p>

            {/* Quote */}
            <div className="relative pl-6 py-4 mt-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-400" />
              <p className="font-display text-xl text-stone-200 italic leading-snug mb-2">
                &ldquo;Feels like a social hub — people come back every single night.&rdquo;
              </p>
              <p className="font-body text-stone-500 text-sm">— Guest Review, Google Maps</p>
            </div>
          </div>

          {/* Right: highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="reveal glass-card rounded-2xl p-6 hover:border-amber-400/30 transition-all duration-300 group cursor-default"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-stone-100 text-base mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-stone-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hours teaser */}
        <div className="reveal">
          <div className="glass-card rounded-2xl p-8 border border-amber-400/15">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl text-stone-100 font-bold mb-1">We&apos;re Open Tonight</h3>
                <p className="font-body text-stone-400 text-sm">Sunday through Saturday — we&apos;re here late so you don&apos;t have to rush.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm font-body min-w-fit">
                {[
                  { days: 'Mon – Thu', hours: '12:00 PM – 3:00 AM' },
                  { days: 'Friday', hours: '6:00 PM – 4:00 AM' },
                  { days: 'Saturday', hours: '12:00 PM – 4:00 AM' },
                  { days: 'Sunday', hours: '12:00 PM – 4:00 AM' },
                ].map((row) => (
                  <div key={row.days}>
                    <div className="text-amber-400 font-semibold text-xs tracking-wide mb-0.5">{row.days}</div>
                    <div className="text-stone-300">{row.hours}</div>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="flex-shrink-0 bg-amber-400 hover:bg-amber-300 text-stone-900 font-body font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 tracking-wide whitespace-nowrap"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
