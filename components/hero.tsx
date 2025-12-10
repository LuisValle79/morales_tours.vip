"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center parallax-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/luxury-minivan-on-scenic-peruvian-highway-mountain.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-background leading-tight text-balance">
            Tu viaje <span className="text-gold-gradient">VIP</span> por todo el Perú comienza aquí
          </h1>
          <p className="text-xl md:text-2xl text-background/90 leading-relaxed max-w-2xl mx-auto text-pretty">
            Comodidad, seguridad y confianza en cada kilómetro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90 font-semibold text-lg px-8 py-6"
            >
              <Link href="#contacto">
                Reservar ahora
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-background text-background hover:bg-background hover:text-primary font-semibold text-lg px-8 py-6 bg-transparent"
            >
              <Link href="#servicios">
                Ver servicios
                <Play className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-background rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
