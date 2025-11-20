'use client'

import React from 'react'
import { Button } from '../../atoms/Button/Button'
import { Badge } from '../../atoms/Badge/Badge'
import { Text } from '../../atoms/Text/Text'
import { Icon } from '../../atoms/Icon/Icon'

export interface PricingCardProps {
  /** Name of the pricing plan (e.g., "Free", "Pro", "Enterprise") */
  name: string
  /** Price value - can be string for "Custom" or number for "$29" */
  price: string | number
  /** Currency symbol to display before price */
  currency?: string
  /** Billing period text (e.g., "/month", "/year") */
  period?: string
  /** Short description of the plan */
  description: string
  /** List of features included in this plan */
  features: string[]
  /** Mark this plan as popular/recommended */
  popular?: boolean
  /** Primary call-to-action button configuration */
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
  /** Additional CSS classes */
  className?: string
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  currency = '$',
  period = '/month',
  description,
  features,
  popular = false,
  primaryCTA,
  secondaryCTA,
  className = '',
}) => {
  // Format price for display
  const formattedPrice =
    typeof price === 'number' ? `${currency}${price}` : price

  // Determine if this is a custom pricing plan
  const isCustom = typeof price === 'string' && price.toLowerCase() === 'custom'

  return (
    <div
      className={`relative flex flex-col h-full rounded-2xl border-2 bg-white shadow-sm transition-all hover:shadow-lg ${
        popular
          ? 'border-blue-500 shadow-blue-100 md:scale-105'
          : 'border-gray-200'
      } ${className}`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge variant="primary" className="px-4 py-1 shadow-md">
            Most Popular
          </Badge>
        </div>
      )}

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-8">
        {/* Header */}
        <div className="mb-6">
          <Text as="h3" weight="bold" size="xl" className="text-gray-900 mb-2">
            {name}
          </Text>

          <Text size="sm" color="secondary" className="mb-4">
            {description}
          </Text>

          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-gray-900">
              {formattedPrice}
            </span>
            {!isCustom && (
              <span className="text-gray-600 text-base">{period}</span>
            )}
          </div>
        </div>

        {/* Features List */}
        <div className="flex-1 mb-6 space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <Icon
                  name="CheckIcon"
                  size="sm"
                  color="primary"
                  decorative
                  className="text-green-500"
                />
              </div>
              <Text size="sm" className="text-gray-700">
                {feature}
              </Text>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <Button
            variant={popular ? 'primary' : 'outline'}
            size="lg"
            className="w-full"
            onClick={primaryCTA.onClick}
            {...(primaryCTA.href && { as: 'a', href: primaryCTA.href })}
          >
            {primaryCTA.label}
          </Button>

          {secondaryCTA && (
            <Button
              variant="ghost"
              size="md"
              className="w-full"
              onClick={secondaryCTA.onClick}
              {...(secondaryCTA.href && {
                as: 'a',
                href: secondaryCTA.href,
              })}
            >
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
