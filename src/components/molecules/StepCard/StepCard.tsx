'use client'

import React from 'react'
import { Icon, IconName } from '../../atoms/Icon/Icon'
import { Text } from '../../atoms/Text/Text'
import { Badge } from '../../atoms/Badge/Badge'

export interface StepCardProps {
  /** Step number (e.g., 1, 2, 3) */
  step: number
  /** Title of the step */
  title: string
  /** Description of what happens in this step */
  description: string
  /** Optional icon to display instead of step number */
  icon?: IconName
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Layout orientation */
  orientation?: 'vertical' | 'horizontal'
  /** Color variant for step indicator */
  variant?: 'primary' | 'secondary' | 'success'
  /** Additional CSS classes */
  className?: string
}

export const StepCard: React.FC<StepCardProps> = ({
  step,
  title,
  description,
  icon,
  size = 'md',
  orientation = 'vertical',
  variant = 'primary',
  className = '',
}) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      indicator: 'w-8 h-8 text-sm',
      icon: 'sm' as const,
      title: 'base' as const,
      description: 'sm' as const,
      gap: 'gap-3',
      padding: 'p-4',
    },
    md: {
      indicator: 'w-12 h-12 text-lg',
      icon: 'md' as const,
      title: 'lg' as const,
      description: 'sm' as const,
      gap: 'gap-4',
      padding: 'p-6',
    },
    lg: {
      indicator: 'w-16 h-16 text-2xl',
      icon: 'lg' as const,
      title: 'xl' as const,
      description: 'base' as const,
      gap: 'gap-6',
      padding: 'p-8',
    },
  }

  // Variant color configurations
  const variantConfig = {
    primary: {
      bg: 'bg-blue-500',
      text: 'text-white',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
    secondary: {
      bg: 'bg-gray-500',
      text: 'text-white',
      iconBg: 'bg-gray-50',
      iconColor: 'text-gray-500',
    },
    success: {
      bg: 'bg-green-500',
      text: 'text-white',
      iconBg: 'bg-green-50',
      iconColor: 'text-green-500',
    },
  }

  const config = sizeConfig[size]
  const colors = variantConfig[variant]

  // Container classes based on orientation
  const containerClasses =
    orientation === 'vertical'
      ? `flex flex-col items-center text-center ${config.gap}`
      : `flex flex-row items-start text-left ${config.gap}`

  return (
    <div className={`${config.padding} ${containerClasses} ${className}`}>
      {/* Step Indicator - Number or Icon */}
      <div
        className={`flex items-center justify-center rounded-full flex-shrink-0 font-bold ${config.indicator} ${colors.bg} ${colors.text}`}
        role="img"
        aria-label={`Step ${step}`}
      >
        {icon ? (
          <Icon name={icon} size={config.icon} decorative />
        ) : (
          <span aria-hidden="true">{step}</span>
        )}
      </div>

      {/* Content */}
      <div className={orientation === 'horizontal' ? 'flex-1' : ''}>
        <Text as="h3" weight="bold" size={config.title} className="mb-2">
          {title}
        </Text>

        <Text
          size={config.description}
          color="secondary"
          className="leading-relaxed"
        >
          {description}
        </Text>
      </div>
    </div>
  )
}
