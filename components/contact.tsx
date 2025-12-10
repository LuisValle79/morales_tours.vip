"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = new FormData()
      form.append('name', formData.name)
      form.append('email', formData.email)
      form.append('phone', formData.phone)
      form.append('destination', formData.destination)
      form.append('message', formData.message)
      form.append('_captcha', 'false')
      form.append('_template', 'table')
      form.append('_subject', 'Nuevo mensaje desde Morales Tours VIP')
      form.append('_autoresponse', 'Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos pronto. - Equipo Morales Tours VIP')

      const response = await fetch('https://formsubmit.co/a5f0c11cb9ee02fe7ce7f80613e96694', {
        method: 'POST',
        body: form
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          destination: "",
          message: "",
        })
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
    } finally {
      setIsSubmitting(false)
    }
  }


  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+51 985 928 062",
      link: "tel:+51985928062",
    },
    {
      icon: Mail,
      title: "Email",
      content: "luisvalle231990@gmail.com",
      link: "mailto:luisvalle231990@gmail.com",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Av. Principal 123, Lima, Perú",
      link: "#",
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lun - Dom: 24/7",
      link: "#",
    },
  ]

  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              <span className="text-gold-gradient">Contáctanos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos listos para hacer realidad tu próximo viaje. Escríbenos y te responderemos a la brevedad
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-6">Envíanos un mensaje</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        className="w-full"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Teléfono *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+51 999 999 999"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-foreground mb-2">
                        Destino
                      </label>
                      <Input
                        id="destination"
                        name="destination"
                        type="text"
                        value={formData.destination}
                        onChange={handleInputChange}
                        placeholder="¿A dónde quieres viajar?"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mensaje *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Cuéntanos sobre tu viaje..."
                        rows={5}
                        className="w-full resize-none"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Al enviar este formulario, recibirás una confirmación automática y nos pondremos en contacto contigo dentro de las próximas 24 horas.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-secondary text-primary hover:bg-secondary/90 font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={18} />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="ml-2" size={18} />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                    ¡Mensaje Enviado Exitosamente!
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo muy pronto.
                  </p>
                  <div className="bg-secondary/10 p-4 rounded-lg mb-6">
                    <p className="text-sm text-muted-foreground">
                      <strong>¿Necesitas una respuesta inmediata?</strong><br />
                      Llámanos al +51 985 928 062 o escríbenos por WhatsApp
                    </p>
                  </div>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mr-4"
                  >
                    Enviar otro mensaje
                  </Button>
                  <Button asChild className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
                    <a
                      href="https://wa.me/51985928062?text=Hola,%20acabo%20de%20enviar%20un%20mensaje%20desde%20la%20web"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Información de contacto</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start gap-4 group hover:bg-muted/50 p-3 rounded-lg transition-colors"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <info.icon className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="bg-secondary/10 p-8 rounded-lg border-2 border-secondary">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">¿Prefieres WhatsApp?</h3>
                <p className="text-muted-foreground mb-6">
                  Chatea directamente con nosotros para una respuesta inmediata
                </p>
                <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold">
                  <a
                    href="https://wa.me/51985928062?text=Hola,%20me%20gustaría%20cotizar%20un%20viaje"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chatear por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
