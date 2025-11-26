import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Skeleton } from './Skeleton'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('Skeleton', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<Skeleton />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toBeInTheDocument()
    })

    it('renders with default props', () => {
      render(<Skeleton />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveClass('bg-gray-200')
      expect(skeleton).toHaveClass('rounded-md')
      expect(skeleton).toHaveClass('animate-pulse')
    })

    it('renders with custom width and height', () => {
      render(<Skeleton width="200px" height="50px" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveStyle({ width: '200px', height: '50px' })
    })

    it('converts number width and height to px', () => {
      render(<Skeleton width={300} height={100} />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveStyle({ width: '300px', height: '100px' })
    })
  })

  describe('Variants', () => {
    it('renders with variant="none" (no border radius)', () => {
      render(<Skeleton variant="none" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveClass('rounded-none')
    })

    it('renders with variant="sm"', () => {
      render(<Skeleton variant="sm" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveClass('rounded-sm')
    })

    it('renders with variant="md" (default)', () => {
      render(<Skeleton variant="md" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveClass('rounded-md')
    })

    it('renders with variant="lg"', () => {
      render(<Skeleton variant="lg" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveClass('rounded-lg')
    })

    it('renders with variant="full" (circle)', () => {
      render(<Skeleton variant="full" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveClass('rounded-full')
    })
  })

  describe('Animation Speed', () => {
    it('renders with speed="slow"', () => {
      render(<Skeleton speed="slow" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveClass('animate-pulse-slow')
    })

    it('renders with speed="normal" (default)', () => {
      render(<Skeleton speed="normal" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveClass('animate-pulse')
    })

    it('renders with speed="fast"', () => {
      render(<Skeleton speed="fast" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveClass('animate-pulse-fast')
    })
  })

  describe('Custom Styling', () => {
    it('applies custom className', () => {
      render(<Skeleton className="custom-skeleton" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveClass('custom-skeleton')
    })

    it('preserves default classes when custom className is added', () => {
      render(<Skeleton className="custom-class" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveClass('bg-gray-200')
      expect(skeleton).toHaveClass('custom-class')
    })
  })

  describe('ARIA Attributes', () => {
    it('has correct ARIA attributes for loading state', () => {
      render(<Skeleton />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveAttribute('aria-busy', 'true')
      expect(skeleton).toHaveAttribute('aria-live', 'polite')
      expect(skeleton).toHaveAttribute('role', 'status')
    })
  })

  describe('Data TestId', () => {
    it('uses default testId', () => {
      render(<Skeleton />)
      expect(screen.getByTestId('skeleton')).toBeInTheDocument()
    })

    it('uses custom testId', () => {
      render(<Skeleton data-testid="custom-skeleton" />)
      expect(screen.getByTestId('custom-skeleton')).toBeInTheDocument()
    })
  })

  describe('Common Use Cases', () => {
    it('renders as text skeleton', () => {
      render(<Skeleton width="100%" height="1rem" variant="sm" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveAttribute('style', 'width: 100%; height: 1rem;')
      expect(skeleton).toHaveClass('rounded-sm')
    })

    it('renders as image skeleton', () => {
      render(<Skeleton width="200px" height="200px" variant="md" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveStyle({ width: '200px', height: '200px' })
      expect(skeleton).toHaveClass('rounded-md')
    })

    it('renders as avatar skeleton (circle)', () => {
      render(<Skeleton width={48} height={48} variant="full" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveStyle({ width: '48px', height: '48px' })
      expect(skeleton).toHaveClass('rounded-full')
    })

    it('renders as button skeleton', () => {
      render(<Skeleton width="120px" height="40px" variant="md" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveStyle({ width: '120px', height: '40px' })
    })

    it('renders as card skeleton', () => {
      render(<Skeleton width="100%" height="300px" variant="lg" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveStyle({ width: '100%', height: '300px' })
      expect(skeleton).toHaveClass('rounded-lg')
    })
  })

  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Skeleton />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should not have accessibility violations with all variants', async () => {
      const { container } = render(
        <div>
          <Skeleton variant="none" />
          <Skeleton variant="sm" />
          <Skeleton variant="md" />
          <Skeleton variant="lg" />
          <Skeleton variant="full" />
        </div>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe('Edge Cases', () => {
    it('handles percentage width', () => {
      render(<Skeleton width="50%" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveStyle({ width: '50%' })
    })

    it('handles rem units', () => {
      render(<Skeleton width="10rem" height="2rem" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveAttribute('style', 'width: 10rem; height: 2rem;')
    })

    it('handles em units', () => {
      render(<Skeleton width="15em" height="3em" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveAttribute('style', 'width: 15em; height: 3em;')
    })

    it('handles vw/vh units', () => {
      render(<Skeleton width="50vw" height="20vh" />)
      const skeleton = screen.getByTestId('skeleton')
      expect(skeleton).toHaveAttribute('style', 'width: 50vw; height: 20vh;')
    })
  })
})
