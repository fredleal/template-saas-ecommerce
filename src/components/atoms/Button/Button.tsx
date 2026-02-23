'use client'
// src/components/atoms/Button.tsx
import React from 'react'

// Props do componente
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  isLoading?: boolean
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  isLoading = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  // Base classes (sempre aplicadas)
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  // Variantes de cor (CSS variables for theme switching)
  const variantClasses = {
    primary:
      'bg-[var(--color-primary-500,#3b82f6)] text-white hover:bg-[var(--color-primary-600,#2563eb)] focus:ring-[var(--color-primary-500,#3b82f6)]',
    secondary:
      'bg-[var(--color-gray-500,#6b7280)] text-white hover:bg-[var(--color-gray-600,#4b5563)] focus:ring-[var(--color-gray-500,#6b7280)]',
    outline:
      'border border-[var(--color-primary-500,#3b82f6)] text-[var(--color-primary-500,#3b82f6)] hover:bg-[var(--color-primary-50,#eff6ff)] focus:ring-[var(--color-primary-500,#3b82f6)]',
    ghost:
      'text-[var(--color-primary-500,#3b82f6)] hover:bg-[var(--color-primary-50,#eff6ff)] focus:ring-[var(--color-primary-500,#3b82f6)]',
  }

  // Tamanhos
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  // Combinar todas as classes
  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <button
      className={finalClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
}
