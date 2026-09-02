'use client'

import React, { useEffect, useRef, useState } from 'react'

/* ============================================================
   CONTACT — EDIT HERE
   Replace the placeholder numbers, email and map embed below.
   ============================================================ */
const COMPANY = {
  phone1: '+91 9150081328',
  phone2: '+91 XXXXX XXXXX',
  whatsapp: '+91 9150081328',
  whatsappLink: 'https://wa.me/919150081328',
  email: 'sales@charanfoodtech.com',
  salesEmail: 'sales@charanfoodtech.com',
  address: ['Krishnagiri Main Road', 'Baisuhalli Village, Dharmapuri', 'Tamil Nadu – 635205'],
  mapEmbed: '', // paste a Google Maps embed URL here to replace the placeholder
}
 
/* Step 1 — what do they want to make */
const machineTypes = [
  { key: 'chips', icon: '🥔', label: 'Potato Chips Line' },
  { key: 'banana', icon: '🍌', label: 'Banana Chips Line' },
  { key: 'namkeen', icon: '🥨', label: 'Namkeen Line' },
  { key: 'fryer', icon: '🍳', label: 'Automatic Fryer' },
  { key: 'custom', icon: '⚙️', label: 'Custom Machine' },
  { key: 'other', icon: '💬', label: 'Not Sure Yet' },
]

/* Step 2 — how big */
const scales = [
  { key: 'small', icon: '🏠', label: 'Starting Out', sub: 'Under 100 kg/hr' },
  { key: 'mid', icon: '🏢', label: 'Growing Plant', sub: '100 – 500 kg/hr' },
  { key: 'large', icon: '🏭', label: 'Large Scale', sub: '500 kg/hr +' },
  { key: 'unsure', icon: '🤔', label: 'Need Advice', sub: 'Help me decide' },
]

