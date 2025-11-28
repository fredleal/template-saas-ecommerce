import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Label } from './Label'

describe('Label', () => {
  // Group 1: Basic Rendering
  describe('Basic Rendering', () => {
    it('renders with text content', () => {
      render(<Label>Name</Label>)

      const label = screen.getByText('Name')
      expect(label).toBeInTheDocument()
      expect(label.tagName).toBe('LABEL')
    })

    it('renders with htmlFor attribute', () => {
      render(<Label htmlFor="input-id">Email</Label>)

      const label = screen.getByText('Email')
      expect(label).toHaveAttribute('for', 'input-id')
    })

    it('applies custom className', () => {
      render(<Label className="custom-class">Label</Label>)

      const label = screen.getByText('Label')
      expect(label).toHaveClass('custom-class')
    })

    it('maintains default classes with custom className', () => {
      render(<Label className="custom-class">Label</Label>)

      const label = screen.getByText('Label')
      expect(label).toHaveClass('block')
      expect(label).toHaveClass('text-sm')
      expect(label).toHaveClass('custom-class')
    })
  })

  // Group 2: Required State
  describe('Required State', () => {
    it('shows asterisk when required', () => {
      render(<Label required>Required Field</Label>)

      const asterisk = screen.getByText('*')
      expect(asterisk).toBeInTheDocument()
      expect(asterisk).toHaveClass('text-red-500')
    })

    it('does not show asterisk when not required', () => {
      render(<Label>Optional Field</Label>)

      const asterisk = screen.queryByText('*')
      expect(asterisk).not.toBeInTheDocument()
    })

    it('asterisk has aria-label', () => {
      render(<Label required>Field</Label>)

      const asterisk = screen.getByLabelText('required')
      expect(asterisk).toBeInTheDocument()
    })
  })

  // Group 3: Disabled State
  describe('Disabled State', () => {
    it('applies disabled styles when disabled', () => {
      render(<Label disabled>Disabled Field</Label>)

      const label = screen.getByText('Disabled Field')
      expect(label).toHaveClass('text-gray-400')
      expect(label).toHaveClass('cursor-not-allowed')
    })

    it('applies normal styles when not disabled', () => {
      render(<Label>Normal Field</Label>)

      const label = screen.getByText('Normal Field')
      expect(label).toHaveClass('text-gray-700')
      expect(label).toHaveClass('cursor-pointer')
    })
  })

  // Group 4: Content Types
  describe('Content Types', () => {
    it('renders with React node children', () => {
      render(
        <Label>
          <span>Custom</span> <strong>Content</strong>
        </Label>
      )

      expect(screen.getByText('Custom')).toBeInTheDocument()
      expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('renders with string children', () => {
      render(<Label>Simple text</Label>)

      expect(screen.getByText('Simple text')).toBeInTheDocument()
    })
  })

  // Group 5: HTML Attributes
  describe('HTML Attributes', () => {
    it('forwards additional HTML attributes', () => {
      render(
        <Label htmlFor="test" data-testid="custom-label" title="Label title">
          Label
        </Label>
      )

      const label = screen.getByTestId('custom-label')
      expect(label).toHaveAttribute('title', 'Label title')
    })

    it('supports onClick handler', () => {
      let clicked = false
      render(<Label onClick={() => (clicked = true)}>Clickable</Label>)

      const label = screen.getByText('Clickable')
      label.click()
      expect(clicked).toBe(true)
    })
  })

  // Group 6: Accessibility
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Label htmlFor="input">Username</Label>)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations when required', async () => {
      const { container } = render(
        <Label htmlFor="input" required>
          Email
        </Label>
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations when disabled', async () => {
      const { container } = render(
        <Label htmlFor="input" disabled>
          Disabled
        </Label>
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })
})
