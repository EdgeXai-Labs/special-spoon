'use client'

import React, { useState, useEffect } from 'react'
import BlueprintScene from './animation/blueprintscence'
import MachineDesignScene from './animation/machinedesign'
import ManufacturingScene from './animation/manufacturingsence'
import TestingScene from './animation/testign'
import InstallationScene from './animation/installation'
import TrainingScene from './animation/training'
import MaintenanceScene from './animation/maintainance'
import AnnualServiceScene from './animation/annualservice'
import UpgradeScene from './animation/upgradesence'
import AMCScene from './animation/AMC'
import SparePartsScene from './animation/spare_parts'
import TechnicalSupportScene from './animation/tech_support'

const STAGES = [
  {
    id: 1,
    title: 'Plant Planning',
    desc: 'Complete factory layout and workflow design',
    icon: '📐',
    type: 'blueprint',
  },
  {
    id: 2,
    title: 'Machine Design',
    desc: 'Custom engineering based on your requirements',
    icon: '✏️',
    type: 'design',
  },
  {
    id: 3,
    title: 'Manufacturing',
    desc: 'In-house fabrication with quality control',
    icon: '🏭',
    type: 'fabrication',
  },
  {
    id: 4,
    title: 'Testing',
    desc: 'Performance validation and optimization',
    icon: '✅',
    type: 'testing',
  },
  {
    id: 5,
    title: 'Installation',
    desc: 'Complete setup and commissioning',
    icon: '🔧',
    type: 'installation',
  },
  {
    id: 6,
    title: 'Operator Training',
    desc: 'Comprehensive hands-on training program',
    icon: '👨‍🏫',
    type: 'training',
  },
  {
    id: 7,
    title: 'Maintenance',
    desc: 'Regular servicing and preventive care',
    icon: '🔄',
    type: 'maintenance',
  },
  {
    id: 8,
    title: 'Annual Service',
    desc: 'Scheduled maintenance contracts available',
    icon: '📅',
    type: 'calendar',
  },
  {
    id: 9,
    title: 'Machine Upgrade',
    desc: 'Technology updates and capacity expansion',
    icon: '⬆️',
    type: 'upgrade',
  },
  {
    id: 10,
    title: 'AMC',
    desc: 'Comprehensive annual maintenance contracts',
    icon: '🛡️',
    type: 'shield',
  },
  {
    id: 11,
    title: 'Spare Parts',
    desc: 'Genuine parts with quick dispatch',
    icon: '🔩',
    type: 'parts',
  },
  {
    id: 12,
    title: 'Technical Support',
    desc: '24/7 expert assistance available',
    icon: '📞',
    type: 'support',
  },
]

const renderScene = (type: string) => {
  switch (type) {
    case 'blueprint':
      return <BlueprintScene />
    case 'design':
      return <MachineDesignScene />
    case 'fabrication':
      return <ManufacturingScene />
    case 'testing':
      return <TestingScene />
    case 'installation':
      return <InstallationScene />
    case 'training':
      return <TrainingScene />
    case 'maintenance':
      return <MaintenanceScene />
    case 'calendar':
      return <AnnualServiceScene />
    case 'upgrade':
      return <UpgradeScene />
    case 'shield':
      return <AMCScene />
    case 'parts':
      return <SparePartsScene />
    case 'support':
      return <TechnicalSupportScene />
    default:
      return null
  }
}

