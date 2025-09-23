"use client"
import React from 'react'
import * as Icons from '@/assets/icons'

type IconName = keyof Pick<typeof Icons, {
  [K in keyof typeof Icons]: typeof Icons[K] extends React.ComponentType<any> ? K : never
}[keyof typeof Icons]>

interface IconProps {
  name: IconName
  size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'current'
  className?: string
  'aria-label'?: string
  decorative?: boolean
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  ...props 
}) => {
  const IconComponent = Icons[name] as React.ComponentType<Icons.BaseIconProps>
  
  if (!IconComponent) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Icon "${name}" not found. Available icons:`, Object.keys(Icons).filter(key => 
        key.endsWith('Icon') && typeof Icons[key as keyof typeof Icons] === 'function'
      ))
    }
    return null
  }
  
  return <IconComponent {...props} />
}

export default Icon

export const getAvailableIcons = (): IconName[] => {
  return Object.keys(Icons).filter(key => 
    key.endsWith('Icon') && typeof Icons[key as keyof typeof Icons] === 'function'
  ) as IconName[]
}