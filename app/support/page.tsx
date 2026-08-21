import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Support & Services | Charan Food Tech',
  description: 'Comprehensive support services including installation, training, maintenance, emergency response, and genuine spare parts. 24-hour support across India.',
}

const supportServices = [
  {
    category: 'Installation & Commissioning',
    icon: '🔧',
    color: '#DC2626',
    services: [
      {
        title: 'Complete Commissioning',
        description: 'Our engineers install and commission the machine at your facility, ensuring optimal performance from day one.',
        features: ['On-site installation', 'Performance testing', 'Quality checks', 'Documentation'],
      },
      {
        title: 'Operator Training',
        description: 'Comprehensive hands-on training for your operators to ensure safe and efficient machine operation.',
        features: ['Hands-on training', 'Safety procedures', 'Best practices', 'Troubleshooting basics'],
      },
      {
        title: 'Video Demos & Guides',
        description: 'Detailed video documentation for reference and future training needs.',
        features: ['Operation videos', 'Maintenance guides', 'Digital manuals', 'Quick reference cards'],
      },
    ],
  },
  {
    category: 'Technical Support',
    icon: '📞',
    color: '#16A34A',
    services: [
      {
        title: 'Direct Phone Support',
        description: 'Speak directly with experienced technicians, not a call center. Real people who know your machine.',
        features: ['Direct technician access', 'No call centers', 'Immediate response', 'Expert guidance'],
      },
      {
        title: 'WhatsApp Support',
        description: 'Quick support via WhatsApp with photo/video sharing for faster diagnosis.',
        features: ['Instant messaging', 'Photo/video sharing', 'Quick diagnosis', 'Chat history'],
      },
      {
        title: 'Remote Diagnosis',
        description: 'Most issues resolved remotely through video calls and guided troubleshooting.',
        features: ['Video troubleshooting', 'Screen sharing', 'Live guidance', 'Quick resolution'],
      },
      {
        title: 'On-Site Visits',
        description: 'Field engineers available for complex issues requiring hands-on intervention.',
        features: ['Experienced engineers', 'Genuine parts', 'Complete repairs', 'Performance validation'],
      },
    ],
  },
  {
    category: 'Maintenance Services',
    icon: '🔄',
    color: '#D97706',
    services: [
      {
        title: 'Preventive Maintenance',
        description: 'Scheduled maintenance to prevent breakdowns and ensure consistent machine performance.',
        features: ['Regular inspections', 'Preventive servicing', 'Performance optimization', 'Detailed reports'],
      },
      {
        title: 'Annual Maintenance Contracts (AMC)',
        description: 'Comprehensive AMC plans covering regular service, parts, and priority support.',
        features: ['Scheduled visits', 'Priority support', 'Discounted parts', 'Service reports'],
      },
      {
        title: 'Genuine Spare Parts',
        description: 'Original spare parts directly from our manufacturing facility for guaranteed compatibility.',
        features: ['100% genuine parts', 'Quality guaranteed', 'Direct from plant', 'Quick delivery'],
      },
      {
        title: 'Performance Tuning',
        description: 'Optimize machine performance based on your specific production requirements.',
        features: ['Efficiency analysis', 'Parameter optimization', 'Output enhancement', 'Energy savings'],
      },
    ],
  },
  {
    category: 'Emergency Services',
    icon: '🚨',
    color: '#B91C1C',
    services: [
      {
        title: 'Emergency Breakdown Support',
        description: 'Priority emergency response when your production line stops unexpectedly.',
        features: ['24-hour response', 'Priority handling', 'Fast resolution', 'Minimal downtime'],
      },
      {
        title: 'Machine Upgrades',
        description: 'Upgrade existing machines with latest technology and improved features.',
        features: ['Technology updates', 'Capacity enhancement', 'Automation upgrades', 'Compatibility ensured'],
      },
      {
        title: 'Lifetime Guidance',
        description: 'Ongoing support and consultation throughout the life of your machine.',
        features: ['Expert consultation', 'Process optimization', 'Technical advice', 'Long-term partnership'],
      },
    ],
  },
]

const responseTimeline = [
  { time: '0 min', title: 'You Reach Us', description: 'Call or WhatsApp — a person picks up', icon: '📞' },
  { time: '15 min', title: 'Engineer Assigned', description: 'Your case gets a named technician', icon: '👨‍🔧' },
  { time: '2 hrs', title: 'Remote Diagnosis', description: 'Most issues solved over video', icon: '🖥️' },
  { time: '24 hrs', title: 'On-Site If Needed', description: 'Field engineer reaches your plant', icon: '🚚' },
]