export default function Solutions() {
  const [currentStep, setCurrentStep] = useState(0)
  const [animState, setAnimState] = useState<'falling' | 'active' | 'vanishing'>('falling')
  const [isPlaying, setIsPlaying] = useState(true)

  // Stage transition cycle logic
  useEffect(() => {
    if (!isPlaying) return

    let timer: NodeJS.Timeout

    if (animState === 'falling') {
      // 1. Drop from above (duration 700ms)
      timer = setTimeout(() => {
        setAnimState('active')
      }, 700)
    } else if (animState === 'active') {
      // 2. Display content & step-specific visual animation (duration 3200ms)
      timer = setTimeout(() => {
        setAnimState('vanishing')
      }, 3200)
    } else if (animState === 'vanishing') {
      // 3. Vanish down & switch to next stage (duration 600ms)
      timer = setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % STAGES.length)
        setAnimState('falling')
      }, 600)
    }

    return () => clearTimeout(timer)
  }, [animState, isPlaying])

  const stage = STAGES[currentStep]

  // Manual stage click
  const goToStage = (index: number) => {
    setAnimState('vanishing')
    setTimeout(() => {
      setCurrentStep(index)
      setAnimState('falling')
    }, 400)
  }

  return (
    <section className="section bg-card" style={{ padding: '4rem 1.5rem', background: '#090d16', color: '#fff', overflow: 'hidden' }}>
      
      {/* Header */}
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff' }}>
          Complete Manufacturing Solutions
        </h2>
        <p className="section-subtitle" style={{ color: '#94a3b8', fontSize: '1.1rem', marginTop: '0.5rem' }}>
          We don&apos;t just sell machines. We provide end-to-end manufacturing partnership.
        </p>
      </div>

      {/* Top 1-12 Step Progress Tracker */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        maxWidth: '900px',
        margin: '0 auto 3rem auto',
        flexWrap: 'wrap'
      }}>
        {STAGES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => goToStage(idx)}
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: '20px',
              border: idx === currentStep ? '1px solid #3b82f6' : '1px solid #1e293b',
              background: idx === currentStep ? 'rgba(59, 130, 246, 0.2)' : '#0f172a',
              color: idx === currentStep ? '#60a5fa' : '#64748b',
              fontSize: '0.8rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: idx === currentStep ? '0 0 10px rgba(59, 130, 246, 0.3)' : 'none'
            }}
          >
            Step {s.id}
          </button>
        ))}
      </div>

      {/* Main Interactive Stage Drop Container */}
      <div style={{
        position: 'relative',
        maxWidth: '900px',
        margin: '0 auto',
        perspective: '1000px'
      }} className="solutions-stage-wrap">
        
        {/* Animated Card Drop Zone */}
        <div className={`stage-card ${animState}`}>
          
          {/* Left panel: Scene animation */}
          <div className="scene-container">
            {renderScene(stage.type)}
          </div>

          {/* Right panel: Content details */}
          <div className="content-container">
            {/* Stage Badge */}
            <div style={{
              background: 'linear-gradient(90deg, #2563eb, #3b82f6)',
              padding: '0.3rem 1.2rem',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#ffffff',
              marginBottom: '1.5rem',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)',
              display: 'inline-block'
            }}>
              STAGE {stage.id} OF 12
            </div>

            {/* Stage Title */}
            <h3 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '1rem' }}>
              {stage.title}
            </h3>

            {/* Stage Description */}
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.6', margin: 0 }}>
              {stage.desc}
            </p>
          </div>

        </div>

      </div>

      {/* Control Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => {
            setAnimState('vanishing')
            setTimeout(() => {
              setCurrentStep((prev) => (prev > 0 ? prev - 1 : STAGES.length - 1))
              setAnimState('falling')
            }, 400)
          }}
          style={{
            padding: '0.6rem 1.4rem',
            background: '#1e293b',
            color: '#fff',
            border: '1px solid #334155',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Previous Stage
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            padding: '0.6rem 1.4rem',
            background: isPlaying ? 'rgba(239, 68, 68, 0.2)' : 'rgba(34, 197, 94, 0.2)',
            color: isPlaying ? '#f87171' : '#4ade80',
            border: `1px solid ${isPlaying ? '#ef4444' : '#22c55e'}`,
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          {isPlaying ? 'Pause Auto Play ⏸' : 'Play Auto Sequence ▶'}
        </button>

        <button
          onClick={() => {
            setAnimState('vanishing')
            setTimeout(() => {
              setCurrentStep((prev) => (prev + 1) % STAGES.length)
              setAnimState('falling')
            }, 400)
          }}
          style={{
            padding: '0.6rem 1.4rem',
            background: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)'
          }}
        >
          Next Stage ➔
        </button>
      </div>

      {/* Embedded Dynamic CSS Animations */}
      <style>{`
        /* Stage Card Dynamic State Transitions */
        .stage-card {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          background: linear-gradient(145deg, #131c2e 0%, #0d131f 100%);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.1);
          height: 100%;
        }

        .scene-container {
          position: relative;
          flex: 1.3;
          height: 100%;
          overflow: hidden;
        }

        .content-container {
          flex: 0.7;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          text-align: left;
          background: rgba(15, 23, 42, 0.7);
          border-left: 1px solid rgba(59, 130, 246, 0.2);
          z-index: 5;
        }

        .stage-card.falling {
          animation: fallFromAbove 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.27) forwards;
        }

        .stage-card.active {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        .stage-card.vanishing {
          animation: vanishToBottom 0.6s ease-in forwards;
        }

        /* 1. Fall from top Animation */
        @keyframes fallFromAbove {
          0% {
            opacity: 0;
            transform: translateY(-250px) scale(0.8) rotateX(15deg);
          }
          70% {
            transform: translateY(15px) scale(1.02) rotateX(-5deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
          }
        }

        /* 2. Vanish down Animation */
        @keyframes vanishToBottom {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(250px) scale(0.85) rotateX(-20deg);
          }
        }

        /* ========================
           MOBILE (< 768px)
           ======================== */
        @media (max-width: 767px) {
          .stage-card {
            flex-direction: column;
          }
          .scene-container {
            flex: none;
            height: 200px;
            width: 100%;
          }
          .content-container {
            flex: 1;
            padding: 1.25rem;
            border-left: none;
            border-top: 1px solid rgba(59, 130, 246, 0.2);
          }
          .solutions-stage-wrap {
            height: 460px;
          }
        }

        /* ========================
           TABLET (768px - 1023px)
           ======================== */
        @media (min-width: 768px) and (max-width: 1023px) {
          .solutions-stage-wrap {
            height: 420px;
          }
          .content-container {
            padding: 2rem 1.5rem;
          }
        }

        /* DESKTOP */
        @media (min-width: 1024px) {
          .solutions-stage-wrap {
            height: 480px;
          }
        }
      `}</style>
    </section>
  )
}