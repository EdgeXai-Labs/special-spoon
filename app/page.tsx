import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Industries from '@/components/Industries'
import Products from '@/components/Products'
import Solutions from '@/components/Solutions'
import Benefits from '@/components/Benefits'
// import ManufacturingProcess from '@/components/ManufacturingProcess'
import Comparison from '@/components/Comparison'
import Support from '@/components/Support'
import CustomMachine from '@/components/CustomMachine'
import TestimonialSlider from '@/components/TestimonialSlider'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SplashGate from '@/components/SplashGate'

export default function Home() {
  return (
    <SplashGate>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <Industries />
        <Products />
        <Solutions />
        <Benefits />
        {/* <ManufacturingProcess /> */}
        <Comparison />
        <Support />
        <CustomMachine />
        <TestimonialSlider />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </SplashGate>
  )
}
