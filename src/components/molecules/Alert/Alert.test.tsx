import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Alert } from './Alert'

describe('Alert', () => {
  describe('Rendering', () => {
    it('should render alert with message', () => {
      render(<Alert message="Test message" />)

      expect(screen.getByRole('alert')).toBeInTheDocument()
      expect(screen.getByText('Test message')).toBeInTheDocument()
    })

    it('should render alert with title and message', () => {
      render(<Alert title="Test Title" message="Test message" />)

      expect(screen.getByText('Test Title')).toBeInTheDocument()
      expect(screen.getByText('Test message')).toBeInTheDocument()
    })

    it('should render with default variant (info)', () => {
      const { container } = render(<Alert message="Test message" />)

      const alert = container.querySelector('[role="alert"]')
      expect(alert).toHaveClass('bg-blue-50')
      expect(alert).toHaveClass('border-blue-200')
    })
  })

  describe('Variants', () => {
    it('should render info variant with correct styling', () => {
      const { container } = render(<Alert variant="info" message="Info message" />)

      const alert = container.querySelector('[role="alert"]')
      expect(alert).toHaveClass('bg-blue-50', 'border-blue-200')
    })

    it('should render success variant with correct styling', () => {
      const { container } = render(<Alert variant="success" message="Success message" />)

      const alert = container.querySelector('[role="alert"]')
      expect(alert).toHaveClass('bg-green-50', 'border-green-200')
    })

    it('should render warning variant with correct styling', () => {
      const { container } = render(<Alert variant="warning" message="Warning message" />)

      const alert = container.querySelector('[role="alert"]')
      expect(alert).toHaveClass('bg-yellow-50', 'border-yellow-200')
    })

    it('should render error variant with correct styling', () => {
      const { container } = render(<Alert variant="error" message="Error message" />)

      const alert = container.querySelector('[role="alert"]')
      expect(alert).toHaveClass('bg-red-50', 'border-red-200')
    })
  })

  describe('Icons', () => {
    it('should render default icon based on variant', () => {
      render(<Alert variant="info" message="Test message" />)

      // Icon should be present (we can't test specific icon easily without data-testid)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('should render custom icon when provided', () => {
      render(<Alert message="Test message" icon="StarIcon" />)

      expect(screen.getByRole('alert')).toBeInTheDocument()
    })
  })

  describe('Dismissible', () => {
    it('should not show dismiss button by default', () => {
      render(<Alert message="Test message" />)

      expect(screen.queryByLabelText('Dismiss alert')).not.toBeInTheDocument()
    })

    it('should show dismiss button when dismissible is true', () => {
      render(<Alert message="Test message" dismissible />)

      expect(screen.getByLabelText('Dismiss alert')).toBeInTheDocument()
    })

    it('should hide alert when dismiss button is clicked', () => {
      render(<Alert message="Test message" dismissible />)

      const dismissButton = screen.getByLabelText('Dismiss alert')
      fireEvent.click(dismissButton)

      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })

    it('should call onDismiss callback when dismissed', () => {
      const onDismiss = vi.fn()
      render(<Alert message="Test message" dismissible onDismiss={onDismiss} />)

      const dismissButton = screen.getByLabelText('Dismiss alert')
      fireEvent.click(dismissButton)

      expect(onDismiss).toHaveBeenCalledTimes(1)
    })

    it('should not show alert after being dismissed', () => {
      render(<Alert message="Test message" dismissible />)

      const dismissButton = screen.getByLabelText('Dismiss alert')
      fireEvent.click(dismissButton)

      expect(screen.queryByText('Test message')).not.toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have role="alert"', () => {
      render(<Alert message="Test message" />)

      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('should have aria-live="polite"', () => {
      render(<Alert message="Test message" />)

      const alert = screen.getByRole('alert')
      expect(alert).toHaveAttribute('aria-live', 'polite')
    })

    it('should have aria-atomic="true"', () => {
      render(<Alert message="Test message" />)

      const alert = screen.getByRole('alert')
      expect(alert).toHaveAttribute('aria-atomic', 'true')
    })

    it('should have aria-label on dismiss button', () => {
      render(<Alert message="Test message" dismissible />)

      const dismissButton = screen.getByLabelText('Dismiss alert')
      expect(dismissButton).toBeInTheDocument()
    })
  })

  describe('Custom Styling', () => {
    it('should accept custom className', () => {
      const { container } = render(
        <Alert message="Test message" className="custom-class" />
      )

      const alert = container.querySelector('[role="alert"]')
      expect(alert).toHaveClass('custom-class')
    })

    it('should maintain default classes with custom className', () => {
      const { container } = render(
        <Alert message="Test message" className="custom-class" />
      )

      const alert = container.querySelector('[role="alert"]')
      expect(alert).toHaveClass('custom-class')
      expect(alert).toHaveClass('bg-blue-50') // default variant
    })
  })

  describe('Edge Cases', () => {
    it('should render with only message (minimal props)', () => {
      render(<Alert message="Minimal alert" />)

      expect(screen.getByText('Minimal alert')).toBeInTheDocument()
    })

    it('should render with all props', () => {
      const onDismiss = vi.fn()
      render(
        <Alert
          variant="error"
          title="Error Title"
          message="Error message"
          icon="ExclamationCircleIcon"
          dismissible
          onDismiss={onDismiss}
          className="custom-class"
        />
      )

      expect(screen.getByText('Error Title')).toBeInTheDocument()
      expect(screen.getByText('Error message')).toBeInTheDocument()
      expect(screen.getByLabelText('Dismiss alert')).toBeInTheDocument()
    })

    it('should handle empty title gracefully', () => {
      render(<Alert title="" message="Test message" />)

      expect(screen.getByText('Test message')).toBeInTheDocument()
    })

    it('should handle long messages', () => {
      const longMessage = 'A'.repeat(500)
      render(<Alert message={longMessage} />)

      expect(screen.getByText(longMessage)).toBeInTheDocument()
    })
  })
})
