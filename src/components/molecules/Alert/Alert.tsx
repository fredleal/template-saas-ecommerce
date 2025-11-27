'use client'
import React, { useState } from 'react'
import { Text, Icon } from '@/components/atoms'
import type { IconName } from '@/components/atoms/Icon/Icon'

export interface AlertProps {
  /** Alert variant/severity */
  variant?: 'info' | 'success' | 'warning' | 'error'
  /** Optional title */
  title?: string
  /** Alert message */
  message: string
  /** Custom icon (overrides default) */
  icon?: IconName
  /** Show close button */
  dismissible?: boolean
  /** Callback when dismissed */
  onDismiss?: () => void
  /** Custom className */
  className?: string
}

const variantConfig = {
  info: {
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconColor: 'text-blue-600',
    textColor: 'text-blue-900',
  },
  success: {
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    iconColor: 'text-green-600',
    textColor: 'text-green-900',
  },
  warning: {
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    iconColor: 'text-yellow-600',
    textColor: 'text-yellow-900',
  },
  error: {
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    iconColor: 'text-red-600',
    textColor: 'text-red-900',
  },
}

export function Alert({
  variant = 'info',
  title,
  message,
  icon,
  dismissible = false,
  onDismiss,
  className = '',
}: AlertProps) {
  const [isVisible, setIsVisible] = useState(true)

  const config = variantConfig[variant]

  const handleDismiss = () => {
    setIsVisible(false)
    onDismiss?.()
  }

  if (!isVisible) return null

  return (
    <div
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      className={`
        flex items-start gap-3 p-4 rounded-lg border
        ${config.bgColor} ${config.borderColor}
        ${className}
      `}
    >
      {/* Icon (optional) */}
      {icon && (
        <div className={`flex-shrink-0 ${config.iconColor}`}>
          <Icon name={icon} size="md" decorative />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && (
          <Text
            size="sm"
            weight="semibold"
            className={`mb-1 ${config.textColor}`}
          >
            {title}
          </Text>
        )}
        <Text size="sm" className={config.textColor}>
          {message}
        </Text>
      </div>

      {/* Dismiss button */}
      {dismissible && (
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss alert"
          className={`
            flex-shrink-0 p-1 rounded hover:bg-black/5 transition-colors
            ${config.iconColor}
          `}
        >
          <Icon name="XIcon" size="sm" decorative />
        </button>
      )}
    </div>
  )
}
