"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+212661797469"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact via WhatsApp"
    >
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-pulse scale-125" />

      {/* Main button */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-110 transition-all duration-300">
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </div>

      {/* Tooltip on hover */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-background/95 backdrop-blur-sm border border-border rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        <p className="text-sm font-medium text-foreground">Contactez-nous sur WhatsApp</p>
        <p className="text-xs text-muted-foreground">0661 79 74 69</p>
        {/* Arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-background/95" />
      </div>
    </a>
  )
}
