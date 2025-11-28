import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { PriceSummary } from './PriceSummary'

describe('PriceSummary', () => {
  // Grupo 1: Testes de Renderização Básica
  describe('Basic Rendering', () => {
    it('renders with minimum required props (currentPrice only)', () => {
      render(<PriceSummary currentPrice={1899.9} />)

      const summary = screen.getByTestId('price-summary')
      expect(summary).toBeInTheDocument()
    })

    it('renders MainPrice by default', () => {
      render(<PriceSummary currentPrice={1899.9} />)

      const mainPrice = screen.getByTestId('main-price')
      expect(mainPrice).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(<PriceSummary currentPrice={1899.9} className="custom-class" />)

      const summary = screen.getByTestId('price-summary')
      expect(summary).toHaveClass('custom-class')
    })

    it('maintains default classes with custom className', () => {
      render(<PriceSummary currentPrice={1899.9} className="custom-class" />)

      const summary = screen.getByTestId('price-summary')
      expect(summary).toHaveClass('flex')
      expect(summary).toHaveClass('flex-col')
      expect(summary).toHaveClass('custom-class')
    })
  })

  // Grupo 2: Testes de ListPrice
  describe('ListPrice Display', () => {
    it('shows ListPrice when originalPrice > currentPrice', () => {
      render(<PriceSummary originalPrice={2999.9} currentPrice={1899.9} />)

      const listPrice = screen.getByTestId('list-price')
      expect(listPrice).toBeInTheDocument()
      expect(listPrice).toHaveClass('line-through')
    })

    it('does not show ListPrice when originalPrice = currentPrice', () => {
      render(<PriceSummary originalPrice={1899.9} currentPrice={1899.9} />)

      const listPrice = screen.queryByTestId('list-price')
      expect(listPrice).not.toBeInTheDocument()
    })

    it('does not show ListPrice when originalPrice < currentPrice', () => {
      render(<PriceSummary originalPrice={1000} currentPrice={1899.9} />)

      const listPrice = screen.queryByTestId('list-price')
      expect(listPrice).not.toBeInTheDocument()
    })

    it('does not show ListPrice when originalPrice is not provided', () => {
      render(<PriceSummary currentPrice={1899.9} />)

      const listPrice = screen.queryByTestId('list-price')
      expect(listPrice).not.toBeInTheDocument()
    })
  })

  // Grupo 3: Testes de PixDiscount
  describe('PixDiscount Display', () => {
    it('shows PixDiscount when pixPrice is provided', () => {
      render(<PriceSummary currentPrice={1899.9} pixPrice={1709.91} />)

      const pixDiscount = screen.getByTestId('pix-discount')
      expect(pixDiscount).toBeInTheDocument()
      expect(pixDiscount).toHaveTextContent('no PIX')
    })

    it('does not show PixDiscount when pixPrice is not provided', () => {
      render(<PriceSummary currentPrice={1899.9} />)

      const pixDiscount = screen.queryByTestId('pix-discount')
      expect(pixDiscount).not.toBeInTheDocument()
    })

    it('uses custom pixDiscountPercent when provided', () => {
      render(
        <PriceSummary
          currentPrice={1000}
          pixPrice={900}
          pixDiscountPercent={15}
        />
      )

      const pixDiscount = screen.getByTestId('pix-discount')
      expect(pixDiscount).toHaveTextContent('15% OFF')
    })

    it('calculates discount automatically when pixDiscountPercent not provided', () => {
      render(<PriceSummary currentPrice={1000} pixPrice={900} />)

      const pixDiscount = screen.getByTestId('pix-discount')
      expect(pixDiscount).toHaveTextContent('10% OFF')
    })
  })

  // Grupo 4: Testes de InstallmentsPrice
  describe('InstallmentsPrice Display', () => {
    it('shows InstallmentsPrice when installments provided', () => {
      render(
        <PriceSummary
          currentPrice={1899.9}
          installments={{ count: 12, value: 158.32 }}
        />
      )

      const installments = screen.getByTestId('installments-price')
      expect(installments).toBeInTheDocument()
      expect(installments).toHaveTextContent('12x de')
    })

    it('does not show InstallmentsPrice when installments not provided', () => {
      render(<PriceSummary currentPrice={1899.9} />)

      const installments = screen.queryByTestId('installments-price')
      expect(installments).not.toBeInTheDocument()
    })

    it('shows interest-free installments by default', () => {
      render(
        <PriceSummary
          currentPrice={1899.9}
          installments={{ count: 12, value: 158.32 }}
        />
      )

      const installments = screen.getByTestId('installments-price')
      expect(installments).toHaveTextContent('sem juros')
    })

    it('shows with-interest installments when specified', () => {
      render(
        <PriceSummary
          currentPrice={1899.9}
          installments={{ count: 24, value: 120.5, withInterest: true }}
        />
      )

      const installments = screen.getByTestId('installments-price')
      expect(installments).toHaveTextContent('com juros')
    })
  })

  // Grupo 5: Testes de Composição Completa
  describe('Full Composition', () => {
    it('renders all components when all props provided', () => {
      render(
        <PriceSummary
          originalPrice={2999.9}
          currentPrice={1899.9}
          pixPrice={1709.91}
          installments={{ count: 12, value: 158.32 }}
        />
      )

      expect(screen.getByTestId('list-price')).toBeInTheDocument()
      expect(screen.getByTestId('main-price')).toBeInTheDocument()
      expect(screen.getByTestId('pix-discount')).toBeInTheDocument()
      expect(screen.getByTestId('installments-price')).toBeInTheDocument()
    })

    it('renders in correct order (ListPrice → MainPrice → PixDiscount → Installments)', () => {
      const { container } = render(
        <PriceSummary
          originalPrice={2999.9}
          currentPrice={1899.9}
          pixPrice={1709.91}
          installments={{ count: 12, value: 158.32 }}
        />
      )

      const children = container.querySelector(
        '[data-testid="price-summary"]'
      )?.children
      expect(children).toHaveLength(4)
      expect(children?.[0]).toHaveAttribute('data-testid', 'list-price')
      expect(children?.[1]).toHaveAttribute('data-testid', 'main-price')
      expect(children?.[2]).toHaveAttribute('data-testid', 'pix-discount')
      expect(children?.[3]).toHaveAttribute('data-testid', 'installments-price')
    })

    it('shows partial composition (MainPrice + Installments)', () => {
      render(
        <PriceSummary
          currentPrice={1899.9}
          installments={{ count: 12, value: 158.32 }}
        />
      )

      expect(screen.getByTestId('main-price')).toBeInTheDocument()
      expect(screen.getByTestId('installments-price')).toBeInTheDocument()
      expect(screen.queryByTestId('list-price')).not.toBeInTheDocument()
      expect(screen.queryByTestId('pix-discount')).not.toBeInTheDocument()
    })

    it('shows partial composition (ListPrice + MainPrice + PixDiscount)', () => {
      render(
        <PriceSummary
          originalPrice={2999.9}
          currentPrice={1899.9}
          pixPrice={1709.91}
        />
      )

      expect(screen.getByTestId('list-price')).toBeInTheDocument()
      expect(screen.getByTestId('main-price')).toBeInTheDocument()
      expect(screen.getByTestId('pix-discount')).toBeInTheDocument()
      expect(screen.queryByTestId('installments-price')).not.toBeInTheDocument()
    })
  })

  // Grupo 6: Testes de Multi-Currency
  describe('Multi-Currency Support', () => {
    it('passes currency to all child components (BRL)', () => {
      render(
        <PriceSummary
          originalPrice={2999.9}
          currentPrice={1899.9}
          pixPrice={1709.91}
          installments={{ count: 12, value: 158.32 }}
          currency="BRL"
        />
      )

      const summary = screen.getByTestId('price-summary')
      expect(summary.textContent).toContain('R$')
    })

    it('passes currency to all child components (USD)', () => {
      render(
        <PriceSummary
          originalPrice={299.99}
          currentPrice={189.99}
          pixPrice={170.99}
          installments={{ count: 12, value: 15.83 }}
          currency="USD"
          locale="en-US"
        />
      )

      const summary = screen.getByTestId('price-summary')
      expect(summary.textContent).toContain('$')
    })
  })

  // Grupo 7: Testes de Size Variants
  describe('Size Variants', () => {
    it('passes size to all child components (sm)', () => {
      render(
        <PriceSummary originalPrice={2999.9} currentPrice={1899.9} size="sm" />
      )

      const mainPrice = screen.getByTestId('main-price')
      const integer = mainPrice.querySelector('[data-part-type="integer"]')
      expect(integer).toHaveClass('text-lg')
    })

    it('passes size to all child components (md)', () => {
      render(
        <PriceSummary originalPrice={2999.9} currentPrice={1899.9} size="md" />
      )

      const mainPrice = screen.getByTestId('main-price')
      const integer = mainPrice.querySelector('[data-part-type="integer"]')
      expect(integer).toHaveClass('text-2xl')
    })

    it('passes size to all child components (lg)', () => {
      render(
        <PriceSummary originalPrice={2999.9} currentPrice={1899.9} size="lg" />
      )

      const mainPrice = screen.getByTestId('main-price')
      const integer = mainPrice.querySelector('[data-part-type="integer"]')
      expect(integer).toHaveClass('text-4xl')
    })
  })

  // Grupo 8: Testes de Acessibilidade
  describe('Accessibility', () => {
    it('has no accessibility violations (minimum)', async () => {
      const { container } = render(<PriceSummary currentPrice={1899.9} />)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations (full composition)', async () => {
      const { container } = render(
        <PriceSummary
          originalPrice={2999.9}
          currentPrice={1899.9}
          pixPrice={1709.91}
          installments={{ count: 12, value: 158.32 }}
        />
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has correct testid for targeting', () => {
      render(<PriceSummary currentPrice={1899.9} />)

      expect(screen.getByTestId('price-summary')).toBeInTheDocument()
    })
  })

  // Grupo 9: Testes de Edge Cases
  describe('Edge Cases', () => {
    it('handles zero currentPrice', () => {
      render(<PriceSummary currentPrice={0} />)

      const summary = screen.getByTestId('price-summary')
      expect(summary).toBeInTheDocument()
    })

    it('handles very small prices', () => {
      render(<PriceSummary currentPrice={0.99} />)

      const mainPrice = screen.getByTestId('main-price')
      expect(mainPrice).toBeInTheDocument()
    })

    it('handles very large prices', () => {
      render(<PriceSummary currentPrice={999999.99} />)

      const mainPrice = screen.getByTestId('main-price')
      expect(mainPrice).toBeInTheDocument()
    })

    it('handles originalPrice = 0 (should not show)', () => {
      render(<PriceSummary originalPrice={0} currentPrice={1899.9} />)

      const listPrice = screen.queryByTestId('list-price')
      expect(listPrice).not.toBeInTheDocument()
    })

    it('handles pixPrice = 0 (should not show, 0 is falsy)', () => {
      render(<PriceSummary currentPrice={100} pixPrice={0} />)

      // pixPrice=0 is falsy, so PixDiscount won't render
      const pixDiscount = screen.queryByTestId('pix-discount')
      expect(pixDiscount).not.toBeInTheDocument()
    })
  })

  // Grupo 10: Testes de Lógica de Negócio (E-commerce BR)
  describe('Business Logic - Brazilian E-commerce', () => {
    it('displays typical Brazilian product page pricing', () => {
      // Cenário comum: Produto com desconto + PIX + parcelamento
      render(
        <PriceSummary
          originalPrice={2999.9}
          currentPrice={1899.9}
          pixPrice={1709.91}
          installments={{ count: 12, value: 158.32, withInterest: false }}
          currency="BRL"
        />
      )

      expect(screen.getByTestId('list-price')).toHaveTextContent('2')
      expect(screen.getByTestId('main-price')).toHaveTextContent('1')
      expect(screen.getByTestId('pix-discount')).toHaveTextContent('10% OFF')
      expect(screen.getByTestId('installments-price')).toHaveTextContent(
        'sem juros'
      )
    })

    it('displays simple product without discount', () => {
      // Cenário: Produto sem desconto, com parcelamento
      render(
        <PriceSummary
          currentPrice={599.9}
          installments={{ count: 10, value: 59.99, withInterest: false }}
        />
      )

      expect(screen.queryByTestId('list-price')).not.toBeInTheDocument()
      expect(screen.getByTestId('main-price')).toBeInTheDocument()
      expect(screen.queryByTestId('pix-discount')).not.toBeInTheDocument()
      expect(screen.getByTestId('installments-price')).toBeInTheDocument()
    })

    it('displays PIX-only promotion', () => {
      // Cenário: Promoção exclusiva PIX
      render(<PriceSummary currentPrice={1000} pixPrice={900} />)

      expect(screen.queryByTestId('list-price')).not.toBeInTheDocument()
      expect(screen.getByTestId('main-price')).toBeInTheDocument()
      expect(screen.getByTestId('pix-discount')).toHaveTextContent('10% OFF')
      expect(screen.queryByTestId('installments-price')).not.toBeInTheDocument()
    })
  })
})
