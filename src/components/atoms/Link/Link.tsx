'use client'
// src/components/atoms/Link/Link.tsx
import React from 'react'

export interface LinkProps
  extends React.AnchorHTMLAttributes<React.ElementRef<'a'>> {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  target?: '_self' | '_blank' | '_parent' | '_top'
  className?: string
}

export const Link = ({
  href,
  children,
  variant = 'primary',
  target = '_self',
  className = '',
  rel,
  ...props
}: LinkProps) => {
  // Base classes
  const baseClasses =
    'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-500,#3b82f6)]'

  // Variant classes
  const variantClasses = {
    primary:
      'text-[var(--color-primary-600,#2563eb)] hover:text-[var(--color-primary-800,#1e40af)] underline',
    secondary:
      'text-[var(--color-primary-600,#2563eb)] hover:text-[var(--color-primary-800,#1e40af)] no-underline',
  }

  // Auto-add security attributes for external links
  const isExternal = target === '_blank'
  const secureRel = isExternal
    ? rel
      ? `${rel} noopener noreferrer`
      : 'noopener noreferrer'
    : rel

  // Combine all classes
  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  return (
    <a
      href={href}
      target={target}
      rel={secureRel}
      className={finalClasses}
      {...props}
    >
      {children}
    </a>
  )
}
