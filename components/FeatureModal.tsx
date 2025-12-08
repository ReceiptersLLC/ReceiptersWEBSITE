'use client'
import React, { useEffect } from 'react'

type Feature = {
  title: string
  tagline: string
  overview: string
  details?: string
}

export default function FeatureModal({
  feature,
  onClose,
}: {
  feature: Feature
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: 20,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          maxWidth: 800,
          width: '100%',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        }}
      >
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h2 style={{ margin: 0 }}>{feature.title}</h2>
          <button onClick={onClose} aria-label="Close" style={{ border: 'none', background: 'transparent', fontSize: 18, cursor: 'pointer' }}>
            ×
          </button>
        </header>

        <section style={{ marginBottom: 12 }}>
          <strong>{feature.tagline}</strong>
          <p style={{ marginTop: 8 }}>{feature.overview}</p>
        </section>

        {feature.details && (
          <section>
            <div dangerouslySetInnerHTML={{ __html: feature.details }} />
          </section>
        )}
      </div>
    </div>
  )
}
