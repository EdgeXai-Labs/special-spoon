'use client'

import { useEffect, useState } from 'react'

const HERO_SLIDES = [
  {
    id: 'core',
    backgroundImage: '/images/CFT_Machinery/Continous fryer Line Process-02.png',
    backgroundPosition: 'center',
    eyebrow: 'Food Machinery',
    titlePrefix: 'Engineering Better',
    titleHighlight: 'Food Manufacturing',
    description:
      'We design, manufacture, customize and install industrial food processing machinery that improves productivity, reduces operating costs and delivers consistent product quality.',
    primary: { label: 'Request Quote', target: 'contact' },
    secondary: { label: 'Explore Machines', target: 'products' },
  },
  {
    id: 'support',
    backgroundImage: '/images/Smiling Customer Support Team reduced size.jpg',
    backgroundPosition: 'center',
    eyebrow: 'Customer Support',
    titlePrefix: 'Responsive, Reliable',
    titleHighlight: 'Customer Support',
    description:
      'From quick remote diagnosis to on-site assistance, our support desk is built for faster response, clearer communication, and minimal production downtime.',
    primary: { label: 'Contact Support', target: 'support' },
    secondary: { label: 'WhatsApp Team', href: 'https://wa.me/919999999999' },
  },
  {
    id: 'affordable',
    backgroundImage: '/images/CFT_Machinery/Continous fryer Line Process-02.png',
    backgroundPosition: 'center',
    eyebrow: 'Affordable',
    titlePrefix: 'High Efficiency &',
    titleHighlight: 'Less Maintenance',
    description:
      'Discover more reliable food processing machinery designed to improve productivity while reducing operating costs.',
    primary: { label: 'Discover More', target: 'products' },
    secondary: { label: 'Request Quote', target: 'contact' },
  },
  {
    id: 'goal',
    backgroundImage: '/images/CFT_Machinery/rectangular batch fryer-02.png',
    backgroundPosition: 'center 42%',
    eyebrow: 'Our Goal',
    titlePrefix: '24×7',
    titleHighlight: 'Customer Services',
    description:
      'From quick remote diagnosis to on-site assistance, our support desk is built for faster response, clearer communication, and minimal production downtime.',
    primary: { label: 'Contact Support', target: 'support' },
    secondary: { label: 'WhatsApp Team', href: 'https://wa.me/919999999999' },
  },
  {
    id: 'qualities',
    backgroundImage: '/images/CFT_Machinery/Nippattu mc.png',
    backgroundPosition: 'center 35%',
    eyebrow: 'Qualities',
    titlePrefix: 'Excellent Quality &',
    titleHighlight: 'Service Work',
    description:
      'We focus on durable engineering, consistent performance, and dependable service for every customer requirement.',
    primary: { label: 'Discover More', target: 'about' },
    secondary: { label: 'Explore Machines', target: 'products' },
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5500)

    return () => clearInterval(timer)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const showPreviousSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const showNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  return (
    <section id="home" className="hero">
      <div
        key={`background-${HERO_SLIDES[activeSlide].id}`}
        className="hero-bg hero-bg-slide"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 15, 28, 0.35), rgba(8, 15, 28, 0.42)), url('${HERO_SLIDES[activeSlide].backgroundImage}')`,
          backgroundPosition: HERO_SLIDES[activeSlide].backgroundPosition,
        }}
      />
      <button
        type="button"
        className="hero-arrow hero-arrow-left"
        aria-label="Show previous slide"
        onClick={showPreviousSlide}
      >
        ‹
      </button>
      <button
        type="button"
        className="hero-arrow hero-arrow-right"
        aria-label="Show next slide"
        onClick={showNextSlide}
      >
        ›
      </button>
      <div className="hero-content">
        <div className="hero-slider-window" key={HERO_SLIDES[activeSlide].id}>
          <p className="hero-eyebrow">{HERO_SLIDES[activeSlide].eyebrow}</p>
          <h1>
            {HERO_SLIDES[activeSlide].titlePrefix}{' '}
            <span className="hero-highlight">{HERO_SLIDES[activeSlide].titleHighlight}</span>
          </h1>
          <p>{HERO_SLIDES[activeSlide].description}</p>
          <div className="hero-buttons">
            <a
              href={`#${HERO_SLIDES[activeSlide].primary.target}`}
              onClick={(e) => handleNavClick(e, HERO_SLIDES[activeSlide].primary.target as string)}
              className="btn btn-primary"
            >
              {HERO_SLIDES[activeSlide].primary.label}
            </a>
            {HERO_SLIDES[activeSlide].secondary.href ? (
              <a
                href={HERO_SLIDES[activeSlide].secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary hero-btn-secondary"
              >
                {HERO_SLIDES[activeSlide].secondary.label}
              </a>
            ) : (
              <a
                href={`#${HERO_SLIDES[activeSlide].secondary.target}`}
                onClick={(e) => handleNavClick(e, HERO_SLIDES[activeSlide].secondary.target as string)}
                className="btn btn-secondary hero-btn-secondary"
              >
                {HERO_SLIDES[activeSlide].secondary.label}
              </a>
            )}
          </div>
          <div className="hero-slide-dots" aria-label="Hero slide indicators">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`hero-dot ${index === activeSlide ? 'active' : ''}`}
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero {
          min-height: clamp(440px, 60svh, 600px);
          background: #0f172a;
        }

        .hero-bg-slide {
          z-index: 0;
          background-size: cover;
          background-repeat: no-repeat;
          animation: heroBackgroundZoom 8s ease-in-out infinite;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          min-height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-slider-window {
          min-height: 360px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: heroSlideIn 0.55s ease;
        }
          min-height: 2.4em;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          font-size: clamp(2.5rem, 6vw, 4rem);
        }

        .hero-slider-window > p:not(.hero-eyebrow) {
          min-height: 4.8em;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(1rem, 2vw, 1.25rem);
          line-height: 1.6;
        }

        .hero-slider-window h1,
        .hero-slider-window p {
          color: #FFFFFF;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
        }

        .hero-slider-window .hero-highlight {
          color: #FFFFFF;
          font-weight: 800;
          background: linear-gradient(135deg, #FFFFFF 0%, #E8E8E8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-slider-window .btn-primary {
          background: #FFFFFF;
          color: #0f172a;
          border: 1px solid #FFFFFF;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
        }

        .hero-slider-window .btn-primary:hover {
          background: rgba(255, 255, 255, 0.14);
          color: #FFFFFF;
          border-color: rgba(255, 255, 255, 0.42);
        }

        .hero-arrow {
          position: absolute;
          top: 50%;
          z-index: 2;
          width: 46px;
          height: 46px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.48);
          background: rgba(255, 255, 255, 0.14);
          color: #FFFFFF;
          font-size: 2.4rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transform: translateY(-50%);
          transition: all 0.25s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .hero-arrow:hover {
          background: #FFFFFF;
          color: #0f172a;
          border-color: #FFFFFF;
        }

        .hero-arrow-left {
          left: clamp(0.75rem, 3vw, 2rem);
          animation: heroArrowLeft 1.4s ease-in-out infinite;
        }

        .hero-arrow-right {
          right: clamp(0.75rem, 3vw, 2rem);
          animation: heroArrowRight 1.4s ease-in-out infinite;
        }

        .hero-slider-window .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 0 0.8rem;
          padding: 0.35rem 1rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.16);
          border: 1px solid rgba(255, 255, 255, 0.28);
          color: #FFFFFF;
          font-size: clamp(0.85rem, 1.5vw, 1rem);
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .hero-slider-window .hero-btn-secondary {
          background: rgba(255, 255, 255, 0.14);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.32);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .hero-slider-window .hero-btn-secondary:hover {
          background: #FFFFFF;
          color: #0f172a;
          border-color: #FFFFFF;
          box-shadow: 0 16px 34px rgba(0, 0, 0, 0.22);
        }

        @media (max-width: 767px) {
          .hero {
            min-height: 550px;
            height: auto;
            padding: 92px 1rem 1.5rem;
          }

          .hero-content {
            width: 100%;
          }

          .hero-slider-window {
            min-height: 370px;
          }

          .hero-slider-window h1 {
            font-size: clamp(1.75rem, 8vw, 2.15rem);
            margin-bottom: 0.75rem;
            min-height: 2.7em;
          }

          .hero-slider-window p {
            font-size: 0.92rem;
            line-height: 1.5;
            margin-bottom: 1rem;
          }

          .hero-slider-window > p:not(.hero-eyebrow) {
            min-height: 6em;
          }

          .hero-buttons {
            gap: 0.6rem;
          }

          .hero-buttons .btn {
            padding: 0.75rem 1rem;
            font-size: 0.88rem;
          }

          .hero-slide-dots {
            margin-top: 0.75rem;
          }

          .hero-arrow {
            width: 38px;
            height: 38px;
            font-size: 2rem;
          }
        }

        .hero-slide-dots {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
          justify-content: center;
        }

        .hero-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.35);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .hero-dot.active {
          width: 24px;
          background: #ffffff;
          border-color: #ffffff;
        }

        @keyframes heroSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes heroBackgroundZoom {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.08);
          }
        }

        @keyframes heroArrowLeft {
          0%, 100% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-50%) translateX(-6px); }
        }

        @keyframes heroArrowRight {
          0%, 100% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-50%) translateX(6px); }
        }
      ` }} />
    </section>
  )
}
