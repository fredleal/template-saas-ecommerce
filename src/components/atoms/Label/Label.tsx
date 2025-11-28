'use client'
import React from 'react'

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** ID of the input element this label is for */
  htmlFor?: string
  /** Label text or content */
  children: React.ReactNode
  /** Whether the field is required */
  required?: boolean
  /** Whether the field is disabled */
  disabled?: boolean
  /** Custom className */
  className?: string
}

export const Label = ({
  htmlFor,
  children,
  required = false,
  disabled = false,
  className = '',
  ...props
}: LabelProps) => {
  // Base classes
  const baseClasses =
    'block text-sm font-medium transition-colors cursor-pointer'

  // State classes
  const stateClasses = disabled
    ? 'text-gray-400 cursor-not-allowed'
    : 'text-gray-700'

  const classes = `${baseClasses} ${stateClasses} ${className}`

  return (
    <label htmlFor={htmlFor} className={classes} {...props}>
      {children}
      {required && (
        <span className="text-red-500 ml-1" aria-label="required">
          *
        </span>
      )}
    </label>
  )
}
