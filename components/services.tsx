"use client"

import { Button } from "@/components/ui/button"
import { Car, Briefcase, Users, MapPin, Building2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: Car,
      title: "Transporte Turístico",
      description: "Tours personalizados a los principales destinos turísticos del Perú con guías especializados.",
      features: ["Tours personalizados", "Guías profesionales", "Itinerarios flexibles"],
    },
    {
      icon: Briefcase,
      title: "Traslado Ejecutivo",
      description: "Servicio premium para ejecutivos y empresarios que valoran la puntualidad y el confort.",
      features: ["Wi-Fi a bordo", "Agua y snacks", "Privacidad garantizada"],
    },
    {
      icon: Users,
      title: "Viajes Privados",
      description: "Servicio exclusivo para familias y grupos que buscan comodidad , privacidad total y momentos unicos.",
      features: ["Vehículo exclusivo", "Horarios flexibles", "Atención personalizada"],
    },
    {
      icon: MapPin,
      title: "Servicios Interprovinciales",
      description: "Traslados seguros entre ciudades del Perú con paradas estratégicas y confortables.",
      features: ["Rutas directas", "Paradas programadas", "Seguimiento GPS"],
    },
    {
      icon: Building2,
      title: "Transporte Corporativo",
      description: "Soluciones de movilidad para empresas, eventos corporativos y convenciones.",
      features: ["Contratos corporativos", "Facturación empresarial", "Flota disponible 24/7"],
    },
  ]

  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Nuestros <span className="text-gold-gradient">Servicios</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ofrecemos una amplia gama de servicios de transporte adaptados a tus necesidades
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-sm border border-border hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="text-secondary" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-primary bg-transparent"
                >
                  <Link href="#contacto">
                    Cotizar servicio
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
