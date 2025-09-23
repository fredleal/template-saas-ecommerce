"use client"
import React from 'react'
import { StarIcon } from '@/assets/icons'
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
        decorative
      />
    )
  }
  
  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative">
        <StarIcon
          variant="outline"
          size={size}
          color={color}
          decorative
        />
        <StarIcon
          variant="filled"
          size={size}
          color={color}
          decorative
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
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
        decorative
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