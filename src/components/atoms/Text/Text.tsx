import React from 'react'

interface TextProps {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
  color?: 'primary' | 'secondary' | 'muted' | 'success' | 'warning' | 'error'
  align?: 'left' | 'center' | 'right' | 'justify'
  children: React.ReactNode
  className?: string
}

export const Text = ({ as: Component = 'p', size = 'base', weight = 'normal', color = 'primary', align = 'left', children, className = '' }: TextProps) => {
  const sizeClasses = { xs: 'text-xs', sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl', '2xl': 'text-2xl', '3xl': 'text-3xl', '4xl': 'text-4xl', '5xl': 'text-5xl' }
  const weightClasses = { light: 'font-light', normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold', extrabold: 'font-extrabold' }
  const colorClasses = { primary: 'text-gray-900', secondary: 'text-gray-600', muted: 'text-gray-500', success: 'text-green-600', warning: 'text-yellow-600', error: 'text-red-600' }
  const alignClasses = { left: 'text-left', center: 'text-center', right: 'text-right', justify: 'text-justify' }
  const finalClasses = `${sizeClasses[size]} ${weightClasses[weight]} ${colorClasses[color]} ${alignClasses[align]} ${className}`
  return <Component className={finalClasses}>{children}</Component>
}

export const Heading = ({ level = 1, children, className = '', ...props }: { level?: 1 | 2 | 3 | 4 | 5 | 6; children: React.ReactNode; className?: string } & Omit<TextProps, 'as' | 'children'>) => {
  const headingProps = { 1: { as: 'h1' as const, size: '4xl' as const, weight: 'bold' as const }, 2: { as: 'h2' as const, size: '3xl' as const, weight: 'semibold' as const }, 3: { as: 'h3' as const, size: '2xl' as const, weight: 'semibold' as const }, 4: { as: 'h4' as const, size: 'xl' as const, weight: 'medium' as const }, 5: { as: 'h5' as const, size: 'lg' as const, weight: 'medium' as const }, 6: { as: 'h6' as const, size: 'base' as const, weight: 'medium' as const } }
  return <Text {...headingProps[level]} className={className} {...props}>{children}</Text>
}

export const Price = ({ value, size = 'lg', isDiscounted = false, className = '', ...props }: { value: number; size?: TextProps['size']; isDiscounted?: boolean; className?: string } & Omit<TextProps, 'children' | 'size'>) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  return <Text size={size} weight="semibold" color={isDiscounted ? 'error' : 'primary'} className={`${isDiscounted ? 'line-through' : ''} ${className}`} {...props}>{formattedPrice}</Text>
}
