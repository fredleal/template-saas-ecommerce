'use client'

import React from 'react'
import { Text } from '@/components/atoms'

interface TableOfContentsItem {
  id: string
  label: string
  level: 1 | 2 | 3
}

interface TableOfContentsProps {
  items: TableOfContentsItem[]
  activeId?: string
  onItemClick?: (id: string) => void
  className?: string
  title?: string
}

export const TableOfContents = ({
  items,
  activeId,
  onItemClick,
  className = '',
  title = 'Table of Contents',
}: TableOfContentsProps) => {
  const baseClasses = 'rounded-lg border border-gray-200 bg-gray-50 p-4'
  const finalClasses = `${baseClasses} ${className}`

  const getLevelClasses = (level: number, isActive: boolean): string => {
    const baseLevel = 'block px-3 py-2 rounded text-sm transition-colors'
    const levelMargin = {
      1: 'ml-0',
      2: 'ml-4',
      3: 'ml-8',
    }
    const activeStyles = isActive
      ? 'bg-blue-500 text-white font-medium'
      : 'text-gray-700 hover:bg-gray-200'

    return `${baseLevel} ${levelMargin[level]} ${activeStyles}`
  }

  const handleItemClick = (id: string) => {
    // Scroll to element if it exists
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    onItemClick?.(id)
  }

  return (
    <nav className={finalClasses} aria-label="Article navigation">
      <Text
        variant="secondary"
        className="font-semibold mb-3 text-sm uppercase tracking-wide"
      >
        {title}
      </Text>

      <ul className="space-y-1">
        {items.map(item => (
          <li key={item.id}>
            <button
              onClick={() => handleItemClick(item.id)}
              className={getLevelClasses(item.level, activeId === item.id)}
              aria-current={activeId === item.id ? 'location' : undefined}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
