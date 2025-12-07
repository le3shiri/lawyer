import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    text: "Maître Khalid Chafai est un avocat sérieux, compétent et très professionnel. Il est à l'écoute et se soucie réellement des affaires qu'il traite. Je le recommande vivement.",
    rtl: false,
    rating: 5,
  },
  {
    text: "J'ai été impressionnée par le professionnalisme et la réactivité du cabinet. Mon affaire a été traitée avec sérieux et une grande écoute.",
    rtl: false,
    rating: 5,
  },
  {
    text: "Un avocat excellent en droit commercial et des affaires. Grâce à lui, notre entreprise a surmonté une situation très complexe et a retrouvé le chemin de la réussite.",
    rtl: false,
    rating: 5,
  },
  {
    text: "مكتب قانوني محترم وتعامل أكثر من ممتاز. محام متمكن ويتابع الملفات بجدية عالية.",
    rtl: true,
    rating: 5,
  },
  {
    text: "Maître Khalid Chafai est un homme de droit qui trouve des solutions adaptées à chaque dossier.",
    rtl: false,
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="avis" className="py-24 bg-background relative overflow-hidden scroll-mt-20">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Témoignages</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-glow">Avis clients vérifiés</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Découvrez les témoignages de nos clients satisfaits</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 glass rounded-2xl gradient-border hover:glow-primary transition-all duration-500"
            >
              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <Quote className="h-8 w-8 text-primary mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />

              <p className="text-foreground leading-relaxed" dir={testimonial.rtl ? "rtl" : "ltr"}>
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
