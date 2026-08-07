'use client'

import React from 'react'

const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const MissionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M12 6v12" />
    <path d="M6 12h12" />
  </svg>
)

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mission-check">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const CommitmentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const QualityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
              <strong>Charan Food Tech (CFT)</strong> is a well-established company serving the Food Processing Industry since 1998.
            </p>
            <p>
              We specialize in the design, manufacturing, and supply of advanced food processing equipment, including filling, mixing, forming, flattening, frying, and slicing machines, among many others.
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

        {/* Vision & Mission Row */}
        <div className="direction-grid">
          {/* Vision */}
          <div className="direction-card">
            <div className="direction-card-header">
              <div className="direction-icon-wrap">
                <TargetIcon />
              </div>
              <h3>Our Vision</h3>
            </div>
            <p>
              To be the world leader in delivering latest and high technology machines and equipments, solutions and services for snack food Industry to value add and enhance the customer delight and to be associated with research opportunities to impoverish value added end-to-end services & products to the snack food industry.
            </p>
          </div>

          {/* Mission */}
          <div className="direction-card">
            <div className="direction-card-header">
              <div className="direction-icon-wrap">
                <MissionIcon />
              </div>
              <h3>Our Mission</h3>
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
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
              CFT ensures that every choice, decision and action is based upon the following core values to realize our vision through the mission on hand.
            </p>
          </div>
          <div className="values-grid">
            {/* Commitment */}
            <div className="value-card value-card-border-red">
              <h4>
                <span className="value-icon" style={{ display: 'inline-flex', color: 'var(--brand-red)' }}><CommitmentIcon /></span>
                Commitment
              </h4>
              <p>
                We are committed to the best quality standard of our equipment and constantly introspect and improve our insight into the market place and the real needs of customers of food industry. We are committed to teamwork and partnership with employees, shareholders, customers and the community.
              </p>
            </div>

            {/* Quality */}
            <div className="value-card value-card-border-blue">
              <h4>
                <span className="value-icon" style={{ display: 'inline-flex', color: '#3B82F6' }}><QualityIcon /></span>
                Quality
              </h4>
              <p>
                We shall constantly strive to improve upon our products and services and shall innovate in doing things better such that total quality is achieved in every sphere of activity.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
