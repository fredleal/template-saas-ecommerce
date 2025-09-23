"use client"
import React from 'react'
import { Text } from '@/components/atoms'

interface RatingProps {
  value: number
  max?: number
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  showValue?: boolean
  showCount?: boolean
  count?: number
  color?: 'warning' | 'secondary' | 'primary'
  className?: string
  'aria-label'?: string
}

// Temporary simple StarIcon to avoid import issues
const StarIcon: React.FC<{
  variant: 'filled' | 'outline'
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color: 'warning' | 'secondary' | 'primary'
}> = ({ variant, size, color }) => {
  const sizeMap = { xs: 12, sm: 16, md: 20, lg: 24, xl: 32 }
  const colorMap = {
    warning: 'text-yellow-500',
    secondary: 'text-gray-500', 
    primary: 'text-gray-900'
  }
  
  return (
    <svg
      width={sizeMap[size]}
      height={sizeMap[size]}
      viewBox="0 0 24 24"
      fill={variant === 'filled' ? 'currentColor' : 'none'}
      className={colorMap[color]}
    >
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={variant === 'filled' ? 'currentColor' : 'none'}
      />
    </svg>
  )
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  size = 'md',
  showValue = false,
  showCount = false,
  count,
  color = 'warning',
  className = '',
  'aria-label': ariaLabel
}) => {
  const clampedValue = Math.max(0, Math.min(value, max))
  const filledStars = Math.floor(clampedValue)
  const hasHalfStar = clampedValue % 1 >= 0.5
  const emptyStars = max - filledStars - (hasHalfStar ? 1 : 0)
  
  const stars = []
  
  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <StarIcon
        key={`filled-${i}`}
        variant="filled"
        size={size}
        color={color}
      />
    )
  }
  
  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative">
        <StarIcon variant="outline" size={size} color={color} />
        <StarIcon
          variant="filled"
          size={size}
          color={color}
          style={{
            clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      </div>
    )
  }
  
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <StarIcon
        key={`empty-${i}`}
        variant="outline"
        size={size}
        color={color}
      />
    )
  }
  
  const textSizeMap = {
    xs: 'xs',
    sm: 'sm', 
    md: 'sm',
    lg: 'base',
    xl: 'lg'
  } as const
  
  const textSize = textSizeMap[size]
  
  return (
    <div 
      className={`flex items-center gap-1 ${className}`}
      aria-label={
        ariaLabel || 
        `${clampedValue} de ${max} estrelas${count ? ` (${count} avaliações)` : ''}`
      }
      role="img"
    >
      <div className="flex items-center gap-0.5">
        {stars}
      </div>
      
      {showValue && (
        <Text 
          size={textSize} 
          color="secondary" 
          className="ml-1"
          weight="medium"
        >
          {clampedValue.toFixed(1)}
        </Text>
      )}
      
      {showCount && count !== undefined && (
        <Text 
          size={textSize} 
          color="muted" 
          className="ml-1"
        >
          ({count.toLocaleString()})
        </Text>
      )}
    </div>
  )
}

export default Rating