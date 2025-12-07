import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "M. Khalid CHAFAI – Avocat au Barreau de Tanger",
  description:
    "Cabinet d'avocat à Tanger, Maroc. Maître Khalid CHAFAI - Droit des affaires, droit civil, droit social et conseil juridique. Un avocat engagé pour vos intérêts.",
  keywords: ["avocat", "tanger", "maroc", "droit des affaires", "khalid chafai", "cabinet avocat"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
