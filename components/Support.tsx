export default function Support() {
  const services = [
    { icon: '🔧', title: 'Installation Support', desc: 'Complete machine commissioning at your facility' },
    { icon: '👨‍🏫', title: 'Operator Training', desc: 'Hands-on training for your team members' },
    { icon: '📹', title: 'Video Assistance', desc: 'Visual troubleshooting guides and demos' },
    { icon: '📞', title: 'Phone Support', desc: 'Direct access to technical experts' },
    { icon: '💬', title: 'WhatsApp Support', desc: 'Quick response through messaging' },
    { icon: '🖥️', title: 'Remote Troubleshooting', desc: 'Diagnose and fix issues remotely' },
    { icon: '🚗', title: 'On-site Service', desc: 'Field engineers available pan India' },
    { icon: '🔄', title: 'Preventive Maintenance', desc: 'Scheduled checks to prevent breakdowns' },
    { icon: '📅', title: 'Annual Maintenance Contracts', desc: 'Comprehensive AMC plans available' },
    { icon: '🔩', title: 'Spare Parts Availability', desc: 'Genuine parts with quick dispatch' },
    { icon: '📈', title: 'Performance Optimization', desc: 'Continuous improvement support' },
    { icon: '🚨', title: 'Emergency Breakdown Support', desc: 'Rapid response for critical issues' },
    { icon: '⬆️', title: 'Machine Upgrades', desc: 'Technology updates and enhancements' },
    { icon: '⏱️', title: '24 Hour Response', desc: 'Get help when you need it most' },
    { icon: '🎓', title: 'Lifetime Technical Guidance', desc: "We're with you for the long run" },
  ]

  return (
    <section id="support" className="section bg-dark">
      <div className="section-header">
        <h2 className="section-title">Support Doesn&apos;t End After Delivery</h2>
        <p className="section-subtitle">
          Our relationship starts after installation. We believe every customer deserves fast, reliable
          and expert support throughout the machine&apos;s lifecycle.
        </p>
      </div>

      <div className="feature-box" style={{ marginBottom: '1.5rem' }}>
        <h3>Our Service Promise</h3>
        <p>
          We understand that downtime costs money. That&apos;s why we&apos;ve built a dedicated support system
          to keep your production running smoothly. Fast response, expert technicians, genuine parts,
          and lifetime technical guidance — because your success is our success.
        </p>
      </div>

      <div className="grid grid-3">
        {services.map((service, index) => (
          <div key={index} className="card">
            <div style={{ color: 'var(--accent)', fontSize: '2rem', marginBottom: '0.5rem' }}>
              {service.icon}
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '0.25rem' }}>
              {service.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="support-highlight">
        <h3>Why Our Support Stands Out</h3>
        <p>
          Unlike competitors who disappear after installation, we&apos;ve built our reputation on reliable
          after-sales service. Our dedicated service team ensures your machines run at peak performance
          year after year.
        </p>
        <div className="support-stats">
          <div className="support-stat">
            <div className="support-stat-number">Pan India</div>
            <div className="support-stat-label">Service Network</div>
          </div>
          <div className="support-stat">
            <div className="support-stat-number">Dedicated</div>
            <div className="support-stat-label">Service Engineers</div>
          </div>
          <div className="support-stat">
            <div className="support-stat-number">Quick</div>
            <div className="support-stat-label">Spare Dispatch</div>
          </div>
        </div>
      </div>
    </section>
  )
}
