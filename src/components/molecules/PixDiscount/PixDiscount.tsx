'use client'
import React from 'react'
import { FormatPrice } from '../FormatPrice/FormatPrice'
import { Badge } from '../../atoms/Badge/Badge'

export interface PixDiscountProps {
  /** Original price before discount */
  originalPrice: number
  /** Price with PIX discount */
  pixPrice: number
  /** Discount percentage (calculated if not provided) */
  discountPercent?: number
  /** Currency code (ISO 4217) */
  currency?: 'BRL' | 'USD' | 'EUR' | 'GBP'
  /** Locale for formatting */
  locale?: string
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Custom className */
  className?: string
}

export const PixDiscount = ({
  originalPrice,
  pixPrice,
  discountPercent,
  currency = 'BRL',
  locale = 'pt-BR',
  size = 'md',
  className = '',
}: PixDiscountProps) => {
  // Calculate discount percentage if not provided
  const calculatedDiscount =
    discountPercent ??
    Math.round(((originalPrice - pixPrice) / originalPrice) * 100)

  const savings = originalPrice - pixPrice

  // Size-specific classes
  const sizeClasses = {
    sm: {
      currency: 'text-xs font-medium',
      integer: 'text-lg font-bold',
      decimal: 'text-xs font-medium align-super',
      badge: 'sm' as const,
      text: 'text-xs',
    },
    md: {
      currency: 'text-sm font-medium',
      integer: 'text-2xl font-bold',
      decimal: 'text-sm font-medium align-super',
      badge: 'md' as const,
      text: 'text-sm',
    },
    lg: {
      currency: 'text-base font-medium',
      integer: 'text-3xl font-bold',
      decimal: 'text-base font-medium align-super',
      badge: 'lg' as const,
      text: 'text-base',
    },
  }

  const currentSize = sizeClasses[size]

  // Format savings amount
  const formattedSavings = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(savings)

  return (
    <div
      className={`inline-flex flex-col gap-2 ${className}`}
      data-testid="pix-discount"
    >
      {/* PIX Price */}
      <div className="flex items-baseline gap-1">
        <FormatPrice
          value={pixPrice}
          currency={currency}
          locale={locale}
          currencyClassName={currentSize.currency}
          integerClassName={currentSize.integer}
          decimalClassName={currentSize.decimal}
        />
        <span className={`text-gray-700 font-medium ${currentSize.text}`}>
          no PIX
        </span>
      </div>

      {/* Savings Badge */}
      <Badge variant="success" size={currentSize.badge}>
        Economize {formattedSavings} ({calculatedDiscount}% OFF)
      </Badge>
    </div>
  )
}
