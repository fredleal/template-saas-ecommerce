import React from 'react'
import { BaseIconProps, iconSizes, iconColors } from '../base/BaseIcon'

/**
 * HeartIcon - Ícone de coração para favoritos e curtidas
 * 
 * @example
 * <HeartIcon size="sm" color="error" />
 * <HeartIcon size="lg" className="hover:fill-red-500 transition-colors" />
 */
export const HeartIcon: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'current',
  className = '',
  'aria-label': ariaLabel = 'Favorito',
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
      <path
        d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61V4.61Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}