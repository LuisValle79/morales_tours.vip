import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Fleet from "@/components/fleet"
import Activities from "@/components/activities"
import Destinations from "@/components/destinations"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SocialFloat from "@/components/social-float"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Activities />
      <Destinations />
      <Contact />
      <Footer />
      <SocialFloat />
    </main>
  )
}
