'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import './Gallery.css'

type Reel = {
  src: string
  title: string
  tag: string
}

const REELS: Reel[] = [
  {
    src: '/clips/1.mp4',
    title: 'Cinematic Craftsmanship in Motion',
    tag: 'Showreel',
  },
  {
    src: '/clips/Final_Scene_–_sec__Fade.mp4',
    title: 'Precision Engineering, Down to the Micron',
    tag: 'Engineering',
  },
  {
    src: '/clips/Scene_—_Automation_Product.mp4',
    title: 'Food Processing Built for Scale',
    tag: 'Processing',
  },
  {
    src: '/clips/4-1.mp4',
    title: 'Complete Food Processing Lines',
    tag: 'Turnkey',
  },

]

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.14-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
    </svg>
  )
}

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      {muted ? (
        <>
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </>
      ) : (
        <>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </>
      )}
    </svg>
  )
}

function ReelCard({ reel, index }: { reel: Reel; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [progress, setProgress] = useState(0)

  // Autoplay when in viewport, pause when out
  useEffect(() => {
    const card = cardRef.current
    const video = videoRef.current
    if (!card || !video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
        } else {
          video.pause()
          setIsPlaying(false)
        }
      },
      { threshold: 0.45 }
    )

    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current
    if (!video || !video.duration) return
    setProgress((video.currentTime / video.duration) * 100)
  }, [])

  const togglePlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => undefined)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }, [])

  const toggleSound = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }, [])

  return (
    <div
      ref={cardRef}
      className={`reel-card${isPlaying ? ' is-playing' : ''}`}
      style={{ animationDelay: `${index * 90}ms` }}
      onClick={togglePlay}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          togglePlay()
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Play video: ${reel.title}`}
    >
      <video
        ref={videoRef}
        src={reel.src}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
      />

      <div className="reel-overlay" />

      <button
        type="button"
        className="reel-sound"
        onClick={toggleSound}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
      >
        <SoundIcon muted={muted} />
      </button>

      <div className="reel-play" aria-hidden="true">
        <PlayIcon />
      </div>

      <div className="reel-meta">
        <span className="reel-tag">{reel.tag}</span>
        <p className="reel-title">{reel.title}</p>
      </div>

      <div className="reel-progress">
        <div className="reel-progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery" aria-label="Video gallery">
      <div className="gallery-inner">
        <div className="gallery-header">
          <p className="gallery-eyebrow">Gallery</p>
          <h2 className="gallery-title">
            Snapshots That <span>Inspire</span>
          </h2>
          <p className="gallery-subtitle">
            A closer look at the machines, the craft and the people behind every
            production line we build.
          </p>
        </div>

        <div className="gallery-grid">
          {REELS.map((reel, index) => (
            <ReelCard key={reel.src} reel={reel} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
