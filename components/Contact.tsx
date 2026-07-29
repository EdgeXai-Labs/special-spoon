'use client'

export default function Contact() {
  return (
    <section id="contact" className="section bg-dark">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to improve your production? Let&apos;s discuss your requirements.
        </p>
      </div>
      <div className="contact-grid">
        {/* Contact Form */}
        <div className="card" style={{ padding: '1.5rem', height: 'auto' }}>
          <h3 style={{ color: 'var(--accent)', fontSize: '1.25rem', marginBottom: '1rem' }}>
            Quick Inquiry
          </h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-input"
                placeholder="Enter your phone"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Machine Type</label>
              <select className="form-select">
                <option>Select Machine Type</option>
                <option>Potato Chips Line</option>
                <option>Banana Chips Line</option>
                <option>Namkeen Line</option>
                <option>Automatic Fryer</option>
                <option>Custom Machine</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Your Requirements</label>
              <textarea
                className="form-textarea"
                placeholder="Tell us about your production needs..."
                rows={4}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Contact Information & Map */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="card" style={{ padding: '1.5rem', height: 'auto' }}>
            <h3 style={{ color: 'var(--accent)', fontSize: '1.25rem', marginBottom: '1rem' }}>
              Contact Information
            </h3>
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '0.2rem' }}>
                📍 Factory Address
              </div>
              <p style={{ color: 'var(--text-primary)', lineHeight: 1.5 }}>
                Your Factory Address Line 1<br />
                City, State - PIN Code<br />
                India
              </p>
            </div>
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '0.2rem' }}>
                📞 Phone
              </div>
              <p style={{ color: 'var(--text-primary)', lineHeight: 1.5 }}>
                +91 XXXXX XXXXX<br />
                +91 XXXXX XXXXX
              </p>
            </div>
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '0.2rem' }}>
                💬 WhatsApp
              </div>
              <p style={{ color: 'var(--text-primary)', lineHeight: 1.5 }}>
                +91 XXXXX XXXXX
              </p>
            </div>
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '0.2rem' }}>
                📧 Email
              </div>
              <p style={{ color: 'var(--text-primary)', lineHeight: 1.5 }}>
                info@yourcompany.com<br />
                sales@yourcompany.com
              </p>
            </div>
            <div>
              <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '0.2rem' }}>
                ⏰ Working Hours
              </div>
              <p style={{ color: 'var(--text-primary)', lineHeight: 1.5 }}>
                Monday - Saturday: 9:00 AM - 6:00 PM<br />
                Sunday: Closed<br />
                <span style={{ color: 'var(--accent)' }}>24/7 Emergency Support Available</span>
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="card" style={{ padding: '0.75rem' }}>
            <div style={{
              background: 'var(--bg-dark)',
              padding: '1.5rem 1rem',
              borderRadius: '6px',
              border: '2px dashed var(--bg-elevated)',
              textAlign: 'center',
            }}>
              <div style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>🗺️</div>
              <p style={{ color: 'var(--text-secondary)' }}>Google Maps Location</p>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                Replace this with your actual Google Maps embed code
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
