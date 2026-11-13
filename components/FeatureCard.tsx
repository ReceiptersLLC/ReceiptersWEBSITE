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
      <article className="flex min-h-[17rem] flex-col gap-3 border border-line bg-white p-7">
        <div className="min-h-10 text-primary">{feature.icon || null}</div>
        <h3 className="m-0 text-lg font-semibold text-ink">{feature.title}</h3>
        <p className="m-0 text-[15px] leading-relaxed text-muted">{feature.tagline}</p>
        <div className="mt-auto pt-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink"
          >
            Learn more
          </button>
        </div>
      </article>

      {open && <FeatureModal feature={feature} onClose={() => setOpen(false)} />}
    </>
  )
}
