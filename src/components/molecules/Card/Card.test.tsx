import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Card } from './Card'
import { Badge } from '@/components/atoms'

describe('Card', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(<Card>Card Content</Card>)
      expect(screen.getByText('Card Content')).toBeInTheDocument()
    })

    it('renders title when provided', () => {
      render(<Card title="Card Title">Content</Card>)
      expect(screen.getByText('Card Title')).toBeInTheDocument()
    })

    it('renders subtitle when provided', () => {
      render(<Card subtitle="Card Subtitle">Content</Card>)
      expect(screen.getByText('Card Subtitle')).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('renders default variant', () => {
      const { container } = render(<Card>Default</Card>)
      const card = container.firstChild as HTMLElement
      expect(card).toHaveClass('bg-[var(--color-background,#ffffff)]')
      expect(card).toHaveClass('border')
    })

    it('renders elevated variant', () => {
      const { container } = render(<Card variant="elevated">Elevated</Card>)
      const card = container.firstChild as HTMLElement
      expect(card).toHaveClass('shadow-md')
    })

    it('renders outlined variant', () => {
      const { container } = render(<Card variant="outlined">Outlined</Card>)
      const card = container.firstChild as HTMLElement
      expect(card).toHaveClass('border-2')
    })
  })

  describe('Composition', () => {
    it('renders with Badge as child', () => {
      render(
        <Card>
          <Badge>New</Badge>
          <p>Content</p>
        </Card>
      )
      expect(screen.getByText('New')).toBeInTheDocument()
      expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('renders with complex children', () => {
      render(
        <Card title="Product">
          <Badge variant="success">In Stock</Badge>
          <p>Description text</p>
          <button>Add to Cart</button>
        </Card>
      )
      expect(screen.getByText('Product')).toBeInTheDocument()
      expect(screen.getByText('In Stock')).toBeInTheDocument()
      expect(screen.getByText('Description text')).toBeInTheDocument()
      expect(screen.getByRole('button')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Card>Accessible Card</Card>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has proper semantic HTML', () => {
      const { container } = render(
        <Card title="Title">
          <p>Content</p>
        </Card>
      )
      expect(container.querySelector('div')).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('handles empty children', () => {
      const { container } = render(<Card>{''}</Card>)
      expect(container.firstChild).toBeInTheDocument()
    })

    it('handles long content', () => {
      const longContent = 'Lorem ipsum '.repeat(100)
      render(<Card>{longContent}</Card>)
      expect(
        screen.getByText(content => content.includes('Lorem ipsum'))
      ).toBeInTheDocument()
    })

    it('applies custom className', () => {
      const { container } = render(<Card className="custom-card">Content</Card>)
      const card = container.firstChild as HTMLElement
      expect(card).toHaveClass('custom-card')
      expect(card).toHaveClass('bg-[var(--color-background,#ffffff)]') // base class preserved
    })
  })
})
