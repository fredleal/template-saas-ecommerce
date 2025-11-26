'use client'
import React from 'react'

export interface SkeletonProps {
  /**
   * Width of the skeleton (CSS value: px, %, rem, etc.)
   * @example "100%", "200px", "20rem"
   */
  width?: string | number

  /**
   * Height of the skeleton (CSS value: px, %, rem, etc.)
   * @example "34px", "100%", "3rem"
   */
  height?: string | number

  /**
   * Border radius variant
   * @default "md"
   */
  variant?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * Animation speed
   * @default "normal"
   */
  speed?: 'slow' | 'normal' | 'fast'

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Test ID for testing
   */
  'data-testid'?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '1rem',
  variant = 'md',
  speed = 'normal',
  className = '',
  'data-testid': dataTestId = 'skeleton',
}) => {
  // Convert number to px
  const widthValue = typeof width === 'number' ? `${width}px` : width
  const heightValue = typeof height === 'number' ? `${height}px` : height

  // Border radius classes based on variant
  const variantClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  }

  // Animation speed classes
  const speedClasses = {
    slow: 'animate-pulse-slow',
    normal: 'animate-pulse',
    fast: 'animate-pulse-fast',
  }

  const skeletonClasses = `
    bg-gray-200
    ${variantClasses[variant]}
    ${speedClasses[speed]}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ')

  return (
    <div
      className={skeletonClasses}
      style={{ width: widthValue, height: heightValue }}
      data-testid={dataTestId}
      aria-busy="true"
      aria-live="polite"
      role="status"
    />
  )
}
