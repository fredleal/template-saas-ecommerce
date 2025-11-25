'use client'
import React, { useState } from 'react'
import { Image } from '../../atoms/Image/Image'
import { PriceTag } from '../../atoms/PriceTag/PriceTag'
import { DiscountLabel } from '../../atoms/DiscountLabel/DiscountLabel'
import { StockBadge } from '../../atoms/StockBadge/StockBadge'
import { QuantitySelector } from '../../atoms/QuantitySelector/QuantitySelector'
import { Button } from '../../atoms/Button/Button'

export interface ProductCardProps {
  // Product basic info
  id: string
  name: string
  description?: string
  image: string
  imageAlt?: string

  // Pricing
  price: number
  originalPrice?: number
  currency?: 'USD' | 'BRL' | 'EUR' | 'GBP'

  // Stock
  stock: number
  stockVariant?: 'inStock' | 'lowStock' | 'outOfStock'

  // Actions
  onAddToCart?: (productId: string, quantity: number) => void
  onViewDetails?: (productId: string) => void

  // Customization
  variant?: 'default' | 'compact' | 'featured'
  size?: 'sm' | 'md' | 'lg'
  showQuantitySelector?: boolean
  className?: string
}

export const ProductCard = ({
  id,
  name,
  description,
  image,
  imageAlt,
  price,
  originalPrice,
  currency = 'USD',
  stock,
  stockVariant,
  onAddToCart,
  onViewDetails,
  variant = 'default',
  size = 'md',
  showQuantitySelector = true,
  className = '',
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1)

  // Calculate discount percentage
  const discountPercentage =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0

  const isOutOfStock = stock === 0

  // Handle add to cart
  const handleAddToCart = () => {
    if (!isOutOfStock && onAddToCart) {
      onAddToCart(id, quantity)
    }
  }

  // Handle view details
  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(id)
    }
  }

  // Base classes
  const baseClasses =
    'bg-white rounded-lg overflow-hidden transition-all duration-200 border border-gray-200 hover:shadow-lg'

  // Variant classes
  const variantClasses = {
    default: '',
    compact: 'max-w-sm',
    featured: 'border-2 border-blue-500 shadow-md',
  }

  // Size classes for padding
  const sizeClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  }

  // Image height classes
  const imageHeightClasses = {
    sm: 'h-40',
    md: 'h-48',
    lg: 'h-64',
  }

  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${className}`
  const contentClasses = sizeClasses[size]

  return (
    <div className={cardClasses} data-testid="product-card">
      {/* Image Section */}
      <div className="relative">
        <div className={`w-full ${imageHeightClasses[size]} overflow-hidden`}>
          <Image
            src={image}
            alt={imageAlt || name}
            width="100%"
            height="100%"
            objectFit="cover"
            fetchPriority="low"
            className="w-full h-full"
          />
        </div>

        {/* Discount Label (positioned absolute on image) */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 right-2">
            <DiscountLabel percentage={discountPercentage} size={size} />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className={contentClasses}>
        {/* Title */}
        <h3
          className={`font-semibold text-gray-900 mb-2 ${
            size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-lg'
          }`}
        >
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p
            className={`text-gray-600 mb-3 line-clamp-2 ${
              size === 'sm' ? 'text-xs' : 'text-sm'
            }`}
          >
            {description}
          </p>
        )}

        {/* Stock Badge */}
        <div className="mb-3">
          <StockBadge stock={stock} variant={stockVariant} size={size} />
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2 mb-4">
          <PriceTag value={price} currency={currency} size={size} />
          {originalPrice && originalPrice > price && (
            <PriceTag
              value={originalPrice}
              currency={currency}
              variant="strikethrough"
              size={size === 'lg' ? 'md' : 'sm'}
            />
          )}
        </div>

        {/* Quantity Selector (optional) */}
        {showQuantitySelector && !isOutOfStock && (
          <div className="mb-4">
            <QuantitySelector
              value={quantity}
              onChange={setQuantity}
              min={1}
              max={Math.min(stock, 99)}
              size={size}
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          {onAddToCart && (
            <Button
              variant="primary"
              size={size}
              onClick={handleAddToCart}
              disabled={isOutOfStock}
              className="flex-1"
            >
              {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          )}

          {onViewDetails && (
            <Button
              variant="outline"
              size={size}
              onClick={handleViewDetails}
              className={onAddToCart ? '' : 'flex-1'}
            >
              Details
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
