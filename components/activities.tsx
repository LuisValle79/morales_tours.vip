"use client"

import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState, useEffect } from "react"

export default function Activities() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const activities = [
    {
      category: "Tours Recientes",
      icon: MapPin,
      items: [
        {
          title: "Tour Valle Sagrado - Cusco",
          date: "Marzo 2025",
          image: "/sacred-valley-cusco-peru-landscape.jpg",
          description: "Traslado de grupo turístico internacional por el Valle Sagrado",
        },
        {
          title: "Ruta Lima - Paracas - Ica",
          date: "Febrero 2025",
          image: "/paracas-peru-beach-landscape.jpg",
          description: "Servicio ejecutivo para delegación empresarial",
        },
        {
          title: "Circuito Arequipa - Colca",
          date: "Enero 2025",
          image: "/colca-canyon-arequipa-peru.jpg",
          description: "Tour familiar de 3 días por el sur del Perú",
        },
        {
          title: "Expedición Machu Picchu",
          date: "Marzo 2025",
          image: "/machu-picchu-ancient-ruins.png",
          description: "Viaje exclusivo para grupo de fotógrafos profesionales",
        },
        {
          title: "Ruta del Pisco - Ica",
          date: "Febrero 2025",
          image: "/ica-peru-vineyard-pisco.jpg",
          description: "Tour gastronómico y cultural por bodegas tradicionales",
        },
      ],
    },
    {
      category: "Eventos Corporativos",
      icon: Calendar,
      items: [
        {
          title: "Convención Empresarial 2025",
          date: "Marzo 2025",
          image: "/corporate-event-transportation-luxury.jpg",
          description: "Transporte para 50 ejecutivos durante evento de 3 días",
        },
        {
          title: "Traslado Aeropuerto VIP",
          date: "Febrero 2025",
          image: "/vip-airport-transfer-luxury-van.jpg",
          description: "Servicio premium para delegación internacional",
        },
        {
          title: "Retiro Corporativo Cusco",
          date: "Enero 2025",
          image: "/corporate-retreat-cusco-peru.jpg",
          description: "Traslado y logística para retiro empresarial de 4 días",
        },
      ],
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
    <section id="actividades" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Nuestras <span className="text-gold-gradient">Actividades</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descubre nuestros tours más recientes y eventos corporativos
            </p>
          </div>

          {/* Activities by Category */}
          <div className="space-y-20">
            {activities.map((category, catIndex) => (
              <div key={catIndex}>
                <div className="flex items-center gap-3 mb-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-full">
                    <category.icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-primary">{category.category}</h3>
                </div>

                <div className="relative group">
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
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex-none w-[380px] snap-start">
                        <div className="bg-card rounded-xl shadow-md border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 group/card cursor-pointer h-full">
                          <div className="relative h-64 overflow-hidden">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 bg-secondary text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                              {item.date}
                            </div>
                          </div>
                          <div className="p-6">
                            <h4 className="text-xl font-semibold text-primary mb-3 leading-tight">{item.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
