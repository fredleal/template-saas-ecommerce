import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Text } from './Text'

describe('Text', () => {
  describe('Rendering', () => {
    it('renders children text correctly', () => {
      render(<Text>Hello World</Text>)
      expect(screen.getByText('Hello World')).toBeInTheDocument()
    })

    it('renders with default props', () => {
      render(<Text>Default Text</Text>)
      const text = screen.getByText('Default Text')
      expect(text).toHaveClass('text-base')
      expect(text).toHaveClass('font-normal')
      expect(text).toHaveClass('text-[var(--color-gray-900,#111827)]')
      expect(text.tagName).toBe('P')
    })
  })

  describe('Size Variants', () => {
    it('renders xs size', () => {
      render(<Text size="xs">Extra Small</Text>)
      expect(screen.getByText('Extra Small')).toHaveClass('text-xs')
    })

    it('renders sm size', () => {
      render(<Text size="sm">Small</Text>)
      expect(screen.getByText('Small')).toHaveClass('text-sm')
    })

    it('renders base size (default)', () => {
      render(<Text size="base">Base</Text>)
      expect(screen.getByText('Base')).toHaveClass('text-base')
    })

    it('renders lg size', () => {
      render(<Text size="lg">Large</Text>)
      expect(screen.getByText('Large')).toHaveClass('text-lg')
    })

    it('renders xl size', () => {
      render(<Text size="xl">Extra Large</Text>)
      expect(screen.getByText('Extra Large')).toHaveClass('text-xl')
    })

    it('renders 2xl size', () => {
      render(<Text size="2xl">2XL</Text>)
      expect(screen.getByText('2XL')).toHaveClass('text-2xl')
    })

    it('renders 3xl size', () => {
      render(<Text size="3xl">3XL</Text>)
      expect(screen.getByText('3XL')).toHaveClass('text-3xl')
    })

    it('renders 4xl size', () => {
      render(<Text size="4xl">4XL</Text>)
      expect(screen.getByText('4XL')).toHaveClass('text-4xl')
    })

    it('renders 5xl size', () => {
      render(<Text size="5xl">5XL</Text>)
      expect(screen.getByText('5XL')).toHaveClass('text-5xl')
    })
  })

  describe('Color Variants', () => {
    it('renders primary color (default)', () => {
      render(<Text color="primary">Primary</Text>)
      expect(screen.getByText('Primary')).toHaveClass(
        'text-[var(--color-gray-900,#111827)]'
      )
    })

    it('renders secondary color', () => {
      render(<Text color="secondary">Secondary</Text>)
      expect(screen.getByText('Secondary')).toHaveClass(
        'text-[var(--color-gray-600,#4b5563)]'
      )
    })

    it('renders muted color', () => {
      render(<Text color="muted">Muted</Text>)
      expect(screen.getByText('Muted')).toHaveClass(
        'text-[var(--color-gray-500,#6b7280)]'
      )
    })

    it('renders error color', () => {
      render(<Text color="error">Error</Text>)
      expect(screen.getByText('Error')).toHaveClass(
        'text-[var(--color-error-600,#dc2626)]'
      )
    })
  })

  describe('Weight Variants', () => {
    it('renders normal weight (default)', () => {
      render(<Text weight="normal">Normal</Text>)
      expect(screen.getByText('Normal')).toHaveClass('font-normal')
    })

    it('renders medium weight', () => {
      render(<Text weight="medium">Medium</Text>)
      expect(screen.getByText('Medium')).toHaveClass('font-medium')
    })

    it('renders semibold weight', () => {
      render(<Text weight="semibold">Semibold</Text>)
      expect(screen.getByText('Semibold')).toHaveClass('font-semibold')
    })

    it('renders bold weight', () => {
      render(<Text weight="bold">Bold</Text>)
      expect(screen.getByText('Bold')).toHaveClass('font-bold')
    })
  })

  describe('Polymorphic Component', () => {
    it('renders as default p element', () => {
      render(<Text>Paragraph</Text>)
      const text = screen.getByText('Paragraph')
      expect(text.tagName).toBe('P')
    })

    it('renders as span element', () => {
      render(<Text as="span">Span Text</Text>)
      const text = screen.getByText('Span Text')
      expect(text.tagName).toBe('SPAN')
    })

    it('renders as div element', () => {
      render(<Text as="div">Div Text</Text>)
      const text = screen.getByText('Div Text')
      expect(text.tagName).toBe('DIV')
    })
  })

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Text>Accessible Text</Text>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe('Edge Cases', () => {
    it('handles empty children', () => {
      render(<Text>{''}</Text>)
      const text = screen.getByText('', { selector: 'p' })
      expect(text).toBeInTheDocument()
      expect(text.textContent).toBe('')
    })

    it('handles very long text', () => {
      const longText = 'Lorem ipsum '.repeat(50).trim()
      render(<Text>{longText}</Text>)
      expect(screen.getByText(longText)).toBeInTheDocument()
    })

    it('handles special characters and emojis', () => {
      const specialText = '!@#$%^&*() 🎉 🚀 ❤️'
      render(<Text>{specialText}</Text>)
      expect(screen.getByText(specialText)).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(<Text className="custom-class">Custom</Text>)
      const text = screen.getByText('Custom')
      expect(text).toHaveClass('custom-class')
      expect(text).toHaveClass('text-base') // base class preserved
    })
  })
})
