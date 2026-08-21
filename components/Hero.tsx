'use client'

import { useEffect, useState } from 'react'

const HERO_SLIDES = [
  {
    id: 'core',
    backgroundImage: '/images/CFT_Machinery/Continous fryer Line Process-02.png',
    backgroundPosition: 'center',
    titlePrefix: 'Engineering Better',
    titleHighlight: 'Food Manufacturing',
    description:
      'We design, manufacture, customize and install industrial food processing machinery that improves productivity, reduces operating costs and delivers consistent product quality.',
    primary: { label: 'Request Quote', target: 'contact' },
    secondary: { label: 'Explore Machines', target: 'products' },
  },
  {
    id: 'support',
    backgroundImage: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1920&q=85',
    backgroundPosition: 'center 42%',
    titlePrefix: 'Responsive, Reliable',
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
      <div
        key={`background-${HERO_SLIDES[activeSlide].id}`}
        className="hero-bg hero-bg-slide"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 15, 28, 0.5), rgba(8, 15, 28, 0.58)), url('${HERO_SLIDES[activeSlide].backgroundImage}')`,
          backgroundPosition: HERO_SLIDES[activeSlide].backgroundPosition,
        }}
      />
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
          animation: heroBackgroundIn 0.7s ease;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          min-height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-slider-window h1,
        .hero-slider-window p {
          color: #FFFFFF;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
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
          color: #DC2626;
          border-color: #FFFFFF;
          box-shadow: 0 16px 34px rgba(0, 0, 0, 0.22);
        }

        .hero-slider-window {
          animation: heroSlideIn 0.55s ease;
        }

        @media (max-width: 767px) {
          .hero {
            min-height: 500px;
            height: auto;
            padding: 92px 1rem 1.5rem;
          }

          .hero-content {
            width: 100%;
          }

          .hero-slider-window h1 {
            font-size: clamp(1.75rem, 8vw, 2.15rem);
            margin-bottom: 0.75rem;
          }

          .hero-slider-window p {
            font-size: 0.92rem;
            line-height: 1.5;
            margin-bottom: 1rem;
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

        @keyframes heroBackgroundIn {
          from { opacity: 0.45; transform: scale(1.025); }
          to { opacity: 1; transform: scale(1); }
        }
      ` }} />
    </section>
  )
}
