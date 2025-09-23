"use client"
// src/components/molecules/Rating.tsx
import React from 'react'
import { StarIcon } from '@/assets/icons'
import { Text } from '@/components/atoms'

/**
 * Rating - Molecule para exibir avaliações com estrelas
 * 
 * Combina múltiplas StarIcons para criar um sistema de rating visual.
 * Suporta valores decimais com half-stars e é puramente visual (display-only).
 * 
 * @example
 * // Rating básico
 * <Rating value={4.2} />
 * 
 * @example
 * // Com texto e customizações
 * <Rating 
 *   value={4.8} 
 *   max={5} 
 *   size="lg" 
 *   showValue 
 *   showCount 
 *   count={245} 
 * />
 * 
 * @example
 * // Rating para diferentes contextos
 * <Rating value={3} max={5} size="sm" />           // Produto card
 * <Rating value={4.5} size="xl" showValue />       // Destaque
 * <Rating value={0} max={5} color="secondary" />   // Sem avaliações
 */

interface RatingProps {
  /** Valor do rating (pode ser decimal para half-stars) */
  value: number
  /** Valor máximo do rating */
  max?: number
  /** Tamanho das estrelas */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Mostrar valor numérico ao lado */
  showValue?: boolean
  /** Mostrar contagem de avaliações */
  showCount?: boolean
  /** Número de avaliações */
  count?: number
  /** Cor das estrelas */
  color?: 'warning' | 'secondary' | 'primary'
  /** Classes CSS adicionais */
  className?: string
  /** Texto personalizado para acessibilidade */
  'aria-label'?: string
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  size = 'md',
  showValue = false,
  showCount = false,
  count,
  color = 'warning',
  className = '',
  'aria-label': ariaLabel
}) => {
  // Garantir que value está dentro dos limites
  const clampedValue = Math.max(0, Math.min(value, max))
  
  // Calcular quantas estrelas preenchidas, meio preenchidas e vazias
  const filledStars = Math.floor(clampedValue)
  const hasHalfStar = clampedValue % 1 >= 0.5
  const emptyStars = max - filledStars - (hasHalfStar ? 1 : 0)
  
  // Gerar array de estrelas
  const stars = []
  
  // Estrelas preenchidas
  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <StarIcon
        key={`filled-${i}`}
        variant="filled"
        size={size}
        color={color}
        decorative
      />
    )
  }
  
  // Estrela pela metade (simulada com filled + outline overlay)
  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative">
        <StarIcon
          variant="outline"
          size={size}
          color={color}
          decorative
        />
        <StarIcon
          variant="filled"
          size={size}
          color={color}
          decorative
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
          }}
        />
      </div>
    )
  }
  
  // Estrelas vazias
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <StarIcon
        key={`empty-${i}`}
        variant="outline"
        size={size}
        color={color}
        decorative
      />
    )
  }
  
  // Calcular tamanho do texto baseado no tamanho das estrelas
  const textSizeMap = {
    xs: 'xs',
    sm: 'sm', 
    md: 'sm',
    lg: 'base',
    xl: 'lg'
  } as const
  
  const textSize = textSizeMap[size]
  
  return (
    <div 
      className={`flex items-center gap-1 ${className}`}
      aria-label={
        ariaLabel || 
        `${clampedValue} de ${max} estrelas${count ? ` (${count} avaliações)` : ''}`
      }
      role="img"
    >
      {/* Container das estrelas */}
      <div className="flex items-center gap-0.5">
        {stars}
      </div>
      
      {/* Valor numérico */}
      {showValue && (
        <Text 
          size={textSize} 
          color="secondary" 
          className="ml-1"
          weight="medium"
        >
          {clampedValue.toFixed(1)}
        </Text>
      )}
      
      {/* Contagem de avaliações */}
      {showCount && count !== undefined && (
        <Text 
          size={textSize} 
          color="muted" 
          className="ml-1"
        >
          ({count.toLocaleString()})
        </Text>
      )}
    </div>
  )
}

// Export default também disponível
export default Rating