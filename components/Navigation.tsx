'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      // Section isn't on this page — go to the home page and scroll there
      window.location.href = `/#${id}`
    }
  }

  const navItems: { label: string; id: string; href?: string }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about', href: '/about' },
    { label: 'Products', id: 'products' },
    { label: 'Industries', id: 'industries' },
    { label: 'Support', id: 'support' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <nav
      className="nav"
      style={{
        background: scrolled ? 'rgba(11, 19, 43, 0.98)' : 'rgba(11, 19, 43, 0.92)'
      }}
    >
      <div className="nav-container">
        <Link
          href="/"
          className="logo"
          style={{ color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}
        >
          <span style={{ color: 'var(--brand-blue-hover)', fontWeight: 800 }}>Charan</span>
          <span style={{ color: 'var(--brand-red)', fontWeight: 800 }}>Food Tech</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.href ? (
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ) : (
                <a href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                {item.href ? (
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                ) : (
                  <a href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
