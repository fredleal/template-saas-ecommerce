'use client'

import React from 'react'
import { Text } from '@/components/atoms/Text/Text'

export interface TestimonialCardProps {
  avatar: string
  quote: string
  author: string
  title: string
  company?: string
  className?: string
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatar,
  quote,
  author,
  title,
  company,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors ${className}`}
    >
      {/* Quote Mark */}
      <div className="text-4xl text-blue-400 mb-4">&ldquo;</div>

      {/* Quote */}
      <Text
        size="base"
        className="text-gray-700 mb-6 italic leading-relaxed line-clamp-4"
      >
        {quote}
      </Text>

      {/* Avatar */}
      <img
        src={avatar}
        alt={author}
        className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-blue-100"
      />

      {/* Author Name */}
      <Text as="h3" weight="bold" size="base" className="text-gray-900 mb-1">
        {author}
      </Text>

      {/* Author Title */}
      <Text size="sm" color="secondary" className="text-gray-600">
        {title}
      </Text>

      {/* Company */}
      {company && (
        <Text size="sm" color="secondary" className="text-gray-500 mt-1">
          {company}
        </Text>
      )}
    </div>
  )
}
