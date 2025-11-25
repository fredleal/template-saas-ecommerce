import React, { useState } from 'react'

export interface ImageProps {
  src: string
  alt: string
  fallbackSrc?: string
  width?: number | string
  height?: number | string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
  className?: string
  title?: string
  onLoad?: () => void
  onError?: () => void
}

export const Image = ({
  src,
  alt,
  fallbackSrc,
  width,
  height,
  objectFit = 'cover',
  loading = 'lazy',
  fetchPriority,
  className = '',
  onLoad,
  onError,
  ...props
}: ImageProps) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  // Base classes
  const baseClasses = 'block max-w-full h-auto'

  // Object-fit classes
  const objectFitClasses = {
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  }

  // Combine classes
  const classes = `${baseClasses} ${objectFitClasses[objectFit]} ${className}`

  // Handle image error with fallback
  const handleError = () => {
    if (fallbackSrc && !hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
    onError?.()
  }

  // Handle image load
  const handleLoad = () => {
    onLoad?.()
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      className={classes}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  )
}
