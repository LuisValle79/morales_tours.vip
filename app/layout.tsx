import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import AnalyticsWrapper from "@/components/analytics"
import "./globals.css"

export const metadata: Metadata = {
  title: "Morales Tours VIP | Transporte Turístico de Lujo en Perú",
  description:
    "Servicio de transporte turístico VIP en Perú. Comodidad, seguridad y confianza en cada kilómetro. Traslados ejecutivos y turísticos a cualquier destino.",
  keywords: "transporte turístico Perú, traslado ejecutivo, tours VIP, transporte de lujo Perú",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Suspense fallback={null}>{children}</Suspense>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
