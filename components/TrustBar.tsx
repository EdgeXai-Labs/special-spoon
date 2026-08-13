type TrustIconName = 'expertise' | 'installations' | 'guidance' | 'support' | 'warranty'

function TrustIcon({ type }: { type: TrustIconName }) {
  switch (type) {
    case 'expertise':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'installations':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 9h16v8H4z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M7 9V6h10v3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8" cy="13" r="1.15" fill="currentColor" />
          <circle cx="12" cy="13" r="1.15" fill="currentColor" />
          <path d="M16 13h1.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'guidance':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s-6-3.5-6-9V6l6-3 6 3v6c0 5.5-6 9-6 9Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9.5 12.5 11 14l3.5-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'support':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 11a7 7 0 0 1 14 0v4a2 2 0 0 1-2 2h-2v-5h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 17a2 2 0 0 1-2-2v-4h4v5H5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 19h1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'warranty':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s-7-3.8-7-9.5V6.5L12 3l7 3.5v5C19 17.2 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9 12.5 11 14.5l4-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
  }
}

export default function TrustBar() {
  const trustItems = [
    { icon: 'expertise' as const, accent: '10+', label: 'Years of Expertise' },
    { icon: 'installations' as const, accent: '250+', label: 'Installations' },
    { icon: 'guidance' as const, accent: 'Pre-Sale', label: 'Technical Guidance' },
    { icon: 'support' as const, accent: 'Pan India', label: 'Service Support' },
    { icon: 'warranty' as const, accent: '12 Months', label: 'Warranty + Lifetime Service' },
  ]

  return (
    <section className="trust-bar" aria-label="Company trust highlights">
      <div className="trust-shell">
        <div className="trust-grid">
          {trustItems.map((item) => (
            <div key={`${item.accent}-${item.label}`} className="trust-item">
              <div className="trust-item-icon">
                <TrustIcon type={item.icon} />
              </div>
              <div className="trust-item-number">{item.accent}</div>
              <div className="trust-item-text">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
