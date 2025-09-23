import React from 'react'
import { BaseIconProps, iconSizes, iconColors } from '../base/BaseIcon'

/**
 * SearchIcon - Ícone de lupa para busca e pesquisa
 * 
 * @example
 * <SearchIcon size="md" color="secondary" />
 * <SearchIcon size="sm" className="mr-2" decorative />
 */
export const SearchIcon: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'current',
  className = '',
  'aria-label': ariaLabel = 'Buscar',
  decorative = false
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
      <circle
        cx="11"
        cy="11"
        r="8"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M21 21L16.65 16.65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}