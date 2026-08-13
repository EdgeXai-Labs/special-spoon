'use client'

import React, { useEffect, useState } from 'react'
// import SplashScreen from './animation/spalsh_screen'
import PlanPage from './animation/animationpage2'

/**
 * SplashGate wraps the home page content and shows the splash screen
 * first (like a mobile app icon loading screen). Once the splash
 * duration elapses, the actual page content fades in.
 */
const SPLASH_MS = 2000
const WHATSAPP_LINK = 'https://wa.me/919150081328'

const SplashGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), SPLASH_MS)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Using animationpage2 (PlanPage) as the splash screen */}
      {showSplash && (
        <div className="splash-overlay">
          <PlanPage />
        </div>
      )}
      {/* Previous splash screen (kept for reference):
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />} */}
      <div
        style={{
          opacity: showSplash ? 0 : 1,
          transition: 'opacity 0.6s ease',
        }}
      >
        {children}
      </div>
      {!showSplash && (
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            position: 'fixed',
            right: '20px',
            bottom: '20px',
            width: '86px',
            height: '86px',
            borderRadius: '9999px',
            background: '#25D366',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 14px 30px rgba(37, 211, 102, 0.35)',
            zIndex: 1200,
            textDecoration: 'none',
          }}
        >
          <svg
            width="58"
            height="58"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19.05 4.94A9.94 9.94 0 0 0 12 2C6.49 2 2 6.48 2 12c0 1.76.46 3.48 1.32 4.99L2 22l5.13-1.34A9.96 9.96 0 0 0 12 22c5.51 0 10-4.48 10-10 0-2.67-1.04-5.18-2.95-7.06ZM12 20.13c-1.5 0-2.98-.4-4.27-1.15l-.31-.18-3.04.79.81-2.97-.2-.31A8.1 8.1 0 0 1 3.87 12c0-4.48 3.65-8.13 8.13-8.13 2.17 0 4.2.84 5.74 2.38A8.06 8.06 0 0 1 20.13 12c0 4.48-3.65 8.13-8.13 8.13Zm4.46-6.1c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.61.77-.75.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.18-.7-.63-1.18-1.42-1.32-1.66-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.52.58.18 1.1.15 1.52.09.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
          </svg>
        </a>
      )}
    </>
  )
}

export default SplashGate
