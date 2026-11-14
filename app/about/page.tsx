import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import TrustBar from '@/components/TrustBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us | Charan Food Tech - Food Processing Machinery Manufacturer',
  description:
    'Charan Food Tech has delivered food processing machinery and customized engineering solutions since 1998.',
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
