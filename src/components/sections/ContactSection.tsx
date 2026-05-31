'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-stone-900 border border-stone-700 text-stone-100 font-body text-sm rounded-xl px-4 py-3.5 placeholder-stone-600 transition-all duration-200 focus:outline-none focus:border-amber-400 focus:shadow-[0_0_0_3px_rgba(245,158,11,0.12)]'

  return (
    <section 
      id="contact" 
      className="relative py-28 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 70% 50% at 90% 80%, rgba(245,158,11,0.04) 0%, transparent 60%), linear-gradient(180deg, #0c0a09 0%, #141211 50%, #0c0a09 100%)'
      }}
    >
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.03] z-0" />

      <div
        className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-5 blur-3xl pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent 70%)' }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-48 h-48 md:w-80 md:h-80 rounded-full opacity-4 blur-3xl pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, #b45309, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up delay-100">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-amber-400/60" />
            <span className="text-amber-400 font-body text-xs tracking-[0.3em] uppercase">Get in Touch</span>
            <div className="h-px w-10 bg-amber-400/60" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-100 mb-4">
            Come Find Us
          </h2>
          <p className="font-body text-stone-400 text-lg max-w-lg mx-auto">
            We're just around the corner from Fabrika. Drop by tonight — or send us a message and we'll get back to you fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6 animate-fade-up delay-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+995592681188"
                className="glass-card rounded-2xl p-5 hover:border-amber-400/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center mb-3 group-hover:bg-amber-400/20 transition-colors">
                  <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="font-body text-xs text-stone-500 uppercase tracking-wide mb-1">Call Us</div>
                <div className="font-body font-semibold text-stone-100 text-sm">+995 592 68 11 88</div>
              </a>

              <a
                href="https://wa.me/995592681188"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-3 group-hover:bg-green-500/20 transition-colors">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="font-body text-xs text-stone-500 uppercase tracking-wide mb-1">WhatsApp</div>
                <div className="font-body font-semibold text-stone-100 text-sm">+995 592 68 11 88</div>
              </a>
            </div>

            <div className="glass-card rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <div className="font-body text-xs text-stone-500 uppercase tracking-wide mb-1">Address</div>
                <div className="font-body font-semibold text-stone-100 text-sm mb-0.5">3 Egnate Ninoshvili St</div>
                <div className="font-body text-stone-400 text-sm">Tbilisi 0144, Georgia</div>
                <div className="font-body text-stone-500 text-xs mt-1">📍 Near Fabrika · Plus Code: PR53+P8</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-stone-800 h-64">
              <iframe
                src="https://maps.app.goo.gl/4NmcJFgqeFeacth8A"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SHOT BAR Tbilisi Location"
              />
            </div>

            <a
              href="https://maps.app.goo.gl/4NmcJFgqeFeacth8A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full border border-stone-700 hover:border-amber-400/40 text-stone-300 hover:text-amber-400 font-body text-sm font-medium px-6 py-3.5 rounded-xl transition-all duration-300 tracking-wide"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Open in Google Maps
            </a>
          </div>

          <div className="animate-fade-up delay-350">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-stone-100 mb-2">Send us a Message</h3>
              <p className="font-body text-stone-400 text-sm mb-7">
                Questions, reservations, or just want to say hi — we'll reply quickly.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🥂</div>
                  <h4 className="font-display text-xl text-amber-400 font-bold mb-2">Message Sent!</h4>
                  <p className="font-body text-stone-400 text-sm">
                    Thanks for reaching out. We'll be in touch soon — see you at the bar!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-stone-400 text-xs uppercase tracking-wide block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="font-body text-stone-400 text-xs uppercase tracking-wide block mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+995 5XX XXX XXX"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-stone-400 text-xs uppercase tracking-wide block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="font-body text-stone-400 text-xs uppercase tracking-wide block mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us anything — questions, group bookings, or just hello..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full relative group bg-amber-400 hover:bg-amber-300 text-stone-900 font-body font-bold text-sm py-4 rounded-xl transition-all duration-300 tracking-widest uppercase overflow-hidden mt-2"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                  </button>

                  <p className="font-body text-stone-600 text-xs text-center">
                    Or call us directly:{' '}
                    <a href="tel:+995592681188" className="text-amber-400 hover:underline">
                      +995 592 68 11 88
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}