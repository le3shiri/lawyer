import { CheckCircle, ArrowRight } from "lucide-react"

const highlights = [
  "Accompagnement personnalisé",
  "Transparence et pédagogie juridique",
  "Réactivité et suivi des dossiers",
]

const practiceAreas = [
  { fr: "Contentieux de droit des affaires", ar: "منازعات قانون الأعمال" },
  { fr: "Droit des sociétés", ar: "قانون الشركات" },
  { fr: "Droit de propriété industrielle (marques et brevets)", ar: "قانون الملكية الصناعية" },
  { fr: "Contentieux des contrats commerciaux", ar: "منازعات العقود التجارية" },
  { fr: "Contentieux des baux commerciaux", ar: "منازعات الكراء التجاري" },
  { fr: "Droit de la concurrence", ar: "قانون المنافسة" },
  { fr: "Droit bancaire", ar: "القانون البنكي" },
  { fr: "Droit de la consommation", ar: "قانون الاستهلاك" },
  { fr: "Droit des entreprises en difficulté", ar: "قانون صعوبات المقاولة" },
  { fr: "Litiges en droit du travail", ar: "نزاعات قانون الشغل" },
  { fr: "Litiges de droit civil", ar: "نزاعات القانون المدني" },
  { fr: "Litiges de droit administratif", ar: "نزاعات القانون الإداري" },
  { fr: "Litiges en droit de la famille", ar: "نزاعات قانون الأسرة" },
  { fr: "Litiges en droit foncier", ar: "نزاعات القانون العقاري" },
  { fr: "Arbitrage en matière de litiges commerciaux et civils", ar: "التحكيم في المنازعات التجارية والمدنية" },
]

export function CabinetSection() {
  return (
    <section id="cabinet" className="py-24 bg-card relative overflow-hidden scroll-mt-20">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - About */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">Notre Cabinet</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Cabinet d'Avocats et de conseil juridique à Tanger
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Le cabinet de Maître Khalid CHAFAI, avocat au Barreau de Tanger, est dédié à la défense des intérêts de
                ses clients dans le respect de la loi, de l'éthique et de la confidentialité.
              </p>
              <p>
                Nous intervenons aussi bien en conseil qu'en contentieux, pour les particuliers comme pour les
                entreprises, en droit des affaires, droit civil, droit social et d'autres branches essentielles du
                droit.
              </p>
            </div>

            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:glow-primary transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-primary/20">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Practice Areas */}
          <div id="domaines" className="scroll-mt-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">Expertises</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Domaines d'intervention</h2>

            <div className="grid gap-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {practiceAreas.map((area, index) => (
                <div
                  key={index}
                  className="group p-4 glass rounded-xl gradient-border hover:glow-primary transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-foreground font-medium mb-1 group-hover:text-primary transition-colors">
                        {area.fr}
                      </p>
                      <p className="text-muted-foreground text-sm" dir="rtl">
                        {area.ar}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
