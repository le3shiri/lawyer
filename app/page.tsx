import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ValuesSection } from "@/components/values-section"
import { SloganSection } from "@/components/slogan-section"
import { CabinetSection } from "@/components/cabinet-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ValuesSection />
      <SloganSection />
      <CabinetSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
