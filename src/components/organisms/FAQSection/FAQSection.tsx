'use client'

import React, { useState } from 'react'
import { Text } from '../../atoms/Text/Text'

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface FAQSectionProps {
  title: string
  subtitle?: string
  items: FAQItem[]
  allowMultipleOpen?: boolean
  className?: string
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  subtitle,
  items,
  allowMultipleOpen = false,
  className = '',
}) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedIds)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      if (!allowMultipleOpen) {
        newExpanded.clear()
      }
      newExpanded.add(id)
    }
    setExpandedIds(newExpanded)
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    id: string
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleItem(id)
    }
  }

  const isExpanded = (id: string) => expandedIds.has(id)

  return (
    <section className={`py-12 md:py-16 ${className}`}>
      {/* Header */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        {subtitle && (
          <Text size="lg" color="secondary" className="text-gray-600">
            {subtitle}
          </Text>
        )}
      </div>

      {/* FAQ Items */}
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <div className="space-y-3">
          {items.map(item => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(item.id)}
                onKeyDown={e => handleKeyDown(e, item.id)}
                aria-expanded={isExpanded(item.id)}
                aria-controls={`faq-answer-${item.id}`}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
              >
                <Text
                  weight="semibold"
                  size="base"
                  className="text-left text-gray-900"
                >
                  {item.question}
                </Text>
                {/* Chevron Icon */}
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform duration-200 flex-shrink-0 ml-4 ${
                    isExpanded(item.id) ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {/* Answer Content */}
              {isExpanded(item.id) && (
                <div
                  id={`faq-answer-${item.id}`}
                  className="px-6 py-4 bg-gray-50 border-t border-gray-200"
                >
                  <Text size="base" className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </Text>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
