import React from 'react'
import { BaseIconProps, iconSizes, iconColors } from '../base/BaseIcon'

/**
 * StarIcon - Ícone de estrela para sistemas de rating e avaliações
 * 
 * @example
 * // Estrela preenchida (rating dado)
 * <StarIcon variant="filled" size="md" color="warning" />
 * 
 * @example  
 * // Estrela vazia (rating não dado)
 * <StarIcon variant="outline" size="sm" color="warning" />
 * 
 * @example
 * // Em diferentes contextos
 * <StarIcon variant="filled" color="success" />   // Destaque/premium
 * <StarIcon variant="outline" color="secondary" /> // Neutro/disabled
 */

interface StarIconProps extends BaseIconProps {
  /** Variante visual da estrela */
  variant?: 'filled' | 'outline'
}

export const StarIcon: React.FC<StarIconProps> = ({
  variant = 'outline',
  size = 'md',
  color = 'warning',
  className = '',
  'aria-label': ariaLabel = 'Estrela',
  decorative = false
}) => {
  const sizeValue = typeof size === 'number' ? size : iconSizes[size]
  const colorClass = iconColors[color]
  
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      viewBox="0 0 24 24"
      fill={variant === 'filled' ? 'currentColor' : 'none'}
      className={`${colorClass} ${className}`}
      aria-label={decorative ? undefined : ariaLabel}
      aria-hidden={decorative}
      role={decorative ? 'presentation' : 'img'}
    >
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={variant === 'filled' ? 'currentColor' : 'none'}
      />
    </svg>
  )
}