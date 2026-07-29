export default function TrustBar() {
  const trustItems = [
    { number: '30+ Years', text: 'Experience' },
    { number: '1000+', text: 'Machines Installed' },
    { number: '500+', text: 'Customers' },
    { number: 'Made in India', text: 'Quality Manufacturing' },
    { number: 'Pan India', text: 'Service Network' },
    { number: '24×7', text: 'Customer Support' },
  ]

  return (
    <div className="trust-bar">
      <div className="trust-grid">
        {trustItems.map((item, index) => (
          <div key={index} className="trust-item">
            <div className="trust-item-number">{item.number}</div>
            <div className="trust-item-text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
