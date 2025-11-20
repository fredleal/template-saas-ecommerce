'use client'

import React from 'react'
import { Button } from '../../atoms/Button/Button'
import { Text } from '../../atoms/Text/Text'
import { Badge } from '../../atoms/Badge/Badge'

export interface CTABannerProps {
  /** Main headline text */
  title: string
  /** Supporting description text */
  description?: string
  /** Optional badge/label above title */
  badge?: {
    text: string
    variant?: 'success' | 'warning' | 'error' | 'info' | 'default'
  }
  /** Primary call-to-action button */
  primaryCTA: {
    label: string
    onClick?: () => void
    href?: string
  }
  /** Optional secondary call-to-action */
  secondaryCTA?: {
    label: string
    onClick?: () => void
    href?: string
  }
  /** Layout variant */
  variant?: 'centered' | 'split'
  /** Background color variant */
  background?: 'primary' | 'secondary' | 'gradient' | 'light' | 'dark'
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Additional CSS classes */
  className?: string
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title,
  description,
  badge,
  primaryCTA,
  secondaryCTA,
  variant = 'centered',
  background = 'primary',
  size = 'md',
  className = '',
}) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      padding: 'py-8 px-6',
      titleSize: 'xl' as const,
      descSize: 'base' as const,
      gap: 'gap-4',
      buttonSize: 'md' as const,
    },
    md: {
      padding: 'py-12 px-6',
      titleSize: '2xl' as const,
      descSize: 'lg' as const,
      gap: 'gap-6',
      buttonSize: 'lg' as const,
    },
    lg: {
      padding: 'py-16 px-8',
      titleSize: '3xl' as const,
      descSize: 'xl' as const,
      gap: 'gap-8',
      buttonSize: 'lg' as const,
    },
  }

  // Background configurations
  const backgroundConfig = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-800 text-white',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
    light: 'bg-gray-50 text-gray-900',
    dark: 'bg-gray-900 text-white',
  }

  const config = sizeConfig[size]
  const bgClasses = backgroundConfig[background]

  // Determine button variants based on background
  const getPrimaryButtonVariant = () => {
    if (background === 'light') return 'primary'
    return 'secondary'
  }

  const getSecondaryButtonVariant = () => {
    if (background === 'light') return 'outline'
    return 'ghost'
  }

  // Layout classes
  const layoutClasses =
    variant === 'centered'
      ? 'flex flex-col items-center text-center max-w-4xl mx-auto'
      : 'flex flex-col md:flex-row items-center justify-between gap-8'

  return (
    <section
      className={`${config.padding} ${bgClasses} ${className}`}
      role="region"
      aria-label="Call to action"
    >
      <div className={`${layoutClasses} w-full`}>
        {/* Content Section */}
        <div className={variant === 'split' ? 'flex-1' : 'w-full'}>
          {badge && (
            <div className="mb-4">
              <Badge
                variant={badge.variant || 'info'}
                className={
                  background === 'light'
                    ? ''
                    : 'bg-white/20 text-white border-white/30'
                }
              >
                {badge.text}
              </Badge>
            </div>
          )}

          <Text
            as="h2"
            size={config.titleSize}
            weight="bold"
            className={`mb-4 ${variant === 'split' ? 'md:text-left' : ''}`}
          >
            {title}
          </Text>

          {description && (
            <Text
              size={config.descSize}
              className={`opacity-90 ${variant === 'split' ? 'md:text-left' : ''}`}
            >
              {description}
            </Text>
          )}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex ${variant === 'centered' ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row'} items-center ${config.gap} ${variant === 'split' ? 'flex-shrink-0' : 'w-full sm:w-auto'}`}
        >
          <Button
            variant={getPrimaryButtonVariant()}
            size={config.buttonSize}
            onClick={primaryCTA.onClick}
            className={
              background === 'light'
                ? ''
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }
            {...(primaryCTA.href && { as: 'a', href: primaryCTA.href })}
          >
            {primaryCTA.label}
          </Button>

          {secondaryCTA && (
            <Button
              variant={getSecondaryButtonVariant()}
              size={config.buttonSize}
              onClick={secondaryCTA.onClick}
              className={
                background === 'light'
                  ? ''
                  : 'border-white/30 text-white hover:bg-white/10'
              }
              {...(secondaryCTA.href && { as: 'a', href: secondaryCTA.href })}
            >
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