const supportStats = [
  { value: '24h', label: 'Response Time', sublabel: 'Anywhere in India' },
  { value: '100%', label: 'Genuine Spares', sublabel: 'Direct from our plant' },
  { value: '30+', label: 'Years Supporting', sublabel: 'Machines still running' },
  { value: '500+', label: 'Plants Serviced', sublabel: 'Across 20+ states' },
]

export default function SupportPage() {
  return (
    <>
      <Navigation />
      <main className="support-page">
        {/* Hero Section */}
        <section className="support-hero">
          <div className="container">
            <div className="support-hero-badge">
              <span className="support-live-dot" />
              Support Desk Active
            </div>
            <h1 className="support-hero-title">
              Support Doesn't End
              <br />
              <span className="support-hero-accent">After Delivery</span>
            </h1>
            <p className="support-hero-subtitle">
              Most suppliers vanish after installation. That is where we start.
            </p>

            {/* Quick Stats */}
            <div className="support-stats-grid">
              {supportStats.map((stat) => (
                <div key={stat.label} className="support-stat-card">
                  <div className="support-stat-value">{stat.value}</div>
                  <div className="support-stat-label">{stat.label}</div>
                  <div className="support-stat-sublabel">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Response Timeline */}
        <section className="support-timeline-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">If Your Line Stops Today</span>
              <h2 className="section-title">This Is What Happens Next</h2>
            </div>

            <div className="support-timeline">
              {responseTimeline.map((step, index) => (
                <div key={step.time} className="timeline-step">
                  <div className="timeline-icon">{step.icon}</div>
                  <div className="timeline-time">{step.time}</div>
                  <h3 className="timeline-title">{step.title}</h3>
                  <p className="timeline-description">{step.description}</p>
                  {index < responseTimeline.length - 1 && <div className="timeline-connector" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="support-services-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Full Machine Lifecycle</span>
              <h2 className="section-title">We Stay With You Throughout</h2>
            </div>

            {supportServices.map((category, categoryIndex) => (
              <div key={category.category} className="service-category">
                <div className="category-header-row" style={{ borderLeftColor: category.color }}>
                  <span className="category-icon" style={{ background: `${category.color}15`, color: category.color }}>
                    {category.icon}
                  </span>
                  <h3 className="category-title">{category.category}</h3>
                </div>

                <div className="services-grid">
                  {category.services.map((service) => (
                    <div key={service.title} className="service-card">
                      <h4 className="service-title">{service.title}</h4>
                      <p className="service-description">{service.description}</p>
                      <ul className="service-features">
                        {service.features.map((feature) => (
                          <li key={feature}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path
                                d="M13.5 4.5L6 12L2.5 8.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="support-cta">
          <div className="container">
            <div className="support-cta-content">
              <h2>Downtime Costs Money</h2>
              <p>Our job is to make sure you never lose a shift</p>
              <div className="support-cta-actions">
                <a href="tel:+919150081328" className="btn btn-primary btn-large">
                  📞 Call Service Desk
                </a>
                <a
                  href="https://wa.me/919150081328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-large"
                >
                  💬 WhatsApp Support
                </a>
                <Link href="/#contact" className="btn btn-ghost btn-large">
                  Request Service Visit
                </Link>
              </div>
            </div>

            {/* Contact Info Grid */}
            <div className="support-contact-grid">
              <div className="contact-method">
                <div className="contact-method-icon">📞</div>
                <h3>Phone Support</h3>
                <p>Direct line to technical team</p>
                <a href="tel:+919150081328" className="contact-link">+91 9150081328</a>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">✉️</div>
                <h3>Email Support</h3>
                <p>Technical queries & documentation</p>
                <a href="mailto:support@charanfoodtech.com" className="contact-link">support@charanfoodtech.com</a>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">💬</div>
                <h3>WhatsApp</h3>
                <p>Quick support with media sharing</p>
                <a href="https://wa.me/919150081328" className="contact-link" target="_blank" rel="noopener noreferrer">
                  Start Chat
                </a>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">📍</div>
                <h3>Service Center</h3>
                <p>Krishnagiri Main Road</p>
                <span className="contact-link">Baisuhalli, Dharmapuri</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
