import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  // Use a fixed year to prevent hydration mismatch
  const currentYear = 2024

  const footerLinks = {
    empresa: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Servicios", href: "#servicios" },
      { label: "Flota", href: "#flota" },
      { label: "Actividades", href: "#actividades" },
    ],
    servicios: [
      { label: "Transporte Turístico", href: "#servicios" },
      { label: "Traslado Ejecutivo", href: "#servicios" },
      { label: "Viajes Privados", href: "#servicios" },
      { label: "Transporte Corporativo", href: "#servicios" },
    ],
    destinos: [
      { label: "Lima", href: "#destinos" },
      { label: "Cusco", href: "#destinos" },
      { label: "Arequipa", href: "#destinos" },
      { label: "Puno", href: "#destinos" },
    ],
  }

  return (
    <footer className="bg-primary text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 overflow-hidden rounded-lg shadow-lg bg-white p-2">
                <Image
                  src="/morales-tours-vip2025.jpg"
                  alt="Morales Tours VIP Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-3xl font-serif font-bold">
                Morales Tours <span className="text-secondary">VIP</span>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Tu compañero de confianza para viajar por todo el Perú. Comodidad, seguridad y servicio de primera clase
              en cada kilómetro.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <Phone size={18} className="text-secondary" />
                <span>+51 985 928 062</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Mail size={18} className="text-secondary" />
                <span>info@moralestoursvip.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin size={18} className="text-secondary" />
                <span>Av. Principal 123, Lima, Perú</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={`empresa-${index}`}>
                  <Link href={link.href} className="text-background/80 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link, index) => (
                <li key={`servicios-${index}`}>
                  <Link href={link.href} className="text-background/80 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Destinos</h3>
            <ul className="space-y-2">
              {footerLinks.destinos.map((link, index) => (
                <li key={`destinos-${index}`}>
                  <Link href={link.href} className="text-background/80 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <a
                href="https://www.facebook.com/profile.php?id=100069093496294"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/51985928062"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>

            <div className="text-center md:text-right text-background/60 text-sm">
              <p>© {currentYear} Morales Tours VIP. Todos los derechos reservados.</p>
              <div className="flex gap-4 mt-2 justify-center md:justify-end">
                <Link href="#" className="hover:text-secondary transition-colors">
                  Política de Privacidad
                </Link>
                <span>•</span>
                <Link href="#" className="hover:text-secondary transition-colors">
                  Términos y Condiciones
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
