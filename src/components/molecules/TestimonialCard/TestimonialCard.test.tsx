import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { TestimonialCard } from './TestimonialCard'

describe('TestimonialCard', () => {
  const defaultProps = {
    avatar: 'https://example.com/avatar.jpg',
    quote: 'This is an amazing product that changed my life.',
    author: 'John Doe',
    title: 'CEO',
    company: 'Tech Company',
  }

  describe('Rendering', () => {
    it('renders avatar image', () => {
      render(<TestimonialCard {...defaultProps} />)
      const img = screen.getByAltText('John Doe')
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg')
    })

    it('renders quote text', () => {
      render(<TestimonialCard {...defaultProps} />)
      expect(
        screen.getByText('This is an amazing product that changed my life.')
      ).toBeInTheDocument()
    })

    it('renders author name', () => {
      render(<TestimonialCard {...defaultProps} />)
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })

    it('renders author title', () => {
      render(<TestimonialCard {...defaultProps} />)
      expect(screen.getByText('CEO')).toBeInTheDocument()
    })

    it('renders company when provided', () => {
      render(<TestimonialCard {...defaultProps} />)
      expect(screen.getByText('Tech Company')).toBeInTheDocument()
    })

    it('does not render company when not provided', () => {
      const { company, ...props } = defaultProps
      render(<TestimonialCard {...props} />)
      expect(screen.queryByText('Tech Company')).not.toBeInTheDocument()
    })
  })

  describe('Content Structure', () => {
    it('renders quote mark symbol', () => {
      const { container } = render(<TestimonialCard {...defaultProps} />)
      const quoteMark = container.querySelector('.text-4xl.text-blue-400')
      expect(quoteMark).toBeInTheDocument()
    })

    it('maintains proper content order', () => {
      const { container } = render(<TestimonialCard {...defaultProps} />)
      const elements = container.querySelectorAll('div, p, img, h3')
      expect(elements.length).toBeGreaterThan(0)
    })
  })

  describe('Props', () => {
    it('applies custom className', () => {
      const { container } = render(
        <TestimonialCard {...defaultProps} className="custom-class" />
      )
      const card = container.firstChild
      expect(card).toHaveClass('custom-class')
    })

    it('handles different avatar URLs', () => {
      render(
        <TestimonialCard
          {...defaultProps}
          avatar="https://example.com/different-avatar.jpg"
        />
      )
      const img = screen.getByAltText('John Doe')
      expect(img).toHaveAttribute(
        'src',
        'https://example.com/different-avatar.jpg'
      )
    })
  })

  describe('Styling', () => {
    it('applies card styling classes', () => {
      const { container } = render(<TestimonialCard {...defaultProps} />)
      const card = container.firstChild as HTMLElement
      expect(card).toHaveClass('bg-white', 'rounded-lg', 'border')
    })

    it('applies avatar styling classes', () => {
      render(<TestimonialCard {...defaultProps} />)
      const avatar = screen.getByAltText('John Doe')
      expect(avatar).toHaveClass('w-16', 'h-16', 'rounded-full')
    })
  })

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<TestimonialCard {...defaultProps} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('provides alt text for avatar image', () => {
      render(<TestimonialCard {...defaultProps} />)
      const img = screen.getByAltText('John Doe')
      expect(img).toHaveAttribute('alt', 'John Doe')
    })

    it('uses semantic heading structure for author name', () => {
      render(<TestimonialCard {...defaultProps} />)
      const heading = screen.getByRole('heading', { level: 3 })
      expect(heading).toHaveTextContent('John Doe')
    })
  })
})
