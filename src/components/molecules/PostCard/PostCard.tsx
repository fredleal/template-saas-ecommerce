'use client'
import React from 'react'
import { Text, Badge, Icon } from '@/components/atoms'

export interface PostCardProps {
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime?: number
  featured?: boolean
  imageUrl?: string
  className?: string
  onClick?: () => void
}

export const PostCard = ({
  title,
  excerpt,
  date,
  author,
  category,
  readTime,
  featured = false,
  imageUrl,
  className = '',
  onClick,
}: PostCardProps) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <article
      className={`bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer ${
        featured ? 'ring-2 ring-blue-500' : ''
      } ${className}`}
      onClick={onClick}
      role="article"
    >
      {/* Image Section */}
      {imageUrl && (
        <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {featured && (
            <div className="absolute top-3 right-3">
              <Badge variant="warning" size="sm">
                Featured
              </Badge>
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="p-5">
        {/* Category Badge */}
        <div className="mb-3">
          <Badge variant="info" size="sm">
            {category}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="mb-2">
          <Text
            size="lg"
            weight="bold"
            className="text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors"
          >
            {title}
          </Text>
        </h3>

        {/* Excerpt */}
        <Text
          size="sm"
          color="secondary"
          className="mb-4 line-clamp-3 text-gray-600"
        >
          {excerpt}
        </Text>

        {/* Metadata */}
        <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500">
          {/* Author */}
          <div className="flex items-center gap-1">
            <Icon name="UserIcon" size="xs" decorative />
            <span>{author}</span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{formatDate(date)}</span>
          </div>

          {/* Read Time */}
          {readTime && (
            <div className="flex items-center gap-1">
              <Icon name="CheckIcon" size="xs" decorative />
              <span>{readTime} min read</span>
            </div>
          )}
        </div>

        {/* Footer with CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Text size="xs" color="muted" className="text-blue-600 font-medium">
            Read Article
          </Text>
          <svg
            className="w-4 h-4 text-blue-600 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </article>
  )
}
