'use client'
import React from 'react'

export interface CarouselSlideProps<T> {
  /** The item data to render */
  item: T
  /** Index of the current slide */
  index: number
  /** Render function for the slide content */
  renderItem: (item: T, index: number) => React.ReactNode
  /** Width of the slide in pixels */
  width?: number
  /** Gap between slides in pixels */
  gap?: number
  /** Whether this is the last slide */
  isLast?: boolean
  /** Custom className */
  className?: string
  /** Ref for tracking visibility (Intersection Observer) */
  itemRef?: React.Ref<HTMLDivElement>
}

export function CarouselSlide<T>({
  item,
  index,
  renderItem,
  width,
  gap = 0,
  isLast = false,
  className = '',
  itemRef,
}: CarouselSlideProps<T>) {
  const slideStyle: React.CSSProperties = {
    ...(width && { width: `${width}px`, minWidth: `${width}px` }),
    ...(gap && !isLast && { marginRight: `${gap}px` }),
  }

  return (
    <div
      ref={itemRef}
      data-slide-index={index}
      className={`flex-shrink-0 ${className}`}
      style={slideStyle}
    >
      {renderItem(item, index)}
    </div>
  )
}
