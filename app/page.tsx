import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Industries from '@/components/Industries'
import About from '@/components/About'
import Products from '@/components/Products'
import Solutions from '@/components/Solutions'
import Benefits from '@/components/Benefits'
import ManufacturingProcess from '@/components/ManufacturingProcess'
import Comparison from '@/components/Comparison'
import Support from '@/components/Support'
import CustomMachine from '@/components/CustomMachine'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <Industries />
        <About />
        <Products />
        <Solutions />
        <Benefits />
        <ManufacturingProcess />
        <Comparison />
        <Support />
        <CustomMachine />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
