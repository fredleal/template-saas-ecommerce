import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DiscountLabel } from './DiscountLabel'

describe('DiscountLabel', () => {
  describe('Rendering', () => {
    it('should render discount percentage', () => {
      render(<DiscountLabel percentage={25} />)
      expect(screen.getByText('-25%')).toBeInTheDocument()
    })

    it('should have correct ARIA label', () => {
      render(<DiscountLabel percentage={15} />)
      const label = screen.getByRole('status')
      expect(label).toHaveAttribute('aria-label', '15% discount')
    })

    it('should render with default variant classes', () => {
      render(<DiscountLabel percentage={10} />)
      const label = screen.getByRole('status')
      expect(label).toHaveClass('bg-red-500', 'text-white')
    })
  })

  describe('Percentage formatting', () => {
    it('should handle whole numbers', () => {
      render(<DiscountLabel percentage={50} />)
      expect(screen.getByText('-50%')).toBeInTheDocument()
    })

    it('should handle decimal percentages', () => {
      render(<DiscountLabel percentage={12.5} />)
      expect(screen.getByText('-12.5%')).toBeInTheDocument()
    })

    it('should handle single digit percentages', () => {
      render(<DiscountLabel percentage={5} />)
      expect(screen.getByText('-5%')).toBeInTheDocument()
    })

    it('should handle negative input by converting to positive', () => {
      render(<DiscountLabel percentage={-20} />)
      expect(screen.getByText('-20%')).toBeInTheDocument()
    })

    it('should handle zero percentage', () => {
      render(<DiscountLabel percentage={0} />)
      expect(screen.getByText('-0%')).toBeInTheDocument()
    })

    it('should handle large percentages', () => {
      render(<DiscountLabel percentage={99} />)
      expect(screen.getByText('-99%')).toBeInTheDocument()
    })
  })

  describe('Variant styles', () => {
    it('should apply default variant (red)', () => {
      render(<DiscountLabel percentage={10} variant="default" />)
      const label = screen.getByRole('status')
      expect(label).toHaveClass('bg-red-500', 'text-white')
    })

    it('should apply primary variant (blue)', () => {
      render(<DiscountLabel percentage={10} variant="primary" />)
      const label = screen.getByRole('status')
      expect(label).toHaveClass('bg-blue-600', 'text-white')
    })

    it('should apply accent variant (purple)', () => {
      render(<DiscountLabel percentage={10} variant="accent" />)
      const label = screen.getByRole('status')
      expect(label).toHaveClass('bg-purple-600', 'text-white')
    })
  })

  describe('Size variants', () => {
    it('should apply small size classes', () => {
      render(<DiscountLabel percentage={10} size="sm" />)
      const label = screen.getByRole('status')
      expect(label).toHaveClass('px-1.5', 'py-0.5', 'text-xs', 'min-w-[2.5rem]')
    })

    it('should apply medium size classes (default)', () => {
      render(<DiscountLabel percentage={10} />)
      const label = screen.getByRole('status')
      expect(label).toHaveClass('px-2', 'py-1', 'text-sm', 'min-w-[3rem]')
    })

    it('should apply large size classes', () => {
      render(<DiscountLabel percentage={10} size="lg" />)
      const label = screen.getByRole('status')
      expect(label).toHaveClass('px-3', 'py-1.5', 'text-base', 'min-w-[3.5rem]')
    })
  })

  describe('Customization', () => {
    it('should accept custom className', () => {
      render(<DiscountLabel percentage={10} className="custom-discount" />)
      const label = screen.getByRole('status')
      expect(label).toHaveClass('custom-discount')
    })

    it('should preserve base classes with custom className', () => {
      render(<DiscountLabel percentage={10} className="custom-class" />)
      const label = screen.getByRole('status')
      expect(label).toHaveClass(
        'inline-flex',
        'items-center',
        'rounded',
        'custom-class'
      )
    })
  })

  describe('Layout and centering', () => {
    it('should have flex centering classes', () => {
      render(<DiscountLabel percentage={10} />)
      const label = screen.getByRole('status')
      expect(label).toHaveClass('inline-flex', 'items-center', 'justify-center')
    })

    it('should have minimum width for consistent sizing', () => {
      render(<DiscountLabel percentage={5} size="sm" />)
      const label = screen.getByRole('status')
      expect(label).toHaveClass('min-w-[2.5rem]')
    })

    it('should be bold font', () => {
      render(<DiscountLabel percentage={10} />)
      const label = screen.getByRole('status')
      expect(label).toHaveClass('font-bold')
    })
  })

  describe('Combined props', () => {
    it('should work with all props together', () => {
      render(
        <DiscountLabel
          percentage={33}
          variant="primary"
          size="lg"
          className="custom-animation"
        />
      )
      const label = screen.getByRole('status')
      expect(label).toHaveClass('bg-blue-600', 'text-base', 'custom-animation')
      expect(screen.getByText('-33%')).toBeInTheDocument()
      expect(label).toHaveAttribute('aria-label', '33% discount')
    })
  })
})
