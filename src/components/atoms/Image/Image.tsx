import React from 'react'

export interface ImageProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  loading?: 'eager' | 'lazy'
  className?: string
  title?: string
  onLoad?: () => void
  onError?: () => void
}

export const Image = ({
  src,
  alt,
  width,
  height,
  objectFit = 'cover',
  loading = 'lazy',
  className = '',
  ...props
}: ImageProps) => {
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

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={classes}
      {...props}
    />
  )
}
