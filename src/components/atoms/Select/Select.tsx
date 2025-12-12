'use client'
import React from 'react'
import { ChevronDownIcon } from '../../../assets/icons'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps {
  // Options
  options: SelectOption[]

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
  required?: boolean
  error?: boolean
  errorMessage?: string

  // Attributes
  name?: string
  id?: string
  ariaDescribedBy?: string

  // Styling
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Select = ({
  options,
  value,
  defaultValue,
  placeholder = 'Selecione...',
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  required = false,
  error = false,
  errorMessage,
  name,
  id,
  size = 'md',
  className = '',
  ariaDescribedBy,
}: SelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  const baseClasses =
    'w-full rounded-lg border transition-colors focus:outline-none focus:ring-2 appearance-none cursor-pointer'

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm pr-8',
    md: 'px-4 py-2 text-base pr-10',
    lg: 'px-5 py-3 text-lg pr-12',
  }

  const iconSizeClasses = {
    sm: 'right-2 w-4 h-4',
    md: 'right-3 w-5 h-5',
    lg: 'right-4 w-6 h-6',
  }

  const stateClasses = error
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'

  const disabledClass = disabled
    ? 'bg-gray-100 cursor-not-allowed opacity-60'
    : 'bg-white'

  const classes = `${baseClasses} ${sizeClasses[size]} ${stateClasses} ${disabledClass} ${className}`

  return (
    <div className="relative">
      <select
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        name={name}
        id={id}
        className={classes}
        aria-invalid={error}
        aria-describedby={
          ariaDescribedBy || (error && errorMessage ? `${id}-error` : undefined)
        }
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon
        size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20}
        className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 ${iconSizeClasses[size]}`}
        decorative
      />
      {error && errorMessage && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </div>
  )
}
