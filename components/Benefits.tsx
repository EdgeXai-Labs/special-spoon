'use client'

import React, { useEffect, useState } from 'react'

const benefits = [
  { icon: '📈', title: 'Higher Production', desc: 'More output, same manpower', color: '#3b82f6' },
  { icon: '💧', title: 'Lower Oil Use', desc: 'Optimized frying technology', color: '#eab308' },
  { icon: '👷', title: 'Less Labour Cost', desc: 'Automation does the work', color: '#ef4444' },
  { icon: '✅', title: 'Consistent Quality', desc: 'Uniform every batch', color: '#3b82f6' },
  { icon: '⚡', title: 'Faster Cycles', desc: 'Higher output, less time', color: '#eab308' },
  { icon: '🥇', title: 'Food Grade SS', desc: 'Corrosion resistant build', color: '#ef4444' },
  { icon: '🧼', title: 'Easy Cleaning', desc: 'Hygienic by design', color: '#3b82f6' },
  { icon: '💡', title: 'Energy Efficient', desc: 'Lower power bills', color: '#eab308' },
  { icon: '🔧', title: 'Low Maintenance', desc: 'Heavy-duty components', color: '#ef4444' },
  { icon: '⏰', title: 'Long Machine Life', desc: 'Years of continuous run', color: '#3b82f6' },
  { icon: '🧩', title: 'Modular Design', desc: 'Expand anytime', color: '#eab308' },
  { icon: '🎯', title: 'Easy Operation', desc: 'Simple controls', color: '#ef4444' },
  { icon: '⚙️', title: 'Custom Built', desc: 'Made to your need', color: '#3b82f6' },
  { icon: '🛡️', title: 'Safety First', desc: 'Emergency stop systems', color: '#eab308' },
  { icon: '💪', title: 'Reliable 24×7', desc: 'Built for non-stop work', color: '#ef4444' },
]

