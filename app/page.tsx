import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
// import Industries from '@/components/Industries'
import Products from '@/components/Products'
import Solutions from '@/components/Solutions'
// import Benefits from '@/components/Benefits' // OLD: Commented out
import WhyChooseMachines from '@/components/WhyChooseMachines' // NEW: Modern section
// import ManufacturingProcess from '@/components/ManufacturingProcess'
import Comparison from '@/components/Comparison'
import Support from '@/components/Support'
import Gallery from '@/components/Gallery'
import TrustedBrands from '@/components/TrustedBrands'
import TestimonialSlider from '@/components/TestimonialSlider'
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
        {/* <Industries /> */}
        <Products />
        {/* <Solutions /> */}
        {/* <Benefits /> OLD: 3D orbital animation section */}
        {/* <ManufacturingProcess /> */}
        {/* <Comparison /> */}
        <Gallery /> {/* NEW: Reels-style video gallery */}
        <TrustedBrands />
        <TestimonialSlider />
        <Support />
        {/* <FAQ /> */}
        <Contact />
        <WhyChooseMachines /> {/* NEW: Professional machine showcase section */}
      </main>
      <Footer />
    </SplashGate>
  )
}
