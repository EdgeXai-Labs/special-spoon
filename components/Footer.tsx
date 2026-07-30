'use client'

import Link from 'next/link'

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      // Section isn't on this page — go to the home page and scroll there
      window.location.href = `/#${id}`
    }
  }

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Company Info */}
        <div>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', gap: '0.4rem' }}>
            <span style={{ color: 'var(--text-primary)' }}>Charan</span>
            <span style={{ color: '#EF4444' }}>Food Tech</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
            Leading manufacturer of industrial food processing machinery and custom equipment solutions.
            Engineering excellence since 1990.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" aria-label="Facebook" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }}>📘</a>
            <a href="#" aria-label="Instagram" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }}>📷</a>
            <a href="#" aria-label="LinkedIn" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }}>🔗</a>
            <a href="#" aria-label="YouTube" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }}>📹</a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 style={{ color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Products</h4>
          <ul style={{ listStyle: 'none', lineHeight: 1.8 }}>
            {['Potato Chips Line', 'Banana Chips Line', 'Namkeen Line', 'Automatic Fryer', 'Custom Machinery'].map(
              (item) => (
                <li key={item}>
                  <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="footer-link">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 style={{ color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Company</h4>
          <ul style={{ listStyle: 'none', lineHeight: 1.8 }}>
            <li><Link href="/about" className="footer-link">About Us</Link></li>
            <li><a href="#industries" onClick={(e) => handleNavClick(e, 'industries')} className="footer-link">Industries</a></li>
            <li><a href="#support" onClick={(e) => handleNavClick(e, 'support')} className="footer-link">Support</a></li>
            <li><a href="#" className="footer-link">Careers</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="footer-link">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 style={{ color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Support</h4>
          <ul style={{ listStyle: 'none', lineHeight: 1.8 }}>
            {['Installation', 'Training', 'Spare Parts', 'AMC', 'FAQs'].map((item) => (
              <li key={item}>
                <a href="#" className="footer-link">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{ color: 'var(--text-tertiary)' }}>
          © {new Date().getFullYear()} CFT Machinery. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
