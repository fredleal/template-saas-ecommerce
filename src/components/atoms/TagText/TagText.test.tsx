import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { TagText } from './TagText'

describe('TagText', () => {
  // Group 1: Basic Rendering
  describe('Basic Rendering', () => {
    it('renders with text content', () => {
      render(<TagText text="Hello World" />)

      expect(screen.getByText('Hello World')).toBeInTheDocument()
    })

    it('renders as span by default', () => {
      render(<TagText text="Default tag" />)

      const element = screen.getByTestId('tag-text')
      expect(element.tagName).toBe('SPAN')
    })

    it('applies custom className', () => {
      render(<TagText text="Custom" className="custom-class" />)

      const element = screen.getByTestId('tag-text')
      expect(element).toHaveClass('custom-class')
    })

    it('maintains default classes with custom className', () => {
      render(<TagText text="Text" className="custom-class" />)

      const element = screen.getByTestId('tag-text')
      expect(element).toHaveClass('text-sm') // default size
      expect(element).toHaveClass('custom-class')
    })
  })

  // Group 2: Tag Type Variants
  describe('Tag Type Variants', () => {
    it('renders as span when as="span"', () => {
      render(<TagText text="Span text" as="span" />)

      const element = screen.getByTestId('tag-text')
      expect(element.tagName).toBe('SPAN')
    })

    it('renders as p when as="p"', () => {
      render(<TagText text="Paragraph text" as="p" />)

      const element = screen.getByTestId('tag-text')
      expect(element.tagName).toBe('P')
    })

    it('renders as div when as="div"', () => {
      render(<TagText text="Div text" as="div" />)

      const element = screen.getByTestId('tag-text')
      expect(element.tagName).toBe('DIV')
    })
  })

  // Group 3: Size Variants
  describe('Size Variants', () => {
    it('applies xs size classes', () => {
      render(<TagText text="Extra small" size="xs" />)

      const element = screen.getByTestId('tag-text')
      expect(element).toHaveClass('text-xs')
    })

    it('applies sm size classes (default)', () => {
      render(<TagText text="Small" size="sm" />)

      const element = screen.getByTestId('tag-text')
      expect(element).toHaveClass('text-sm')
    })

    it('applies md size classes', () => {
      render(<TagText text="Medium" size="md" />)

      const element = screen.getByTestId('tag-text')
      expect(element).toHaveClass('text-base')
    })

    it('applies lg size classes', () => {
      render(<TagText text="Large" size="lg" />)

      const element = screen.getByTestId('tag-text')
      expect(element).toHaveClass('text-lg')
    })
  })

  // Group 4: Weight Variants
  describe('Weight Variants', () => {
    it('applies normal weight (default)', () => {
      render(<TagText text="Normal" weight="normal" />)

      const element = screen.getByTestId('tag-text')
      expect(element).toHaveClass('font-normal')
    })

    it('applies medium weight', () => {
      render(<TagText text="Medium" weight="medium" />)

      const element = screen.getByTestId('tag-text')
      expect(element).toHaveClass('font-medium')
    })

    it('applies semibold weight', () => {
      render(<TagText text="Semibold" weight="semibold" />)

      const element = screen.getByTestId('tag-text')
      expect(element).toHaveClass('font-semibold')
    })

    it('applies bold weight', () => {
      render(<TagText text="Bold" weight="bold" />)

      const element = screen.getByTestId('tag-text')
      expect(element).toHaveClass('font-bold')
    })
  })

  // Group 5: Color Variants
  describe('Color Variants', () => {
    it('applies primary color (default)', () => {
      render(<TagText text="Primary" color="primary" />)

      const element = screen.getByTestId('tag-text')
      expect(element).toHaveClass('text-gray-900')
    })

    it('applies secondary color', () => {
      render(<TagText text="Secondary" color="secondary" />)

      const element = screen.getByTestId('tag-text')
      expect(element).toHaveClass('text-gray-700')
    })

    it('applies muted color', () => {
      render(<TagText text="Muted" color="muted" />)

      const element = screen.getByTestId('tag-text')
      expect(element).toHaveClass('text-gray-500')
    })
  })

  // Group 6: Combined Props
  describe('Combined Props', () => {
    it('combines all props correctly', () => {
      render(
        <TagText
          text="Combined"
          as="p"
          size="lg"
          weight="bold"
          color="secondary"
          className="custom"
        />
      )

      const element = screen.getByTestId('tag-text')
      expect(element.tagName).toBe('P')
      expect(element).toHaveClass('text-lg')
      expect(element).toHaveClass('font-bold')
      expect(element).toHaveClass('text-gray-700')
      expect(element).toHaveClass('custom')
    })

    it('renders small muted text', () => {
      render(<TagText text="Small muted" size="xs" color="muted" />)

      const element = screen.getByTestId('tag-text')
      expect(element).toHaveClass('text-xs')
      expect(element).toHaveClass('text-gray-500')
    })
  })

  // Group 7: Accessibility
  describe('Accessibility', () => {
    it('has no accessibility violations (span)', async () => {
      const { container } = render(<TagText text="Accessible text" as="span" />)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations (p)', async () => {
      const { container } = render(
        <TagText text="Accessible paragraph" as="p" />
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations (div)', async () => {
      const { container } = render(<TagText text="Accessible div" as="div" />)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })
})
