'use client'
import React, { useState } from 'react'
import FeatureModal from './FeatureModal'

type Feature = {
  title: string
  tagline: string
  overview: string
  details?: string
  icon?: React.ReactNode
}

export default function FeatureCard({ feature }: { feature: Feature }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <article
        style={{
          background: '#fff',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <div style={{ minHeight: 40 }}>{feature.icon || null}</div>
        <h3 style={{ margin: 0 }}>{feature.title}</h3>
        <p style={{ margin: 0, color: '#666' }}>{feature.tagline}</p>
        <div style={{ marginTop: 'auto' }}>
          <button
            onClick={() => setOpen(true)}
            style={{
              background: 'linear-gradient(90deg,#2e3fd5,#0b2347)',
              color: '#fff',
              padding: '12px 22px',
              borderRadius: 999,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            learn More →
          </button>
        </div>
      </article>

      {open && <FeatureModal feature={feature} onClose={() => setOpen(false)} />}
    </>
  )
}
