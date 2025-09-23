import React from 'react'
import { BaseIconProps, iconSizes, iconColors } from '../base/BaseIcon'

/**
 * PlusIcon - Ícone de adição/mais para ações de criação
 * 
 * @example
 * <PlusIcon size="sm" color="success" />
 * <PlusIcon size="lg" className="rotate-45 transition-transform" />
 */
export const PlusIcon: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'current',
  className = '',
  'aria-label': ariaLabel = 'Adicionar',
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
      <line
        x1="12"
        y1="5"
        x2="12"
        y2="19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}