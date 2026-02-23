'use client'
import React from 'react'

export interface InputProps {
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
  errorMessage?: string

  // Attributes
  name?: string
  id?: string
  autoComplete?: string
  maxLength?: number
  ariaDescribedBy?: string

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
  errorMessage,
  name,
  id,
  autoComplete,
  maxLength,
  size = 'md',
  className = '',
  ariaDescribedBy,
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
    ? 'border-[var(--color-error-500,#ef4444)] focus:ring-[var(--color-error-500,#ef4444)] focus:border-[var(--color-error-500,#ef4444)]'
    : 'border-[var(--color-gray-300,#d1d5db)] focus:ring-[var(--color-primary-500,#3b82f6)] focus:border-[var(--color-primary-500,#3b82f6)]'

  const disabledClass =
    disabled || readOnly
      ? 'bg-[var(--color-gray-100,#f3f4f6)] cursor-not-allowed opacity-60'
      : 'bg-[var(--color-background,#ffffff)]'

  // 5. Combine with template literal
  const classes = `${baseClasses} ${sizeClasses[size]} ${stateClasses} ${disabledClass} ${className}`

  return (
    <>
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
        aria-invalid={error}
        aria-describedby={
          ariaDescribedBy || (error && errorMessage ? `${id}-error` : undefined)
        }
      />
      {error && errorMessage && (
        <p
          id={`${id}-error`}
          className="mt-1 text-sm text-[var(--color-error-600,#dc2626)]"
        >
          {errorMessage}
        </p>
      )}
    </>
  )
}
