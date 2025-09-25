import React from 'react'
import { BaseIconProps } from '../base/BaseIcon'

/**
 * UserIcon Component
 * 
 * A generic user silhouette icon for profile and authentication interfaces.
 * Perfect for avatars, profile sections, login areas, and user-related features.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Icon name="UserIcon" />
 * 
 * // Profile section
 * <Icon name="UserIcon" size="lg" color="primary" />
 * 
 * // Login button
 * <Icon name="UserIcon" size="sm" color="secondary" />
 * ```
 */
export const UserIcon: React.FC<BaseIconProps> = ({ 
  size = 'md', 
  color = 'primary', 
  variant = 'outline',
  className = '',
  ...props 
}) => {
  const sizeMap = { xs: 12, sm: 16, md: 20, lg: 24, xl: 32 }
  const iconSize = sizeMap[size]

  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill={variant === 'filled' ? 'currentColor' : 'none'}
      className={className}
      {...props}
    >
      {/* User silhouette - clean, generic profile icon */}
      <path
        d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={variant === 'filled' ? 'currentColor' : 'none'}
      />
      <circle
        cx="12"
        cy="7"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={variant === 'filled' ? 'currentColor' : 'none'}
      />
    </svg>
  )
}
