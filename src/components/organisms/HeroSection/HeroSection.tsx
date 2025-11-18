'use client'

import React from 'react'
import { Button } from '../../atoms/Button/Button'
import { Text } from '../../atoms/Text/Text'

export interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    label: string
    onClick?: () => void
    href?: string
  }
  secondaryCTA?: {
    label: string
    onClick?: () => void
    href?: string
  }
  backgroundImage?: string
  backgroundGradient?: boolean
  children?: React.ReactNode
  className?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  backgroundGradient = true,
  children,
  className = '',
}) => {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined

  return (
    <section
      className={`relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden ${className}`}
      style={backgroundStyle}
    >
      {/* Gradient overlay */}
      {backgroundGradient && (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/40" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center py-16">
        {/* Subtitle */}
        {subtitle && (
          <Text
            size="sm"
            weight="semibold"
            className="text-blue-400 mb-4 uppercase tracking-wide"
          >
            {subtitle}
          </Text>
        )}

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <Text
            size="lg"
            className="text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </Text>
        )}

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          {primaryCTA && (
            <Button onClick={primaryCTA.onClick} className="w-full md:w-auto">
              {primaryCTA.label}
            </Button>
          )}
          {secondaryCTA && (
            <Button
              variant="secondary"
              onClick={secondaryCTA.onClick}
              className="w-full md:w-auto"
            >
              {secondaryCTA.label}
            </Button>
          )}
        </div>

        {/* Custom children content */}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  )
}
