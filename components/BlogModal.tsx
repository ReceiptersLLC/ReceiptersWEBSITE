'use client'
import React, { useEffect } from 'react'
import { X, Calendar, User } from 'lucide-react'

type BlogPost = {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  content: string
}

export default function BlogModal({
  post,
  onClose,
}: {
  post: BlogPost
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
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 sm:px-8 py-4 flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
              {post.category}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-6 sm:px-8 py-6 sm:py-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h2>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={16} />
              <span>{post.author}</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              {post.excerpt}
            </p>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

