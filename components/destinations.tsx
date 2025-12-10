"use client"

import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

export default function Destinations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const destinations = [
    {
      name: "Lima",
      description: "Capital del Perú, ciudad de reyes",
      image: "/lima-peru-cityscape-modern.jpg",
      popular: true,
    },
    {
      name: "Cusco",
      description: "Ombligo del mundo, capital del Imperio Inca",
      image: "/cusco-peru-ancient-city-mountains.jpg",
      popular: true,
    },
    {
      name: "Arequipa",
      description: "Ciudad blanca, patrimonio de la humanidad",
      image: "/arequipa-peru-white-city-volcano.jpg",
      popular: true,
    },
    {
      name: "Paracas",
      description: "Reserva nacional y playas paradisíacas",
      image: "/paracas-peru-beach-ocean.jpg",
      popular: false,
    },
    {
      name: "Ica",
      description: "Oasis del desierto y capital del pisco",
      image: "/ica-peru-desert-oasis.jpg",
      popular: false,
    },
    {
      name: "Puno",
      description: "Capital folklórica del Perú, Lago Titicaca",
      image: "/puno-peru-lake-titicaca.jpg",
      popular: true,
    },
    {
      name: "Nazca",
      description: "Misteriosas líneas y geoglifos",
      image: "/nazca-peru-lines-desert.jpg",
      popular: false,
    },
    {
      name: "Trujillo",
      description: "Ciudad de la eterna primavera",
      image: "/trujillo-peru-colonial-city.jpg",
      popular: false,
    },
  ]

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScroll)
      return () => container.removeEventListener("scroll", checkScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="destinos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Nuestros <span className="text-gold-gradient">Destinos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Te llevamos a cualquier destino del Perú con seguridad y comodidad
            </p>
          </div>

          <div className="relative group mb-12">
            {/* Navigation Buttons */}
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur-sm border border-border rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary hover:border-secondary"
                aria-label="Scroll left"
              >
                <ChevronLeft className="text-primary" size={24} />
              </button>
            )}
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur-sm border border-border rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary hover:border-secondary"
                aria-label="Scroll right"
              >
                <ChevronRight className="text-primary" size={24} />
              </button>
            )}

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {destinations.map((destination, index) => (
                <div key={index} className="flex-none w-[320px] snap-start group/card cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-[480px]">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity"></div>
                    {destination.popular && (
                      <div className="absolute top-6 right-6 bg-secondary text-primary px-4 py-2 rounded-full text-xs font-bold tracking-wide shadow-lg">
                        POPULAR
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-background transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin size={24} className="text-secondary" />
                        <h3 className="text-3xl font-serif font-bold">{destination.name}</h3>
                      </div>
                      <p className="text-base text-background/95 leading-relaxed">{destination.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: Math.ceil(destinations.length / 3) }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-border"></div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-card p-12 rounded-lg shadow-sm border border-border">
            <h3 className="text-3xl font-serif font-bold text-primary mb-4">¿No encuentras tu destino?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Viajamos a cualquier lugar del Perú. Contáctanos y cotiza tu viaje personalizado
            </p>
            <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-semibold">
              <Link href="#contacto">
                Solicitar cotización
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
