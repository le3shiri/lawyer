import { Quote } from "lucide-react"

export function SloganSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative quote icon with glow */}
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-2xl glass glow-primary">
              <Quote className="h-10 w-10 text-primary" />
            </div>
          </div>

          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-glow text-balance">
            « Votre droit, notre priorité »
          </blockquote>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Notre engagement vise à instaurer une relation de confiance, fondée sur la transparence, la disponibilité et
            la confidentialité.
          </p>
        </div>
      </div>
    </section>
  )
}
