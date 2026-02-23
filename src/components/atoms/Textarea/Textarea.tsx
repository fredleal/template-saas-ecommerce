'use client'
import React from 'react'

export interface TextareaProps {
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
  rows?: number
  maxLength?: number
  ariaDescribedBy?: string

  // Styling
  size?: 'sm' | 'md' | 'lg'
  resize?: 'none' | 'vertical' | 'horizontal' | 'both'
  className?: string
  showCharCount?: boolean
}

export const Textarea = ({
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
  rows = 4,
  maxLength,
  size = 'md',
  resize = 'vertical',
  className = '',
  ariaDescribedBy,
  showCharCount = false,
}: TextareaProps) => {
  const [charCount, setCharCount] = React.useState(
    value?.length || defaultValue?.length || 0
  )

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length)
    if (onChange) {
      onChange(e.target.value)
    }
  }

  const baseClasses =
    'w-full rounded-lg border transition-colors focus:outline-none focus:ring-2'

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  }

  const resizeClasses = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize',
  }

  const stateClasses = error
    ? 'border-[var(--color-error-500,#ef4444)] focus:ring-[var(--color-error-500,#ef4444)] focus:border-[var(--color-error-500,#ef4444)]'
    : 'border-[var(--color-gray-300,#d1d5db)] focus:ring-[var(--color-primary-500,#3b82f6)] focus:border-[var(--color-primary-500,#3b82f6)]'

  const disabledClass =
    disabled || readOnly
      ? 'bg-[var(--color-gray-100,#f3f4f6)] cursor-not-allowed opacity-60'
      : 'bg-[var(--color-background,#ffffff)]'

  const classes = `${baseClasses} ${sizeClasses[size]} ${resizeClasses[resize]} ${stateClasses} ${disabledClass} ${className}`

  return (
    <div className="w-full">
      <textarea
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
        rows={rows}
        maxLength={maxLength}
        className={classes}
        aria-invalid={error}
        aria-describedby={
          ariaDescribedBy || (error && errorMessage ? `${id}-error` : undefined)
        }
      />
      <div className="flex justify-between mt-1">
        {error && errorMessage ? (
          <p
            id={`${id}-error`}
            className="text-sm text-[var(--color-error-600,#dc2626)]"
          >
            {errorMessage}
          </p>
        ) : (
          <span />
        )}
        {showCharCount && maxLength && (
          <span
            className={`text-sm ${charCount >= maxLength ? 'text-[var(--color-error-600,#dc2626)]' : 'text-[var(--color-gray-500,#6b7280)]'}`}
          >
            {charCount}/{maxLength}
          </span>
        )}
      </div>
    </div>
  )
}
