'use client'

const BRAND_LOGOS = [
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/aashirvaad.png', alt: 'Aashirvaad' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/achi.jpg', alt: 'Achi' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/ananda_bavana.jpg', alt: 'Ananda Bhavan' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/crn.png', alt: 'CRN' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/delights.jpg', alt: 'Delights' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/ganaga.png', alt: 'Ganga' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/grb.png', alt: 'GRB' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/haldiram.png', alt: 'Haldiram' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/heritage.jpg', alt: 'Heritage' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/id%20fresh.jpg', alt: 'iD Fresh' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/itc_limited.png', alt: 'ITC Limited' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/iyenagers.jpg', alt: 'Iyengars' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/laxmi.jpg', alt: 'Laxmi' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/mayyas.png', alt: 'Mayyas' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/mtr.png', alt: 'MTR' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/naag.jpg', alt: 'Naag' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/naidu.jpg', alt: 'Naidu' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/nandini.jpg', alt: 'Nandini' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/nissin.png', alt: 'Nissin' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/ogara.jpg', alt: 'Ogara' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/rishta.jpg', alt: 'Rishta' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/sri%20krishna%20sweets.png', alt: 'Sri Krishna Sweets' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/sumero.jpg', alt: 'Sumero' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/swastiks.png', alt: 'Swastiks' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/teju.png', alt: 'Teju' },
  { src: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/trusted_brands/zam_zam.png', alt: 'Zam Zam' },
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
