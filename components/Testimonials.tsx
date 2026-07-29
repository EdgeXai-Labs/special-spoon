export default function Testimonials() {
  const stories = [
    {
      company: 'Snack Food Manufacturer, Gujarat',
      product: 'Potato Chips Production Line',
      quote:
        '"After installing the automated chips line, our production increased by 60% while our oil consumption dropped by 30%. The machine reliability and after-sales support have been excellent."',
      stats: [
        { value: '+60%', label: 'Production' },
        { value: '-30%', label: 'Oil Cost' },
        { value: '8 Months', label: 'ROI' },
      ],
    },
    {
      company: 'Namkeen Producer, Rajasthan',
      product: 'Automatic Fryer System',
      quote:
        '"The machine quality is outstanding and the support team has been incredibly responsive. We\'ve reduced our labor requirement by 40% and product quality is much more consistent now."',
      stats: [
        { value: '-40%', label: 'Labour' },
        { value: '100%', label: 'Consistency' },
        { value: '3 Years', label: 'No Breakdown' },
      ],
    },
  ]

  return (
    <section className="section bg-dark">
      <div className="section-header">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-subtitle">Real results from real customers</p>
      </div>
      <div className="grid grid-2">
        {stories.map((story, index) => (
          <div key={index} className="card testimonial-card">
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 600 }}>
                {story.company}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {story.product}
              </div>
            </div>
            <p style={{ color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '1rem' }}>
              {story.quote}
            </p>
            <div className="testimonial-stats">
              {story.stats.map((stat, idx) => (
                <div key={idx}>
                  <div style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 700 }}>
                    {stat.value}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
