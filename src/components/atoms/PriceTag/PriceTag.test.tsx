import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { PriceTag } from './PriceTag'

describe('PriceTag', () => {
  // Grupo 1: Testes de Renderização
  describe('Rendering', () => {
    it('renders price with default currency (USD)', () => {
      render(<PriceTag value={99.99} />)

      const price = screen.getByTestId('price-tag')
      expect(price).toHaveTextContent('$99.99')
    })

    it('renders price with BRL currency', () => {
      render(<PriceTag value={149.9} currency="BRL" />)

      expect(screen.getByTestId('price-tag')).toHaveTextContent('R$149.90')
    })

    it('renders price with EUR currency', () => {
      render(<PriceTag value={79.5} currency="EUR" />)

      expect(screen.getByTestId('price-tag')).toHaveTextContent('€79.50')
    })

    it('renders price with GBP currency', () => {
      render(<PriceTag value={65.0} currency="GBP" />)

      expect(screen.getByTestId('price-tag')).toHaveTextContent('£65.00')
    })

    it('formats price with two decimal places', () => {
      render(<PriceTag value={10} />)

      expect(screen.getByTestId('price-tag')).toHaveTextContent('$10.00')
    })
  })

  // Grupo 2: Testes de Variantes
  describe('Variants', () => {
    it('renders with normal variant (default)', () => {
      render(<PriceTag value={50} variant="normal" />)

      const price = screen.getByTestId('price-tag')
      expect(price).toHaveClass('text-gray-900')
      expect(price).not.toHaveClass('line-through')
    })

    it('renders with discount variant', () => {
      render(<PriceTag value={39.99} variant="discount" />)

      const price = screen.getByTestId('price-tag')
      expect(price).toHaveClass('text-green-600')
    })

    it('renders with strikethrough variant', () => {
      render(<PriceTag value={99.99} variant="strikethrough" />)

      const price = screen.getByTestId('price-tag')
      expect(price).toHaveClass('text-gray-500')
      expect(price).toHaveClass('line-through')
    })
  })

  // Grupo 3: Testes de Tamanhos
  describe('Sizes', () => {
    it('renders with small size', () => {
      render(<PriceTag value={25} size="sm" />)

      expect(screen.getByTestId('price-tag')).toHaveClass('text-sm')
    })

    it('renders with medium size (default)', () => {
      render(<PriceTag value={25} size="md" />)

      expect(screen.getByTestId('price-tag')).toHaveClass('text-base')
    })

    it('renders with large size', () => {
      render(<PriceTag value={25} size="lg" />)

      expect(screen.getByTestId('price-tag')).toHaveClass('text-lg')
    })
  })

  // Grupo 4: Testes de Acessibilidade
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<PriceTag value={99.99} />)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('renders as a span element', () => {
      render(<PriceTag value={50} />)

      const price = screen.getByTestId('price-tag')
      expect(price.tagName).toBe('SPAN')
    })
  })

  // Grupo 5: Testes de Edge Cases
  describe('Edge Cases', () => {
    it('handles zero value', () => {
      render(<PriceTag value={0} />)

      expect(screen.getByTestId('price-tag')).toHaveTextContent('$0.00')
    })

    it('handles large values', () => {
      render(<PriceTag value={999999.99} />)

      expect(screen.getByTestId('price-tag')).toHaveTextContent('$999999.99')
    })

    it('handles decimal precision correctly', () => {
      render(<PriceTag value={19.5} />)

      expect(screen.getByTestId('price-tag')).toHaveTextContent('$19.50')
    })

    it('applies custom className', () => {
      render(<PriceTag value={50} className="custom-class" />)

      const price = screen.getByTestId('price-tag')
      expect(price).toHaveClass('custom-class')
    })
  })

  // Grupo 6: Testes de Combinações
  describe('Combinations', () => {
    it('combines discount variant with large size', () => {
      render(<PriceTag value={79.99} variant="discount" size="lg" />)

      const price = screen.getByTestId('price-tag')
      expect(price).toHaveClass('text-green-600')
      expect(price).toHaveClass('text-lg')
    })

    it('combines strikethrough variant with BRL currency', () => {
      render(<PriceTag value={199.9} variant="strikethrough" currency="BRL" />)

      const price = screen.getByTestId('price-tag')
      expect(price).toHaveTextContent('R$199.90')
      expect(price).toHaveClass('line-through')
    })
  })
})
