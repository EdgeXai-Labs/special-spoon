import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Charan Food Tech - Industrial Food Processing Machinery',
  description: 'We design, manufacture, customize and install industrial food processing machinery that improves productivity, reduces operating costs and delivers consistent product quality.',
  keywords: 'food processing machinery, potato chips line, namkeen line, industrial fryer, food manufacturing equipment, custom machinery',
  icons: {
    icon: '/images/CFT_logo.svg',
    apple: '/images/CFT_logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
