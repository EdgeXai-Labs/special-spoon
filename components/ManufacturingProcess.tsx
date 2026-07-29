export default function ManufacturingProcess() {
  const steps = [
    {
      step: '01',
      title: 'Requirement Analysis',
      desc: 'We discuss your production goals, space constraints, budget and output requirements in detail.'
    },
    {
      step: '02',
      title: 'Machine Design',
      desc: 'Our engineering team creates custom designs and CAD drawings tailored to your needs.'
    },
    {
      step: '03',
      title: 'In-House Fabrication',
      desc: 'Machines are built using food-grade stainless steel with strict quality control at every stage.'
    },
    {
      step: '04',
      title: 'Testing & QC',
      desc: 'Every machine is tested at full capacity before dispatch to ensure optimal performance.'
    },
    {
      step: '05',
      title: 'Installation',
      desc: 'Our technicians install and commission the machine at your facility with full testing.'
    },
    {
      step: '06',
      title: 'Training & Handover',
      desc: 'We train your operators and provide complete documentation before final handover.'
    },
  ]

  return (
    <section className="section bg-card">
      <div className="section-header">
        <h2 className="section-title">Our Manufacturing Process</h2>
        <p className="section-subtitle">
          From concept to commissioning — every step engineered for your success
        </p>
      </div>
      <div className="grid grid-3">
        {steps.map((item, index) => (
          <div key={index} className="card" style={{ position: 'relative', paddingTop: '2rem' }}>
            <div style={{
              position: 'absolute',
              top: '0.75rem',
              left: '1.5rem',
              color: 'var(--accent)',
              fontSize: '2rem',
              fontWeight: 800,
              opacity: 0.3,
              lineHeight: 1,
            }}>
              {item.step}
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
              {item.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
