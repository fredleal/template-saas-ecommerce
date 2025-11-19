'use client'
import React from 'react'

export interface QuantitySelectorProps {
  value: number
  min?: number
  max?: number
  onChange: (value: number) => void
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const QuantitySelector = ({
  value,
  min = 1,
  max = 99,
  onChange,
  disabled = false,
  size = 'md',
  className = '',
}: QuantitySelectorProps) => {
  const handleDecrement = () => {
    if (!disabled && value > min) {
      onChange(value - 1)
    }
  }

  const handleIncrement = () => {
    if (!disabled && value < max) {
      onChange(value + 1)
    }
  }

  const isDecrementDisabled = disabled || value <= min
  const isIncrementDisabled = disabled || value >= max

  // Base classes for container
  const baseClasses =
    'inline-flex items-center border border-gray-300 rounded-md'

  // Size classes for container and buttons
  const sizeClasses = {
    sm: {
      container: 'h-8',
      button: 'w-8 h-8 text-sm',
      display: 'w-10 text-sm',
    },
    md: {
      container: 'h-10',
      button: 'w-10 h-10 text-base',
      display: 'w-12 text-base',
    },
    lg: {
      container: 'h-12',
      button: 'w-12 h-12 text-lg',
      display: 'w-14 text-lg',
    },
  }

  const containerClasses = `${baseClasses} ${sizeClasses[size].container} ${className}`
  const buttonClasses = `${sizeClasses[size].button} flex items-center justify-center font-medium transition-colors hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent`
  const displayClasses = `${sizeClasses[size].display} flex items-center justify-center font-semibold text-gray-900 border-l border-r border-gray-300`

  return (
    <div className={containerClasses} data-testid="quantity-selector">
      <button
        type="button"
        onClick={handleDecrement}
        disabled={isDecrementDisabled}
        className={buttonClasses}
        aria-label="Decrease quantity"
        data-testid="quantity-decrement"
      >
        −
      </button>

      <span className={displayClasses} data-testid="quantity-value">
        {value}
      </span>

      <button
        type="button"
        onClick={handleIncrement}
        disabled={isIncrementDisabled}
        className={buttonClasses}
        aria-label="Increase quantity"
        data-testid="quantity-increment"
      >
        +
      </button>
    </div>
  )
}
