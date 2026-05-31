import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ContactSection from '@/components/sections/ContactSection'
import StatsBar from '@/components/sections/StatsBar'

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
