import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { FormatPrice } from './FormatPrice'

describe('FormatPrice', () => {
  describe('Rendering', () => {
    it('should render formatted price with default props (BRL, pt-BR)', () => {
      const { container } = render(<FormatPrice value={1234.56} />)
      const currencyPart = container.querySelector(
        '[data-part-type="currency"]'
      )
      const integerParts = container.querySelectorAll(
        '[data-part-type="integer"]'
      )
      const fractionPart = container.querySelector(
        '[data-part-type="fraction"]'
      )

      expect(currencyPart?.textContent).toBe('R$')
      expect(integerParts.length).toBeGreaterThan(0)
      expect(fractionPart?.textContent).toBe('56')
    })

    it('should render price with currency symbol by default', () => {
      const { container } = render(<FormatPrice value={100} />)
      const currencyPart = container.querySelector(
        '[data-part-type="currency"]'
      )
      expect(currencyPart).toBeInTheDocument()
      expect(currencyPart?.textContent).toBe('R$')
    })

    it('should render price without currency when showCurrency is false', () => {
      const { container } = render(
        <FormatPrice value={100} showCurrency={false} />
      )
      const currencyPart = container.querySelector(
        '[data-part-type="currency"]'
      )
      expect(currencyPart).not.toBeInTheDocument()
    })

    it('should render zero value correctly', () => {
      const { container } = render(<FormatPrice value={0} />)
      const integerPart = container.querySelector('[data-part-type="integer"]')
      const fractionPart = container.querySelector(
        '[data-part-type="fraction"]'
      )

      expect(integerPart?.textContent).toBe('0')
      expect(fractionPart?.textContent).toBe('00')
    })

    it('should render negative value correctly', () => {
      const { container } = render(<FormatPrice value={-50.5} />)
      const minusSign = container.querySelector('[data-part-type="minusSign"]')
      const fractionPart = container.querySelector(
        '[data-part-type="fraction"]'
      )

      expect(minusSign?.textContent).toBe('-')
      expect(fractionPart?.textContent).toBe('50')
    })
  })

  describe('Currency and Locale', () => {
    it('should format price in USD with en-US locale', () => {
      const { container } = render(
        <FormatPrice value={1234.56} currency="USD" locale="en-US" />
      )
      const currencyPart = container.querySelector(
        '[data-part-type="currency"]'
      )
      expect(currencyPart?.textContent).toBe('$')

      const integerParts = container.querySelectorAll(
        '[data-part-type="integer"]'
      )
      expect(integerParts.length).toBeGreaterThan(0)
    })

    it('should format price in EUR with pt-PT locale', () => {
      const { container } = render(
        <FormatPrice value={999.99} currency="EUR" locale="pt-PT" />
      )
      const currencyPart = container.querySelector(
        '[data-part-type="currency"]'
      )
      expect(currencyPart?.textContent).toBe('€')
    })

    it('should handle different locales correctly', () => {
      const { container } = render(
        <FormatPrice value={5000} locale="en-US" currency="USD" />
      )
      const integerParts = container.querySelectorAll(
        '[data-part-type="integer"]'
      )
      expect(integerParts.length).toBeGreaterThan(0)
    })
  })

  describe('Custom Styling', () => {
    it('should apply custom className to container', () => {
      const { container } = render(
        <FormatPrice value={100} className="custom-price" />
      )
      const priceContainer = container.firstChild as HTMLElement
      expect(priceContainer.className).toContain('custom-price')
    })

    it('should apply custom currencyClassName', () => {
      const { container } = render(
        <FormatPrice value={100} currencyClassName="text-red-500" />
      )
      const currencyPart = container.querySelector(
        '[data-part-type="currency"]'
      )
      expect(currencyPart?.className).toContain('text-red-500')
    })

    it('should apply custom integerClassName', () => {
      const { container } = render(
        <FormatPrice value={100} integerClassName="text-4xl" />
      )
      const integerPart = container.querySelector('[data-part-type="integer"]')
      expect(integerPart?.className).toContain('text-4xl')
    })

    it('should apply custom decimalClassName', () => {
      const { container } = render(
        <FormatPrice value={99.99} decimalClassName="text-xs" />
      )
      const decimalPart = container.querySelector('[data-part-type="decimal"]')
      expect(decimalPart?.className).toContain('text-xs')
    })

    it('should use default classes when custom classes not provided', () => {
      const { container } = render(<FormatPrice value={100} />)

      const currencyPart = container.querySelector(
        '[data-part-type="currency"]'
      )
      expect(currencyPart?.className).toContain('text-sm')

      const integerPart = container.querySelector('[data-part-type="integer"]')
      expect(integerPart?.className).toContain('text-2xl')
    })
  })

  describe('Edge Cases', () => {
    it('should handle very large numbers', () => {
      const { container } = render(<FormatPrice value={9999999.99} />)
      const integerParts = container.querySelectorAll(
        '[data-part-type="integer"]'
      )
      const fractionPart = container.querySelector(
        '[data-part-type="fraction"]'
      )

      expect(integerParts.length).toBeGreaterThan(0)
      expect(fractionPart?.textContent).toBe('99')
    })

    it('should handle very small decimal values', () => {
      const { container } = render(<FormatPrice value={0.01} />)
      const integerPart = container.querySelector('[data-part-type="integer"]')
      const fractionPart = container.querySelector(
        '[data-part-type="fraction"]'
      )

      expect(integerPart?.textContent).toBe('0')
      expect(fractionPart?.textContent).toBe('01')
    })

    it('should handle non-breaking space in currency formatting', () => {
      const { container } = render(<FormatPrice value={100} />)
      const literalPart = container.querySelector('[data-part-type="literal"]')
      // Non-breaking space (U+00A0) should be rendered
      expect(literalPart).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should render as inline element', () => {
      const { container } = render(<FormatPrice value={100} />)
      const priceElement = container.firstChild as HTMLElement
      expect(priceElement.tagName).toBe('SPAN')
    })

    it('should have data attributes for each part', () => {
      const { container } = render(<FormatPrice value={100.5} />)

      expect(
        container.querySelector('[data-part-type="currency"]')
      ).toBeInTheDocument()
      expect(
        container.querySelector('[data-part-type="integer"]')
      ).toBeInTheDocument()
      expect(
        container.querySelector('[data-part-type="decimal"]')
      ).toBeInTheDocument()
    })
  })

  describe('Component Structure', () => {
    it('should render all price parts in correct order', () => {
      const { container } = render(<FormatPrice value={123.45} />)
      const parts = container.querySelectorAll('span[data-part-type]')

      expect(parts.length).toBeGreaterThan(0)
      expect(parts[0].getAttribute('data-part-type')).toBe('currency')
    })

    it('should maintain baseline alignment', () => {
      const { container } = render(<FormatPrice value={100} />)
      const priceElement = container.firstChild as HTMLElement
      expect(priceElement.className).toContain('items-baseline')
    })

    it('should render integer parts correctly', () => {
      const { container } = render(<FormatPrice value={1000} />)
      const integerParts = container.querySelectorAll(
        '[data-part-type="integer"]'
      )
      expect(integerParts.length).toBeGreaterThan(0)
    })

    it('should render fraction parts correctly', () => {
      const { container } = render(<FormatPrice value={99.99} />)
      const fractionPart = container.querySelector(
        '[data-part-type="fraction"]'
      )
      expect(fractionPart).toBeInTheDocument()
      expect(fractionPart?.textContent).toBe('99')
    })
  })
})
