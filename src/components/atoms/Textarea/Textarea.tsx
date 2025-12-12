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
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'

  const disabledClass =
    disabled || readOnly
      ? 'bg-gray-100 cursor-not-allowed opacity-60'
      : 'bg-white'

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
          <p id={`${id}-error`} className="text-sm text-red-600">
            {errorMessage}
          </p>
        ) : (
          <span />
        )}
        {showCharCount && maxLength && (
          <span
            className={`text-sm ${charCount >= maxLength ? 'text-red-600' : 'text-gray-500'}`}
          >
            {charCount}/{maxLength}
          </span>
        )}
      </div>
    </div>
  )
}
