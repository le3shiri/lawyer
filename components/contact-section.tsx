import { MapPin, Phone, Mail, Globe, Facebook, Instagram, MessageCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden scroll-mt-20">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Nous contacter</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-glow">Contact & Coordonnées</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="glass rounded-2xl p-8 gradient-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                M. Khalid CHAFAI – Avocat au Barreau de Tanger
              </h3>

              <div className="space-y-5">
                <a
                  href="tel:+212661797469"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-primary/20 group-hover:glow-primary transition-all">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Téléphone</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      0661-797469
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:khalidchafai92@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-primary/20 group-hover:glow-primary transition-all">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">E-mail</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      khalidchafai92@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Adresse</p>
                    <p className="text-foreground">
                      1er Étage N°8, Résidence Playa Mar,
                      <br />
                      Angle Bd Antaki et Moatamid Bnou Abbad,
                      <br />
                      Tanger 90000 – Maroc
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.AvocatKhalidChafai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-primary/20 group-hover:glow-primary transition-all">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Site Web</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors flex items-center gap-2">
                      www.AvocatKhalidChafai.com
                      <ExternalLink className="h-3 w-3" />
                    </p>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-6 mt-6 border-t border-border">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="glass hover:glow-primary transition-all bg-transparent"
                >
                  <a
                    href="https://www.facebook.com/people/Mkhalid-Chafai/61550566983172"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="glass hover:glow-primary transition-all bg-transparent"
                >
                  <a
                    href="https://www.instagram.com/khalidkhalid470/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="glass hover:glow-primary transition-all bg-transparent"
                >
                  <a href="https://wa.me/+212661797469" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Google Maps Embed with glow */}
            <div className="glass rounded-2xl overflow-hidden glow-primary h-full min-h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.4321!2d-5.8134!3d35.7673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e0e!2sTanger%2C%20Morocco!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cabinet location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
