'use client'
import React from 'react'
import { FormatPrice } from '../FormatPrice'

export interface InstallmentsPriceProps {
  /** Number of installments */
  installments: number
  /** Value per installment */
  value: number
  /** Total value (optional, for reference) */
  totalValue?: number
  /** Currency code (ISO 4217) */
  currency?: 'BRL' | 'USD' | 'EUR' | 'GBP'
  /** Locale for formatting */
  locale?: string
  /** With interest or interest-free */
  withInterest?: boolean
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Custom className */
  className?: string
}

export const InstallmentsPrice = ({
  installments,
  value,
  currency = 'BRL',
  locale = 'pt-BR',
  withInterest = false,
  size = 'md',
  className = '',
}: InstallmentsPriceProps) => {
  // Size-specific classes
  const sizeClasses = {
    sm: {
      text: 'text-xs',
      currency: 'text-xs font-medium',
      integer: 'text-sm font-semibold',
      decimal: 'text-xs font-medium align-super',
    },
    md: {
      text: 'text-sm',
      currency: 'text-sm font-medium',
      integer: 'text-base font-semibold',
      decimal: 'text-sm font-medium align-super',
    },
    lg: {
      text: 'text-base',
      currency: 'text-base font-medium',
      integer: 'text-lg font-semibold',
      decimal: 'text-base font-medium align-super',
    },
  }

  const currentSize = sizeClasses[size]
  const interestText = withInterest ? 'com juros' : 'sem juros'

  return (
    <div
      className={`inline-flex items-baseline gap-1 text-gray-700 ${className}`}
      data-testid="installments-price"
    >
      <span className={currentSize.text}>{installments}x de</span>
      <FormatPrice
        value={value}
        currency={currency}
        locale={locale}
        currencyClassName={currentSize.currency}
        integerClassName={currentSize.integer}
        decimalClassName={currentSize.decimal}
      />
      <span className={currentSize.text}>{interestText}</span>
    </div>
  )
}
