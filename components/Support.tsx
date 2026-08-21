'use client'

import React, { useEffect, useRef, useState } from 'react'

/* ============================================================
   SUPPORT STAGES — EDIT HERE
   The 15 support services grouped into 4 lifecycle stages so a
   visitor can scan the whole promise in a few seconds.
   ============================================================ */
const stages = [
  {
    key: 'install',
    step: 'Day 1',
    title: 'We Install It For You',
    tagline: 'Our engineers commission the machine on your floor',
    icon: '🔧',
    color: '#DC2626',
    items: [
      { icon: '🔧', label: 'Complete Commissioning' },
      { icon: '👨‍🏫', label: 'Operator Training' },
      { icon: '📹', label: 'Video Demos & Guides' },
      { icon: '📋', label: 'Handover Checklist' },
    ],
  },
  {
    key: 'reach',
    step: 'Any Day',
    title: 'We Are One Call Away',
    tagline: 'Four ways to reach a real technician, not a call centre',
    icon: '📞',
    color: '#16A34A',
    items: [
      { icon: '📞', label: 'Direct Phone Line' },
      { icon: '💬', label: 'WhatsApp Support' },
      { icon: '🖥️', label: 'Remote Diagnosis' },
      { icon: '🚗', label: 'On-Site Visit' },
    ],
  },
  {
    key: 'maintain',
    step: 'Every Month',
    title: 'We Prevent The Breakdown',
    tagline: 'Scheduled service so problems never reach your line',
    icon: '🔄',
    color: '#D97706',
    items: [
      { icon: '🔄', label: 'Preventive Maintenance' },
      { icon: '📅', label: 'AMC Plans' },
      { icon: '🔩', label: 'Genuine Spare Parts' },
      { icon: '📈', label: 'Performance Tuning' },
    ],
  },
  {
    key: 'emergency',
    step: 'Worst Day',
    title: 'We Show Up Fast',
    tagline: 'Line stopped? That becomes our emergency too',
    icon: '🚨',
    color: '#B91C1C',
    items: [
      { icon: '🚨', label: 'Emergency Breakdown' },
      { icon: '⏱️', label: '24 Hour Response' },
      { icon: '⬆️', label: 'Machine Upgrades' },
      { icon: '🎓', label: 'Lifetime Guidance' },
    ],
  },
]

/* ---- Headline numbers ---- */
const stats = [
  { value: 24, suffix: 'h', label: 'Response Time', sub: 'Anywhere in India', color: '#DC2626' },
  { value: 100, suffix: '%', label: 'Genuine Spares', sub: 'Direct from our plant', color: '#D97706' },
  { value: 30, suffix: '+', label: 'Years Supporting', sub: 'Machines still running', color: '#16A34A' },
  { value: 500, suffix: '+', label: 'Plants Serviced', sub: 'Across 20+ states', color: '#0F172A' },
]

/* ---- What happens after you report a problem ---- */
const responseClock = [
  { t: '0 min', title: 'You Reach Us', desc: 'Call or WhatsApp — a person picks up', icon: '📞' },
  { t: '15 min', title: 'Engineer Assigned', desc: 'Your case gets a named technician', icon: '👨‍🔧' },
  { t: '2 hrs', title: 'Remote Diagnosis', desc: 'Most issues solved over video', icon: '🖥️' },
  { t: '24 hrs', title: 'On-Site If Needed', desc: 'Field engineer reaches your plant', icon: '🚚' },
]

const STAGE_MS = 4200
const CLOCK_MS = 1600

