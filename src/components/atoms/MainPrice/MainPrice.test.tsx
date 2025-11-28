import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { MainPrice } from './MainPrice'

describe('MainPrice', () => {
  // Grupo 1: Testes de Renderização
  describe('Rendering', () => {
    it('renders price correctly', () => {
      render(<MainPrice value={99.9} />)

      const mainPrice = screen.getByTestId('main-price')
      expect(mainPrice).toBeInTheDocument()
    })

    it('renders with BRL currency by default', () => {
      render(<MainPrice value={1500.5} />)

      const mainPrice = screen.getByTestId('main-price')
      expect(mainPrice).toHaveTextContent('R$')
    })

    it('renders with different currencies', () => {
      const { rerender } = render(
        <MainPrice value={100} currency="USD" locale="en-US" />
      )
      expect(screen.getByTestId('main-price')).toHaveTextContent('$')

      rerender(<MainPrice value={100} currency="EUR" locale="de-DE" />)
      expect(screen.getByTestId('main-price')).toHaveTextContent('€')

      rerender(<MainPrice value={100} currency="GBP" locale="en-GB" />)
      expect(screen.getByTestId('main-price')).toHaveTextContent('£')
    })

    it('renders with different size variants', () => {
      const { rerender } = render(<MainPrice value={99.9} size="sm" />)
      let integer = screen
        .getByTestId('main-price')
        .querySelector('[data-part-type="integer"]')
      expect(integer).toHaveClass('text-lg')

      rerender(<MainPrice value={99.9} size="md" />)
      integer = screen
        .getByTestId('main-price')
        .querySelector('[data-part-type="integer"]')
      expect(integer).toHaveClass('text-2xl')

      rerender(<MainPrice value={99.9} size="lg" />)
      integer = screen
        .getByTestId('main-price')
        .querySelector('[data-part-type="integer"]')
      expect(integer).toHaveClass('text-4xl')
    })
  })

  // Grupo 2: Testes de Formatação
  describe('Formatting', () => {
    it('formats BRL currency correctly', () => {
      render(<MainPrice value={1234.56} currency="BRL" />)

      const mainPrice = screen.getByTestId('main-price')
      // BRL format: R$ 1.234,56
      expect(mainPrice.textContent).toContain('1')
      expect(mainPrice.textContent).toContain('234')
      expect(mainPrice.textContent).toContain('56')
    })

    it('formats USD currency correctly', () => {
      render(<MainPrice value={1234.56} currency="USD" locale="en-US" />)

      const mainPrice = screen.getByTestId('main-price')
      // USD format: $1,234.56
      expect(mainPrice.textContent).toContain('1')
      expect(mainPrice.textContent).toContain('234')
      expect(mainPrice.textContent).toContain('56')
    })

    it('handles zero value', () => {
      render(<MainPrice value={0} />)

      const mainPrice = screen.getByTestId('main-price')
      expect(mainPrice).toBeInTheDocument()
      expect(mainPrice.textContent).toContain('0')
    })

    it('handles large values', () => {
      render(<MainPrice value={999999.99} />)

      const mainPrice = screen.getByTestId('main-price')
      expect(mainPrice).toBeInTheDocument()
      expect(mainPrice.textContent).toContain('999')
    })

    it('handles small decimal values', () => {
      render(<MainPrice value={0.99} />)

      const mainPrice = screen.getByTestId('main-price')
      expect(mainPrice).toBeInTheDocument()
      expect(mainPrice.textContent).toContain('0')
      expect(mainPrice.textContent).toContain('99')
    })
  })

  // Grupo 3: Testes de Acessibilidade
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<MainPrice value={99.9} />)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has correct testid for targeting', () => {
      render(<MainPrice value={99.9} />)

      expect(screen.getByTestId('main-price')).toBeInTheDocument()
    })
  })

  // Grupo 4: Testes de Customização
  describe('Customization', () => {
    it('applies custom className', () => {
      render(<MainPrice value={99.9} className="custom-class" />)

      const mainPrice = screen.getByTestId('main-price')
      expect(mainPrice).toHaveClass('custom-class')
    })

    it('maintains default classes with custom className', () => {
      render(<MainPrice value={99.9} className="custom-class" />)

      const mainPrice = screen.getByTestId('main-price')
      expect(mainPrice).toHaveClass('inline-flex')
      expect(mainPrice).toHaveClass('items-baseline')
      expect(mainPrice).toHaveClass('custom-class')
    })
  })

  // Grupo 5: Testes de Edge Cases
  describe('Edge Cases', () => {
    it('handles negative values', () => {
      render(<MainPrice value={-50.5} />)

      const mainPrice = screen.getByTestId('main-price')
      expect(mainPrice).toBeInTheDocument()
      expect(mainPrice.textContent).toContain('50')
    })

    it('handles very small values', () => {
      render(<MainPrice value={0.01} />)

      const mainPrice = screen.getByTestId('main-price')
      expect(mainPrice).toBeInTheDocument()
      expect(mainPrice.textContent).toContain('0')
      expect(mainPrice.textContent).toContain('01')
    })

    it('handles values with many decimals', () => {
      render(<MainPrice value={99.999999} />)

      const mainPrice = screen.getByTestId('main-price')
      expect(mainPrice).toBeInTheDocument()
      // Should round to 2 decimals
      expect(mainPrice.textContent).toContain('100')
    })
  })
})