export default function Benefits() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [animPhase, setAnimPhase] = useState<'converging' | 'spotlight' | 'imploding'>('converging')

  // Cycle animation through surrounding satellites to center core
  useEffect(() => {
    let timer: NodeJS.Timeout

    if (animPhase === 'converging') {
      // 1. Fly to center from orbital position (600ms)
      timer = setTimeout(() => {
        setAnimPhase('spotlight')
      }, 600)
    } else if (animPhase === 'spotlight') {
      // 2. Showcase at center stage with HUD pulse (2800ms)
      timer = setTimeout(() => {
        setAnimPhase('imploding')
      }, 2800)
    } else if (animPhase === 'imploding') {
      // 3. Implode into center & switch to next satellite angle (500ms)
      timer = setTimeout(() => {
        setActiveIdx((prev) => (prev + 1) % benefits.length)
        setAnimPhase('converging')
      }, 500)
    }

    return () => clearTimeout(timer)
  }, [animPhase])

  const active = benefits[activeIdx]

  // Calculate satellite orbit positions dynamically around center ring
  const getSatelliteStyle = (index: number) => {
    const total = benefits.length
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2
    const radiusX = 370 // Wider horizontal radius to keep all pills visible
    const radiusY = 165 // Taller vertical radius for proper orbit spread

    const x = Math.cos(angle) * radiusX
    const y = Math.sin(angle) * radiusY

    const isCurrent = index === activeIdx

    return {
      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isCurrent ? 1.15 : 0.9})`,
      opacity: isCurrent ? 1 : 0.55,
      zIndex: isCurrent ? 20 : 5,
      top: '50%',
      left: '50%',
    }
  }

  return (
    <section 
      className="section bg-dark benefits-section"
      style={{
        padding: '1.75rem 1rem',
        background: 'radial-gradient(circle at center, #F8FAFC 0%, #E2E8F0 100%)',
        color: 'var(--text-primary)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Header */}
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative', zIndex: 10 }}>
        <h2 className="section-title" style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)' }}>
          Why Choose Our Machines
        </h2>
        <p className="section-subtitle" style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '0.4rem' }}>
          Measurable improvements in productivity, cost, and quality
        </p>
      </div>

      {/* Main 3D Kinetic Stage */}
      <div 
        className="benefits-orbit-stage"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1100px',
          height: '440px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1200px',
          overflow: 'visible'
        }}
      >
        
        {/* Orbital Track Background Rings */}
        <div className="orbit-ring" />
        <div className="orbit-ring-outer" />

        {/* 1. Surrounding Orbital Satellites — hidden on mobile via CSS */}
        <div className="benefits-satellites-layer">
        {benefits.map((b, idx) => (
          <button
            key={idx}
            onClick={() => {
              setAnimPhase('imploding')
              setTimeout(() => {
                setActiveIdx(idx)
                setAnimPhase('converging')
              }, 400)
            }}
            style={{
              position: 'absolute',
              background: idx === activeIdx
                ? `linear-gradient(135deg, ${b.color}15, rgba(255, 255, 255, 0.95))`
                : 'rgba(255, 255, 255, 0.8)',
              border: `2px solid ${idx === activeIdx ? b.color : 'rgba(15, 23, 42, 0.15)'}`,
              borderRadius: '50px',
              padding: '0.5rem 1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: idx === activeIdx ? b.color : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.27)',
              boxShadow: idx === activeIdx
                ? `0 0 22px ${b.color}33, 0 4px 20px rgba(0,0,0,0.06)`
                : '0 2px 12px rgba(0,0,0,0.04)',
              backdropFilter: 'blur(8px)',
              whiteSpace: 'nowrap',
              ...getSatelliteStyle(idx)
            }}
          >
            <span style={{ fontSize: '1.3rem', lineHeight: 1 }}>{b.icon}</span>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: '700',
              color: idx === activeIdx ? b.color : 'var(--text-secondary)',
              letterSpacing: '0.3px'
            }}>
              {b.title}
            </span>
          </button>
        ))}
        </div>{/* end benefits-satellites-layer */}

        {/* 2. Central Holographic Convergence Core */}
        <div 
          className={`center-core-hub ${animPhase}`}
          style={{
            position: 'absolute',
            width: '340px',
            padding: '1.75rem 1.75rem',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%)',
            backdropFilter: 'blur(16px)',
            borderRadius: '28px',
            border: `2px solid ${active.color}`,
            boxShadow: `0 10px 40px rgba(0, 0, 0, 0.05), inset 0 0 20px ${active.color}05`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 30
          }}
        >
          {/* Active Color Aura Pulse */}
          <div 
            style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '32px',
              background: `radial-gradient(circle, ${active.color}15 0%, transparent 70%)`,
              zIndex: -1,
              animation: 'corePulse 2s infinite ease-in-out'
            }} 
          />

          {/* Central Icon Badge */}
          <div style={{
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: `rgba(255, 255, 255, 0.9)`,
            border: `3px solid ${active.color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            marginBottom: '1rem',
            boxShadow: `0 8px 20px ${active.color}33`
          }}>
            <span className="floating-icon">{active.icon}</span>
          </div>

          {/* Counter Badge */}
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 'bold',
            color: active.color,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '0.4rem'
          }}>
            BENEFIT {activeIdx + 1} OF {benefits.length}
          </span>

          {/* Title */}
          <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {active.title}
          </h3>

          {/* Description */}
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.5', margin: 0 }}>
            {active.desc}
          </p>
        </div>

      </div>

      {/* Manual Step Selection Pills */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.4rem',
        flexWrap: 'wrap',
        maxWidth: '800px',
        margin: '2.5rem auto 0 auto',
        position: 'relative',
        zIndex: 10
      }}>
        {benefits.map((b, idx) => (
          <button
            key={idx}
            onClick={() => {
              setAnimPhase('imploding')
              setTimeout(() => {
                setActiveIdx(idx)
                setAnimPhase('converging')
              }, 400)
            }}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: idx === activeIdx ? active.color : '#cbd5e1',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: idx === activeIdx ? 'scale(1.4)' : 'scale(1)',
              boxShadow: idx === activeIdx ? `0 0 10px ${active.color}` : 'none'
            }}
            title={b.title}
          />
        ))}
      </div>

      {/* Embedded Dynamic CSS for Orbit Physics & Converging Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ======================================
           BENEFITS ORBITAL SECTION – RESPONSIVE
           ====================================== */

        /* Desktop: full orbital stage */
        .benefits-orbit-stage {
          height: 430px;
          overflow: visible;
        }

        /* Orbit rings (desktop only) */
        .orbit-ring {
          position: absolute;
          width: 760px;
          height: 390px;
          border: 1px dashed rgba(51, 65, 85, 0.5);
          border-radius: 50%;
          transform: rotateX(12deg);
          pointer-events: none;
          animation: orbitSpin 60s linear infinite;
        }

        .orbit-ring-outer {
          position: absolute;
          width: 820px;
          height: 420px;
          border: 1px solid rgba(59, 130, 246, 0.12);
          border-radius: 50%;
          transform: rotateX(12deg);
          pointer-events: none;
          animation: orbitSpin 80s linear infinite reverse;
        }

        @keyframes orbitSpin {
          from { transform: rotateX(12deg) rotateZ(0deg); }
          to   { transform: rotateX(12deg) rotateZ(360deg); }
        }

        /* Center Core Assembly Dynamic Animation States */
        .center-core-hub.converging {
          animation: flyToCenter 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.27) forwards;
        }

        .center-core-hub.spotlight {
          transform: scale(1) translateZ(0);
          opacity: 1;
        }

        .center-core-hub.imploding {
          animation: implodeToCenter 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
        }

        /* 1. Convergence Motion (Flies in from Satellite to Center) */
        @keyframes flyToCenter {
          0% {
            opacity: 0;
            transform: scale(0.2) rotate(-15deg);
          }
          70% {
            transform: scale(1.06) rotate(3deg);
            opacity: 0.9;
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        /* 2. Implosion Motion (Shrinks back into focal point before next comes in) */
        @keyframes implodeToCenter {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.3) rotate(15deg);
          }
        }

        /* Continuous Floating Icon */
        .floating-icon {
          animation: floatAnimation 2.5s ease-in-out infinite alternate;
        }

        @keyframes floatAnimation {
          0% { transform: translateY(-3px) scale(1); }
          100% { transform: translateY(3px) scale(1.08); }
        }

        @keyframes corePulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        /* ========================
           MOBILE (< 768px)
           ======================== */
        @media (max-width: 767px) {
          .benefits-orbit-stage {
            height: auto;
            min-height: unset;
            overflow: visible;
            padding: 0;
          }

          /* Hide satellites and orbit rings on mobile */
          .benefits-satellites-layer,
          .orbit-ring,
          .orbit-ring-outer {
            display: none;
          }

          /* Full-width center card on mobile */
          .center-core-hub {
            position: static !important;
            width: 100% !important;
            max-width: 340px;
            margin: 0 auto;
            padding: 2rem 1.5rem !important;
          }
        }

        /* ========================
           TABLET (768px – 1023px)
           ======================== */
        @media (min-width: 768px) and (max-width: 1023px) {
          .benefits-orbit-stage {
            height: 380px;
          }
        }
      `}} />
    </section>
  )
}