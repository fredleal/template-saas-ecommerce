'use client'
import React from 'react'

export interface StockBadgeProps {
  stock: number
  variant?: 'inStock' | 'lowStock' | 'outOfStock'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const StockBadge = ({
  stock,
  variant,
  size = 'md',
  className = '',
}: StockBadgeProps) => {
  // Auto-determine variant based on stock if not provided
  const determineVariant = (): 'inStock' | 'lowStock' | 'outOfStock' => {
    if (variant) return variant
    if (stock === 0) return 'outOfStock'
    if (stock <= 5) return 'lowStock'
    return 'inStock'
  }

  const currentVariant = determineVariant()

  const baseClasses =
    'inline-flex items-center gap-1.5 rounded-full font-medium'

  const variantClasses = {
    inStock: 'bg-green-100 text-green-800',
    lowStock: 'bg-yellow-100 text-yellow-800',
    outOfStock: 'bg-red-100 text-red-800',
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base',
  }

  const variantText = {
    inStock: 'In Stock',
    lowStock: 'Low Stock',
    outOfStock: 'Out of Stock',
  }

  const classes = `${baseClasses} ${variantClasses[currentVariant]} ${sizeClasses[size]} ${className}`

  return (
    <span
      role="status"
      aria-label={`${variantText[currentVariant]}: ${stock} items`}
      className={classes}
    >
      <span
        className={`h-2 w-2 rounded-full ${currentVariant === 'inStock' ? 'bg-green-500' : currentVariant === 'lowStock' ? 'bg-yellow-500' : 'bg-red-500'}`}
      />
      <span>{variantText[currentVariant]}</span>
      {stock > 0 && <span className="font-semibold">({stock})</span>}
    </span>
  )
}
