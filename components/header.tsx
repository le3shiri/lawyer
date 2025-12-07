"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#accueil", label: "Accueil" },
  { href: "#cabinet", label: "Cabinet" },
  { href: "#domaines", label: "Domaines d'intervention" },
  { href: "#avis", label: "Avis clients" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with glow effect */}
          <Link href="#accueil" className="flex items-center gap-3 group">
            <div className="p-2 rounded-lg glass group-hover:glow-primary transition-all duration-300">
              <Scale className="h-7 w-7 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary text-glow">Lawyer</span>
              <span className="text-xs text-muted-foreground">Khalid Chafai</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden glass" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation with glassmorphism */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 glass-strong rounded-lg mt-2 mb-4">
            <div className="flex flex-col gap-1 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
