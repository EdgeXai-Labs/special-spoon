import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import TrustBar from '@/components/TrustBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us | Charan Food Tech - Food Processing Machinery Manufacturer',
  description:
    'One of India’s leading manufacturers of food processing machinery and customized industrial equipment. Manufacturing innovation since 1990.',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="page-offset">
        <About />
        <TrustBar />
      </main>
      <Footer />
    </>
  )
}