/* Instant-contact channels */
const channels = [
  { icon: '📞', label: 'Call Us', value: COMPANY.phone1, href: 'tel:+919999999999', tint: '#DC2626' },
  { icon: '💬', label: 'WhatsApp', value: COMPANY.whatsapp, href: COMPANY.whatsappLink, tint: '#16A34A' },
  { icon: '📧', label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}`, tint: '#D97706' },
]

type StepKey = 0 | 1 | 2
const stepLabels = ['What You Need', 'Your Scale', 'Your Details']

export default function Contact() {
  const [step, setStep] = useState<StepKey>(0)
  const [machine, setMachine] = useState<string | null>(null)
  const [scale, setScale] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', note: '' })
  const [sent, setSent] = useState(false)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

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
      { threshold: 0.1 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  /* Picking an option auto-advances — fewer clicks, feels alive */
  const pickMachine = (key: string) => {
    setMachine(key)
    setTimeout(() => setStep(1), 420)
  }
  const pickScale = (key: string) => {
    setScale(key)
    setTimeout(() => setStep(2), 420)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Wire this to your form endpoint / email service.
    setSent(true)
  }

  const chosenMachine = machineTypes.find((m) => m.key === machine)
  const chosenScale = scales.find((s) => s.key === scale)
  const canSubmit = form.name.trim() !== '' && form.phone.trim() !== ''

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`ct-section ${visible ? 'is-visible' : ''}`}
    >
      {/* Backdrop */}
      <div className="ct-backdrop" aria-hidden="true">
        <span className="ct-orb ct-orb-1" />
        <span className="ct-orb ct-orb-2" />
      </div>

      {/* Header */}
      <div className="ct-header">
        <span className="ct-eyebrow">
          <span className="ct-eyebrow-dot" />
          Reply Within 24 Hours
        </span>
        <h2 className="ct-title">Tell Us What You Want To Build</h2>
        <p className="ct-subtitle">Three quick taps. No long forms.</p>
      </div>

      <div className="ct-grid">
        {/* ---------------- Wizard ---------------- */}
        <div className="ct-wizard">
          {/* Step rail */}
          <div className="ct-rail">
            <div className="ct-rail-line">
              <div className="ct-rail-fill" style={{ width: `${((step + 1) / 3) * 100}%` }} />
            </div>
            {stepLabels.map((label, i) => (
              <button
                key={label}
                className={`ct-step ${i === step ? 'is-active' : ''} ${i < step ? 'is-done' : ''}`}
                onClick={() => i < step && setStep(i as StepKey)}
                disabled={i > step}
                aria-label={label}
              >
                <span className="ct-step-dot">{i < step ? '✓' : i + 1}</span>
                <span className="ct-step-label">{label}</span>
              </button>
            ))}
          </div>

          {/* Panels */}
          <div className="ct-panel" key={sent ? 'sent' : `step-${step}`}>
            {sent ? (
              <div className="ct-success">
                <div className="ct-success-ring">
                  <span className="ct-success-tick">✓</span>
                </div>
                <h3 className="ct-success-title">Inquiry Received</h3>
                <p className="ct-success-text">
                  Thanks {form.name.split(' ')[0] || 'there'} — an engineer will call you within 24 hours.
                </p>
                <button
                  className="ct-btn ct-btn-ghost"
                  onClick={() => {
                    setSent(false)
                    setStep(0)
                    setMachine(null)
                    setScale(null)
                    setForm({ name: '', phone: '', email: '', note: '' })
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : step === 0 ? (
              <>
                <h3 className="ct-panel-title">Which machine are you looking for?</h3>
                <div className="ct-options ct-options-3">
                  {machineTypes.map((m, i) => (
                    <button
                      key={m.key}
                      className={`ct-option ${machine === m.key ? 'is-picked' : ''}`}
                      style={{ animationDelay: `${i * 0.06}s` }}
                      onClick={() => pickMachine(m.key)}
                    >
                      <span className="ct-option-icon">{m.icon}</span>
                      <span className="ct-option-label">{m.label}</span>
                    </button>
                  ))}
                </div>
              </>
            ) : step === 1 ? (
              <>
                <h3 className="ct-panel-title">What production scale?</h3>
                <div className="ct-options ct-options-2">
                  {scales.map((s, i) => (
                    <button
                      key={s.key}
                      className={`ct-option ct-option-wide ${scale === s.key ? 'is-picked' : ''}`}
                      style={{ animationDelay: `${i * 0.07}s` }}
                      onClick={() => pickScale(s.key)}
                    >
                      <span className="ct-option-icon">{s.icon}</span>
                      <span className="ct-option-body">
                        <span className="ct-option-label">{s.label}</span>
                        <span className="ct-option-sub">{s.sub}</span>
                      </span>
                    </button>
                  ))}
                </div>
                <button className="ct-back" onClick={() => setStep(0)}>
                  ‹ Back
                </button>
              </>
            ) : (
              <>
                <h3 className="ct-panel-title">Where should we reach you?</h3>

                {/* Recap chips so they see their own answers */}
                <div className="ct-chips">
                  {chosenMachine && (
                    <span className="ct-chip" onClick={() => setStep(0)}>
                      {chosenMachine.icon} {chosenMachine.label}
                    </span>
                  )}
                  {chosenScale && (
                    <span className="ct-chip" onClick={() => setStep(1)}>
                      {chosenScale.icon} {chosenScale.label}
                    </span>
                  )}
                </div>

                <form className="ct-form" onSubmit={handleSubmit}>
                  <div className="ct-field">
                    <input
                      id="ct-name"
                      className="ct-input"
                      type="text"
                      required
                      placeholder=" "
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <label htmlFor="ct-name" className="ct-label">
                      Your Name *
                    </label>
                  </div>

                  <div className="ct-field">
                    <input
                      id="ct-phone"
                      className="ct-input"
                      type="tel"
                      required
                      placeholder=" "
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    <label htmlFor="ct-phone" className="ct-label">
                      Phone Number *
                    </label>
                  </div>

                  <div className="ct-field">
                    <input
                      id="ct-email"
                      className="ct-input"
                      type="email"
                      placeholder=" "
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <label htmlFor="ct-email" className="ct-label">
                      Email (optional)
                    </label>
                  </div>

                  <div className="ct-field">
                    <textarea
                      id="ct-note"
                      className="ct-input ct-textarea"
                      rows={3}
                      placeholder=" "
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                    />
                    <label htmlFor="ct-note" className="ct-label">
                      Anything specific? (optional)
                    </label>
                  </div>

                  <div className="ct-form-actions">
                    <button type="button" className="ct-back" onClick={() => setStep(1)}>
                      ‹ Back
                    </button>
                    <button type="submit" className="ct-btn ct-btn-primary" disabled={!canSubmit}>
                      Send Inquiry →
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

        {/* ---------------- Side rail ---------------- */}
        <aside className="ct-aside">
          <div className="ct-channels">
            {channels.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="ct-channel"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="ct-channel-icon" style={{ background: `${c.tint}14`, color: c.tint }}>
                  {c.icon}
                </span>
                <span className="ct-channel-body">
                  <span className="ct-channel-label">{c.label}</span>
                  <span className="ct-channel-value">{c.value}</span>
                </span>
                <span className="ct-channel-arrow" style={{ color: c.tint }}>
                  →
                </span>
              </a>
            ))}
          </div>

          <div className="ct-info">
            <div className="ct-info-row">
              <span className="ct-info-icon">📍</span>
              <div>
                <div className="ct-info-label">Factory</div>
                <p className="ct-info-text">
                  {COMPANY.address.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < COMPANY.address.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>

            <div className="ct-info-row">
              <span className="ct-info-icon">⏰</span>
              <div>
                <div className="ct-info-label">Working Hours</div>
                <p className="ct-info-text">
                  Mon – Sat
                  <br />
                </p>
                <span className="ct-badge">
                  <span className="ct-badge-dot" />
                  24×7 Emergency Support
                </span>
              </div>
            </div>
          </div>

        </aside>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ============================================
           GET IN TOUCH — GUIDED INQUIRY
           ============================================ */
        .ct-section {
          position: relative;
          overflow: hidden;
          padding: 2.5rem 1rem;
          background:
            radial-gradient(ellipse at 80% 0%, rgba(220,38,38,0.05) 0%, transparent 55%),
            radial-gradient(circle at center, #F8FAFC 0%, #E2E8F0 100%);
        }

        .ct-backdrop { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .ct-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.5;
        }
        .ct-orb-1 {
          width: 340px; height: 340px;
          top: -80px; left: -80px;
          background: rgba(220,38,38,0.12);
          animation: ctDrift 14s ease-in-out infinite alternate;
        }
        .ct-orb-2 {
          width: 380px; height: 380px;
          bottom: -120px; right: -100px;
          background: rgba(22,163,74,0.10);
          animation: ctDrift 18s ease-in-out infinite alternate-reverse;
        }
        @keyframes ctDrift {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(40px, -30px) scale(1.12); }
        }

        /* ---------- Header ---------- */
        .ct-header { position: relative; z-index: 2; text-align: center; margin-bottom: 1.25rem; }

        .ct-eyebrow {
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
          margin-bottom: 1rem;
        }
        .ct-eyebrow-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #16A34A;
          animation: ctPing 1.8s ease-out infinite;
        }
        @keyframes ctPing {
          0%   { box-shadow: 0 0 0 0 rgba(22,163,74,0.6); }
          70%  { box-shadow: 0 0 0 9px rgba(22,163,74,0); }
          100% { box-shadow: 0 0 0 0 rgba(22,163,74,0); }
        }

        .ct-title {
          font-size: 1.85rem;
          font-weight: 800;
          line-height: 1.22;
          color: var(--text-primary);
          margin: 0 0 0.5rem;
        }
        .ct-subtitle { color: var(--text-secondary); font-size: 0.98rem; margin: 0; }

        /* ---------- Layout ---------- */
        .ct-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 1120px;
          margin: 0 auto;
        }

        /* ---------- Step rail ---------- */
        .ct-rail {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-bottom: 1.5rem;
        }
        .ct-rail-line {
          position: absolute;
          top: 17px;
          left: 16%;
          right: 16%;
          height: 2px;
          background: var(--border);
          border-radius: 2px;
          overflow: hidden;
        }
        .ct-rail-fill {
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, #DC2626, #EF4444);
          transition: width 0.6s cubic-bezier(0.22,1,0.36,1);
        }

        .ct-step {
          position: relative;
          z-index: 1;
          background: none;
          border: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.45rem;
          cursor: default;
        }
        .ct-step.is-done { cursor: pointer; }

        .ct-step-dot {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 2px solid var(--border);
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--text-tertiary);
          transition: all 0.45s cubic-bezier(0.175,0.885,0.32,1.27);
        }
        .ct-step.is-active .ct-step-dot {
          border-color: var(--accent);
          background: rgba(220,38,38,0.08);
          color: var(--accent);
          transform: scale(1.15);
          box-shadow: 0 0 0 6px rgba(220,38,38,0.10);
        }
        .ct-step.is-done .ct-step-dot {
          border-color: var(--accent);
          background: var(--accent);
          color: #fff;
        }

        .ct-step-label {
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: var(--text-tertiary);
          text-align: center;
        }
        .ct-step.is-active .ct-step-label { color: var(--accent); }

        /* ---------- Panel ---------- */
        .ct-panel {
          border: 1px solid var(--border);
          border-radius: 24px;
          background: #FFFFFF;
          padding: 1.5rem 1.25rem;
          box-shadow: 0 18px 50px rgba(15,23,42,0.06);
          animation: ctPanelIn 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes ctPanelIn {
          0%   { opacity: 0; transform: translateY(16px) scale(0.99); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .ct-panel-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0 0 1.15rem;
          text-align: center;
        }

        /* ---------- Options ---------- */
        .ct-options { display: grid; gap: 0.7rem; }
        .ct-options-3 { grid-template-columns: repeat(2, 1fr); }
        .ct-options-2 { grid-template-columns: 1fr; }

        .ct-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1.1rem 0.6rem;
          border: 1.5px solid var(--border);
          border-radius: 18px;
          background: #FFFFFF;
          cursor: pointer;
          text-align: center;
          transition: transform 0.28s cubic-bezier(0.175,0.885,0.32,1.27),
                      border-color 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;
          animation: ctOptionIn 0.45s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes ctOptionIn {
          0%   { opacity: 0; transform: translateY(14px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .ct-option:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 12px 28px rgba(220,38,38,0.13);
        }
        .ct-option.is-picked {
          border-color: var(--accent);
          background: rgba(220,38,38,0.05);
          box-shadow: 0 0 0 4px rgba(220,38,38,0.10);
          transform: scale(1.03);
        }

        .ct-option-wide {
          flex-direction: row;
          justify-content: flex-start;
          text-align: left;
          gap: 0.85rem;
          padding: 1rem;
        }
        .ct-option-body { display: flex; flex-direction: column; gap: 0.1rem; }

        .ct-option-icon { font-size: 1.75rem; line-height: 1; }
        .ct-option-label { font-size: 0.85rem; font-weight: 700; color: var(--text-primary); }
        .ct-option-sub { font-size: 0.74rem; color: var(--text-secondary); }

        /* ---------- Recap chips ---------- */
        .ct-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; margin-bottom: 1.15rem; }
        .ct-chip {
          padding: 0.35rem 0.8rem;
          border: 1px solid rgba(220,38,38,0.22);
          border-radius: 50px;
          background: rgba(220,38,38,0.06);
          color: var(--accent);
          font-size: 0.74rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .ct-chip:hover { background: rgba(220,38,38,0.12); }

        /* ---------- Form ---------- */
        .ct-form { display: grid; gap: 1.1rem; }

        .ct-field { position: relative; }

        .ct-input {
          width: 100%;
          padding: 1.15rem 0.9rem 0.55rem;
          border: 1.5px solid var(--border);
          border-radius: 14px;
          background: #FFFFFF;
          font-size: 0.92rem;
          font-family: inherit;
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .ct-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 4px rgba(220,38,38,0.09);
        }
        .ct-textarea { resize: vertical; min-height: 88px; padding-top: 1.35rem; }

        .ct-label {
          position: absolute;
          left: 0.95rem;
          top: 0.92rem;
          font-size: 0.9rem;
          color: var(--text-tertiary);
          pointer-events: none;
          transition: all 0.22s ease;
        }
        .ct-input:focus + .ct-label,
        .ct-input:not(:placeholder-shown) + .ct-label {
          top: 0.35rem;
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--accent);
        }

        .ct-form-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        /* ---------- Buttons ---------- */
        .ct-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.85rem 1.5rem;
          border: none;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .ct-btn-primary {
          background: linear-gradient(135deg, #DC2626, #EF4444);
          color: #fff;
          box-shadow: 0 10px 26px rgba(220,38,38,0.28);
        }
        .ct-btn-primary:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 16px 34px rgba(220,38,38,0.36);
        }
        .ct-btn-primary:disabled { opacity: 0.45; cursor: not-allowed; box-shadow: none; }

        .ct-btn-ghost {
          background: #FFFFFF;
          color: var(--text-primary);
          border: 1px solid var(--border);
        }
        .ct-btn-ghost:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(15,23,42,0.08); }

        .ct-back {
          background: none;
          border: none;
          padding: 0.5rem 0;
          margin-top: 1rem;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          transition: color 0.25s ease;
        }
        .ct-form-actions .ct-back { margin-top: 0; }
        .ct-back:hover { color: var(--accent); }

        /* ---------- Success ---------- */
        .ct-success { text-align: center; padding: 1.5rem 0.5rem; }

        .ct-success-ring {
          width: 78px; height: 78px;
          margin: 0 auto 1.15rem;
          border-radius: 50%;
          border: 3px solid #16A34A;
          background: rgba(22,163,74,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: ctPop 0.55s cubic-bezier(0.175,0.885,0.32,1.4) both;
        }
        @keyframes ctPop {
          0%   { opacity: 0; transform: scale(0.3) rotate(-25deg); }
          100% { opacity: 1; transform: scale(1) rotate(0); }
        }
        .ct-success-tick { font-size: 2.2rem; color: #16A34A; font-weight: 900; }

        .ct-success-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0 0 0.4rem;
        }
        .ct-success-text {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin: 0 0 1.35rem;
          line-height: 1.55;
        }

        /* ---------- Side rail ---------- */
        .ct-aside { display: grid; gap: 1rem; align-content: start; }

        .ct-channels { display: grid; gap: 0.65rem; }

        .ct-channel {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.9rem 1rem;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: #FFFFFF;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(15,23,42,0.04);
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease;
        }
        .ct-section.is-visible .ct-channel { opacity: 1; transform: translateY(0); }
        .ct-channel:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(15,23,42,0.09);
        }

        .ct-channel-icon {
          width: 44px; height: 44px;
          flex-shrink: 0;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }
        .ct-channel-body { display: flex; flex-direction: column; gap: 0.05rem; min-width: 0; }
        .ct-channel-label {
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 1.1px;
          text-transform: uppercase;
          color: var(--text-tertiary);
        }
        .ct-channel-value { font-size: 0.9rem; font-weight: 700; color: var(--text-primary); }
        .ct-channel-arrow {
          margin-left: auto;
          font-size: 1.1rem;
          font-weight: 700;
          transition: transform 0.3s ease;
        }
        .ct-channel:hover .ct-channel-arrow { transform: translateX(4px); }

        /* ---------- Info block ---------- */
        .ct-info {
          display: grid;
          gap: 1.15rem;
          padding: 1.25rem;
          border: 1px solid var(--border);
          border-radius: 20px;
          background: #FFFFFF;
          box-shadow: 0 6px 20px rgba(15,23,42,0.04);
        }
        .ct-info-row { display: flex; gap: 0.8rem; align-items: flex-start; }
        .ct-info-icon { font-size: 1.15rem; line-height: 1.3; flex-shrink: 0; }
        .ct-info-label {
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 1.1px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.2rem;
        }
        .ct-info-text {
          margin: 0;
          font-size: 0.87rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .ct-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.55rem;
          padding: 0.28rem 0.7rem;
          border: 1px solid rgba(22,163,74,0.22);
          border-radius: 50px;
          background: rgba(22,163,74,0.08);
          color: #16A34A;
          font-size: 0.7rem;
          font-weight: 700;
        }
        .ct-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #16A34A;
          animation: ctPing 1.8s ease-out infinite;
        }

        /* ---------- Map ---------- */
        .ct-map {
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          background: #FFFFFF;
          height: 200px;
          box-shadow: 0 6px 20px rgba(15,23,42,0.04);
        }
        .ct-map iframe { width: 100%; height: 100%; border: 0; display: block; }

        .ct-map-placeholder {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          background:
            repeating-linear-gradient(45deg, rgba(15,23,42,0.02) 0 12px, transparent 12px 24px),
            #F8FAFC;
        }
        .ct-map-pin { font-size: 1.75rem; animation: ctBob 2.4s ease-in-out infinite alternate; }
        @keyframes ctBob {
          0%   { transform: translateY(-3px); }
          100% { transform: translateY(3px); }
        }
        .ct-map-text { font-size: 0.9rem; font-weight: 700; color: var(--text-secondary); }
        .ct-map-hint { font-size: 0.72rem; color: var(--text-tertiary); }

        /* ============================================
           TABLET (>= 640px)
           ============================================ */
        @media (min-width: 640px) {
          .ct-options-3 { grid-template-columns: repeat(3, 1fr); }
          .ct-options-2 { grid-template-columns: repeat(2, 1fr); }
          .ct-form { grid-template-columns: 1fr 1fr; }
          .ct-field:nth-child(4),
          .ct-form-actions { grid-column: 1 / -1; }
        }

        /* ============================================
           TABLET / DESKTOP (>= 768px)
           ============================================ */
        @media (min-width: 768px) {
          .ct-section { padding: 2.75rem 2rem; }
          .ct-title { font-size: 2.6rem; }
          .ct-subtitle { font-size: 1.1rem; }
          .ct-panel { padding: 2.25rem 2rem; }
          .ct-panel-title { font-size: 1.35rem; margin-bottom: 1.5rem; }
          .ct-step-dot { width: 42px; height: 42px; font-size: 0.95rem; }
          .ct-step-label { font-size: 0.7rem; }
          .ct-rail-line { top: 20px; }
          .ct-option { padding: 1.35rem 0.8rem; }
          .ct-option-icon { font-size: 2rem; }
          .ct-option-label { font-size: 0.9rem; }
          .ct-map { height: 240px; }
        }

        /* ============================================
           DESKTOP (>= 1024px)
           ============================================ */
        @media (min-width: 1024px) {
          .ct-grid { grid-template-columns: 1.5fr 1fr; gap: 2rem; align-items: start; }
        }

        /* ============================================
           REDUCED MOTION
           ============================================ */
        @media (prefers-reduced-motion: reduce) {
          .ct-orb, .ct-eyebrow-dot, .ct-badge-dot, .ct-map-pin { animation: none !important; }
          .ct-panel, .ct-option, .ct-success-ring { animation: none !important; }
          .ct-channel { opacity: 1 !important; transform: none !important; }
        }
      `}} />
    </section>
  )
}
