"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    // Set initial scroll state
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Flota", href: "#flota" },
    { label: "Actividades", href: "#actividades" },
    { label: "Destinos", href: "#destinos" },
    { label: "Contacto", href: "#contacto" },
  ]

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="#inicio" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src="/morales-tours-vip2025.jpg"
                  alt="Morales Tours VIP Logo"
                  fill
                  className="object-contain bg-white p-1 group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="text-xl md:text-2xl font-serif font-bold">
                <span className="text-background">Morales Tours</span>
                <span className="text-secondary ml-2">VIP</span>
              </div>
            </Link>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            <div className={`relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 ${
              isScrolled 
                ? "w-10 h-10 md:w-12 md:h-12" 
                : "w-12 h-12 md:w-14 md:h-14"
            }`}>
              <Image
                src="/morales-tours-vip2025.jpg"
                alt="Morales Tours VIP Logo"
                fill
                className="object-contain bg-white p-1 group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className={`font-serif font-bold transition-all duration-300 ${
              isScrolled 
                ? "text-lg md:text-xl" 
                : "text-xl md:text-2xl"
            }`}>
              <span className="text-background">Morales Tours</span>
              <span className="text-secondary ml-2">VIP</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  isScrolled ? "text-background" : "text-background"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-secondary text-primary hover:bg-secondary/90 font-semibold">
              <Link href="#contacto">Reserva tu viaje</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-background">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 bg-primary/95 backdrop-blur-sm">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-background hover:text-secondary transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-secondary text-primary hover:bg-secondary/90 font-semibold mt-4">
                <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                  Reserva tu viaje
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
