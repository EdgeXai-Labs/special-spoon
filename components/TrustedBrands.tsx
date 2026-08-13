'use client'

const BRAND_LOGOS = [
  { src: '/images/trusted_brands/aashirvaad.png', alt: 'Aashirvaad' },
  { src: '/images/trusted_brands/achi.jpg', alt: 'Achi' },
  { src: '/images/trusted_brands/ananda_bavana.jpg', alt: 'Ananda Bhavan' },
  { src: '/images/trusted_brands/crn.png', alt: 'CRN' },
  { src: '/images/trusted_brands/delights.jpg', alt: 'Delights' },
  { src: '/images/trusted_brands/ganaga.png', alt: 'Ganga' },
  { src: '/images/trusted_brands/grb.png', alt: 'GRB' },
  { src: '/images/trusted_brands/haldiram.png', alt: 'Haldiram' },
  { src: '/images/trusted_brands/heritage.jpg', alt: 'Heritage' },
  { src: '/images/trusted_brands/id fresh.jpg', alt: 'iD Fresh' },
  { src: '/images/trusted_brands/itc_limited.png', alt: 'ITC Limited' },
  { src: '/images/trusted_brands/iyenagers.jpg', alt: 'Iyengars' },
  { src: '/images/trusted_brands/laxmi.jpg', alt: 'Laxmi' },
  { src: '/images/trusted_brands/mayyas.png', alt: 'Mayyas' },
  { src: '/images/trusted_brands/mtr.png', alt: 'MTR' },
  { src: '/images/trusted_brands/naag.jpg', alt: 'Naag' },
  { src: '/images/trusted_brands/naidu.jpg', alt: 'Naidu' },
  { src: '/images/trusted_brands/nandini.jpg', alt: 'Nandini' },
  { src: '/images/trusted_brands/nissin.png', alt: 'Nissin' },
  { src: '/images/trusted_brands/ogara.jpg', alt: 'Ogara' },
  { src: '/images/trusted_brands/rishta.jpg', alt: 'Rishta' },
  { src: '/images/trusted_brands/sri krishna sweets.png', alt: 'Sri Krishna Sweets' },
  { src: '/images/trusted_brands/sumero.jpg', alt: 'Sumero' },
  { src: '/images/trusted_brands/swastiks.png', alt: 'Swastiks' },
  { src: '/images/trusted_brands/teju.png', alt: 'Teju' },
  { src: '/images/trusted_brands/zam_zam.png', alt: 'Zam Zam' },
]

// Split logos into two rows
const midpoint = Math.ceil(BRAND_LOGOS.length / 2)
const rowOne = BRAND_LOGOS.slice(0, midpoint)
const rowTwo = BRAND_LOGOS.slice(midpoint)

function BrandCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="brand-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

function MarqueeRow({
  logos,
  direction,
}: {
  logos: { src: string; alt: string }[]
  direction: 'left' | 'right'
}) {
  // Duplicate the set so the track can loop seamlessly
  const track = [...logos, ...logos]
  return (
    <div className="brand-marquee">
      <div className={`brand-track brand-track-${direction}`}>
        {track.map((logo, index) => (
          <BrandCard key={`${logo.alt}-${index}`} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  )
}

export default function TrustedBrands() {
  return (
    <section className="section" aria-label="Brands that trust us">
      <div className="section-header">
        <h2 className="section-title">Trusted By Leading Food Brands</h2>
        <p className="section-subtitle">
          Powering production lines for some of India&apos;s most recognized food manufacturers.
        </p>
      </div>

      <div className="brands-rows">
        <MarqueeRow logos={rowOne} direction="left" />
        <MarqueeRow logos={rowTwo} direction="right" />
      </div>
    </section>
  )
}
