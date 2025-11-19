'use client'
import React from 'react'

export interface PriceTagProps {
  value: number
  currency?: 'USD' | 'BRL' | 'EUR' | 'GBP'
  variant?: 'normal' | 'discount' | 'strikethrough'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const PriceTag = ({
  value,
  currency = 'USD',
  variant = 'normal',
  size = 'md',
  className = '',
}: PriceTagProps) => {
  // Format price based on currency
  const formatPrice = (price: number, curr: string): string => {
    const currencySymbols = {
      USD: '$',
      BRL: 'R$',
      EUR: '€',
      GBP: '£',
    }

    const formattedValue = price.toFixed(2)
    return `${currencySymbols[curr as keyof typeof currencySymbols]}${formattedValue}`
  }

  // Base classes
  const baseClasses = 'inline-flex items-center font-semibold'

  // Variant classes
  const variantClasses = {
    normal: 'text-gray-900',
    discount: 'text-green-600',
    strikethrough: 'text-gray-500 line-through',
  }

  // Size classes
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <span className={classes} data-testid="price-tag">
      {formatPrice(value, currency)}
    </span>
  )
}
