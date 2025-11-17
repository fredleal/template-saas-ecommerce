// src/assets/icons/navigation/XIcon.tsx
import React from 'react'
import { BaseIconProps, iconSizes, iconColors } from '../base/BaseIcon'

export const XIcon: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'current',
  className = '',
  'aria-label': ariaLabel,
  decorative = false,
}) => {
  const sizeValue =
    typeof size === 'number' ? size : iconSizes[size as keyof typeof iconSizes]
  const colorClass = iconColors[color as keyof typeof iconColors]

  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${colorClass} ${className}`}
      aria-label={ariaLabel}
      aria-hidden={decorative}
      role={decorative ? 'presentation' : 'img'}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
