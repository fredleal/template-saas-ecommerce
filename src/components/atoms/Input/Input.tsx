'use client'
// src/components/atoms/Input.tsx
import React from 'react'

// Props do componente
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'filled' | 'flushed'
  size?: 'sm' | 'md' | 'lg'
  error?: boolean
  label?: string
  helperText?: string
  errorMessage?: string
}

export const Input = ({
  variant = 'default',
  size = 'md',
  error = false,
  label,
  helperText,
  errorMessage,
  className = '',
  id,
  ...props
}: InputProps) => {
  // Gerar ID único se não fornecido
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

  // Base classes
  const baseClasses =
    'w-full transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

  // Variantes
  const variantClasses = {
    default: `border rounded-md bg-white 
              ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} 
              focus:ring-2 focus:ring-opacity-50`,
    filled: `border-0 rounded-md 
             ${error ? 'bg-red-50 focus:bg-red-100' : 'bg-gray-100 focus:bg-gray-200'}`,
    flushed: `border-0 border-b-2 rounded-none bg-transparent 
              ${error ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-blue-500'}`,
  }

  // Tamanhos
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  }

  // Combinar classes
  const inputClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className={`block text-sm font-medium mb-1 ${error ? 'text-red-700' : 'text-gray-700'}`}
        >
          {label}
        </label>
      )}

      {/* Input */}
      <input id={inputId} className={inputClasses} {...props} />

      {/* Helper Text ou Error Message */}
      {(helperText || errorMessage) && (
        <p
          className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}
        >
          {error ? errorMessage : helperText}
        </p>
      )}
    </div>
  )
}
