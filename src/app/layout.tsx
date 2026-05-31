import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SHOT BAR Tbilisi | Best Cocktail & Shots Bar Near Fabrika',
  description:
    'Experience Tbilisi nightlife at its best. SHOT BAR on Egnate Ninoshvili St offers craft cocktails, premium shots, and an unforgettable social atmosphere. From 10–20 ₾. Open until 4 AM.',
  keywords: [
    'Shot Bar Tbilisi',
    'cocktail bar Tbilisi',
    'bar near Fabrika',
    'Tbilisi nightlife',
    'Egnate Ninoshvili bar',
    'best bar Tbilisi',
    'cheap cocktails Tbilisi',
    'shots bar Georgia',
    'late night bar Tbilisi',
    'Fabrika nightlife',
  ],
  authors: [{ name: 'SHOT BAR Tbilisi' }],
  creator: 'SHOT BAR',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shotbar.ge',
    siteName: 'SHOT BAR Tbilisi',
    title: 'SHOT BAR Tbilisi | Cocktails & Shots Near Fabrika',
    description:
      'Your next favourite bar in Tbilisi. Craft cocktails, premium shots, and a legendary social scene — just steps from Fabrika. From 10 ₾.',
    images: [
      {
        url: './logo.jpg',
        width: 1200,
        height: 630,
        alt: 'SHOT BAR Tbilisi – Cocktails & Shots Bar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHOT BAR Tbilisi | Cocktails & Shots Near Fabrika',
    description:
      'Your next favourite bar in Tbilisi. Craft cocktails, premium shots from 10 ₾. Open until 4 AM.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/icon.ico" />
        <link rel="canonical" href="https://shotbar.ge" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BarOrPub',
              name: 'SHOT BAR',
              image: 'https://shotbar.ge/og-image.jpg',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '3 Egnate Ninoshvili St',
                addressLocality: 'Tbilisi',
                postalCode: '0144',
                addressCountry: 'GE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 41.6935,
                longitude: 44.8015,
              },
              url: 'https://shotbar.ge',
              telephone: '+995592681188',
              priceRange: '₾',
              servesCuisine: 'Cocktails, Shots, Drinks',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                  opens: '12:00',
                  closes: '03:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Friday', 'Saturday', 'Sunday'],
                  opens: '12:00',
                  closes: '04:00',
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '23',
              },
            }),
          }}
        />
      </head>
      <body className="font-body bg-stone-950 text-stone-100 antialiased">
        {children}
      </body>
    </html>
  )
}
