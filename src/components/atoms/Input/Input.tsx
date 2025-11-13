'use client'
import React from 'react'

interface InputProps {
  // Input types
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'

  // Content
  value?: string
  defaultValue?: string
  placeholder?: string

  // Events
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void

  // States
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  error?: boolean

  // Attributes
  name?: string
  id?: string
  autoComplete?: string
  maxLength?: number

  // Styling
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Input = ({
  type = 'text',
  value,
  defaultValue,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  readOnly = false,
  required = false,
  error = false,
  name,
  id,
  autoComplete,
  maxLength,
  size = 'md',
  className = '',
}: InputProps) => {
  // 1. Handle change event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  // 2. Base classes
  const baseClasses =
    'w-full rounded-lg border transition-colors focus:outline-none focus:ring-2'

  // 3. Size classes (object mapping)
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  }

  // 4. State classes (conditional)
  const stateClasses = error
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'

  const disabledClass =
    disabled || readOnly
      ? 'bg-gray-100 cursor-not-allowed opacity-60'
      : 'bg-white'

  // 5. Combine with template literal
  const classes = `${baseClasses} ${sizeClasses[size]} ${stateClasses} ${disabledClass} ${className}`

  return (
    <input
      type={type}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      name={name}
      id={id}
      autoComplete={autoComplete}
      maxLength={maxLength}
      className={classes}
    />
  )
}
