'use client'

import React from 'react'
import { Text, Heading } from '../../atoms'

export interface BlogHeaderProps {
  title: string
  description?: string
  author: string
  date: string
  readTime: string
  tags?: string[]
  heroImage?: string
  heroImageAlt?: string
  className?: string
}

export const BlogHeader = ({
  title,
  description,
  author,
  date,
  readTime,
  tags = [],
  heroImage,
  heroImageAlt = 'Blog post hero image',
  className = '',
}: BlogHeaderProps) => {
  const baseClasses = 'w-full'
  const finalClasses = `${baseClasses} ${className}`

  // Format date to readable format (handle timezone offset)
  const dateObj = new Date(date + 'T00:00:00Z')
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <article className={finalClasses}>
      {/* Hero Image */}
      {heroImage && (
        <div className="w-full h-80 md:h-96 overflow-hidden rounded-lg mb-8 bg-gray-200">
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Main Header Content */}
      <div className="max-w-4xl mx-auto px-4">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
              <span
                key={tag}
                className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <Heading
          level={1}
          className="mb-4 text-4xl md:text-5xl font-bold leading-tight"
        >
          {title}
        </Heading>

        {/* Description/Subtitle */}
        {description && (
          <Text color="secondary" size="lg" className="mb-6 md:text-xl">
            {description}
          </Text>
        )}

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold">
              {author.charAt(0).toUpperCase()}
            </div>
            <span className="font-medium">{author}</span>
          </div>

          <span className="hidden sm:inline">•</span>

          <time dateTime={date} className="text-gray-600">
            {formattedDate}
          </time>

          <span className="hidden sm:inline">•</span>

          <span className="text-gray-600">{readTime} min read</span>
        </div>
      </div>
    </article>
  )
}
