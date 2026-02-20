import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Button } from './Button'

describe('Button', () => {
  describe('Rendering', () => {
    it('renders children text correctly', () => {
      render(<Button>Click me</Button>)
      expect(
        screen.getByRole('button', { name: /click me/i })
      ).toBeInTheDocument()
    })

    it('renders with default props', () => {
      render(<Button>Default Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-[var(--color-primary-500,#3b82f6)]') // primary variant
      expect(button).toHaveClass('px-4') // md size
    })

    it('renders as button element by default', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      expect(button.tagName).toBe('BUTTON')
    })
  })

  describe('Variants', () => {
    it('renders primary variant correctly', () => {
      render(<Button variant="primary">Primary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-[var(--color-primary-500,#3b82f6)]')
      expect(button).toHaveClass('text-white')
    })

    it('renders secondary variant correctly', () => {
      render(<Button variant="secondary">Secondary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-[var(--color-gray-500,#6b7280)]')
      expect(button).toHaveClass('text-white')
    })

    it('renders outline variant correctly', () => {
      render(<Button variant="outline">Outline</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('border')
      expect(button).toHaveClass('border-[var(--color-primary-500,#3b82f6)]')
      expect(button).toHaveClass('text-[var(--color-primary-500,#3b82f6)]')
    })

    it('renders ghost variant correctly', () => {
      render(<Button variant="ghost">Ghost</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('text-[var(--color-primary-500,#3b82f6)]')
      expect(button).toHaveClass('hover:bg-[var(--color-primary-50,#eff6ff)]')
    })
  })

  describe('Sizes', () => {
    it('renders sm size', () => {
      render(<Button size="sm">Small</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-3')
      expect(button).toHaveClass('py-2')
      expect(button).toHaveClass('text-sm')
    })

    it('renders md size (default)', () => {
      render(<Button size="md">Medium</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-4')
      expect(button).toHaveClass('py-2.5')
      expect(button).toHaveClass('text-base')
    })

    it('renders lg size', () => {
      render(<Button size="lg">Large</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-6')
      expect(button).toHaveClass('py-3')
      expect(button).toHaveClass('text-lg')
    })
  })

  describe('Interaction', () => {
    it('calls onClick handler when clicked', async () => {
      let clicked = false
      const handleClick = () => {
        clicked = true
      }

      render(<Button onClick={handleClick}>Click me</Button>)
      const button = screen.getByRole('button')

      button.click()
      expect(clicked).toBe(true)
    })

    it('does not call onClick when disabled', () => {
      let clicked = false
      const handleClick = () => {
        clicked = true
      }

      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      )
      const button = screen.getByRole('button')

      button.click()
      expect(clicked).toBe(false)
    })
  })

  describe('States', () => {
    it('disabled state prevents interaction', () => {
      render(<Button disabled>Disabled Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveClass('disabled:opacity-50')
      expect(button).toHaveClass('disabled:cursor-not-allowed')
    })

    it('loading state shows spinner and disables button', () => {
      render(<Button isLoading>Loading</Button>)
      const button = screen.getByRole('button')

      // Button should be disabled when loading
      expect(button).toBeDisabled()

      // Spinner SVG should be present
      const spinner = button.querySelector('svg.animate-spin')
      expect(spinner).toBeInTheDocument()
    })

    it('loading state still shows children text', () => {
      render(<Button isLoading>Loading Button</Button>)
      expect(
        screen.getByRole('button', { name: /loading button/i })
      ).toBeInTheDocument()
    })
  })

  describe('Composition', () => {
    it('renders with Icon as child', () => {
      render(
        <Button>
          <span data-testid="icon">🔍</span>
          Search
        </Button>
      )
      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /search/i })
      ).toBeInTheDocument()
    })

    it('renders with multiple children', () => {
      render(
        <Button>
          <span data-testid="icon">✓</span>
          <span data-testid="text">Confirm</span>
        </Button>
      )
      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(screen.getByTestId('text')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Button>Accessible Button</Button>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations when disabled', async () => {
      const { container } = render(<Button disabled>Disabled Button</Button>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe('Edge Cases', () => {
    it('handles empty children gracefully', () => {
      render(<Button>{''}</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      expect(button.textContent).toBe('')
    })

    it('handles very long text without breaking', () => {
      const longText =
        'This is a very long button text that should not break the layout and should be handled gracefully by the component'
      render(<Button>{longText}</Button>)
      expect(
        screen.getByRole('button', { name: new RegExp(longText) })
      ).toBeInTheDocument()
    })

    it('handles onClick undefined gracefully', () => {
      // Should not throw error when onClick is not provided
      expect(() => {
        render(<Button>No onClick</Button>)
      }).not.toThrow()
    })

    it('applies custom className correctly', () => {
      render(<Button className="custom-class">Custom</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
      // Should also have base classes
      expect(button).toHaveClass('inline-flex')
    })
  })
})
