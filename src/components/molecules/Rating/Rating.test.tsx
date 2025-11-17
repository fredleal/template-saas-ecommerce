import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Rating } from './Rating'

describe('Rating', () => {
  describe('Rendering', () => {
    it('renders 5 stars by default', () => {
      const { container } = render(<Rating value={4} />)
      const stars = container.querySelectorAll('svg')
      expect(stars).toHaveLength(5)
    })

    it('renders with correct value', () => {
      render(<Rating value={4.5} showValue />)
      expect(screen.getByText('4.5')).toBeInTheDocument()
    })
  })

  describe('Value Tests', () => {
    it('renders full stars (5.0)', () => {
      const { container } = render(<Rating value={5.0} />)
      const stars = container.querySelectorAll('svg')
      expect(stars).toHaveLength(5)
    })

    it('renders half stars (4.5)', () => {
      render(<Rating value={4.5} showValue />)
      expect(screen.getByText('4.5')).toBeInTheDocument()
    })

    it('renders empty stars (0.0)', () => {
      render(<Rating value={0} showValue />)
      expect(screen.getByText('0.0')).toBeInTheDocument()
    })

    it('renders decimal values (4.2)', () => {
      render(<Rating value={4.2} showValue />)
      expect(screen.getByText('4.2')).toBeInTheDocument()
    })

    it('handles edge value (3.7)', () => {
      render(<Rating value={3.7} showValue />)
      expect(screen.getByText('3.7')).toBeInTheDocument()
    })
  })

  describe('Props Tests', () => {
    it('shows value when showValue=true', () => {
      render(<Rating value={4.8} showValue />)
      expect(screen.getByText('4.8')).toBeInTheDocument()
    })

    it('shows count when showCount=true', () => {
      render(<Rating value={4.5} showCount count={127} />)
      expect(screen.getByText('(127)')).toBeInTheDocument()
    })

    it('shows both value and count', () => {
      render(<Rating value={4.3} showValue showCount count={89} />)
      expect(screen.getByText('4.3')).toBeInTheDocument()
      expect(screen.getByText('(89)')).toBeInTheDocument()
    })
  })

  describe('Size Tests', () => {
    it('renders sm size', () => {
      const { container } = render(<Rating value={4} size="sm" />)
      const stars = container.querySelectorAll('svg')
      expect(stars[0]).toHaveAttribute('width', '16')
    })

    it('renders md size (default)', () => {
      const { container } = render(<Rating value={4} size="md" />)
      const stars = container.querySelectorAll('svg')
      expect(stars[0]).toHaveAttribute('width', '20')
    })

    it('renders lg size', () => {
      const { container } = render(<Rating value={4} size="lg" />)
      const stars = container.querySelectorAll('svg')
      expect(stars[0]).toHaveAttribute('width', '24')
    })
  })

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <Rating value={4.5} showValue isInteractive onRatingChange={() => {}} />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe('Edge Cases', () => {
    it('handles value of 0', () => {
      render(<Rating value={0} showValue />)
      expect(screen.getByText('0.0')).toBeInTheDocument()
    })

    it('handles maximum value (5)', () => {
      render(<Rating value={5} showValue />)
      expect(screen.getByText('5.0')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      const { container } = render(
        <Rating value={4} className="custom-rating" />
      )
      const rating = container.firstChild as HTMLElement
      expect(rating).toHaveClass('custom-rating')
    })
  })
})
