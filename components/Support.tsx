'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  PhoneCall,
  UserCog,
  MonitorSmartphone,
  Truck,
  Wrench,
  GraduationCap,
  Video,
  ClipboardCheck,
  MessageCircle,
  CircleCheckBig,
} from 'lucide-react'
import './Support.css'

/* ============================================================
   CONTACT ACTIONS — EDIT HERE
   ============================================================ */
const PHONE_HREF = 'tel:+919999999999'
const WHATSAPP_HREF = 'https://wa.me/919999999999'

/* ============================================================
   1. SUPPORT STATISTICS — EDIT HERE
   ============================================================ */
const supportStats = [
  { value: 24, suffix: 'h', label: 'Response Time', sub: 'Anywhere in India' },
  { value: 100, suffix: '%', label: 'Genuine Spares', sub: 'Direct from our plant' },
  { value: 30, suffix: '+', label: 'Years Supporting', sub: 'Machines still running' },
  { value: 500, suffix: '+', label: 'Plants Serviced', sub: 'Across 20+ states' },
]

/* ============================================================
   2. MACHINE SUPPORT LIFECYCLE — EDIT HERE
   ============================================================ */
const supportSteps = [
  {
    number: '01',
    time: '0 min',
    title: 'You Reach Us',
    description: 'Call or WhatsApp — a real person picks up, not a call centre.',
    icon: PhoneCall,
  },
  {
    number: '02',
    time: '15 min',
    title: 'Engineer Assigned',
    description: 'Your case gets a named service technician who owns it.',
    icon: UserCog,
  },
  {
    number: '03',
    time: '2 hrs',
    title: 'Remote Diagnosis',
    description: 'Most line issues are resolved over video and photos.',
    icon: MonitorSmartphone,
  },
  {
    number: '04',
    time: '24 hrs',
    title: 'On-Site Support',
    description: 'If needed, a field engineer reaches your plant with spares.',
    icon: Truck,
  },
]

/* ============================================================
   3. CONTINUOUS SUPPORT SERVICES — EDIT HERE
   ============================================================ */
const supportServices = [
  {
    title: 'Commissioning',
    description: 'Installation, calibration and trial runs on your floor.',
    icon: Wrench,
  },
  {
    title: 'Operator Training',
    description: 'Hands-on training so your team runs the line confidently.',
    icon: GraduationCap,
  },
  {
    title: 'Video & Guides',
    description: 'Recorded demos and SOPs for every shift and new hire.',
    icon: Video,
  },
  {
    title: 'Handover Checklist',
    description: 'Documented sign-off, AMC plan and genuine spares list.',
    icon: ClipboardCheck,
  },
]

/* ---- Short proof points shown inside the dark intro panel ---- */
const supportCommitments = [
  'Preventive Maintenance',
  'AMC Plans',
  'Genuine Spare Parts',
  'Lifetime Guidance',
]

export default function Support() {
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
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="support"
      ref={sectionRef}
      className={`charan-support-section ${visible ? 'is-visible' : ''}`}
      aria-labelledby="charan-support-title"
    >
      <div className="charan-support-inner">
        {/* ---------- 1. Compact header ---------- */}
        <header className="charan-support-header">
          <div className="charan-support-header-main">
            <span className="charan-support-eyebrow">Customer Support</span>
            <h2 className="charan-support-title" id="charan-support-title">
              Support Doesn&apos;t End <span>After Delivery</span>
            </h2>
          </div>

          <p className="charan-support-lede">
            Most suppliers vanish after installation. We commission the machine,
            train your operators and keep the line running for its entire life.
          </p>

          <span className="charan-support-status">
            <span className="charan-support-status-dot" aria-hidden="true" />
            Support Desk Active
          </span>
        </header>

        {/* ---------- 2. Support statistics strip ---------- */}
        <div className="charan-support-stats">
          {supportStats.map((stat, i) => (
            <div
              className="charan-support-stat"
              key={stat.label}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="charan-support-stat-value">
                <CountUp to={stat.value} start={visible} duration={1200 + i * 160} />
                <span className="charan-support-stat-suffix">{stat.suffix}</span>
              </div>
              <div className="charan-support-stat-label">{stat.label}</div>
              <div className="charan-support-stat-sub">{stat.sub}</div>
              <span className="charan-support-stat-rule" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* ---------- 3. Machine support lifecycle timeline ---------- */}
        <div className="charan-support-lifecycle">
          <h3 className="charan-support-blocktitle">Your Machine Support Lifecycle</h3>

          <div className="charan-support-steps">
            {supportSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  className="charan-support-step"
                  key={step.number}
                  style={{ transitionDelay: `${180 + i * 130}ms` }}
                >
                  <span
                    className="charan-support-step-connector"
                    aria-hidden="true"
                    style={{ ['--cs-delay' as string]: `${260 + i * 130}ms` } as React.CSSProperties}
                  />

                  <span className="charan-support-step-node">
                    <Icon aria-hidden="true" />
                  </span>

                  <div className="charan-support-step-body">
                    <div className="charan-support-step-meta">
                      <span className="charan-support-step-num">{step.number}</span>
                      <span>{step.time}</span>
                    </div>
                    <h4 className="charan-support-step-title">{step.title}</h4>
                    <p className="charan-support-step-desc">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ---------- 4. Continuous support panel ---------- */}
        <div className="charan-support-panel">
          <div className="charan-support-panel-intro">
            <span className="charan-support-panel-eyebrow">Full Machine Lifecycle</span>
            <h3 className="charan-support-panel-title">
              We Stay With You Throughout
            </h3>
            <p className="charan-support-panel-text">
              From the first trial batch to the tenth production year — commissioning,
              training, scheduled service and genuine spares from our own plant.
            </p>

            <ul className="charan-support-panel-tags">
              {supportCommitments.map((item) => (
                <li key={item}>
                  <CircleCheckBig aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="charan-support-services">
            {supportServices.map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  className="charan-support-service"
                  key={service.title}
                  style={{ transitionDelay: `${320 + i * 100}ms` }}
                >
                  <span className="charan-support-service-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h4 className="charan-support-service-title">{service.title}</h4>
                  <p className="charan-support-service-desc">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* ---------- 5. Compact CTA ---------- */}
        <div className="charan-support-cta">
          <p className="charan-support-cta-text">
            Downtime costs money.
            <small>Our job is to make sure you never lose a shift.</small>
          </p>

          <div className="charan-support-cta-actions">
            <a href={PHONE_HREF} className="charan-support-btn charan-support-btn-primary">
              <PhoneCall aria-hidden="true" />
              Call Service Desk
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="charan-support-btn charan-support-btn-ghost"
            >
              <MessageCircle aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
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
