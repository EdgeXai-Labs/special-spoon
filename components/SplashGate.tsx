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
    </>
  )
}

export default SplashGate
