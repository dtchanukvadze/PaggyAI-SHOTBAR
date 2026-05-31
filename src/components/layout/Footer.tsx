export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-950 border-t border-amber-400/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-amber-400 flex items-center justify-center">
                <span className="text-amber-400 font-display font-bold text-xs">S</span>
              </div>
              <span className="font-display font-bold text-xl tracking-[0.2em] uppercase">
                Shot<span className="text-amber-400">Bar</span>
              </span>
            </div>
            <p className="text-stone-400 font-body text-sm leading-relaxed mb-6 max-w-xs">
              Tbilisi&apos;s most social bar. Great cocktails, unforgettable nights, and a community that keeps coming back.
            </p>
            <a
              href="https://www.instagram.com/donbijero?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-body transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow on Instagram
            </a>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-lg text-amber-400 mb-5 tracking-wide">Opening Hours</h3>
            <div className="space-y-2.5 font-body text-sm">
              {[
                { day: 'Monday – Thursday', hours: '12:00 PM – 3:00 AM' },
                { day: 'Friday', hours: '6:00 PM – 4:00 AM' },
                { day: 'Saturday', hours: '12:00 PM – 4:00 AM' },
                { day: 'Sunday', hours: '12:00 PM – 4:00 AM' },
              ].map((item) => (
                <div key={item.day} className="flex justify-between gap-4">
                  <span className="text-stone-400">{item.day}</span>
                  <span className="text-stone-200 font-medium">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg text-amber-400 mb-5 tracking-wide">Find Us</h3>
            <div className="space-y-4 font-body text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div>
                  <p className="text-stone-200">3 Egnate Ninoshvili St</p>
                  <p className="text-stone-400">Tbilisi 0144, Georgia</p>
                  <p className="text-stone-500 text-xs mt-1">Near Fabrika</p>
                </div>
              </div>
              <a
                href="tel:+995592681188"
                className="flex items-center gap-3 text-stone-300 hover:text-amber-400 transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                +995 592 68 11 88
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 font-body text-sm">
            © {currentYear} SHOT BAR Tbilisi. All rights reserved.
          </p>
          <p className="text-stone-600 font-body text-xs">
            3 Egnate Ninoshvili St, Tbilisi · Open until 4 AM
          </p>
        </div>
      </div>
    </footer>
  )
}
