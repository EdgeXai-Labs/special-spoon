'use client'

import React, { useEffect, useMemo, useState } from 'react'

/* ============================================================
   TESTIMONIAL DATA — EDIT HERE
   Shown two at a time. Keep the count even for clean pairs.
   ============================================================ */
const testimonials = [
  {
    name: 'Rajesh Patel',
    role: 'Managing Director',
    company: 'Shree Snacks Pvt. Ltd.',
    location: 'Rajkot, Gujarat',
    machine: 'Automatic Potato Chips Line — 300 kg/hr',
    quote:
      'They studied our plant, redesigned the line and installed it in three weeks. Wastage came down and the machine has not stopped once.',
    metric: { value: '+60%', label: 'Output' },
    metric2: { value: '−30%', label: 'Oil Cost' },
    rating: 5,
    color: '#F59E0B',
    initials: 'RP',
  },
  {
    name: 'Mohammed Iqbal',
    role: 'Plant Head',
    company: 'Al-Noor Foods',
    location: 'Hyderabad, Telangana',
    machine: 'Continuous Fryer + Seasoning System',
    quote:
      'What sold us was the service promise — and they kept it. Two years in, zero unplanned shutdowns during peak season.',
    metric: { value: '0', label: 'Breakdowns' },
    metric2: { value: '4 hrs', label: 'Response' },
    rating: 5,
    color: '#3B82F6',
    initials: 'MI',
  },
  {
    name: 'Priya Deshmukh',
    role: 'Founder',
    company: 'Sahyadri Namkeen',
    location: 'Pune, Maharashtra',
    machine: 'Namkeen Line with Extruder',
    quote:
      'We started with one machine and grew into a full line. They never pushed us to buy more than we needed.',
    metric: { value: '3×', label: 'Capacity' },
    metric2: { value: '8 Mo', label: 'ROI' },
    rating: 5,
    color: '#10B981',
    initials: 'PD',
  },
  {
    name: 'Suresh Nair',
    role: 'Operations Manager',
    company: 'Kerala Banana Chips Co.',
    location: 'Thrissur, Kerala',
    machine: 'Banana Chips Slicing & Frying Line',
    quote:
      'Colour, crispness, salt — identical in every packet now. Our buyers noticed before we even told them.',
    metric: { value: '100%', label: 'Consistency' },
    metric2: { value: '−40%', label: 'Labour' },
    rating: 5,
    color: '#EF4444',
    initials: 'SN',
  },
  {
    name: 'Amit Agarwal',
    role: 'Director',
    company: 'Marwar Food Industries',
    location: 'Jodhpur, Rajasthan',
    machine: 'Custom Gulab Jamun Ball Forming Machine',
    quote:
      'No ready machine existed for what we make. They built one from scratch. That is engineering, not selling.',
    metric: { value: '24×7', label: 'Uptime' },
    metric2: { value: 'Custom', label: 'Built to Spec' },
    rating: 5,
    color: '#8B5CF6',
    initials: 'AA',
  },
  {
    name: 'Vikram Reddy',
    role: 'Proprietor',
    company: 'Annapurna Foods',
    location: 'Vijayawada, Andhra Pradesh',
    machine: 'Automatic Fryer with Oil Filtration',
    quote:
      'Their engineer trained my whole floor team for free. Six months later he still picks up the phone.',
    metric: { value: '−35%', label: 'Power Use' },
    metric2: { value: '2 Days', label: 'Install Time' },
    rating: 5,
    color: '#0EA5E9',
    initials: 'VR',
  },
]

/* ---- Timings (edit freely) ---- */
const HOLD_MS = 2000      // how long a pair stays on screen
const SHATTER_MS = 750    // disintegrate duration
const REBUILD_MS = 750    // reassemble duration

/* ---- Particle grid ---- */
const COLS = 9
const ROWS = 7

