'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const CATEGORIES = ['All', 'Fryers', 'Cutting', 'Forming', 'Processing', 'Automation']
const SLIDE_DURATION = 4000

const ALL_PRODUCTS = [
  { image: '/images/CFT_Machinery/Continous fryer Line Process.png',          title: 'Continuous Fryer Line',       category: 'Fryers'     },
  { image: '/images/CFT_Machinery/Continous fryer Line Process-02.png',       title: 'Fryer Line Process II',       category: 'Fryers'     },
  { image: '/images/CFT_Machinery/Continous fryer Line Process-03.png',       title: 'Fryer Line Process III',      category: 'Fryers'     },
  { image: '/images/CFT_Machinery/continus fryer-02.png',                     title: 'Continuous Fryer',            category: 'Fryers'     },
  { image: '/images/CFT_Machinery/circular batch fryer-with bhoondi.png',     title: 'Circular Batch Fryer',        category: 'Fryers'     },
  { image: '/images/CFT_Machinery/rectangular batch fryer-02.png',            title: 'Rectangular Batch Fryer',     category: 'Fryers'     },
  { image: '/images/CFT_Machinery/extruder.png',                              title: 'Extruder Machine',            category: 'Forming'    },
  { image: '/images/CFT_Machinery/RING MASTERR.png',                          title: 'Ring Master',                 category: 'Forming'    },
  { image: '/images/CFT_Machinery/sheeting machine.png',                      title: 'Sheeting Machine',            category: 'Forming'    },
  { image: '/images/CFT_Machinery/ball divider.png',                          title: 'Ball Divider',                category: 'Forming'    },
  { image: '/images/CFT_Machinery/double stage servo based.png',              title: 'Double Stage Servo Cutter',   category: 'Cutting'    },
  { image: '/images/CFT_Machinery/Sweet cutting_Single stage servo based.png',title: 'Single Stage Servo Cutter',   category: 'Cutting'    },
  { image: '/images/CFT_Machinery/hot press with oven.png',                   title: 'Hot Press with Oven',         category: 'Processing' },
  { image: '/images/CFT_Machinery/hot press.png',                             title: 'Hot Press',                   category: 'Processing' },
  { image: '/images/CFT_Machinery/Masala Peanut mc.png',                      title: 'Masala Peanut Machine',       category: 'Processing' },
  { image: '/images/CFT_Machinery/MOONG DHAL.png',                            title: 'Moong Dal Machine',           category: 'Processing' },
  { image: '/images/CFT_Machinery/KHARA BHOONDI.png',                         title: 'Khara Bhoondi Line',          category: 'Processing' },
  { image: '/images/CFT_Machinery/Nippattu mc.png',                           title: 'Nippattu Machine',            category: 'Processing' },
  { image: '/images/CFT_Machinery/seedai machine.png',                        title: 'Seedai Machine',              category: 'Processing' },
  { image: '/images/CFT_Machinery/gulab jamun.png',                           title: 'Gulab Jamun Machine',         category: 'Processing' },
  { image: '/images/CFT_Machinery/pick & place1.png',                         title: 'Pick & Place System',         category: 'Automation' },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideDir, setSlideDir] = useState<'right' | 'left'>('right')
  const [isPaused, setIsPaused] = useState(false)
  const thumbsRef = useRef<HTMLDivElement>(null)

  const filtered = activeCategory === 'All'
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(p => p.category === activeCategory)

  // Reset on category change
  useEffect(() => {
    setCurrentIndex(0)
    setSlideDir('right')
  }, [activeCategory])

  // Auto-advance
  useEffect(() => {
    if (isPaused || filtered.length <= 1) return
    const timer = setInterval(() => {
      setSlideDir('right')
      setCurrentIndex(prev => (prev + 1) % filtered.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [isPaused, filtered.length, activeCategory])

  // Scroll active thumbnail into view
  useEffect(() => {
    if (!thumbsRef.current) return
    const container = thumbsRef.current
    const activeThumb = container.children[currentIndex] as HTMLElement
    if (activeThumb) {
      const containerWidth = container.clientWidth
      const thumbLeft = activeThumb.offsetLeft
      const thumbWidth = activeThumb.clientWidth
      container.scrollTo({
        left: thumbLeft - (containerWidth / 2) + (thumbWidth / 2),
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  const goTo = (idx: number) => {
    if (idx === currentIndex) return
    setSlideDir(idx > currentIndex ? 'right' : 'left')
    setCurrentIndex(idx)
  }

  const prev = () => {
    setSlideDir('left')
    setCurrentIndex(prev => (prev - 1 + filtered.length) % filtered.length)
  }

  const next = () => {
    setSlideDir('right')
    setCurrentIndex(prev => (prev + 1) % filtered.length)
  }

  const current = filtered[currentIndex] ?? filtered[0]
  if (!current) return null

  return (
    <section id="products" className="section bg-dark">
      <div className="section-header">
        <h2 className="section-title">What We Manufacture</h2>
        <p className="section-subtitle">
          Premium food processing machinery — built for performance
        </p>
      </div>

      {/* ── Category Filter Pills ── */}
      <div className="product-filters">
        {CATEGORIES.map(cat => {
          const count = cat === 'All'
            ? ALL_PRODUCTS.length
            : ALL_PRODUCTS.filter(p => p.category === cat).length
          return (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              <span className="filter-count">{count}</span>
            </button>
          )
        })}
      </div>

      {/* ── Main Cinematic Showcase ── */}
      <div
        className="showcase-main"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Sliding image window — key forces remount → re-triggers CSS animation */}
        <div
          key={`slide-${currentIndex}-${activeCategory}`}
          className={`showcase-window slide-from-${slideDir}`}
        >
          <Image
            src={current.image}
            alt={current.title}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            style={{ objectFit: 'contain' }}
            priority
          />

          {/* Bottom gradient overlay with name */}
          <div className="showcase-overlay">
            <span className="showcase-category-badge">{current.category}</span>
            <h3 className="showcase-title">{current.title}</h3>
          </div>
        </div>

        {/* ◄ Prev / Next ► */}
        <button className="showcase-nav showcase-prev" onClick={prev} aria-label="Previous">
          ‹
        </button>
        <button className="showcase-nav showcase-next" onClick={next} aria-label="Next">
          ›
        </button>

        {/* Slide counter */}
        <div className="showcase-counter">
          <strong>{String(currentIndex + 1).padStart(2, '0')}</strong>
          <span>&nbsp;/&nbsp;{String(filtered.length).padStart(2, '0')}</span>
        </div>

        {/* Paused badge */}
        {isPaused && (
          <div className="showcase-paused">⏸&nbsp;Paused</div>
        )}
      </div>

      {/* ── Auto-play Progress Bar ── */}
      <div className="showcase-progress-track">
        {!isPaused && (
          <div
            key={`bar-${currentIndex}-${activeCategory}`}
            className="showcase-progress-fill"
          />
        )}
      </div>

      {/* ── Thumbnail Strip ── */}
      <div className="showcase-thumbs" ref={thumbsRef}>
        {filtered.map((product, i) => (
          <button
            key={i}
            className={`thumb-btn${i === currentIndex ? ' active' : ''}`}
            onClick={() => goTo(i)}
            title={product.title}
            aria-label={`View ${product.title}`}
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="90px"
              style={{ objectFit: 'contain' }}
            />
          </button>
        ))}
      </div>

      {/* ── Call to Action ── */}
      <div className="showcase-cta">
        <p className="showcase-cta-label">Interested in <strong>{current.title}</strong>?</p>
        <a href="#contact" className="btn btn-primary">Get a Quote →</a>
      </div>
    </section>
  )
}
