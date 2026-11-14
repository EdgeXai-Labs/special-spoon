'use client'

import React from 'react'

const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mission-check">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Title / Header */}
        <div className="about-header">
          <h2 className="about-title-large">
            Serving the Food Industry <span>Since 1998</span>
          </h2>
          <p className="about-subtitle">
            Leading manufacturer and supplier of advanced snack food processing machinery and customized industrial equipment.
          </p>
        </div>

        {/* Company Profile (Intro & Specializations) */}
        <div className="profile-grid">
          <div className="profile-main-text">
            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1.25rem', color: 'var(--text-primary)', borderBottom: '2px solid var(--brand-red)', display: 'inline-block', paddingBottom: '0.25rem' }}>
              Company Profile
            </h3>
            <p>
              <strong>Charan Food Tech (CFT)</strong> is a well-established name in the food processing machinery industry since 1998, delivering innovative, reliable, and efficient engineering solutions to meet the evolving needs of food manufacturers.
            </p>
            <p>
              With decades of industry experience, we specialize in the design, development, manufacturing, and supply of advanced food processing equipment that combines precision engineering, modern technology and practical functionality.
            </p>
            
            <p style={{ fontSize: '1.05rem', marginTop: '2rem', marginBottom: '0.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Our Core Equipment Specializations:
            </p>
            <div className="specializations-list">
              <div className="spec-badge">
                <span className="spec-icon">✓</span> Filling Machines
              </div>
              <div className="spec-badge">
                <span className="spec-icon">✓</span> Mixing Machines
              </div>
              <div className="spec-badge">
                <span className="spec-icon">✓</span> Forming Machines
              </div>
              <div className="spec-badge">
                <span className="spec-icon">✓</span> Flattening Machines
              </div>
              <div className="spec-badge">
                <span className="spec-icon">✓</span> Frying Machines
              </div>
              <div className="spec-badge">
                <span className="spec-icon">✓</span> Slicing Machines
              </div>
            </div>
          </div>

          {/* Quick Glance Info Card */}
          <div className="glance-card">
            <h4 className="glance-title">CFT at a Glance</h4>
            <div className="glance-stats">
              <div className="glance-stat-item">
                <div className="glance-stat-num">1998</div>
                <div className="glance-stat-label">Year of Establishment</div>
              </div>
              <div className="glance-stat-item">
                <div className="glance-stat-num">20k</div>
                <div className="glance-stat-label">Total Plot Area (Sq.Ft.) of Manufacturing Unit</div>
              </div>
              <div className="glance-stat-item">
                <div className="glance-stat-num">100%</div>
                <div className="glance-stat-label">Custom Engineered Industry Solutions</div>
              </div>
              <div className="glance-stat-item">
                <div className="glance-stat-num">Global</div>
                <div className="glance-stat-label">Market Recognition locally and globally</div>
              </div>
            </div>
          </div>
        </div>

        {/* Company vision */}
        <div className="direction-grid vision-grid">
          <div className="direction-card">
            <div className="direction-card-header">
              <div className="direction-icon-wrap">
                <TargetIcon />
              </div>
              <h3>Our Vision</h3>
            </div>
            <p style={{ marginBottom: '0.5rem' }}>
              Providing tradition of excellence in snack food equipments, exceeding our clients expectations and get recognition locally and globally through:
            </p>
            <ul className="mission-list">
              <li className="mission-item">
                <CheckIcon />
                <span>Building robust client loyalty</span>
              </li>
              <li className="mission-item">
                <CheckIcon />
                <span>Providing customized solutions</span>
              </li>
              <li className="mission-item">
                <CheckIcon />
                <span>Adopting optimal engineering methodologies to lessen the time of production, dependency on human resources and strengthen best quality and quantity working conditions, hygiene etc.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Infrastructure Banner */}
        <div className="infra-banner">
          <div className="infra-blueprint-overlay" />
          <div className="infra-content">
            <span className="infra-badge">Production Capabilities</span>
            <h3 className="infra-title">Robust Infrastructure & Manufacturing Unit</h3>
            <p className="infra-desc">
              Our manufacturing unit is spread over a total plot area of <strong>20,000 sq.ft.</strong> with optimum install capacity that is sufficient to prove in the terms of robust infrastructure. We have equipped this spacious unit with necessary machines and equipments that facilitate flawless production of our wide range of food processing machines.
            </p>
            <div className="infra-features">
              <div className="infra-feat-item">
                <span className="infra-feat-icon">🏭</span>
                <span className="infra-feat-title">20,000 Sq.Ft.</span>
                <span className="infra-feat-desc">Spacious high-capacity production yard</span>
              </div>
              <div className="infra-feat-item">
                <span className="infra-feat-icon">⚙️</span>
                <span className="infra-feat-title">Optimum Capacity</span>
                <span className="infra-feat-desc">Scalable outputs for large and batch orders</span>
              </div>
              <div className="infra-feat-item">
                <span className="infra-feat-icon">🛠️</span>
                <span className="infra-feat-title">Modern Machinery</span>
                <span className="infra-feat-desc">Equipped for flawless machinery engineering</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values deck */}
        <div>
          <div className="values-header">
            <h3 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Our Core Values</h3>
          </div>
          <div className="values-grid">
            <div className="value-card value-card-border-red">
              <h4>Integrity</h4>
              <p>We uphold honesty, transparency, and ethical business practices in every interaction, building lasting trust with our customers, employees, and partners.</p>
            </div>
            <div className="value-card value-card-border-red">
              <h4>Quality</h4>
              <p>We are committed to precision engineering, superior materials, and reliable machinery that delivers consistent performance and lasting value.</p>
            </div>
            <div className="value-card value-card-border-red">
              <h4>Sustainability</h4>
              <p>We develop energy-efficient and resource-conscious machinery that minimizes waste, optimizes production, and supports a sustainable future.</p>
            </div>
            <div className="value-card value-card-border-red">
              <h4>Safety</h4>
              <p>We prioritize operator safety, hygienic design, and dependable machine operation to support safe and efficient food production environments.</p>
            </div>
            <div className="value-card value-card-border-red">
              <h4>Client satisfaction</h4>
              <p>We deliver customer-focused solutions, dependable after-sales support, and customized machinery to exceed expectations and build long-term partnerships.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