/** Deterministic pseudo-random so server and client render identically */
function seeded(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

type Phase = 'building' | 'holding' | 'shattering'

export default function TestimonialSlider() {
  const perPage = 2
  const pageCount = Math.ceil(testimonials.length / perPage)

  const [page, setPage] = useState(0)
  const [phase, setPhase] = useState<Phase>('building')
  const [paused, setPaused] = useState(false)

  /* Phase machine: build → hold → shatter → next page → build */
  useEffect(() => {
    if (paused && phase === 'holding') return

    let timer: ReturnType<typeof setTimeout>

    if (phase === 'building') {
      timer = setTimeout(() => setPhase('holding'), REBUILD_MS)
    } else if (phase === 'holding') {
      timer = setTimeout(() => setPhase('shattering'), HOLD_MS)
    } else {
      timer = setTimeout(() => {
        setPage((p) => (p + 1) % pageCount)
        setPhase('building')
      }, SHATTER_MS)
    }

    return () => clearTimeout(timer)
  }, [phase, paused, pageCount])

  /* Precompute the particle field once — same dots reused every cycle */
  const pieces = useMemo(() => {
    const list: { left: string; top: string; dx: number; dy: number; delay: number; size: number }[] = []
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const i = r * COLS + c
        const nx = (c + 0.5) / COLS
        const ny = (r + 0.5) / ROWS
        // push outward from the card centre, with a random scatter
        const outX = (nx - 0.5) * 2
        const outY = (ny - 0.5) * 2
        list.push({
          left: `${nx * 100}%`,
          top: `${ny * 100}%`,
          dx: outX * (70 + seeded(i) * 130) + (seeded(i + 91) - 0.5) * 60,
          dy: outY * (60 + seeded(i + 7) * 110) - 40 + (seeded(i + 53) - 0.5) * 50,
          delay: seeded(i + 17) * 260,
          size: 4 + seeded(i + 29) * 5,
        })
      }
    }
    return list
  }, [])

  const goToPage = (p: number) => {
    if (p === page) return
    setPhase('shattering')
    setTimeout(() => {
      setPage(p)
      setPhase('building')
    }, SHATTER_MS)
  }

  const current = testimonials.slice(page * perPage, page * perPage + perPage)
  const accent = current[0]?.color ?? '#3B82F6'

  return (
    <section
      id="testimonials"
      className="ts-section"
    >
      {/* Ambient glow tinted by the pair on screen */}
      <div
        className="ts-ambient"
        style={{ background: `radial-gradient(ellipse at 50% 40%, ${accent}22 0%, transparent 65%)` }}
      />

      {/* Header */}
      <div className="ts-header">
        <span className="ts-eyebrow" style={{ color: accent, borderColor: `${accent}55` }}>
          ★ Trusted by 500+ Manufacturers
        </span>
        <h2 className="ts-title">What Our Customers Say</h2>
        <p className="ts-subtitle">Real voices from plants running our machines every day</p>
      </div>

      {/* Two-up stage — cards dissolve and rebuild in place */}
      <div className="ts-stage">
        {current.map((t, i) => (
          <div className="ts-slot" key={`${page}-${i}`}>
            <article
              className={`ts-card ts-${phase}`}
              style={{
                animationDelay: `${i * 90}ms`,
                borderColor: t.color,
                boxShadow: `0 24px 60px rgba(15,23,42,0.10), 0 0 0 1px ${t.color}22, inset 0 0 40px ${t.color}08`,
              }}
            >
              <span className="ts-quote-mark" style={{ color: `${t.color}1F` }}>
                &ldquo;
              </span>

              <div className="ts-stars" aria-label={`${t.rating} out of 5`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span key={s} className="ts-star" style={{ animationDelay: `${0.25 + s * 0.07}s` }}>
                    ★
                  </span>
                ))}
              </div>

              <blockquote className="ts-quote">{t.quote}</blockquote>

              <div className="ts-metrics">
                <div className="ts-metric" style={{ borderColor: `${t.color}33`, background: `${t.color}0D` }}>
                  <strong style={{ color: t.color }}>{t.metric.value}</strong>
                  <span>{t.metric.label}</span>
                </div>
                <div className="ts-metric" style={{ borderColor: `${t.color}33`, background: `${t.color}0D` }}>
                  <strong style={{ color: t.color }}>{t.metric2.value}</strong>
                  <span>{t.metric2.label}</span>
                </div>
              </div>

              <div className="ts-author">
                <div
                  className="ts-avatar"
                  style={{
                    background: `linear-gradient(135deg, ${t.color} 0%, ${t.color}AA 100%)`,
                    boxShadow: `0 8px 20px ${t.color}44`,
                  }}
                >
                  {t.initials}
                </div>
                <div className="ts-author-meta">
                  <div className="ts-name">{t.name}</div>
                  <div className="ts-role">
                    {t.role}, {t.company}
                  </div>
                  <div className="ts-location">📍 {t.location}</div>
                </div>
              </div>

              <div className="ts-machine" style={{ borderTopColor: `${t.color}22` }}>
                <span className="ts-machine-dot" style={{ background: t.color, boxShadow: `0 0 8px ${t.color}` }} />
                {t.machine}
              </div>
            </article>

            {/* Particle field — the "small-small pieces" */}
            <div className={`ts-pieces ts-${phase}`} aria-hidden="true">
              {pieces.map((p, pi) => (
                <span
                  key={pi}
                  className="ts-piece"
                  style={
                    {
                      left: p.left,
                      top: p.top,
                      width: `${p.size}px`,
                      height: `${p.size}px`,
                      background: t.color,
                      boxShadow: `0 0 6px ${t.color}88`,
                      animationDelay: `${p.delay + i * 90}ms`,
                      ['--dx' as string]: `${p.dx}px`,
                      ['--dy' as string]: `${p.dy}px`,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Page indicator — one dot per pair */}
      <div className="ts-pager">
        {Array.from({ length: pageCount }).map((_, p) => (
          <button
            key={p}
            className={`ts-pagedot ${p === page ? 'is-active' : ''}`}
            onClick={() => goToPage(p)}
            aria-label={`Show testimonials ${p * perPage + 1} and ${p * perPage + 2}`}
            style={p === page ? { background: accent, boxShadow: `0 0 12px ${accent}` } : undefined}
          />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ============================================
           TESTIMONIALS — TWO-UP DISINTEGRATION SLIDER
           ============================================ */
        .ts-section {
          position: relative;
          overflow: hidden;
          padding: 3.5rem 1rem 3rem;
          background: radial-gradient(circle at center, #F8FAFC 0%, #E2E8F0 100%);
        }

        .ts-ambient {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: background 0.9s ease;
        }

        /* ---------- Header ---------- */
        .ts-header {
          position: relative;
          z-index: 2;
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .ts-eyebrow {
          display: inline-block;
          padding: 0.35rem 1rem;
          border: 1px solid;
          border-radius: 50px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          margin-bottom: 1rem;
          transition: color 0.7s ease, border-color 0.7s ease;
        }

        .ts-title {
          font-size: 1.9rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 0.5rem;
          line-height: 1.2;
        }

        .ts-subtitle { color: #64748B; font-size: 1rem; margin: 0; }

        /* ---------- Two-up stage ---------- */
        .ts-stage {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 1120px;
          margin: 0 auto;
          align-items: stretch;
        }

        /* The slot is a fixed frame — cards vanish and rebuild inside it,
           they never travel sideways */
        .ts-slot {
          position: relative;
          min-height: 380px;
          display: flex;
        }

        .ts-card {
          position: relative;
          width: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.97) 0%, rgba(248,250,252,0.99) 100%);
          backdrop-filter: blur(16px);
          border: 2px solid;
          border-radius: 26px;
          padding: 2rem 1.6rem 1.6rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          transform-origin: center center;
        }

        /* --- Card phase animations --- */
        .ts-card.ts-building {
          animation: tsCardBuild ${REBUILD_MS}ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .ts-card.ts-holding { opacity: 1; filter: none; transform: none; }
        .ts-card.ts-shattering {
          animation: tsCardShatter ${SHATTER_MS}ms cubic-bezier(0.55, 0, 0.85, 0.35) both;
        }

        @keyframes tsCardBuild {
          0%   { opacity: 0; filter: blur(14px); transform: scale(0.9); }
          55%  { opacity: 0.75; filter: blur(4px); transform: scale(1.015); }
          100% { opacity: 1; filter: blur(0); transform: scale(1); }
        }

        @keyframes tsCardShatter {
          0%   { opacity: 1; filter: blur(0); transform: scale(1); }
          40%  { opacity: 0.6; filter: blur(5px); transform: scale(1.02); }
          100% { opacity: 0; filter: blur(16px); transform: scale(0.9); }
        }

        /* ---------- Particle field ---------- */
        .ts-pieces {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: 26px;
          overflow: visible;
        }
        .ts-pieces.ts-holding { opacity: 0; }

        .ts-piece {
          position: absolute;
          border-radius: 50%;
          opacity: 0;
          will-change: transform, opacity;
        }

        .ts-pieces.ts-shattering .ts-piece {
          animation: tsPieceOut ${SHATTER_MS}ms cubic-bezier(0.3, 0, 0.7, 1) both;
        }
        .ts-pieces.ts-building .ts-piece {
          animation: tsPieceIn ${REBUILD_MS}ms cubic-bezier(0.3, 0, 0.7, 1) both;
        }

        /* Fly apart into scattered dots */
        @keyframes tsPieceOut {
          0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
          22%  { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0.15); }
        }

        /* Rush back in and settle into the rebuilt card */
        @keyframes tsPieceIn {
          0%   { opacity: 0; transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0.15); }
          35%  { opacity: 1; }
          80%  { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
        }

        /* ---------- Card internals ---------- */
        .ts-quote-mark {
          position: absolute;
          top: 0.1rem;
          right: 1.25rem;
          font-size: 5.5rem;
          line-height: 1;
          font-family: Georgia, 'Times New Roman', serif;
          pointer-events: none;
          user-select: none;
        }

        .ts-stars { display: flex; gap: 0.15rem; margin-bottom: 0.9rem; font-size: 1rem; color: #F59E0B; }
        .ts-card.ts-building .ts-star,
        .ts-card.ts-holding .ts-star {
          animation: tsStarPop 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.4) both;
        }
        @keyframes tsStarPop {
          0%   { opacity: 0; transform: scale(0.2) rotate(-40deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        .ts-quote {
          margin: 0 0 1.25rem;
          font-size: 1rem;
          line-height: 1.65;
          color: #1E293B;
          font-weight: 500;
        }

        .ts-metrics { display: flex; gap: 0.6rem; margin-bottom: 1.25rem; flex-wrap: wrap; }

        .ts-metric {
          flex: 1 1 110px;
          border: 1px solid;
          border-radius: 14px;
          padding: 0.55rem 0.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        .ts-metric strong { font-size: 1.25rem; font-weight: 800; line-height: 1.1; }
        .ts-metric span {
          font-size: 0.66rem;
          font-weight: 600;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #64748B;
        }

        .ts-author { display: flex; align-items: center; gap: 0.8rem; margin-top: auto; }

        .ts-avatar {
          width: 50px; height: 50px;
          flex-shrink: 0;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-weight: 800; font-size: 1rem; letter-spacing: 0.5px;
        }

        .ts-author-meta { min-width: 0; }
        .ts-name { font-weight: 800; font-size: 0.96rem; color: #0F172A; }
        .ts-role { font-size: 0.8rem; color: #475569; }
        .ts-location { font-size: 0.74rem; color: #94A3B8; margin-top: 0.15rem; }

        .ts-machine {
          display: flex; align-items: center; gap: 0.5rem;
          margin-top: 1rem; padding-top: 0.85rem;
          border-top: 1px solid;
          font-size: 0.76rem; font-weight: 600; color: #475569;
        }
        .ts-machine-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

        /* ---------- Pager ---------- */
        .ts-pager {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        .ts-pagedot {
          width: 10px; height: 10px;
          border-radius: 50%;
          border: none;
          background: #CBD5E1;
          cursor: pointer;
          padding: 0;
          transition: all 0.35s ease;
        }
        .ts-pagedot.is-active { width: 32px; border-radius: 6px; }

        /* ============================================
           TABLET & UP — the two cards sit side by side
           ============================================ */
        @media (min-width: 768px) {
          .ts-section { padding: 5rem 2rem 4rem; }
          .ts-title { font-size: 2.5rem; }
          .ts-subtitle { font-size: 1.1rem; }
          .ts-stage { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .ts-slot { min-height: 420px; }
          .ts-card { padding: 2.25rem 2rem 1.75rem; }
          .ts-quote { font-size: 1.05rem; }
          .ts-quote-mark { font-size: 7rem; }
          .ts-avatar { width: 56px; height: 56px; font-size: 1.1rem; }
        }

        @media (min-width: 1024px) {
          .ts-stage { gap: 2.5rem; }
          .ts-card { padding: 2.5rem 2.25rem 2rem; }
          .ts-quote { font-size: 1.1rem; line-height: 1.7; }
        }

        /* ============================================
           REDUCED MOTION — plain crossfade, no particles
           ============================================ */
        @media (prefers-reduced-motion: reduce) {
          .ts-pieces { display: none; }
          .ts-card.ts-building,
          .ts-card.ts-shattering,
          .ts-star {
            animation: none !important;
          }
          .ts-card.ts-building { opacity: 1; }
          .ts-card.ts-shattering { opacity: 0; transition: opacity 0.3s linear; }
        }
      `}} />
    </section>
  )
}
