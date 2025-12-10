"use client"

import { Star, Users, Wifi, Wind, Armchair, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState, useEffect } from "react"

export default function Fleet() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const fleet = [
    {
      name: "Mercedes-Benz Sprinter VIP",
      capacity: "12 pasajeros",
      image: "/auto1.jpg?height=400&width=600",
      features: ["Wi-Fi", "Aire acondicionado", "Asientos reclinables", "Sistema de audio premium"],
      driver: {
        name: "Carlos Morales",
        experience: "15 años",
        rating: 5.0,
        photo: "/lucas.jpg?height=200&width=200",
        description: "Especialista en rutas turísticas del sur del Perú",
      },
    },
    {
      name: "Toyota Hiace Premium",
      capacity: "10 pasajeros",
      image: "/auto2.jpg?height=400&width=600",
      features: ["Wi-Fi", "Aire acondicionado", "Asientos de cuero", "Pantallas individuales"],
      driver: {
        name: "Miguel Ángel Torres",
        experience: "12 años",
        rating: 4.9,
        photo: "/luis.jpg?height=200&width=200",
        description: "Experto en traslados ejecutivos y corporativos",
      },
    },
    {
      name: "Hyundai H1 Elite",
      capacity: "8 pasajeros",
      image: "/auto3.jpg?height=400&width=600",
      features: ["Wi-Fi", "Climatizador dual", "Asientos premium", "Iluminación LED"],
      driver: {
        name: "Roberto Sánchez",
        experience: "10 años",
        rating: 5.0,
        photo: "/lucas.jpg?height=200&width=200",
        description: "Especializado en tours al Valle Sagrado y Machu Picchu",
      },
    },
    {
      name: "Ford Transit Custom",
      capacity: "9 pasajeros",
      image: "/auto4.jpg?height=400&width=600",
      features: ["Wi-Fi", "Aire acondicionado", "Asientos ergonómicos", "Sistema de navegación"],
      driver: {
        name: "Luis Fernando Díaz",
        experience: "13 años",
        rating: 4.9,
        photo: "/luis.jpg?height=200&width=200",
        description: "Conductor certificado en primeros auxilios y seguridad vial",
      },
    },
    {
      name: "Volkswagen Crafter VIP",
      capacity: "11 pasajeros",
      image: "/auto5.jpg?height=400&width=600",
      features: ["Wi-Fi", "Climatización", "Asientos reclinables", "Puerto USB individual"],
      driver: {
        name: "Jorge Alberto Ramírez",
        experience: "14 años",
        rating: 5.0,
        photo: "/lucas.jpg?height=200&width=200",
        description: "Experto en rutas de la costa y sierra peruana",
      },
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
    <section id="flota" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Nuestra <span className="text-gold-gradient">Flota y Choferes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conoce nuestras unidades de lujo y a los profesionales que harán de tu viaje una experiencia inolvidable
            </p>
          </div>

          {/* Desktop Grid (hidden on mobile) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {fleet.map((vehicle, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-md border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              >
                {/* Vehicle Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Vehicle Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">{vehicle.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users size={18} />
                      <span className="font-semibold text-sm">{vehicle.capacity}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        {idx === 0 && <Wifi size={14} className="text-secondary" />}
                        {idx === 1 && <Wind size={14} className="text-secondary" />}
                        {idx === 2 && <Armchair size={14} className="text-secondary" />}
                        {idx === 3 && <Shield size={14} className="text-secondary" />}
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Driver Info */}
                  <div className="border-t border-border pt-4">
                    <h4 className="text-sm font-semibold text-primary mb-3">Tu chofer asignado:</h4>
                    <div className="flex items-start gap-3">
                      <img
                        src={vehicle.driver.photo || "/placeholder.svg"}
                        alt={vehicle.driver.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                      />
                      <div className="flex-1">
                        <h5 className="text-base font-semibold text-primary">{vehicle.driver.name}</h5>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-1">
                          <span>{vehicle.driver.experience}</span>
                          <div className="flex items-center gap-1">
                            <Star size={14} className="fill-secondary text-secondary" />
                            <span className="font-semibold">{vehicle.driver.rating}</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground italic leading-relaxed">
                          {vehicle.driver.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel (visible only on mobile) */}
          <div className="lg:hidden relative group">
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
              {fleet.map((vehicle, index) => (
                <div key={index} className="flex-none w-[340px] snap-start">
                  <div className="bg-card rounded-xl shadow-md border border-border overflow-hidden hover:shadow-2xl transition-all duration-500">
                    {/* Vehicle Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={vehicle.image || "/placeholder.svg"}
                        alt={vehicle.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Vehicle Info */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-primary mb-2">{vehicle.name}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users size={18} />
                          <span className="font-semibold text-sm">{vehicle.capacity}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2">
                        {vehicle.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                            {idx === 0 && <Wifi size={14} className="text-secondary" />}
                            {idx === 1 && <Wind size={14} className="text-secondary" />}
                            {idx === 2 && <Armchair size={14} className="text-secondary" />}
                            {idx === 3 && <Shield size={14} className="text-secondary" />}
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Driver Info */}
                      <div className="border-t border-border pt-4">
                        <h4 className="text-sm font-semibold text-primary mb-3">Tu chofer asignado:</h4>
                        <div className="flex items-start gap-3">
                          <img
                            src={vehicle.driver.photo || "/placeholder.svg"}
                            alt={vehicle.driver.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                          />
                          <div className="flex-1">
                            <h5 className="text-base font-semibold text-primary">{vehicle.driver.name}</h5>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-1">
                              <span>{vehicle.driver.experience}</span>
                              <div className="flex items-center gap-1">
                                <Star size={14} className="fill-secondary text-secondary" />
                                <span className="font-semibold">{vehicle.driver.rating}</span>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground italic leading-relaxed">
                              {vehicle.driver.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
