'use client'

import React, { useEffect, useRef, useState } from 'react'

/* ============================================================
   WHY AUTOMATION — EDIT HERE
   Each entry is one head-to-head round. `bad` / `good` are the
   bar heights (0-100) that drive the visual gap.
   ============================================================ */
const rounds = [
  {
    icon: '👷',
    topic: 'Manpower',
    old: { label: 'More workers on every shift', metric: '12', unit: 'workers', bar: 95 },
    now: { label: 'A small trained team runs it', metric: '3', unit: 'workers', bar: 25 },
    win: '75% less manpower',
  },
  {
    icon: '🛢️',
    topic: 'Oil Consumption',
    old: { label: 'Oil burns fast, changed often', metric: 'High', unit: 'usage', bar: 90 },
    now: { label: 'Filtration reuses clean oil', metric: '−30%', unit: 'oil cost', bar: 35 },
    win: 'Oil bill cut by a third',
  },
  {
    icon: '⚡',
    topic: 'Production Speed',
    old: { label: 'Slow, capped by hand work', metric: '80', unit: 'kg/hr', bar: 28 },
    now: { label: 'Continuous line, no bottleneck', metric: '500', unit: 'kg/hr', bar: 96 },
    win: '6× more output',
  },
  {
    icon: '🎯',
    topic: 'Product Quality',
    old: { label: 'Every batch looks different', metric: 'Varies', unit: 'batch to batch', bar: 30 },
    now: { label: 'Same colour, crisp, salt — always', metric: '100%', unit: 'uniform', bar: 100 },
    win: 'Buyers stop complaining',
  },
  {
    icon: '🗑️',
    topic: 'Wastage',
    old: { label: 'Broken and burnt product piles up', metric: '8%', unit: 'wasted', bar: 85 },
    now: { label: 'Controlled slicing and frying', metric: '2%', unit: 'wasted', bar: 22 },
    win: '4× less thrown away',
  },
  {
    icon: '🔧',
    topic: 'Reliability',
    old: { label: 'Breaks down in peak season', metric: 'Often', unit: 'stoppages', bar: 88 },
    now: { label: 'Built to run all season', metric: 'Rare', unit: 'stoppages', bar: 18 },
    win: 'No peak-season panic',
  },
  {
    icon: '🧼',
    topic: 'Cleaning & Hygiene',
    old: { label: 'Hours of scrubbing by hand', metric: '3 hrs', unit: 'per clean', bar: 92 },
    now: { label: 'Food-grade steel, quick wash-down', metric: '30 min', unit: 'per clean', bar: 20 },
    win: 'Back to production faster',
  },
  {
    icon: '💰',
    topic: 'Running Cost',
    old: { label: 'Labour, oil and power add up', metric: 'High', unit: 'per kg', bar: 93 },
    now: { label: 'Lower cost on every kilo made', metric: 'Low', unit: 'per kg', bar: 30 },
    win: 'Margin goes up permanently',
  },
]

const ROUND_MS = 3400

