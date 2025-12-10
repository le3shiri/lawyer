import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Scale, Award, Users, Clock } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern animate-grid-move" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/40 rounded-full animate-float" />
        <div
          className="absolute top-40 right-20 w-1.5 h-1.5 bg-primary/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/50 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-1/3 right-10 w-1.5 h-1.5 bg-primary/30 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Enhanced gradient orbs with more depth */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[80px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div
        className="absolute top-10 right-10 w-[200px] h-[200px] bg-cyan-500/10 rounded-full blur-[60px] animate-pulse-glow"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 glow-primary animate-float">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">Disponible pour consultation</span>
            </div>

            {/* Logo Icon with enhanced glow */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative p-5 rounded-2xl glass glow-primary animate-float">
                <Scale className="h-12 w-12 text-primary" />
                <div
                  className="absolute inset-0 rounded-2xl border border-primary/30 animate-spin"
                  style={{ animationDuration: "8s" }}
                />
              </div>
            </div>

            {/* Main Title with enhanced glow effect */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 text-balance text-glow">
              M. Khalid CHAFAI
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-4 tracking-wide">
              Avocat au Barreau de Tanger
            </p>

            {/* Arabic subtitle with decorative line */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="hidden sm:block w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
              <p className="text-lg md:text-xl text-muted-foreground font-arabic" dir="rtl">
                الأستاذ خالد الشافعي – محام بهيئة طنجة
              </p>
              <div className="hidden sm:block w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
            </div>

            <div className="space-y-2 mb-8">
              <p className="text-2xl md:text-3xl font-semibold text-foreground">Un avocat engagé pour vos intérêts.</p>
              <p className="text-xl md:text-2xl bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient font-semibold">
                À vos côtés, pour défendre vos droits.
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Notre pratique du droit repose sur une écoute attentive, une relation de confiance fondée sur la
              transparence et une défense engagée, alliant rigueur et humanité à chaque étape de votre accompagnement
              juridique.
            </p>

            {/* CTA Buttons with enhanced glow */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="text-base glow-primary hover:glow-primary-lg transition-all duration-300 hover:scale-105"
              >
                <a href="https://wa.me/+212661797469" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact WhatsApp : 0661 79 74 69
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base glass hover:glow-primary transition-all duration-300 bg-transparent hover:scale-105"
              >
                <a href="tel:+212661797469">
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler le cabinet
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 pt-10 border-t border-border/30">
              <div className="flex items-center gap-3 glass px-4 py-3 rounded-xl">
                <Award className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">15+</p>
                  <p className="text-xs text-muted-foreground">Années d'expérience</p>
                </div>
              </div>
              <div className="flex items-center gap-3 glass px-4 py-3 rounded-xl">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-xs text-muted-foreground">Clients satisfaits</p>
                </div>
              </div>
              <div className="flex items-center gap-3 glass px-4 py-3 rounded-xl">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">24h</p>
                  <p className="text-xs text-muted-foreground">Réponse rapide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-primary/30 animate-pulse-glow" />
              <div
                className="absolute -inset-8 rounded-full border border-primary/20 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              <div
                className="absolute -inset-12 rounded-full border border-primary/10 animate-spin"
                style={{ animationDuration: "30s", animationDirection: "reverse" }}
              />
              <div className="absolute -inset-16 rounded-full border border-dashed border-primary/10" />

              {/* Corner accents */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-xl" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-xl" />

              {/* Portrait container with enhanced glassmorphism */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-strong glow-primary-lg">
                <Image
                  src="/professional-male-lawyer-portrait-in-suit--dark-ba.jpeg"
                  alt="Maître Khalid CHAFAI - Avocat au Barreau de Tanger"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              </div>

              {/* Enhanced floating badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-6 py-2 glass-strong rounded-full glow-primary border border-primary/30">
                <p className="text-sm font-medium text-primary whitespace-nowrap">Barreau de Tanger</p>
              </div>

              <div
                className="absolute top-4 -right-4 px-3 py-1.5 glass rounded-lg glow-primary animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <p className="text-xs font-medium text-primary">+15 ans</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Découvrir</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
