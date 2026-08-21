import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us | Charan Food Tech',
  description:
    'Get in touch with Charan Food Tech for machine inquiries, support, and consultations. Call, WhatsApp, or send your requirements online.',
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  )
}