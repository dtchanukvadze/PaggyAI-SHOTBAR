'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu & Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['home', 'about', 'services', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border-2 border-amber-400 flex items-center justify-center group-hover:bg-amber-400 transition-colors duration-300">
            <span className="text-amber-400 group-hover:text-stone-900 font-display font-bold text-xs leading-none transition-colors duration-300">
              S
            </span>
          </div>
          <span className="font-display font-bold text-xl tracking-[0.2em] text-stone-100 uppercase">
            Shot<span className="text-amber-400">Bar</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-body tracking-widest uppercase hover-underline transition-colors duration-200 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-amber-400'
                  : 'text-stone-400 hover:text-stone-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+995592681188"
            className="hidden md:flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-900 font-body font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/20 tracking-wide"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-stone-100 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-stone-100 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-stone-100 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-stone-950/98 backdrop-blur-xl border-t border-amber-400/10 transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-screen py-6' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-stone-300 hover:text-amber-400 font-body tracking-widest uppercase text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+995592681188"
            className="w-full text-center bg-amber-400 hover:bg-amber-300 text-stone-900 font-semibold px-6 py-3 rounded-full transition-colors duration-300 tracking-wide"
          >
            📞 Call Now
          </a>
        </nav>
      </div>
    </header>
  )
}
