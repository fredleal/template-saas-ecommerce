'use client'
import React from 'react'

export interface DiscountLabelProps {
  percentage: number
  variant?: 'default' | 'primary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const DiscountLabel = ({
  percentage,
  variant = 'default',
  size = 'md',
  className = '',
}: DiscountLabelProps) => {
  const baseClasses =
    'inline-flex items-center justify-center font-bold rounded'

  const variantClasses = {
    default: 'bg-red-500 text-white',
    primary: 'bg-blue-600 text-white',
    accent: 'bg-purple-600 text-white',
  }

  const sizeClasses = {
    sm: 'px-1.5 py-0.5 text-xs min-w-[2.5rem]',
    md: 'px-2 py-1 text-sm min-w-[3rem]',
    lg: 'px-3 py-1.5 text-base min-w-[3.5rem]',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const formattedPercentage = Math.abs(percentage)

  return (
    <span
      role="status"
      aria-label={`${formattedPercentage}% discount`}
      className={classes}
    >
      -{formattedPercentage}%
    </span>
  )
}
