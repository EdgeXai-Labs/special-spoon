'use client'

import React, { useState, useEffect } from 'react'

const industries = [
  {
    icon: '🥔',
    title: 'Snack Foods',
    color: '#f59e0b',
    services: ['Namkeen Manufacturing', 'Potato Chips Production', 'Banana Chips Processing', 'Extruded Snacks'],
  },
  {
    icon: '🍞',
    title: 'Bakery',
    color: '#10b981',
    services: ['Commercial Bakery', 'Industrial Baking', 'Bread Production', 'Pastry Manufacturing'],
  },
  {
    icon: '🏨',
    title: 'Commercial Kitchen',
    color: '#3b82f6',
    services: ['Cloud Kitchen', 'Central Kitchen', 'Hotels', 'Restaurants'],
  },
  {
    icon: '🏭',
    title: 'Food Processing',
    color: '#8b5cf6',
    services: ['Large Scale Processing', 'Production Lines', 'Quality Control Systems', 'Packaging Solutions'],
  },
  {
    icon: '⚙️',
    title: 'Custom Industrial',
    color: '#ef4444',
    services: ['Custom Machinery', 'Special Equipment', 'Automation Solutions', 'Process Engineering'],
  },
]

export default function Industries() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [animPhase, setAnimPhase] = useState<'converging' | 'spotlight' | 'imploding'>('converging')

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (animPhase === 'converging') {
      timer = setTimeout(() => setAnimPhase('spotlight'), 600)
    } else if (animPhase === 'spotlight') {
      timer = setTimeout(() => setAnimPhase('imploding'), 3000)
    } else if (animPhase === 'imploding') {
      timer = setTimeout(() => {
        setActiveIdx((prev) => (prev + 1) % industries.length)
        setAnimPhase('converging')
      }, 500)
    }

    return () => clearTimeout(timer)
  }, [animPhase])

  const active = industries[activeIdx]

  const getSatelliteStyle = (index: number) => {
    const total = industries.length
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2
    const radiusX = 450 // Wider horizontal orbit
    const radiusY = 235 // Spread top/bottom satellites safely clear of central card

    const x = Math.cos(angle) * radiusX
    const y = Math.sin(angle) * radiusY
    const isCurrent = index === activeIdx

    return {
      top: '50%',
      left: '50%',
      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isCurrent ? 1.15 : 0.92})`,
      opacity: isCurrent ? 1 : 0.65,
      zIndex: isCurrent ? 35 : 15,
    }
  }

  const goTo = (idx: number) => {
    if (idx === activeIdx) return
    setAnimPhase('imploding')
    setTimeout(() => {
      setActiveIdx(idx)
      setAnimPhase('converging')
    }, 400)
  }

  return (
    <section
      id="industries"
      className="section bg-card"
      style={{
        padding: '3rem 1rem',
        background: 'radial-gradient(circle at center, #111827 0%, #030712 100%)',
        color: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
        <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '800', color: '#fff' }}>
          Industries We Serve
        </h2>
        <p className="section-subtitle" style={{ color: '#94a3b8', fontSize: '1.1rem', marginTop: '0.5rem' }}>
          Delivering specialized machinery solutions across diverse food manufacturing sectors
        </p>
      </div>

      {/* Orbital Stage */}
      <div
        className="ind-orbit-stage"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          height: '560px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1200px',
          overflow: 'visible',
        }}
      >
        {/* Background Orbit Rings */}
        <div className="ind-orbit-ring" />
        <div className="ind-orbit-ring-outer" />

        {/* Satellite Industry Pills — hidden on mobile via CSS */}
        <div className="ind-satellites-layer">
        {industries.map((ind, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            style={{
              position: 'absolute',
              background: idx === activeIdx
                ? `linear-gradient(135deg, ${ind.color}22, rgba(10, 15, 30, 0.95))`
                : 'rgba(15, 23, 42, 0.8)',
              border: `2px solid ${idx === activeIdx ? ind.color : 'rgba(51, 65, 85, 0.6)'}`,
              borderRadius: '60px',
              padding: '0.75rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.3rem',
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.27)',
              boxShadow: idx === activeIdx
                ? `0 0 28px ${ind.color}88, 0 6px 24px rgba(0,0,0,0.5)`
                : '0 2px 12px rgba(0,0,0,0.4)',
              backdropFilter: 'blur(10px)',
              minWidth: '120px',
              textAlign: 'center',
              ...getSatelliteStyle(idx),
            }}
          >
            <span style={{ fontSize: '2rem', lineHeight: 1 }}>{ind.icon}</span>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: '700',
              color: idx === activeIdx ? '#ffffff' : '#94a3b8',
              letterSpacing: '0.3px',
              whiteSpace: 'nowrap',
            }}>
              {ind.title}
            </span>
          </button>
        ))}
        </div>{/* end ind-satellites-layer */}

        {/* Central Holographic Hub */}
        <div
          className={`ind-core-hub ${animPhase}`}
          style={{
            position: 'absolute',
            width: '360px',
            padding: '2.5rem 2rem',
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(10, 15, 30, 0.97) 100%)',
            backdropFilter: 'blur(20px)',
            borderRadius: '28px',
            border: `2px solid ${active.color}`,
            boxShadow: `0 0 60px ${active.color}44, inset 0 0 25px ${active.color}18`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 30,
          }}
        >
          {/* Aura glow */}
          <div style={{
            position: 'absolute',
            inset: '-6px',
            borderRadius: '34px',
            background: `radial-gradient(circle, ${active.color}2a 0%, transparent 70%)`,
            zIndex: -1,
            animation: 'indCorePulse 2s infinite ease-in-out',
          }} />

          {/* Industry Icon */}
          <div style={{
            width: '86px',
            height: '86px',
            borderRadius: '50%',
            background: 'rgba(10, 15, 30, 0.85)',
            border: `3px solid ${active.color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.8rem',
            marginBottom: '1rem',
            boxShadow: `0 0 28px ${active.color}80`,
          }}>
            <span className="ind-float-icon">{active.icon}</span>
          </div>

          {/* Counter */}
          <span style={{
            fontSize: '0.72rem',
            fontWeight: '700',
            color: active.color,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '0.3rem',
          }}>
            {activeIdx + 1} of {industries.length} Sectors
          </span>

          {/* Industry Title */}
          <h3 style={{ fontSize: '1.7rem', fontWeight: '800', color: '#ffffff', marginBottom: '1rem' }}>
            {active.title}
          </h3>

          {/* Services List */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
            {active.services.map((svc, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.4rem 0',
                  color: '#cbd5e1',
                  fontSize: '0.9rem',
                  borderBottom: i < active.services.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  animation: `indItemFadeIn 0.4s ease ${i * 0.08}s both`,
                }}
              >
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: active.color,
                  flexShrink: 0,
                  boxShadow: `0 0 6px ${active.color}`,
                }} />
                {svc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Dot Nav */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginTop: '2.5rem',
        position: 'relative',
        zIndex: 10,
      }}>
        {industries.map((ind, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            title={ind.title}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: idx === activeIdx ? active.color : '#1e293b',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: idx === activeIdx ? 'scale(1.5)' : 'scale(1)',
              boxShadow: idx === activeIdx ? `0 0 10px ${active.color}` : 'none',
            }}
          />
        ))}
      </div>

      <style>{`
        /* Industries Orbital Stage — Responsive */
        .ind-orbit-stage {
          height: 560px;
          overflow: visible;
        }

        .ind-orbit-ring {
          position: absolute;
          width: 900px;
          height: 470px;
          border: 1px dashed rgba(51, 65, 85, 0.45);
          border-radius: 50%;
          transform: rotateX(12deg);
          pointer-events: none;
          animation: indOrbitSpin 55s linear infinite;
        }

        .ind-orbit-ring-outer {
          position: absolute;
          width: 1040px;
          height: 540px;
          border: 1px solid rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          transform: rotateX(12deg);
          pointer-events: none;
          animation: indOrbitSpin 75s linear infinite reverse;
        }

        @keyframes indOrbitSpin {
          from { transform: rotateX(12deg) rotateZ(0deg); }
          to   { transform: rotateX(12deg) rotateZ(360deg); }
        }

        .ind-core-hub.converging {
          animation: indFlyIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.27) forwards;
        }
        .ind-core-hub.spotlight {
          transform: scale(1) translateZ(0);
          opacity: 1;
        }
        .ind-core-hub.imploding {
          animation: indImplode 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
        }

        @keyframes indFlyIn {
          0%   { opacity: 0; transform: scale(0.2) rotate(-12deg); }
          70%  { transform: scale(1.05) rotate(2deg); opacity: 0.9; }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes indImplode {
          0%   { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.25) rotate(12deg); }
        }

        .ind-float-icon {
          animation: indFloat 2.5s ease-in-out infinite alternate;
          display: inline-block;
        }
        @keyframes indFloat {
          0%   { transform: translateY(-3px) scale(1); }
          100% { transform: translateY(3px) scale(1.08); }
        }

        @keyframes indCorePulse {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 0.75; }
        }

        @keyframes indItemFadeIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ========================
           MOBILE (< 768px)
           ======================== */
        @media (max-width: 767px) {
          .ind-orbit-stage {
            height: auto;
            overflow: visible;
          }
          .ind-satellites-layer,
          .ind-orbit-ring,
          .ind-orbit-ring-outer {
            display: none;
          }
          .ind-core-hub {
            position: static !important;
            width: 100% !important;
            max-width: 360px;
            margin: 0 auto;
            padding: 2rem 1.5rem !important;
          }
        }

        /* ========================
           TABLET (768px - 1023px)
           ======================== */
        @media (min-width: 768px) and (max-width: 1023px) {
          .ind-orbit-stage {
            height: 480px;
          }
        }
      `}</style>
    </section>
  )
}
