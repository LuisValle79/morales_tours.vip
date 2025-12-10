"use client"

import { Shield, Clock, Award, Users } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Seguridad",
      description: "Unidades modernas con todos los permisos y seguros vigentes",
    },
    {
      icon: Clock,
      title: "Puntualidad",
      description: "Respetamos tu tiempo con llegadas y salidas exactas",
    },
    {
      icon: Award,
      title: "Calidad VIP",
      description: "Servicio premium con atención personalizada",
    },
    {
      icon: Users,
      title: "Confianza",
      description: "Choferes profesionales con años de experiencia",
    },
  ]

  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Sobre <span className="text-gold-gradient">Nosotros</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Morales Tours VIP es una empresa peruana especializada en transporte turístico y ejecutivo de alta
              calidad. Con años de experiencia, nos dedicamos a brindar el mejor servicio de traslado a cualquier
              destino del Perú.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Nuestra Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar servicios de transporte turístico y ejecutivo de excelencia, garantizando la seguridad,
                comodidad y satisfacción de nuestros pasajeros en cada viaje por el territorio peruano.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Nuestra Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser la empresa líder en transporte turístico VIP del Perú, reconocida por nuestra calidad de servicio,
                profesionalismo y compromiso con la excelencia en cada traslado.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                  <value.icon className="text-secondary" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