export default function Support() {
  const [activeStage, setActiveStage] = useState(0)
  const [clockStep, setClockStep] = useState(0)
  const [paused, setPaused] = useState(false)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  /* Reveal + start counters when the section scrolls into view */
  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  /* Auto-advance the lifecycle journey */
  useEffect(() => {
    if (paused || !visible) return
    const timer = setTimeout(() => {
      setActiveStage((s) => (s + 1) % stages.length)
    }, STAGE_MS)
    return () => clearTimeout(timer)
  }, [activeStage, paused, visible])

  /* Response clock ticks forward, then resets and replays */
  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(
      () => setClockStep((s) => (s + 1) % (responseClock.length + 1)),
      clockStep === responseClock.length ? CLOCK_MS * 1.5 : CLOCK_MS
    )
    return () => clearTimeout(timer)
  }, [clockStep, visible])

  const active = stages[activeStage]

  return (
    <section
      id="support"
      ref={sectionRef}
      className={`sp-section ${visible ? 'is-visible' : ''}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Radar sweep backdrop — reads as "always monitoring" */}
      <div className="sp-backdrop" aria-hidden="true">
        <div className="sp-radar" style={{ borderColor: `${active.color}20` }} />
        <div className="sp-radar sp-radar-2" style={{ borderColor: `${active.color}16` }} />
        <div className="sp-glow" style={{ background: `radial-gradient(circle, ${active.color}14 0%, transparent 62%)` }} />
      </div>

      {/* Header */}
      <div className="sp-header">
        <span className="sp-live">
          <span className="sp-live-dot" />
          Support Desk Active
        </span>
        <h2 className="sp-title">
          Support Doesn&apos;t End
          <br />
          <span style={{ color: active.color, transition: 'color 0.8s ease' }}>After Delivery</span>
        </h2>
        <p className="sp-subtitle">Most suppliers vanish after installation. That is where we start.</p>
      </div>

      {/* Headline numbers with count-up */}
      <div className="sp-stats">
        {stats.map((s, i) => (
          <div className="sp-stat" key={s.label} style={{ transitionDelay: `${i * 110}ms` }}>
            <div className="sp-stat-num" style={{ color: s.color }}>
              <CountUp to={s.value} start={visible} duration={1400 + i * 200} />
              <span className="sp-stat-suffix">{s.suffix}</span>
            </div>
            <div className="sp-stat-label">{s.label}</div>
            <div className="sp-stat-sub">{s.sub}</div>
            <span className="sp-stat-bar" style={{ background: s.color }} />
          </div>
        ))}
      </div>

      {/* ---------- Response clock ---------- */}
      <div className="sp-clock-block">
        <div className="sp-block-head">
          <span className="sp-block-tag">If Your Line Stops Today</span>
          <h3 className="sp-block-title">This Is What Happens Next</h3>
        </div>

        <div className="sp-clock">
          <div className="sp-clock-line">
            <div
              className="sp-clock-fill"
              style={
                {
                  ['--fill' as string]: `${(Math.min(clockStep, responseClock.length) / responseClock.length) * 100}%`,
                } as React.CSSProperties
              }
            />
          </div>

          {responseClock.map((c, i) => {
            const reached = clockStep > i
            return (
              <div className={`sp-tick ${reached ? 'is-reached' : ''}`} key={c.t}>
                <span className="sp-tick-dot">
                  <span className="sp-tick-icon">{c.icon}</span>
                  {reached && <span className="sp-tick-ring" />}
                </span>
                <span className="sp-tick-time">{c.t}</span>
                <span className="sp-tick-title">{c.title}</span>
                <span className="sp-tick-desc">{c.desc}</span>
              </div>
            )
          })}
        </div>
      </div>

  

      {/* ---------- Lifecycle journey ---------- */}
      <div className="sp-journey">
        <div className="sp-block-head">
          <span className="sp-block-tag">Full Machine Lifecycle</span>
          <h3 className="sp-block-title">We Stay With You Throughout</h3>
        </div>



        {/* Active stage panel */}
        <div
          className="sp-panel"
          key={active.key}
          style={{
            borderColor: `${active.color}33`,
            boxShadow: `0 24px 70px rgba(15, 23, 42, 0.07), inset 0 0 60px ${active.color}06`,
          }}
        >
          <div className="sp-panel-head">
            <span
              className="sp-panel-icon"
              style={{ background: `${active.color}12`, borderColor: active.color, boxShadow: `0 8px 26px ${active.color}2E` }}
            >
              {active.icon}
            </span>
            <div>
              <div className="sp-panel-step" style={{ color: active.color }}>
                Stage {activeStage + 1} of {stages.length} · {active.step}
              </div>
              <h3 className="sp-panel-title">{active.title}</h3>
              <p className="sp-panel-tag">{active.tagline}</p>
            </div>
          </div>

          <div className="sp-items">
            {active.items.map((it, i) => (
              <div
                className="sp-item"
                key={it.label}
                style={{
                  animationDelay: `${0.12 + i * 0.09}s`,
                  borderColor: `${active.color}26`,
                  background: `${active.color}08`,
                }}
              >
                <span className="sp-item-icon" style={{ background: `${active.color}18` }}>
                  {it.icon}
                </span>
                <span className="sp-item-label">{it.label}</span>
              </div>
            ))}
          </div>

          {/* Auto-advance progress */}
          <div className="sp-progress">
            <span
              key={`${activeStage}-${paused}`}
              className={`sp-progress-fill ${paused ? 'is-paused' : ''}`}
              style={{ background: active.color, animationDuration: `${STAGE_MS}ms` }}
            />
          </div>
        </div>
      </div>

      {/* Closing promise + contact rail */}
      <div className="sp-promise">
        <p className="sp-promise-text">
          Downtime costs money. Our job is to make sure you never lose a shift.
        </p>
        <div className="sp-actions">
          <a href="tel:+919999999999" className="sp-btn sp-btn-primary">
            📞 Call Service Desk
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="sp-btn sp-btn-ghost"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ============================================
           SUPPORT & SERVICE — ANIMATED JOURNEY
           ============================================ */
        .sp-section {
          position: relative;
          overflow: hidden;
          padding: 2.5rem 1rem;
          background:
            radial-gradient(ellipse at 20% 0%, rgba(220,38,38,0.05) 0%, transparent 55%),
            radial-gradient(circle at center, #F8FAFC 0%, #E2E8F0 100%);
        }

        /* ---------- Backdrop ---------- */
        .sp-backdrop { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }

        .sp-radar {
          position: absolute;
          top: 50%; left: 50%;
          width: 620px; height: 620px;
          margin: -310px 0 0 -310px;
          border: 1px solid;
          border-radius: 50%;
          animation: spRadar 4s ease-out infinite;
          transition: border-color 0.8s ease;
        }
        .sp-radar-2 { animation-delay: 2s; }

        @keyframes spRadar {
          0%   { transform: scale(0.35); opacity: 0.9; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        .sp-glow {
          position: absolute;
          top: 50%; left: 50%;
          width: 900px; height: 900px;
          margin: -450px 0 0 -450px;
          transition: background 0.9s ease;
        }

        /* ---------- Header ---------- */
        .sp-header { position: relative; z-index: 2; text-align: center; margin-bottom: 1.25rem; }

        .sp-live {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.9rem;
          border: 1px solid rgba(22,163,74,0.22);
          border-radius: 50px;
          background: rgba(22,163,74,0.08);
          color: #16A34A;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          margin-bottom: 1.1rem;
        }
        .sp-live-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #16A34A;
          box-shadow: 0 0 0 0 rgba(22,163,74,0.7);
          animation: spPing 1.8s ease-out infinite;
        }
        @keyframes spPing {
          0%   { box-shadow: 0 0 0 0 rgba(22,163,74,0.65); }
          70%  { box-shadow: 0 0 0 9px rgba(22,163,74,0); }
          100% { box-shadow: 0 0 0 0 rgba(22,163,74,0); }
        }

        .sp-title {
          font-size: 1.85rem;
          font-weight: 800;
          line-height: 1.22;
          color: var(--text-primary);
          margin: 0 0 0.6rem;
        }

        .sp-subtitle { color: var(--text-secondary); font-size: 0.98rem; margin: 0; }

        /* ---------- Shared block heading ---------- */
        .sp-block-head { text-align: center; margin-bottom: 1.75rem; }
        .sp-block-tag {
          display: inline-block;
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.4rem;
        }
        .sp-block-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.3;
        }

        /* ---------- Stats ---------- */
        .sp-stats {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          max-width: 1080px;
          margin: 0 auto 1.75rem;
        }

        .sp-stat {
          position: relative;
          overflow: hidden;
          padding: 1.1rem 0.9rem 1.2rem;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: #FFFFFF;
          box-shadow: 0 6px 22px rgba(15,23,42,0.04);
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .sp-section.is-visible .sp-stat { opacity: 1; transform: translateY(0); }

        .sp-stat-num {
          display: flex;
          align-items: baseline;
          gap: 0.1rem;
          font-size: 1.9rem;
          font-weight: 800;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .sp-stat-suffix { font-size: 1.1rem; font-weight: 700; }

        .sp-stat-label {
          margin-top: 0.4rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .sp-stat-sub { font-size: 0.7rem; color: var(--text-secondary); margin-top: 0.1rem; }

        .sp-stat-bar {
          position: absolute;
          left: 0; bottom: 0;
          height: 2px; width: 0;
          transition: width 1.2s ease 0.4s;
        }
        .sp-section.is-visible .sp-stat-bar { width: 100%; }

        /* ---------- Response clock ---------- */
        .sp-clock-block {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 0 auto 1.75rem;
        }

        .sp-clock {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }

        /* Mobile: vertical spine */
        .sp-clock-line {
          position: absolute;
          left: 23px;
          top: 12px;
          bottom: 12px;
          width: 2px;
          background: var(--border);
          border-radius: 2px;
          overflow: hidden;
        }
        .sp-clock-fill {
          position: absolute;
          left: 0; top: 0;
          width: 100%;
          height: var(--fill, 0%);
          background: linear-gradient(180deg, #DC2626, #16A34A);
          transition: height 0.7s cubic-bezier(0.22,1,0.36,1);
        }

        .sp-tick {
          position: relative;
          display: grid;
          grid-template-columns: 48px 1fr;
          grid-template-areas:
            "dot time"
            "dot title"
            "dot desc";
          align-items: center;
          column-gap: 0.85rem;
          padding: 0.5rem 0;
          opacity: 0.45;
          transition: opacity 0.5s ease;
        }
        .sp-tick.is-reached { opacity: 1; }

        .sp-tick-dot {
          grid-area: dot;
          position: relative;
          width: 48px; height: 48px;
          border-radius: 50%;
          border: 2px solid var(--border);
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.175,0.885,0.32,1.27);
        }
        .sp-tick.is-reached .sp-tick-dot {
          border-color: var(--accent);
          background: rgba(220,38,38,0.07);
          transform: scale(1.08);
        }
        .sp-tick-icon { font-size: 1.15rem; line-height: 1; }

        .sp-tick-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          animation: spTickRing 1.4s ease-out infinite;
        }
        @keyframes spTickRing {
          0%   { transform: scale(0.85); opacity: 0.7; }
          100% { transform: scale(1.35); opacity: 0; }
        }

        .sp-tick-time {
          grid-area: time;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--accent);
        }
        .sp-tick-title {
          grid-area: title;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .sp-tick-desc {
          grid-area: desc;
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        /* ---------- Downtime comparison ---------- */
        .sp-compare {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 0 auto 2.5rem;
          padding: 1.25rem 1.1rem;
          border: 1px solid var(--border);
          border-radius: 20px;
          background: #FFFFFF;
          box-shadow: 0 6px 22px rgba(15,23,42,0.04);
          display: grid;
          gap: 0.9rem;
        }

        .sp-compare-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.35rem;
          align-items: center;
        }

        .sp-compare-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .sp-compare-track {
          height: 12px;
          border-radius: 12px;
          background: rgba(15,23,42,0.05);
          overflow: hidden;
        }

        .sp-compare-bar {
          display: block;
          height: 100%;
          width: 0;
          border-radius: 12px;
          transition: width 1.4s cubic-bezier(0.22,1,0.36,1) 0.3s;
        }
        .sp-bad  { background: linear-gradient(90deg, #F87171, #B91C1C); }
        .sp-good { background: linear-gradient(90deg, #4ADE80, #16A34A); }

        .sp-section.is-visible .sp-bad  { width: 92%; }
        .sp-section.is-visible .sp-good { width: 22%; }

        .sp-compare-value { font-size: 0.85rem; font-weight: 800; }
        .sp-bad-text  { color: #B91C1C; }
        .sp-good-text { color: #16A34A; }

        /* ---------- Journey ---------- */
        .sp-journey {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 0 auto;
        }

        /* Stage rail */
        .sp-rail {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.25rem;
          margin-bottom: 1.75rem;
        }

        .sp-rail-line {
          position: absolute;
          top: 24px;
          left: 12%;
          right: 12%;
          height: 2px;
          background: var(--border);
          border-radius: 2px;
          overflow: hidden;
        }
        .sp-rail-fill {
          height: 100%;
          border-radius: 2px;
          transition: width 0.7s cubic-bezier(0.22,1,0.36,1), background 0.7s ease;
        }

        .sp-node {
          position: relative;
          z-index: 1;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .sp-node-dot {
          width: 48px; height: 48px;
          border: 2px solid;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.175,0.885,0.32,1.27);
        }
        .sp-node.is-active .sp-node-dot { transform: scale(1.14); }
        .sp-node:hover .sp-node-dot { transform: scale(1.08); }

        .sp-node-icon { font-size: 1.15rem; line-height: 1; }
        .sp-node.is-done .sp-node-icon { color: #fff; font-weight: 900; }

        .sp-node-step {
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--text-secondary);
          transition: color 0.4s ease;
          text-align: center;
        }

        /* Active panel */
        .sp-panel {
          position: relative;
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 1.5rem 1.25rem 1.75rem;
          background: #FFFFFF;
          animation: spPanelIn 0.6s cubic-bezier(0.22,1,0.36,1) both;
        }

        @keyframes spPanelIn {
          0%   { opacity: 0; transform: translateY(18px) scale(0.985); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .sp-panel-head { display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1.35rem; }

        .sp-panel-icon {
          width: 60px; height: 60px;
          flex-shrink: 0;
          border: 2px solid;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          animation: spIconFloat 3s ease-in-out infinite alternate;
        }
        @keyframes spIconFloat {
          0%   { transform: translateY(-3px); }
          100% { transform: translateY(3px); }
        }

        .sp-panel-step {
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          margin-bottom: 0.3rem;
        }
        .sp-panel-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0 0 0.3rem;
          line-height: 1.25;
        }
        .sp-panel-tag { font-size: 0.88rem; color: var(--text-secondary); margin: 0; line-height: 1.5; }

        .sp-items {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.6rem;
        }

        .sp-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.7rem 0.85rem;
          border: 1px solid;
          border-radius: 14px;
          animation: spItemIn 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes spItemIn {
          0%   { opacity: 0; transform: translateX(-14px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .sp-item-icon {
          width: 34px; height: 34px;
          flex-shrink: 0;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.05rem;
        }
        .sp-item-label { font-size: 0.86rem; font-weight: 600; color: var(--text-primary); }

        .sp-progress {
          margin-top: 1.35rem;
          height: 3px;
          background: var(--border);
          border-radius: 3px;
          overflow: hidden;
        }
        .sp-progress-fill {
          display: block;
          height: 100%;
          width: 100%;
          transform-origin: left center;
          animation: spProgress linear forwards;
        }
        .sp-progress-fill.is-paused { animation-play-state: paused; }
        @keyframes spProgress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        /* ---------- Promise ---------- */
        .sp-promise {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 1.25rem auto 0;
          text-align: center;
        }
        .sp-promise-text {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 1.25rem;
          line-height: 1.5;
        }
        .sp-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; }

        .sp-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.8rem 1.4rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .sp-btn-primary {
          background: linear-gradient(135deg, #DC2626, #EF4444);
          color: #fff;
          box-shadow: 0 10px 28px rgba(220,38,38,0.28);
        }
        .sp-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 16px 36px rgba(220,38,38,0.38); }

        .sp-btn-ghost {
          background: #FFFFFF;
          color: var(--text-primary);
          border: 1px solid var(--border);
          box-shadow: 0 4px 16px rgba(15,23,42,0.05);
        }
        .sp-btn-ghost:hover { transform: translateY(-3px); box-shadow: 0 10px 26px rgba(15,23,42,0.09); }

        /* ============================================
           TABLET (>= 640px)
           ============================================ */
        @media (min-width: 640px) {
          .sp-items { grid-template-columns: 1fr 1fr; }

          .sp-compare-row {
            grid-template-columns: 190px 1fr 130px;
            gap: 1rem;
          }
          .sp-compare-value { text-align: right; }
        }

        /* ============================================
           TABLET / DESKTOP (>= 768px)
           ============================================ */
        @media (min-width: 768px) {
          .sp-section { padding: 2.75rem 2rem; }
          .sp-title { font-size: 2.6rem; }
          .sp-subtitle { font-size: 1.1rem; }
          .sp-block-title { font-size: 1.7rem; }
          .sp-stats { grid-template-columns: repeat(4, 1fr); gap: 1rem; }
          .sp-stat { padding: 1.4rem 1.2rem 1.5rem; }
          .sp-stat-num { font-size: 2.4rem; }

          /* Clock becomes a horizontal timeline */
          .sp-clock { grid-template-columns: repeat(4, 1fr); gap: 1rem; }
          .sp-clock-line {
            left: 12%; right: 12%;
            top: 24px; bottom: auto;
            width: auto; height: 2px;
          }
          .sp-clock-fill {
            width: var(--fill, 0%);
            height: 100%;
            background: linear-gradient(90deg, #DC2626, #16A34A);
            transition: width 0.7s cubic-bezier(0.22,1,0.36,1);
          }
          .sp-tick {
            grid-template-columns: 1fr;
            grid-template-areas: "dot" "time" "title" "desc";
            justify-items: center;
            text-align: center;
            row-gap: 0.3rem;
            padding: 0;
          }

          .sp-compare { padding: 1.75rem 1.75rem; }

          .sp-node-dot { width: 58px; height: 58px; }
          .sp-node-icon { font-size: 1.4rem; }
          .sp-node-step { font-size: 0.7rem; }
          .sp-rail-line { top: 29px; }
          .sp-panel { padding: 2.25rem 2rem 2rem; }
          .sp-panel-icon { width: 74px; height: 74px; font-size: 2.2rem; }
          .sp-panel-title { font-size: 1.7rem; }
          .sp-panel-tag { font-size: 0.98rem; }
          .sp-promise-text { font-size: 1.2rem; }
        }

        /* ============================================
           DESKTOP (>= 1024px)
           ============================================ */
        @media (min-width: 1024px) {
          .sp-panel {
            display: grid;
            grid-template-columns: 1fr 1.15fr;
            gap: 2.5rem;
            align-items: center;
            padding: 2.5rem;
          }
          .sp-panel-head { margin-bottom: 0; }
          .sp-progress { grid-column: 1 / -1; margin-top: 1.5rem; }
          .sp-items { gap: 0.75rem; }
        }

        /* ============================================
           REDUCED MOTION
           ============================================ */
        @media (prefers-reduced-motion: reduce) {
          .sp-radar, .sp-live-dot, .sp-panel-icon, .sp-tick-ring { animation: none !important; }
          .sp-panel, .sp-item, .sp-progress-fill { animation: none !important; }
          .sp-stat { opacity: 1 !important; transform: none !important; }
          .sp-tick { opacity: 1 !important; }
        }
      `}} />
    </section>
  )
}

/* ============================================================
   Count-up number — animates once the section is in view
   ============================================================ */
function CountUp({ to, start, duration }: { to: number; start: boolean; duration: number }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!start) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      setN(to)
      return
    }

    let frame = 0
    const t0 = performance.now()

    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(to * eased))
      if (p < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, to, duration])

  return <>{n}</>
}
