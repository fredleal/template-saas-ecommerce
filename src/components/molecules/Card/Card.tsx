'use client'
// src/components/molecules/Card.tsx
import React from 'react'
import Image from 'next/image'
import { Button, Text, Heading } from '../../atoms'

// Props do componente
export interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled'
  size?: 'sm' | 'md' | 'lg'
  title?: string
  subtitle?: string
  children?: React.ReactNode
  image?: string
  imageAlt?: string
  actions?: React.ReactNode
  className?: string
  onClick?: () => void
  isClickable?: boolean
}

export interface ProductCardProps {
  title: string
  price: number
  originalPrice?: number
  image: string
  description?: string
  onAddToCart?: () => void
  onViewDetails?: () => void
  inStock?: boolean
  className?: string
}

export const Card = ({
  variant = 'default',
  size = 'md',
  title,
  subtitle,
  children,
  image,
  imageAlt,
  actions,
  className = '',
  onClick,
  isClickable = false,
}: CardProps) => {
  const baseClasses =
    'bg-white rounded-lg overflow-hidden transition-all duration-200'
  const variantClasses = {
    default: 'border border-gray-200',
    elevated: 'shadow-md hover:shadow-lg',
    outlined: 'border-2 border-gray-300',
    filled: 'bg-gray-50 border border-gray-200',
  }
  const sizeClasses = { sm: 'p-4', md: 'p-6', lg: 'p-8' }
  const clickableClasses =
    isClickable || onClick ? 'cursor-pointer hover:shadow-md' : ''
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${clickableClasses} ${className}`

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div className={cardClasses} onClick={handleClick}>
      {image && (
        <div className="w-full h-48 bg-gray-200 overflow-hidden relative">
          <Image
            src={image}
            alt={imageAlt || title || 'Card image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className={image ? sizeClasses[size] : `${sizeClasses[size]} pb-4`}>
        {(title || subtitle) && (
          <div className="mb-4">
            {title && (
              <Heading level={3} className="mb-1">
                {title}
              </Heading>
            )}
            {subtitle && (
              <Text color="secondary" size="sm">
                {subtitle}
              </Text>
            )}
          </div>
        )}
        {children && <div className="mb-4">{children}</div>}
        {actions && <div className="flex gap-2 flex-wrap">{actions}</div>}
      </div>
    </div>
  )
}

export const ProductCard = ({
  title,
  price,
  originalPrice,
  image,
  description,
  onAddToCart,
  onViewDetails,
  inStock = true,
  className = '',
}: ProductCardProps) => {
  return (
    <Card
      variant="elevated"
      image={image}
      imageAlt={title}
      className={className}
    >
      <Text size="lg" weight="semibold" className="mb-2">
        {title}
      </Text>
      {description && (
        <Text size="sm" color="secondary" className="mb-3 line-clamp-2">
          {description}
        </Text>
      )}
      <div className="flex items-center gap-2 mb-4">
        {originalPrice && (
          <Text size="sm" color="muted" className="line-through">
            R$ {originalPrice.toFixed(2)}
          </Text>
        )}
        <Text size="xl" weight="bold" color="primary">
          R$ {price.toFixed(2)}
        </Text>
      </div>
      <div className="mb-4">
        <Text size="sm" color={inStock ? 'success' : 'error'} weight="medium">
          {inStock ? '✓ Em estoque' : '✗ Fora de estoque'}
        </Text>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onViewDetails}
          className="flex-1"
        >
          Ver detalhes
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={onAddToCart}
          disabled={!inStock}
          className="flex-1"
        >
          {inStock ? 'Adicionar' : 'Indisponível'}
        </Button>
      </div>
    </Card>
  )
}
