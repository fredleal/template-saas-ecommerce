"use client"
// src/components/atoms/Icon.tsx
import React from 'react'
import * as Icons from '@/assets/icons'

/**
 * Icon - Componente wrapper para sistema de ícones
 * 
 * Este componente atua como uma interface unificada para todos os ícones do sistema,
 * permitindo usar qualquer ícone através de uma API consistente.
 * 
 * @example
 * // Ícones básicos
 * <Icon name="CartIcon" size="md" color="primary" />
 * <Icon name="HeartIcon" size="lg" color="error" />
 * 
 * @example
 * // Com customizações
 * <Icon 
 *   name="SearchIcon" 
 *   size="sm" 
 *   className="hover:text-blue-500 transition-colors" 
 *   decorative 
 * />
 * 
 * @example
 * // Tamanho customizado
 * <Icon name="MenuIcon" size={28} color="secondary" />
 */

// Tipo que extrai apenas as chaves que são componentes de ícone
type IconName = keyof Pick<typeof Icons, {
  [K in keyof typeof Icons]: typeof Icons[K] extends React.ComponentType<any> ? K : never
}[keyof typeof Icons]>

interface IconProps {
  /** Nome do ícone a ser renderizado */
  name: IconName
  /** Tamanho do ícone - preset ou valor customizado */
  size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Cor semântica do ícone */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'current'
  /** Classes CSS adicionais */
  className?: string
  /** Texto alternativo para acessibilidade */
  'aria-label'?: string
  /** Se verdadeiro, adiciona aria-hidden="true" */
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

// Export default também disponível
export default Icon

// Utilidade para listar ícones disponíveis (desenvolvimento)
export const getAvailableIcons = (): IconName[] => {
  return Object.keys(Icons).filter(key => 
    key.endsWith('Icon') && typeof Icons[key as keyof typeof Icons] === 'function'
  ) as IconName[]
}