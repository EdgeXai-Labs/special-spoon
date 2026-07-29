export default function About() {
  return (
    <section id="about" className="section bg-dark">
      <div className="section-header">
        <h2 className="section-title">Manufacturing Innovation Since 1990</h2>
        <p className="section-subtitle">
          We are one of India&apos;s leading manufacturers of food processing machinery and customized industrial equipment.
        </p>
      </div>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Every machine is engineered to maximize production efficiency while minimizing operational costs.
            We specialize in designing complete production lines, standalone machinery and custom-built equipment
            according to customer requirements.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
            Our commitment extends beyond manufacturing. We provide comprehensive support including plant planning,
            installation, operator training, and lifetime technical assistance. Your success is our mission.
          </p>
        </div>
      </div>
    </section>
  )
}
