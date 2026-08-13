'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { getProductsByCategory, PRODUCT_CATEGORIES } from '@/data/products'

const SLIDE_DURATION = 4000

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<(typeof PRODUCT_CATEGORIES)[number]>('All')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideDir, setSlideDir] = useState<'right' | 'left'>('right')
  const [isPaused, setIsPaused] = useState(false)
  const thumbsRef = useRef<HTMLDivElement>(null)
  const hoverCooldownRef = useRef<number>(0)

  const filtered = getProductsByCategory(activeCategory)

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
    const now = Date.now()
    if (now - hoverCooldownRef.current < 220) return
    hoverCooldownRef.current = now
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
        {PRODUCT_CATEGORIES.map(cat => {
          const count = cat === 'All'
            ? getProductsByCategory('All').length
            : getProductsByCategory(cat).length
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
        <Link
          href={`/products/${current.slug}`}
          key={`slide-${currentIndex}-${activeCategory}`}
          className={`showcase-window slide-from-${slideDir}`}
          aria-label={`Open ${current.title} details page`}
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
            <div className="showcase-overlay-top">
              <span className="showcase-category-badge">{current.category}</span>
              <span className="showcase-view-link">View Details →</span>
            </div>
            <h3 className="showcase-title">{current.title}</h3>
            <p className="showcase-description">{current.shortDescription}</p>
          </div>
        </Link>

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
            key={product.slug}
            className={`thumb-btn${i === currentIndex ? ' active' : ''}`}
            type="button"
            onMouseEnter={() => goTo(i)}
            onFocus={() => goTo(i)}
            title={`Open ${product.title}`}
            aria-label={`Show ${product.title}`}
          >
            <span className="thumb-image-wrap">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="120px"
                style={{ objectFit: 'contain' }}
              />
            </span>
            <span className="thumb-meta">
              <span className="thumb-title">{product.title}</span>
              <span className="thumb-category">{product.category}</span>
            </span>
          </button>
        ))}
      </div>

      {/* ── Call to Action ── */}
      <div className="showcase-cta">
        <p className="showcase-cta-label">Interested in <strong>{current.title}</strong>?</p>
        <div className="showcase-cta-actions">
          <Link href={`/products/${current.slug}`} className="btn btn-secondary">View Product</Link>
          <a href="#contact" className="btn btn-primary">Get a Quote →</a>
        </div>
      </div>
    </section>
  )
}
