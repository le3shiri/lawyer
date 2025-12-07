import { Scale, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-10 bg-background relative overflow-hidden border-t border-border">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and name */}
          <div className="flex items-center gap-3">
            <div className="p-2 glass rounded-lg glow-primary">
              <Scale className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">
              Cabinet de Maître <span className="text-foreground font-medium">Khalid CHAFAI</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © 2025 – Cabinet de Maître Khalid CHAFAI – Tous droits réservés.
          </p>

          {/* Back to top button */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="glass hover:glow-primary transition-all bg-transparent"
          >
            <a href="#accueil" className="flex items-center gap-2">
              <ArrowUp className="h-4 w-4" />
              Retour en haut
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
