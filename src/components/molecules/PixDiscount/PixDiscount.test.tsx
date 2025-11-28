import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { PixDiscount } from './PixDiscount'

describe('PixDiscount', () => {
  // Grupo 1: Testes de Renderização
  describe('Rendering', () => {
    it('renders PIX discount information correctly', () => {
      render(<PixDiscount originalPrice={100} pixPrice={90} />)

      const pixDiscount = screen.getByTestId('pix-discount')
      expect(pixDiscount).toBeInTheDocument()
      expect(pixDiscount).toHaveTextContent('no PIX')
      expect(pixDiscount).toHaveTextContent('Economize')
    })

    it('renders with BRL currency by default', () => {
      render(<PixDiscount originalPrice={100} pixPrice={90} />)

      const pixDiscount = screen.getByTestId('pix-discount')
      expect(pixDiscount).toHaveTextContent('R$')
    })

    it('renders with different currencies', () => {
      const { rerender } = render(
        <PixDiscount
          originalPrice={100}
          pixPrice={90}
          currency="USD"
          locale="en-US"
        />
      )
      expect(screen.getByTestId('pix-discount')).toHaveTextContent('$')

      rerender(
        <PixDiscount
          originalPrice={100}
          pixPrice={90}
          currency="EUR"
          locale="de-DE"
        />
      )
      expect(screen.getByTestId('pix-discount')).toHaveTextContent('€')

      rerender(
        <PixDiscount
          originalPrice={100}
          pixPrice={90}
          currency="GBP"
          locale="en-GB"
        />
      )
      expect(screen.getByTestId('pix-discount')).toHaveTextContent('£')
    })

    it('renders PIX label', () => {
      render(<PixDiscount originalPrice={100} pixPrice={90} />)

      expect(screen.getByTestId('pix-discount')).toHaveTextContent('no PIX')
    })

    it('renders savings badge', () => {
      render(<PixDiscount originalPrice={100} pixPrice={90} />)

      const badge = screen.getByRole('status')
      expect(badge).toBeInTheDocument()
      expect(badge).toHaveTextContent('Economize')
    })

    it('renders with different size variants', () => {
      const { rerender } = render(
        <PixDiscount originalPrice={100} pixPrice={90} size="sm" />
      )
      let badge = screen.getByRole('status')
      expect(badge).toHaveClass('text-xs')

      rerender(<PixDiscount originalPrice={100} pixPrice={90} size="md" />)
      badge = screen.getByRole('status')
      expect(badge).toHaveClass('text-sm')

      rerender(<PixDiscount originalPrice={100} pixPrice={90} size="lg" />)
      badge = screen.getByRole('status')
      expect(badge).toHaveClass('text-base')
    })
  })

  // Grupo 2: Testes de Cálculo de Desconto
  describe('Discount Calculation', () => {
    it('calculates discount percentage automatically', () => {
      // R$ 100 -> R$ 90 = 10% discount
      render(<PixDiscount originalPrice={100} pixPrice={90} />)

      expect(screen.getByTestId('pix-discount')).toHaveTextContent('10% OFF')
    })

    it('uses provided discount percentage', () => {
      render(
        <PixDiscount originalPrice={100} pixPrice={90} discountPercent={15} />
      )

      expect(screen.getByTestId('pix-discount')).toHaveTextContent('15% OFF')
    })

    it('calculates savings amount correctly', () => {
      // R$ 1.000 -> R$ 900 = R$ 100 savings
      render(<PixDiscount originalPrice={1000} pixPrice={900} />)

      const pixDiscount = screen.getByTestId('pix-discount')
      expect(pixDiscount.textContent).toContain('100')
    })

    it('handles 5% discount correctly', () => {
      // R$ 200 -> R$ 190 = 5% discount
      render(<PixDiscount originalPrice={200} pixPrice={190} />)

      expect(screen.getByTestId('pix-discount')).toHaveTextContent('5% OFF')
    })

    it('handles 25% discount correctly', () => {
      // R$ 400 -> R$ 300 = 25% discount
      render(<PixDiscount originalPrice={400} pixPrice={300} />)

      expect(screen.getByTestId('pix-discount')).toHaveTextContent('25% OFF')
    })

    it('rounds discount percentage correctly', () => {
      // R$ 299 -> R$ 269 = 10.03% -> rounds to 10%
      render(<PixDiscount originalPrice={299} pixPrice={269} />)

      expect(screen.getByTestId('pix-discount')).toHaveTextContent('10% OFF')
    })
  })

  // Grupo 3: Testes de Formatação
  describe('Formatting', () => {
    it('formats PIX price correctly', () => {
      render(<PixDiscount originalPrice={1234.56} pixPrice={1111.11} />)

      const pixDiscount = screen.getByTestId('pix-discount')
      expect(pixDiscount.textContent).toContain('1')
      expect(pixDiscount.textContent).toContain('111')
    })

    it('formats savings amount in BRL', () => {
      render(<PixDiscount originalPrice={1000} pixPrice={900} currency="BRL" />)

      const badge = screen.getByRole('status')
      expect(badge.textContent).toContain('R$')
      expect(badge.textContent).toContain('100')
    })

    it('formats savings amount in USD', () => {
      render(
        <PixDiscount
          originalPrice={1000}
          pixPrice={900}
          currency="USD"
          locale="en-US"
        />
      )

      const badge = screen.getByRole('status')
      expect(badge.textContent).toContain('$100')
    })

    it('handles small savings amounts', () => {
      render(<PixDiscount originalPrice={10} pixPrice={9} />)

      const badge = screen.getByRole('status')
      expect(badge.textContent).toContain('1')
    })

    it('handles large savings amounts', () => {
      render(<PixDiscount originalPrice={10000} pixPrice={8000} />)

      const badge = screen.getByRole('status')
      expect(badge.textContent).toContain('2')
    })
  })

  // Grupo 4: Testes de Acessibilidade
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <PixDiscount originalPrice={100} pixPrice={90} />
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has correct testid for targeting', () => {
      render(<PixDiscount originalPrice={100} pixPrice={90} />)

      expect(screen.getByTestId('pix-discount')).toBeInTheDocument()
    })

    it('badge has role="status" for screen readers', () => {
      render(<PixDiscount originalPrice={100} pixPrice={90} />)

      expect(screen.getByRole('status')).toBeInTheDocument()
    })
  })

  // Grupo 5: Testes de Customização
  describe('Customization', () => {
    it('applies custom className', () => {
      render(
        <PixDiscount
          originalPrice={100}
          pixPrice={90}
          className="custom-class"
        />
      )

      const pixDiscount = screen.getByTestId('pix-discount')
      expect(pixDiscount).toHaveClass('custom-class')
    })

    it('maintains default classes with custom className', () => {
      render(
        <PixDiscount
          originalPrice={100}
          pixPrice={90}
          className="custom-class"
        />
      )

      const pixDiscount = screen.getByTestId('pix-discount')
      expect(pixDiscount).toHaveClass('inline-flex')
      expect(pixDiscount).toHaveClass('flex-col')
      expect(pixDiscount).toHaveClass('custom-class')
    })
  })

  // Grupo 6: Testes de Edge Cases
  describe('Edge Cases', () => {
    it('handles zero discount (same price)', () => {
      render(<PixDiscount originalPrice={100} pixPrice={100} />)

      expect(screen.getByTestId('pix-discount')).toHaveTextContent('0% OFF')
    })

    it('handles very small discount', () => {
      render(<PixDiscount originalPrice={1000} pixPrice={999} />)

      const pixDiscount = screen.getByTestId('pix-discount')
      expect(pixDiscount).toBeInTheDocument()
      // 0.1% rounds to 0%
      expect(pixDiscount).toHaveTextContent('0% OFF')
    })

    it('handles 100% discount (free)', () => {
      render(<PixDiscount originalPrice={100} pixPrice={0} />)

      expect(screen.getByTestId('pix-discount')).toHaveTextContent('100% OFF')
    })

    it('handles small prices with discount', () => {
      render(<PixDiscount originalPrice={1} pixPrice={0.5} />)

      const pixDiscount = screen.getByTestId('pix-discount')
      expect(pixDiscount).toBeInTheDocument()
      expect(pixDiscount).toHaveTextContent('50% OFF')
    })

    it('handles large prices with discount', () => {
      render(<PixDiscount originalPrice={99999.99} pixPrice={89999.99} />)

      const pixDiscount = screen.getByTestId('pix-discount')
      expect(pixDiscount).toBeInTheDocument()
      expect(pixDiscount).toHaveTextContent('10% OFF')
    })
  })

  // Grupo 7: Testes de Lógica de Negócio
  describe('Business Logic', () => {
    it('displays typical Brazilian e-commerce PIX discount (5%)', () => {
      // Common scenario: 5% PIX discount
      render(<PixDiscount originalPrice={1000} pixPrice={950} />)

      expect(screen.getByTestId('pix-discount')).toHaveTextContent('5% OFF')
      expect(screen.getByRole('status')).toHaveTextContent('50')
    })

    it('displays typical Brazilian e-commerce PIX discount (10%)', () => {
      // Common scenario: 10% PIX discount
      render(<PixDiscount originalPrice={500} pixPrice={450} />)

      expect(screen.getByTestId('pix-discount')).toHaveTextContent('10% OFF')
      expect(screen.getByRole('status')).toHaveTextContent('50')
    })

    it('shows compelling savings message', () => {
      render(<PixDiscount originalPrice={1999.9} pixPrice={1699.9} />)

      const badge = screen.getByRole('status')
      expect(badge).toHaveTextContent('Economize')
      expect(badge).toHaveTextContent('300')
      expect(badge).toHaveTextContent('15% OFF')
    })
  })
})
