import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ListPrice } from './ListPrice'

describe('ListPrice', () => {
  // Grupo 1: Testes de Renderização
  describe('Rendering', () => {
    it('renders price correctly', () => {
      render(<ListPrice value={199.9} />)

      const listPrice = screen.getByTestId('list-price')
      expect(listPrice).toBeInTheDocument()
    })

    it('renders with BRL currency by default', () => {
      render(<ListPrice value={1500.5} />)

      const listPrice = screen.getByTestId('list-price')
      expect(listPrice).toHaveTextContent('R$')
    })

    it('renders with different currencies', () => {
      const { rerender } = render(
        <ListPrice value={100} currency="USD" locale="en-US" />
      )
      expect(screen.getByTestId('list-price')).toHaveTextContent('$')

      rerender(<ListPrice value={100} currency="EUR" locale="de-DE" />)
      expect(screen.getByTestId('list-price')).toHaveTextContent('€')

      rerender(<ListPrice value={100} currency="GBP" locale="en-GB" />)
      expect(screen.getByTestId('list-price')).toHaveTextContent('£')
    })

    it('renders with different size variants', () => {
      const { rerender } = render(<ListPrice value={99.9} size="sm" />)
      let integer = screen
        .getByTestId('list-price')
        .querySelector('[data-part-type="integer"]')
      expect(integer).toHaveClass('text-sm')

      rerender(<ListPrice value={99.9} size="md" />)
      integer = screen
        .getByTestId('list-price')
        .querySelector('[data-part-type="integer"]')
      expect(integer).toHaveClass('text-base')

      rerender(<ListPrice value={99.9} size="lg" />)
      integer = screen
        .getByTestId('list-price')
        .querySelector('[data-part-type="integer"]')
      expect(integer).toHaveClass('text-lg')
    })

    it('renders with strikethrough style', () => {
      render(<ListPrice value={199.9} />)

      const listPrice = screen.getByTestId('list-price')
      expect(listPrice).toHaveClass('line-through')
    })

    it('renders with muted color', () => {
      render(<ListPrice value={199.9} />)

      const listPrice = screen.getByTestId('list-price')
      expect(listPrice).toHaveClass('text-gray-500')
    })
  })

  // Grupo 2: Testes de Formatação
  describe('Formatting', () => {
    it('formats BRL currency correctly', () => {
      render(<ListPrice value={1234.56} currency="BRL" />)

      const listPrice = screen.getByTestId('list-price')
      // BRL format: R$ 1.234,56
      expect(listPrice.textContent).toContain('1')
      expect(listPrice.textContent).toContain('234')
      expect(listPrice.textContent).toContain('56')
    })

    it('formats USD currency correctly', () => {
      render(<ListPrice value={1234.56} currency="USD" locale="en-US" />)

      const listPrice = screen.getByTestId('list-price')
      // USD format: $1,234.56
      expect(listPrice.textContent).toContain('1')
      expect(listPrice.textContent).toContain('234')
      expect(listPrice.textContent).toContain('56')
    })

    it('handles zero value', () => {
      render(<ListPrice value={0} />)

      const listPrice = screen.getByTestId('list-price')
      expect(listPrice).toBeInTheDocument()
      expect(listPrice.textContent).toContain('0')
    })

    it('handles large values', () => {
      render(<ListPrice value={999999.99} />)

      const listPrice = screen.getByTestId('list-price')
      expect(listPrice).toBeInTheDocument()
      expect(listPrice.textContent).toContain('999')
    })

    it('handles small decimal values', () => {
      render(<ListPrice value={0.99} />)

      const listPrice = screen.getByTestId('list-price')
      expect(listPrice).toBeInTheDocument()
      expect(listPrice.textContent).toContain('0')
      expect(listPrice.textContent).toContain('99')
    })
  })

  // Grupo 3: Testes de Acessibilidade
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<ListPrice value={199.9} />)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has correct testid for targeting', () => {
      render(<ListPrice value={199.9} />)

      expect(screen.getByTestId('list-price')).toBeInTheDocument()
    })
  })

  // Grupo 4: Testes de Customização
  describe('Customization', () => {
    it('applies custom className', () => {
      render(<ListPrice value={199.9} className="custom-class" />)

      const listPrice = screen.getByTestId('list-price')
      expect(listPrice).toHaveClass('custom-class')
    })

    it('maintains default classes with custom className', () => {
      render(<ListPrice value={199.9} className="custom-class" />)

      const listPrice = screen.getByTestId('list-price')
      expect(listPrice).toHaveClass('inline-flex')
      expect(listPrice).toHaveClass('items-baseline')
      expect(listPrice).toHaveClass('line-through')
      expect(listPrice).toHaveClass('text-gray-500')
      expect(listPrice).toHaveClass('custom-class')
    })
  })

  // Grupo 5: Testes de Edge Cases
  describe('Edge Cases', () => {
    it('handles negative values', () => {
      render(<ListPrice value={-50.5} />)

      const listPrice = screen.getByTestId('list-price')
      expect(listPrice).toBeInTheDocument()
      expect(listPrice.textContent).toContain('50')
    })

    it('handles very small values', () => {
      render(<ListPrice value={0.01} />)

      const listPrice = screen.getByTestId('list-price')
      expect(listPrice).toBeInTheDocument()
      expect(listPrice.textContent).toContain('0')
      expect(listPrice.textContent).toContain('01')
    })

    it('handles values with many decimals', () => {
      render(<ListPrice value={199.999999} />)

      const listPrice = screen.getByTestId('list-price')
      expect(listPrice).toBeInTheDocument()
      // Should round to 2 decimals
      expect(listPrice.textContent).toContain('200')
    })
  })
})
