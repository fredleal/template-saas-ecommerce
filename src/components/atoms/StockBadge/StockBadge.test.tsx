import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StockBadge } from './StockBadge'

describe('StockBadge', () => {
  describe('Rendering', () => {
    it('should render with stock number', () => {
      render(<StockBadge stock={10} />)
      expect(screen.getByText('In Stock')).toBeInTheDocument()
      expect(screen.getByText('(10)')).toBeInTheDocument()
    })

    it('should render status indicator dot', () => {
      const { container } = render(<StockBadge stock={10} />)
      const dot = container.querySelector('span > span.rounded-full')
      expect(dot).toBeInTheDocument()
    })

    it('should have correct ARIA label', () => {
      render(<StockBadge stock={5} />)
      const badge = screen.getByRole('status')
      expect(badge).toHaveAttribute('aria-label', 'Low Stock: 5 items')
    })
  })

  describe('Auto-variant determination', () => {
    it('should show "In Stock" for stock > 5', () => {
      render(<StockBadge stock={10} />)
      expect(screen.getByText('In Stock')).toBeInTheDocument()
      expect(screen.getByRole('status')).toHaveClass(
        'bg-green-100',
        'text-green-800'
      )
    })

    it('should show "Low Stock" for stock <= 5 and > 0', () => {
      render(<StockBadge stock={3} />)
      expect(screen.getByText('Low Stock')).toBeInTheDocument()
      expect(screen.getByRole('status')).toHaveClass(
        'bg-yellow-100',
        'text-yellow-800'
      )
    })

    it('should show "Out of Stock" for stock = 0', () => {
      render(<StockBadge stock={0} />)
      expect(screen.getByText('Out of Stock')).toBeInTheDocument()
      expect(screen.getByRole('status')).toHaveClass(
        'bg-red-100',
        'text-red-800'
      )
    })

    it('should not show stock count when out of stock', () => {
      render(<StockBadge stock={0} />)
      expect(screen.queryByText(/\(\d+\)/)).not.toBeInTheDocument()
    })
  })

  describe('Manual variant override', () => {
    it('should respect manual variant prop over auto-determination', () => {
      render(<StockBadge stock={100} variant="lowStock" />)
      expect(screen.getByText('Low Stock')).toBeInTheDocument()
      expect(screen.getByRole('status')).toHaveClass('bg-yellow-100')
    })

    it('should allow forcing outOfStock even with stock > 0', () => {
      render(<StockBadge stock={10} variant="outOfStock" />)
      expect(screen.getByText('Out of Stock')).toBeInTheDocument()
      expect(screen.getByText('(10)')).toBeInTheDocument()
    })
  })

  describe('Size variants', () => {
    it('should apply small size classes', () => {
      render(<StockBadge stock={5} size="sm" />)
      const badge = screen.getByRole('status')
      expect(badge).toHaveClass('px-2', 'py-1', 'text-xs')
    })

    it('should apply medium size classes (default)', () => {
      render(<StockBadge stock={5} />)
      const badge = screen.getByRole('status')
      expect(badge).toHaveClass('px-2.5', 'py-0.5', 'text-sm')
    })

    it('should apply large size classes', () => {
      render(<StockBadge stock={5} size="lg" />)
      const badge = screen.getByRole('status')
      expect(badge).toHaveClass('px-3', 'py-1', 'text-base')
    })
  })

  describe('Customization', () => {
    it('should accept custom className', () => {
      render(<StockBadge stock={5} className="custom-class" />)
      const badge = screen.getByRole('status')
      expect(badge).toHaveClass('custom-class')
    })

    it('should preserve base classes with custom className', () => {
      render(<StockBadge stock={5} className="custom-class" />)
      const badge = screen.getByRole('status')
      expect(badge).toHaveClass(
        'inline-flex',
        'items-center',
        'rounded-full',
        'custom-class'
      )
    })
  })

  describe('Edge cases', () => {
    it('should handle stock = 1 correctly', () => {
      render(<StockBadge stock={1} />)
      expect(screen.getByText('Low Stock')).toBeInTheDocument()
      expect(screen.getByText('(1)')).toBeInTheDocument()
    })

    it('should handle stock = 5 (boundary) as low stock', () => {
      render(<StockBadge stock={5} />)
      expect(screen.getByText('Low Stock')).toBeInTheDocument()
    })

    it('should handle stock = 6 as in stock', () => {
      render(<StockBadge stock={6} />)
      expect(screen.getByText('In Stock')).toBeInTheDocument()
    })

    it('should handle large stock numbers', () => {
      render(<StockBadge stock={9999} />)
      expect(screen.getByText('(9999)')).toBeInTheDocument()
    })
  })
})
