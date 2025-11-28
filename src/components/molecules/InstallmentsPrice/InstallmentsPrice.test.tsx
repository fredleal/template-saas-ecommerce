import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { InstallmentsPrice } from './InstallmentsPrice'

describe('InstallmentsPrice', () => {
  // Grupo 1: Testes de Renderização
  describe('Rendering', () => {
    it('renders installments information correctly', () => {
      render(<InstallmentsPrice installments={12} value={99.9} />)

      const installmentsPrice = screen.getByTestId('installments-price')
      expect(installmentsPrice).toBeInTheDocument()
      expect(installmentsPrice).toHaveTextContent('12x de')
      expect(installmentsPrice).toHaveTextContent('sem juros')
    })

    it('renders with BRL currency by default', () => {
      render(<InstallmentsPrice installments={10} value={50} />)

      const installmentsPrice = screen.getByTestId('installments-price')
      expect(installmentsPrice).toHaveTextContent('R$')
    })

    it('renders with different currencies', () => {
      const { rerender } = render(
        <InstallmentsPrice
          installments={6}
          value={100}
          currency="USD"
          locale="en-US"
        />
      )
      expect(screen.getByTestId('installments-price')).toHaveTextContent('$')

      rerender(
        <InstallmentsPrice
          installments={6}
          value={100}
          currency="EUR"
          locale="de-DE"
        />
      )
      expect(screen.getByTestId('installments-price')).toHaveTextContent('€')

      rerender(
        <InstallmentsPrice
          installments={6}
          value={100}
          currency="GBP"
          locale="en-GB"
        />
      )
      expect(screen.getByTestId('installments-price')).toHaveTextContent('£')
    })

    it('renders interest-free text by default', () => {
      render(<InstallmentsPrice installments={12} value={99.9} />)

      expect(screen.getByTestId('installments-price')).toHaveTextContent(
        'sem juros'
      )
    })

    it('renders with interest text when specified', () => {
      render(
        <InstallmentsPrice installments={12} value={99.9} withInterest={true} />
      )

      expect(screen.getByTestId('installments-price')).toHaveTextContent(
        'com juros'
      )
    })

    it('renders with different size variants', () => {
      const { rerender } = render(
        <InstallmentsPrice installments={12} value={99.9} size="sm" />
      )
      let text = screen.getByText('12x de')
      expect(text).toHaveClass('text-xs')

      rerender(<InstallmentsPrice installments={12} value={99.9} size="md" />)
      text = screen.getByText('12x de')
      expect(text).toHaveClass('text-sm')

      rerender(<InstallmentsPrice installments={12} value={99.9} size="lg" />)
      text = screen.getByText('12x de')
      expect(text).toHaveClass('text-base')
    })
  })

  // Grupo 2: Testes de Formatação
  describe('Formatting', () => {
    it('formats installment value correctly', () => {
      render(<InstallmentsPrice installments={12} value={99.9} />)

      const installmentsPrice = screen.getByTestId('installments-price')
      expect(installmentsPrice.textContent).toContain('99')
    })

    it('displays correct number of installments', () => {
      render(<InstallmentsPrice installments={6} value={50} />)

      expect(screen.getByTestId('installments-price')).toHaveTextContent(
        '6x de'
      )
    })

    it('handles single installment', () => {
      render(<InstallmentsPrice installments={1} value={599.9} />)

      expect(screen.getByTestId('installments-price')).toHaveTextContent(
        '1x de'
      )
    })

    it('handles large number of installments', () => {
      render(<InstallmentsPrice installments={24} value={25} />)

      expect(screen.getByTestId('installments-price')).toHaveTextContent(
        '24x de'
      )
    })

    it('handles small installment values', () => {
      render(<InstallmentsPrice installments={12} value={0.99} />)

      const installmentsPrice = screen.getByTestId('installments-price')
      expect(installmentsPrice.textContent).toContain('0')
      expect(installmentsPrice.textContent).toContain('99')
    })

    it('handles large installment values', () => {
      render(<InstallmentsPrice installments={12} value={9999.99} />)

      const installmentsPrice = screen.getByTestId('installments-price')
      expect(installmentsPrice.textContent).toContain('9')
    })
  })

  // Grupo 3: Testes de Acessibilidade
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <InstallmentsPrice installments={12} value={99.9} />
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has correct testid for targeting', () => {
      render(<InstallmentsPrice installments={12} value={99.9} />)

      expect(screen.getByTestId('installments-price')).toBeInTheDocument()
    })
  })

  // Grupo 4: Testes de Customização
  describe('Customization', () => {
    it('applies custom className', () => {
      render(
        <InstallmentsPrice
          installments={12}
          value={99.9}
          className="custom-class"
        />
      )

      const installmentsPrice = screen.getByTestId('installments-price')
      expect(installmentsPrice).toHaveClass('custom-class')
    })

    it('maintains default classes with custom className', () => {
      render(
        <InstallmentsPrice
          installments={12}
          value={99.9}
          className="custom-class"
        />
      )

      const installmentsPrice = screen.getByTestId('installments-price')
      expect(installmentsPrice).toHaveClass('inline-flex')
      expect(installmentsPrice).toHaveClass('items-baseline')
      expect(installmentsPrice).toHaveClass('text-gray-700')
      expect(installmentsPrice).toHaveClass('custom-class')
    })
  })

  // Grupo 5: Testes de Edge Cases
  describe('Edge Cases', () => {
    it('handles zero installments gracefully', () => {
      render(<InstallmentsPrice installments={0} value={99.9} />)

      expect(screen.getByTestId('installments-price')).toHaveTextContent(
        '0x de'
      )
    })

    it('handles zero value', () => {
      render(<InstallmentsPrice installments={12} value={0} />)

      const installmentsPrice = screen.getByTestId('installments-price')
      expect(installmentsPrice).toBeInTheDocument()
      expect(installmentsPrice.textContent).toContain('0')
    })

    it('handles very small values', () => {
      render(<InstallmentsPrice installments={12} value={0.01} />)

      const installmentsPrice = screen.getByTestId('installments-price')
      expect(installmentsPrice).toBeInTheDocument()
      expect(installmentsPrice.textContent).toContain('0')
      expect(installmentsPrice.textContent).toContain('01')
    })

    it('handles values with many decimals', () => {
      render(<InstallmentsPrice installments={12} value={99.999999} />)

      const installmentsPrice = screen.getByTestId('installments-price')
      expect(installmentsPrice).toBeInTheDocument()
      // Should round to 2 decimals
      expect(installmentsPrice.textContent).toContain('100')
    })
  })

  // Grupo 6: Testes de Lógica de Negócio
  describe('Business Logic', () => {
    it('shows correct total when calculated manually', () => {
      // 12x de R$ 99,90 = R$ 1.198,80 total
      render(
        <InstallmentsPrice installments={12} value={99.9} totalValue={1198.8} />
      )

      const installmentsPrice = screen.getByTestId('installments-price')
      expect(installmentsPrice).toHaveTextContent('12x de')
      expect(installmentsPrice.textContent).toContain('99')
    })

    it('displays interest-free for common e-commerce scenarios', () => {
      // Typical Brazilian e-commerce: 10x sem juros
      render(
        <InstallmentsPrice
          installments={10}
          value={89.9}
          withInterest={false}
        />
      )

      expect(screen.getByTestId('installments-price')).toHaveTextContent(
        'sem juros'
      )
    })

    it('displays with interest for financing scenarios', () => {
      // Typical financing with interest
      render(
        <InstallmentsPrice installments={24} value={120} withInterest={true} />
      )

      expect(screen.getByTestId('installments-price')).toHaveTextContent(
        'com juros'
      )
    })
  })
})
