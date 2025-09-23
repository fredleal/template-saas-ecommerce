"use client"
// src/components/atoms/Badge.tsx
import React from 'react'

/**
 * Badge - Componente para exibir status, categorias e informações destacadas
 * 
 * @example
 * // Status de produto em e-commerce
 * <Badge variant="success" size="sm">Em estoque</Badge>
 * <Badge variant="warning" size="md">Últimas 3 unidades</Badge>
 * <Badge variant="error" size="md">Esgotado</Badge>
 * 
 * @example  
 * // Categorias e tags
 * <Badge variant="default" size="sm">Eletrônicos</Badge>
 * <Badge variant="info" size="lg">Lançamento</Badge>
 */

// Interface TypeScript - Define o "contrato" do componente
interface BadgeProps {
  /** Variante de cor semântica do badge */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  /** Tamanho do badge (afeta padding e font-size) */
  size?: 'sm' | 'md' | 'lg'
  /** Conteúdo do badge - texto ou elementos React */
  children: React.ReactNode
  /** Classes CSS adicionais para customização */
  className?: string
}

export const Badge = ({ 
  variant = 'default', 
  size = 'md', 
  children, 
  className = '' 
}: BadgeProps) => {
  // Classes base - aplicadas sempre, definem layout fundamental
  const baseClasses = 'inline-flex items-center rounded-full font-medium'
  
  // Pattern: Object mapping para variantes de cor
  // Vantagem vs if/else: mais limpo, fácil de extender, type-safe
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',          // Cinza - neutro, categorias
    success: 'bg-green-100 text-green-800',        // Verde - sucesso, em estoque  
    warning: 'bg-yellow-100 text-yellow-800',      // Amarelo - atenção, últimas unidades
    error: 'bg-red-100 text-red-800',              // Vermelho - erro, esgotado
    info: 'bg-blue-100 text-blue-800',             // Azul - informação, novidade
  }
  
  // Object mapping para tamanhos
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',           // Pequeno - listas densas, categorias
    md: 'px-2.5 py-0.5 text-sm',       // Médio - uso geral, padrão
    lg: 'px-3 py-1 text-base',         // Grande - destaque, chamadas
  }
  
  // Template literal: Combinação limpa de todas as classes
  // Ordem: base → variante → tamanho → customizações
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  return (
    <span className={classes}>
      {children}
    </span>
  )
}

// Export default também disponível para flexibilidade
export default Badge