import type { ReactNode } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ProductDetailLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
