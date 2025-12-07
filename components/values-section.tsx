import { Ear, Handshake, Shield, Heart } from "lucide-react"

const values = [
  {
    icon: Ear,
    title: "Écoute",
    description: "Chaque client mérite d'être entendu avec attention.",
  },
  {
    icon: Handshake,
    title: "Confiance",
    description: "La confiance au cœur de notre engagement.",
  },
  {
    icon: Shield,
    title: "Défense",
    description: "À votre écoute, dans le respect total de la confidentialité.",
  },
  {
    icon: Heart,
    title: "Engagement",
    description: "À vos côtés, avec rigueur et bienveillance, tout au long du processus.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 text-center glass rounded-2xl gradient-border hover:glow-primary transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-5">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:glow-primary transition-all duration-300">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-glow transition-all">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
