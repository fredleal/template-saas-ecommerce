'use client'

import React from 'react'
import { Icon, IconName } from '../../atoms/Icon/Icon'
import { Text } from '../../atoms/Text/Text'

export interface FeatureCardProps {
  icon: IconName
  title: string
  description: string
  iconSize?: 'sm' | 'md' | 'lg'
  iconColor?: 'primary' | 'secondary' | 'current'
  className?: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  iconSize = 'lg',
  iconColor = 'primary',
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center text-center p-6 ${className}`}>
      <div className="mb-4 p-4 bg-blue-50 rounded-lg">
        <Icon name={icon} size={iconSize} color={iconColor} decorative />
      </div>

      <Text as="h3" weight="bold" size="lg" className="mb-2">
        {title}
      </Text>

      <Text size="sm" color="secondary" className="line-clamp-3">
        {description}
      </Text>
    </div>
  )
}
