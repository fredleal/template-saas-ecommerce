import React from 'react'
import { BaseIconProps, iconSizes, iconColors } from '../base/BaseIcon'

/**
 * ChevronRightIcon - Ícone de seta para direita (avançar, próximo)
 *
 * @example
 * <ChevronRightIcon size="md" color="secondary" />
 * <ChevronRightIcon size="sm" className="ml-2" decorative />
 */
export const ChevronRightIcon: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'current',
  className = '',
  'aria-label': ariaLabel = 'Próximo',
  decorative = false,
}) => {
  const sizeValue = typeof size === 'number' ? size : iconSizes[size]
  const colorClass = iconColors[color]

  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      viewBox="0 0 24 24"
      fill="none"
      className={`${colorClass} ${className}`}
      aria-label={decorative ? undefined : ariaLabel}
      aria-hidden={decorative}
      role={decorative ? 'presentation' : 'img'}
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
