'use client'

import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--mouse-x', `${x}%`)
      el.style.setProperty('--mouse-y', `${y}%`)
    }
    el.addEventListener('mousemove', handler)
    return () => el.removeEventListener('mousemove', handler)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at var(--mouse-x, 50%) var(--mouse-y, 30%), 
            rgba(245,158,11,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 80% 20%, rgba(120,53,15,0.15) 0%, transparent 50%),
          linear-gradient(180deg, #0c0a09 0%, #1c1917 50%, #0c0a09 100%)
        `,
      }}
    >
      {/* Mobile-optimized performance-safe ambient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 rounded-full opacity-10 blur-2xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full opacity-8 blur-2xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #b45309, transparent)' }}
      />

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-16 right-16 opacity-10 hidden lg:block" width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#f59e0b" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#f59e0b" strokeWidth="0.5" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="#f59e0b" strokeWidth="0.5" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="#f59e0b" strokeWidth="0.5" />
        </svg>
        <svg className="absolute bottom-24 left-12 opacity-10 hidden lg:block" width="120" height="120" viewBox="0 0 120 120">
          <polygon points="60,5 115,90 5,90" fill="none" stroke="#f59e0b" strokeWidth="0.5" />
          <polygon points="60,30 95,85 25,85" fill="none" stroke="#f59e0b" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-16 md:pt-24">
        {/* Eyebrow - Adjusted top margin to move it down 6px on mobile / 16px on desktop gracefully */}
        <div className="inline-flex items-center gap-3 mt-1.5 md:mt-4 mb-10 animate-fade-up delay-100">
          <div className="h-px w-12 bg-amber-400/60" />
          <span className="text-amber-400 font-body text-xs tracking-[0.3em] uppercase font-medium">
            Tbilisi&apos;s Social Hub · Est. Near Fabrika
          </span>
          <div className="h-px w-12 bg-amber-400/60" />
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] mb-6 animate-fade-up delay-200">
          <span className="text-stone-100 block">Where Every</span>
          <span
            className="block mt-2"
            style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 40%, #d97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Night Becomes
          </span>
          <span className="text-stone-100 block">a Story</span>
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg sm:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up delay-350">
          Craft cocktails. Premium shots. Legendary atmosphere. Tbilisi&apos;s most social bar — where strangers become friends and one drink turns into three. From just{' '}
          <span className="text-amber-400 font-semibold">10 ₾</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-up delay-450">
          <a
            href="#contact"
            className="relative group bg-amber-400 hover:bg-amber-300 text-stone-900 font-body font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 tracking-widest uppercase overflow-hidden shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40"
          >
            <span className="relative z-10">Find Us Tonight</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </a>
          <a
            href="#about"
            className="border border-stone-600 hover:border-amber-400/60 text-stone-300 hover:text-amber-400 font-body font-medium text-sm px-8 py-4 rounded-full transition-all duration-300 tracking-widest uppercase"
          >
            Our Story
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 animate-fade-up delay-550">
          {[
            { icon: '⭐', value: '5.0', label: 'Rating on Google' },
            { icon: '🌍', value: '23+', label: 'Glowing Reviews' },
            { icon: '🥂', value: '10–20₾', label: 'Per Person' },
            { icon: '🕓', value: 'Until 4 AM', label: 'Late Night Fun' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <span className="text-xl">{item.icon}</span>
              <div className="text-left">
                <div className="font-display font-bold text-stone-100 text-sm">{item.value}</div>
                <div className="font-body text-stone-500 text-xs">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-body text-stone-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-amber-400/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}