export default function Comparison() {
  const [i, setI] = useState(0)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  /* Only start cycling once the section is on screen */
  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => setI((p) => (p + 1) % rounds.length), ROUND_MS)
    return () => clearTimeout(t)
  }, [i, visible])

  const r = rounds[i]

  return (
    <section
      id="comparison"
      ref={sectionRef}
      className={`cp-section ${visible ? 'is-visible' : ''}`}
    >
      <div className="cp-backdrop" aria-hidden="true">
        <span className="cp-glow cp-glow-left" />
        <span className="cp-glow cp-glow-right" />
      </div>

      {/* Header */}
      <div className="cp-header">
        <span className="cp-eyebrow">Before &amp; After</span>
        <h2 className="cp-title">Why Automation?</h2>
        <p className="cp-subtitle">Same product. Completely different business.</p>
      </div>

      {/* ---------------- Arena ---------------- */}
      <div className="cp-arena">
        {/* Topic pill */}
        <div className="cp-topic" key={`topic-${i}`}>
          <span className="cp-topic-icon">{r.icon}</span>
          <span className="cp-topic-name">{r.topic}</span>
        </div>

        <div className="cp-duel">
          {/* -------- Manual side -------- */}
          <div className="cp-side cp-side-old" key={`old-${i}`}>
            <div className="cp-side-tag">
              <span className="cp-side-mark">✕</span>
              Traditional
            </div>
            <div className="cp-meter">
              <div className="cp-meter-fill cp-fill-old" style={{ height: `${r.old.bar}%` }} />
            </div>
            <div className="cp-metric cp-metric-old">{r.old.metric}</div>
            <div className="cp-unit">{r.old.unit}</div>
            <p className="cp-desc">{r.old.label}</p>
          </div>

          {/* -------- VS -------- */}
          <div className="cp-vs" aria-hidden="true">
            <span className="cp-vs-ring" />
            <span className="cp-vs-text">VS</span>
          </div>

          {/* -------- Automated side -------- */}
          <div className="cp-side cp-side-new" key={`new-${i}`}>
            <div className="cp-side-tag cp-side-tag-new">
              <span className="cp-side-mark cp-side-mark-new">✓</span>
              Our Machines
            </div>
            <div className="cp-meter">
              <div className="cp-meter-fill cp-fill-new" style={{ height: `${r.now.bar}%` }} />
            </div>
            <div className="cp-metric cp-metric-new">{r.now.metric}</div>
            <div className="cp-unit">{r.now.unit}</div>
            <p className="cp-desc">{r.now.label}</p>
          </div>
        </div>

        {/* Verdict banner */}
        <div className="cp-verdict" key={`win-${i}`}>
          <span className="cp-verdict-icon">🏆</span>
          {r.win}
        </div>
      </div>

      {/* ---------------- Round selector ---------------- */}
      <div className="cp-rail">
        {rounds.map((round, idx) => (
          <button
            key={round.topic}
            className={`cp-rail-item ${idx === i ? 'is-active' : ''}`}
            onClick={() => setI(idx)}
            aria-label={round.topic}
          >
            <span className="cp-rail-icon">{round.icon}</span>
            <span className="cp-rail-label">{round.topic}</span>
            {idx === i && (
              <span className="cp-rail-bar">
                <span className="cp-rail-bar-fill" />
              </span>
            )}
          </button>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ============================================
           WHY AUTOMATION — HEAD TO HEAD ARENA
           ============================================ */
        .cp-section {
          position: relative;
          overflow: hidden;
          padding: 2.5rem 1rem;
          background:
            radial-gradient(ellipse at 50% 100%, rgba(22,163,74,0.06) 0%, transparent 60%),
            radial-gradient(circle at center, #F8FAFC 0%, #E2E8F0 100%);
        }

        .cp-backdrop { position: absolute; inset: 0; pointer-events: none; }
        .cp-glow { position: absolute; top: 20%; width: 300px; height: 300px; border-radius: 50%; filter: blur(70px); }
        .cp-glow-left { left: -100px; background: rgba(220,38,38,0.13); }
        .cp-glow-right { right: -100px; background: rgba(22,163,74,0.13); }

        /* ---------- Header ---------- */
        .cp-header { position: relative; z-index: 2; text-align: center; margin-bottom: 1.25rem; }

        .cp-eyebrow {
          display: inline-block;
          padding: 0.35rem 1rem;
          border: 1px solid var(--border);
          border-radius: 50px;
          background: rgba(255,255,255,0.8);
          color: var(--accent);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .cp-title {
          font-size: 1.9rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          margin: 0 0 0.5rem;
        }
        .cp-subtitle { color: var(--text-secondary); font-size: 1rem; margin: 0; }

        /* ---------- Arena ---------- */
        .cp-arena {
          position: relative;
          z-index: 2;
          max-width: 980px;
          margin: 0 auto;
          padding: 1.5rem 1rem 1.5rem;
          border: 1px solid var(--border);
          border-radius: 26px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 22px 60px rgba(15,23,42,0.07);
        }

        /* ---------- Topic pill ---------- */
        .cp-topic {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          margin-bottom: 1.5rem;
          animation: cpDropIn 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes cpDropIn {
          0%   { opacity: 0; transform: translateY(-12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .cp-topic-icon { font-size: 1.6rem; }
        .cp-topic-name {
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.4px;
          color: var(--text-primary);
        }

        /* ---------- Duel ---------- */
        .cp-duel {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0.5rem;
          align-items: stretch;
        }

        .cp-side {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1rem 0.4rem;
          border-radius: 20px;
        }
        .cp-side-old {
          background: linear-gradient(180deg, rgba(220,38,38,0.05) 0%, rgba(220,38,38,0.01) 100%);
          animation: cpSlideL 0.55s cubic-bezier(0.22,1,0.36,1) both;
        }
        .cp-side-new {
          background: linear-gradient(180deg, rgba(22,163,74,0.05) 0%, rgba(22,163,74,0.01) 100%);
          animation: cpSlideR 0.55s cubic-bezier(0.22,1,0.36,1) 0.08s both;
        }
        @keyframes cpSlideL {
          0%   { opacity: 0; transform: translateX(-26px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes cpSlideR {
          0%   { opacity: 0; transform: translateX(26px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .cp-side-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.28rem 0.7rem;
          border-radius: 50px;
          background: rgba(220,38,38,0.10);
          color: #B91C1C;
          font-size: 0.64rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 0.9rem;
        }
        .cp-side-tag-new { background: rgba(22,163,74,0.10); color: #15803D; }

        .cp-side-mark {
          width: 15px; height: 15px;
          border-radius: 50%;
          background: #DC2626;
          color: #fff;
          font-size: 0.6rem;
          display: flex; align-items: center; justify-content: center;
        }
        .cp-side-mark-new { background: #16A34A; }

        /* ---------- Meter ---------- */
        .cp-meter {
          position: relative;
          width: 40px;
          height: 110px;
          border-radius: 12px;
          background: rgba(15,23,42,0.05);
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          margin-bottom: 0.85rem;
        }
        .cp-meter-fill {
          width: 100%;
          border-radius: 12px;
          transition: height 0.85s cubic-bezier(0.22,1,0.36,1);
        }
        .cp-fill-old {
          background: linear-gradient(180deg, #EF4444, #B91C1C);
          box-shadow: 0 0 18px rgba(220,38,38,0.4);
        }
        .cp-fill-new {
          background: linear-gradient(180deg, #22C55E, #15803D);
          box-shadow: 0 0 18px rgba(22,163,74,0.4);
        }

        .cp-metric {
          font-size: 1.5rem;
          font-weight: 900;
          line-height: 1.1;
        }
        .cp-metric-old { color: #B91C1C; }
        .cp-metric-new { color: #15803D; }

        .cp-unit {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--text-tertiary);
          margin-top: 0.1rem;
        }

        .cp-desc {
          margin: 0.7rem 0 0;
          font-size: 0.78rem;
          line-height: 1.5;
          color: var(--text-secondary);
          max-width: 180px;
        }

        /* ---------- VS badge ---------- */
        .cp-vs {
          position: relative;
          align-self: center;
          width: 46px; height: 46px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cp-vs-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid transparent;
          background: linear-gradient(135deg, #DC2626, #16A34A) border-box;
          -webkit-mask: linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: cpSpin 6s linear infinite;
        }
        @keyframes cpSpin { to { transform: rotate(360deg); } }
        .cp-vs-text {
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.5px;
          background: linear-gradient(135deg, #DC2626, #16A34A);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ---------- Verdict ---------- */
        .cp-verdict {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          padding: 0.75rem 1rem;
          border: 1px solid rgba(22,163,74,0.22);
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(22,163,74,0.10), rgba(22,163,74,0.03));
          color: #15803D;
          font-size: 0.92rem;
          font-weight: 800;
          text-align: center;
          animation: cpVerdictIn 0.55s cubic-bezier(0.175,0.885,0.32,1.3) 0.35s both;
        }
        @keyframes cpVerdictIn {
          0%   { opacity: 0; transform: translateY(14px) scale(0.94); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .cp-verdict-icon { font-size: 1.1rem; }

        /* ---------- Round rail ---------- */
        .cp-rail {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 0.5rem;
          max-width: 980px;
          margin: 1.5rem auto 0;
          padding: 0 0.25rem 0.5rem;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .cp-rail::-webkit-scrollbar { display: none; }

        .cp-rail-item {
          position: relative;
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          padding: 0.6rem 0.75rem 0.7rem;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: #FFFFFF;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .cp-rail-item:hover { transform: translateY(-2px); border-color: var(--accent); }
        .cp-rail-item.is-active {
          border-color: var(--accent);
          box-shadow: 0 8px 22px rgba(220,38,38,0.14);
        }

        .cp-rail-icon { font-size: 1.15rem; opacity: 0.55; transition: opacity 0.3s ease; }
        .cp-rail-item.is-active .cp-rail-icon { opacity: 1; }

        .cp-rail-label {
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.4px;
          color: var(--text-tertiary);
          white-space: nowrap;
        }
        .cp-rail-item.is-active .cp-rail-label { color: var(--text-primary); }

        .cp-rail-bar {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%;
          height: 3px;
          background: rgba(220,38,38,0.12);
        }
        .cp-rail-bar-fill {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, #DC2626, #EF4444);
          animation: cpTick ${ROUND_MS}ms linear both;
        }
        @keyframes cpTick { from { width: 0%; } to { width: 100%; } }

        /* ============================================
           TABLET (>= 768px)
           ============================================ */
        @media (min-width: 768px) {
          .cp-section { padding: 2.75rem 2rem; }
          .cp-title { font-size: 2.5rem; }
          .cp-subtitle { font-size: 1.1rem; }
          .cp-arena { padding: 2.25rem 2rem 2rem; }
          .cp-topic-icon { font-size: 2.1rem; }
          .cp-topic-name { font-size: 1.35rem; }
          .cp-duel { gap: 1.25rem; }
          .cp-side { padding: 1.5rem 1rem; }
          .cp-meter { width: 54px; height: 150px; }
          .cp-metric { font-size: 2.1rem; }
          .cp-unit { font-size: 0.68rem; }
          .cp-desc { font-size: 0.88rem; max-width: 240px; }
          .cp-vs { width: 62px; height: 62px; }
          .cp-vs-text { font-size: 1rem; }
          .cp-verdict { font-size: 1.05rem; padding: 0.9rem 1.5rem; }
          .cp-rail { justify-content: center; flex-wrap: wrap; overflow-x: visible; }
          .cp-rail-label { font-size: 0.7rem; }
        }

        @media (min-width: 1024px) {
          .cp-arena { padding: 2.75rem 2.5rem 2.25rem; }
          .cp-meter { height: 170px; }
        }

        /* ============================================
           REDUCED MOTION
           ============================================ */
        @media (prefers-reduced-motion: reduce) {
          .cp-topic, .cp-side-old, .cp-side-new, .cp-verdict { animation: none !important; }
          .cp-vs-ring, .cp-rail-bar-fill { animation: none !important; }
          .cp-meter-fill { transition: none !important; }
        }
      `}} />
    </section>
  )
}
