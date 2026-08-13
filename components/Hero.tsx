'use client'

import { useEffect, useState } from 'react'

const HERO_SLIDES = [
  {
    id: 'core',
    titlePrefix: 'Engineering Better',
    titleHighlight: 'Food Manufacturing',
    description:
      'We design, manufacture, customize and install industrial food processing machinery that improves productivity, reduces operating costs and delivers consistent product quality.',
    primary: { label: 'Request Quote', target: 'contact' },
    secondary: { label: 'Explore Machines', target: 'products' },
  },
  {
    id: 'support',
    titlePrefix: 'Stronger & Improved',
    titleHighlight: 'Customer Support',
    description:
      'From quick remote diagnosis to on-site assistance, our support desk is built for faster response, clearer communication, and minimal production downtime.',
    primary: { label: 'Contact Support', target: 'support' },
    secondary: { label: 'WhatsApp Team', href: 'https://wa.me/919999999999' },
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

  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="hero-slider-window" key={HERO_SLIDES[activeSlide].id}>
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
                className="btn btn-secondary"
              >
                {HERO_SLIDES[activeSlide].secondary.label}
              </a>
            ) : (
              <a
                href={`#${HERO_SLIDES[activeSlide].secondary.target}`}
                onClick={(e) => handleNavClick(e, HERO_SLIDES[activeSlide].secondary.target as string)}
                className="btn btn-secondary"
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
          min-height: 88vh;
          background-image:
            linear-gradient(rgba(8, 15, 28, 0.76), rgba(8, 15, 28, 0.76)),
            url('/images/CFT_Machinery/Continous fryer Line Process-02.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .hero-content {
          min-height: 88vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-slider-window h1,
        .hero-slider-window p {
          color: #FFFFFF;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
        }

        .hero-slider-window {
          animation: heroSlideIn 0.55s ease;
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
      ` }} />
    </section>
  )
}
