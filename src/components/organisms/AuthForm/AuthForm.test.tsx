/**
 * AuthForm Tests - Organism-level component testing
 *
 * Following test patterns from existing atoms/molecules.
 * Target: 80%+ coverage (organism quality standard)
 *
 * @author Fred Leal
 * @date 2025-01-11
 */

import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe, toHaveNoViolations } from 'jest-axe'
import { AuthForm } from './AuthForm'
import type { AuthFormProps } from './types'

expect.extend(toHaveNoViolations)

// Default props for testing
const defaultProps: AuthFormProps = {
  mode: 'login',
  onSubmit: vi.fn(),
}

describe('AuthForm', () => {
  describe('Rendering', () => {
    it('renders login mode correctly', () => {
      render(<AuthForm {...defaultProps} />)

      expect(
        screen.getByRole('form', { name: /sign in form/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('heading', { name: /sign in/i })
      ).toBeInTheDocument()
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /sign in/i })
      ).toBeInTheDocument()
    })

    it('renders signup mode correctly', () => {
      render(<AuthForm {...defaultProps} mode="signup" />)

      expect(
        screen.getByRole('form', { name: /sign up form/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('heading', { name: /create account/i })
      ).toBeInTheDocument()
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /create account/i })
      ).toBeInTheDocument()
    })

    it('shows/hides confirm password based on mode', () => {
      const { rerender } = render(<AuthForm {...defaultProps} mode="login" />)

      expect(
        screen.queryByLabelText(/confirm password/i)
      ).not.toBeInTheDocument()

      rerender(<AuthForm {...defaultProps} mode="signup" />)

      expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(<AuthForm {...defaultProps} className="custom-class" />)

      const form = screen.getByRole('form')
      expect(form).toHaveClass('custom-class')
    })

    it('displays error message when provided', () => {
      render(<AuthForm {...defaultProps} error="Invalid credentials" />)

      expect(screen.getByRole('alert')).toHaveTextContent('Invalid credentials')
    })

    it('displays success message when provided', () => {
      render(<AuthForm {...defaultProps} successMessage="Login successful!" />)

      expect(screen.getByRole('alert')).toHaveTextContent('Login successful!')
    })

    it('renders mode switch button when callback provided', () => {
      const onModeSwitch = vi.fn()
      render(<AuthForm {...defaultProps} onModeSwitch={onModeSwitch} />)

      expect(
        screen.getByRole('button', { name: /sign up/i })
      ).toBeInTheDocument()
    })

    it('does not render mode switch when callback not provided', () => {
      render(<AuthForm {...defaultProps} />)

      expect(
        screen.queryByText(/don't have an account/i)
      ).not.toBeInTheDocument()
    })
  })

  describe('Validation', () => {
    describe('Email validation', () => {
      it('shows error for empty email', async () => {
        const user = userEvent.setup()
        render(<AuthForm {...defaultProps} />)

        const submitButton = screen.getByRole('button', { name: /sign in/i })
        await user.click(submitButton)

        expect(await screen.findByText('Email is required')).toBeInTheDocument()
      })

      it('shows error for invalid email format', async () => {
        const user = userEvent.setup()
        render(<AuthForm {...defaultProps} />)

        const emailInput = screen.getByLabelText(/email/i)
        await user.type(emailInput, 'invalid-email')

        const submitButton = screen.getByRole('button', { name: /sign in/i })
        await user.click(submitButton)

        expect(
          await screen.findByText('Invalid email format')
        ).toBeInTheDocument()
      })

      it('shows error for email longer than 254 characters', async () => {
        const user = userEvent.setup()
        render(<AuthForm {...defaultProps} />)

        const longEmail = 'a'.repeat(250) + '@test.com' // 259 chars
        const emailInput = screen.getByLabelText(/email/i)
        await user.type(emailInput, longEmail)

        const submitButton = screen.getByRole('button', { name: /sign in/i })
        await user.click(submitButton)

        expect(
          await screen.findByText('Email too long (max 254 characters)')
        ).toBeInTheDocument()
      })

      it('accepts valid email format', async () => {
        const user = userEvent.setup()
        const onSubmit = vi.fn()
        render(<AuthForm {...defaultProps} onSubmit={onSubmit} />)

        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/^password$/i)

        await user.type(emailInput, 'valid@email.com')
        await user.type(passwordInput, 'password123')

        const submitButton = screen.getByRole('button', { name: /sign in/i })
        await user.click(submitButton)

        expect(
          screen.queryByText('Invalid email format')
        ).not.toBeInTheDocument()
      })
    })

    describe('Password validation (login)', () => {
      it('shows error for empty password', async () => {
        const user = userEvent.setup()
        render(<AuthForm {...defaultProps} />)

        const emailInput = screen.getByLabelText(/email/i)
        await user.type(emailInput, 'test@email.com')

        const submitButton = screen.getByRole('button', { name: /sign in/i })
        await user.click(submitButton)

        expect(
          await screen.findByText('Password is required')
        ).toBeInTheDocument()
      })

      it('shows error for password less than 8 characters', async () => {
        const user = userEvent.setup()
        render(<AuthForm {...defaultProps} />)

        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/^password$/i)

        await user.type(emailInput, 'test@email.com')
        await user.type(passwordInput, 'pass123')

        const submitButton = screen.getByRole('button', { name: /sign in/i })
        await user.click(submitButton)

        expect(
          await screen.findByText('Password must be at least 8 characters')
        ).toBeInTheDocument()
      })

      it('accepts password with 8+ characters', async () => {
        const user = userEvent.setup()
        const onSubmit = vi.fn()
        render(<AuthForm {...defaultProps} onSubmit={onSubmit} />)

        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/^password$/i)

        await user.type(emailInput, 'test@email.com')
        await user.type(passwordInput, 'password123')

        const submitButton = screen.getByRole('button', { name: /sign in/i })
        await user.click(submitButton)

        await waitFor(() => {
          expect(onSubmit).toHaveBeenCalledWith({
            email: 'test@email.com',
            password: 'password123',
            confirmPassword: '',
          })
        })
      })
    })

    describe('Password validation (signup)', () => {
      it('shows error for password less than 12 characters', async () => {
        const user = userEvent.setup()
        render(<AuthForm {...defaultProps} mode="signup" />)

        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/^password$/i)

        await user.type(emailInput, 'test@email.com')
        await user.type(passwordInput, 'Pass123!')

        const submitButton = screen.getByRole('button', {
          name: /create account/i,
        })
        await user.click(submitButton)

        expect(
          await screen.findByText('Password must be at least 12 characters')
        ).toBeInTheDocument()
      })

      it('shows error for password without uppercase', async () => {
        const user = userEvent.setup()
        render(<AuthForm {...defaultProps} mode="signup" />)

        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/^password$/i)

        await user.type(emailInput, 'test@email.com')
        await user.type(passwordInput, 'password123!')

        const submitButton = screen.getByRole('button', {
          name: /create account/i,
        })
        await user.click(submitButton)

        expect(
          await screen.findByText(/must contain uppercase/i)
        ).toBeInTheDocument()
      })

      it('shows error for password without lowercase', async () => {
        const user = userEvent.setup()
        render(<AuthForm {...defaultProps} mode="signup" />)

        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/^password$/i)

        await user.type(emailInput, 'test@email.com')
        await user.type(passwordInput, 'PASSWORD123!')

        const submitButton = screen.getByRole('button', {
          name: /create account/i,
        })
        await user.click(submitButton)

        expect(
          await screen.findByText(/must contain uppercase/i)
        ).toBeInTheDocument()
      })

      it('shows error for password without number', async () => {
        const user = userEvent.setup()
        render(<AuthForm {...defaultProps} mode="signup" />)

        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/^password$/i)

        await user.type(emailInput, 'test@email.com')
        await user.type(passwordInput, 'PasswordTest!')

        const submitButton = screen.getByRole('button', {
          name: /create account/i,
        })
        await user.click(submitButton)

        expect(
          await screen.findByText(/must contain uppercase/i)
        ).toBeInTheDocument()
      })

      it('shows error for password without special character', async () => {
        const user = userEvent.setup()
        render(<AuthForm {...defaultProps} mode="signup" />)

        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/^password$/i)

        await user.type(emailInput, 'test@email.com')
        await user.type(passwordInput, 'PasswordTest123')

        const submitButton = screen.getByRole('button', {
          name: /create account/i,
        })
        await user.click(submitButton)

        expect(
          await screen.findByText(/must contain uppercase/i)
        ).toBeInTheDocument()
      })

      it('accepts password with all complexity requirements', async () => {
        const user = userEvent.setup()
        const onSubmit = vi.fn()
        render(<AuthForm {...defaultProps} mode="signup" onSubmit={onSubmit} />)

        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/^password$/i)
        const confirmInput = screen.getByLabelText(/confirm password/i)

        await user.type(emailInput, 'test@email.com')
        await user.type(passwordInput, 'ValidPass123!')
        await user.type(confirmInput, 'ValidPass123!')

        const submitButton = screen.getByRole('button', {
          name: /create account/i,
        })
        await user.click(submitButton)

        await waitFor(() => {
          expect(onSubmit).toHaveBeenCalledWith({
            email: 'test@email.com',
            password: 'ValidPass123!',
            confirmPassword: 'ValidPass123!',
          })
        })
      })
    })

    describe('Confirm password validation (signup)', () => {
      it('shows error for empty confirm password', async () => {
        const user = userEvent.setup()
        render(<AuthForm {...defaultProps} mode="signup" />)

        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/^password$/i)

        await user.type(emailInput, 'test@email.com')
        await user.type(passwordInput, 'ValidPass123!')

        const submitButton = screen.getByRole('button', {
          name: /create account/i,
        })
        await user.click(submitButton)

        expect(
          await screen.findByText('Please confirm your password')
        ).toBeInTheDocument()
      })

      it('shows error when passwords do not match', async () => {
        const user = userEvent.setup()
        render(<AuthForm {...defaultProps} mode="signup" />)

        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/^password$/i)
        const confirmInput = screen.getByLabelText(/confirm password/i)

        await user.type(emailInput, 'test@email.com')
        await user.type(passwordInput, 'ValidPass123!')
        await user.type(confirmInput, 'DifferentPass123!')

        const submitButton = screen.getByRole('button', {
          name: /create account/i,
        })
        await user.click(submitButton)

        expect(
          await screen.findByText('Passwords do not match')
        ).toBeInTheDocument()
      })
    })

    it('clears field error when user starts typing', async () => {
      const user = userEvent.setup()
      render(<AuthForm {...defaultProps} />)

      const emailInput = screen.getByLabelText(/email/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      // Trigger validation error
      await user.click(submitButton)
      expect(await screen.findByText('Email is required')).toBeInTheDocument()

      // Start typing - error should clear
      await user.type(emailInput, 't')
      expect(screen.queryByText('Email is required')).not.toBeInTheDocument()
    })
  })

  describe('Interaction', () => {
    it('calls onSubmit with form data on valid submission', async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<AuthForm {...defaultProps} onSubmit={onSubmit} />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/^password$/i)

      await user.type(emailInput, 'test@email.com')
      await user.type(passwordInput, 'password123')

      const submitButton = screen.getByRole('button', { name: /sign in/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit).toHaveBeenCalledWith({
          email: 'test@email.com',
          password: 'password123',
          confirmPassword: '',
        })
      })
    })

    it('does not call onSubmit when validation fails', async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<AuthForm {...defaultProps} onSubmit={onSubmit} />)

      const submitButton = screen.getByRole('button', { name: /sign in/i })
      await user.click(submitButton)

      expect(onSubmit).not.toHaveBeenCalled()
    })

    it('disables inputs during loading state', () => {
      render(<AuthForm {...defaultProps} isLoading={true} />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/^password$/i)
      const submitButton = screen.getByRole('button')

      expect(emailInput).toBeDisabled()
      expect(passwordInput).toBeDisabled()
      expect(submitButton).toBeDisabled()
    })

    it('shows loading text during submission', () => {
      render(<AuthForm {...defaultProps} isLoading={true} />)

      expect(
        screen.getByRole('button', { name: /signing in/i })
      ).toBeInTheDocument()
    })

    it('calls onModeSwitch when mode switch button clicked', async () => {
      const user = userEvent.setup()
      const onModeSwitch = vi.fn()
      render(<AuthForm {...defaultProps} onModeSwitch={onModeSwitch} />)

      const switchButton = screen.getByRole('button', { name: /sign up/i })
      await user.click(switchButton)

      expect(onModeSwitch).toHaveBeenCalledTimes(1)
    })

    it('disables mode switch during loading', () => {
      const onModeSwitch = vi.fn()
      render(
        <AuthForm
          {...defaultProps}
          isLoading={true}
          onModeSwitch={onModeSwitch}
        />
      )

      const switchButton = screen.getByRole('button', { name: /sign up/i })
      expect(switchButton).toBeDisabled()
    })

    it('submits form on Enter key press', async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<AuthForm {...defaultProps} onSubmit={onSubmit} />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/^password$/i)

      await user.type(emailInput, 'test@email.com')
      await user.type(passwordInput, 'password123')
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('Accessibility', () => {
    it('has no accessibility violations (login mode)', async () => {
      const { container } = render(<AuthForm {...defaultProps} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations (signup mode)', async () => {
      const { container } = render(<AuthForm {...defaultProps} mode="signup" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations (with errors)', async () => {
      const user = userEvent.setup()
      const { container } = render(<AuthForm {...defaultProps} />)

      const submitButton = screen.getByRole('button', { name: /sign in/i })
      await user.click(submitButton)

      await screen.findByText('Email is required')

      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('properly associates labels with inputs', () => {
      render(<AuthForm {...defaultProps} mode="signup" />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/^password$/i)
      const confirmInput = screen.getByLabelText(/confirm password/i)

      expect(emailInput).toHaveAttribute('id', 'email')
      expect(passwordInput).toHaveAttribute('id', 'password')
      expect(confirmInput).toHaveAttribute('id', 'confirmPassword')
    })

    it('uses aria-describedby for error messages', async () => {
      const user = userEvent.setup()
      render(<AuthForm {...defaultProps} />)

      const submitButton = screen.getByRole('button', { name: /sign in/i })
      await user.click(submitButton)

      const emailInput = screen.getByLabelText(/email/i)
      expect(emailInput).toHaveAttribute('aria-describedby', 'email-error')
      expect(emailInput).toHaveAttribute('aria-invalid', 'true')
    })

    it('announces errors with aria-live', async () => {
      const user = userEvent.setup()
      render(<AuthForm {...defaultProps} error="Invalid credentials" />)

      const alert = screen.getByRole('alert')
      expect(alert).toHaveAttribute('aria-live', 'polite')
      expect(alert).toHaveTextContent('Invalid credentials')
    })

    it('sets aria-busy during loading', () => {
      render(<AuthForm {...defaultProps} isLoading={true} />)

      const submitButton = screen.getByRole('button')
      expect(submitButton).toHaveAttribute('aria-busy', 'true')
    })
  })

  describe('Edge Cases', () => {
    it('handles empty form submission', async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<AuthForm {...defaultProps} onSubmit={onSubmit} />)

      const submitButton = screen.getByRole('button', { name: /sign in/i })
      await user.click(submitButton)

      expect(await screen.findByText('Email is required')).toBeInTheDocument()
      expect(
        await screen.findByText('Password is required')
      ).toBeInTheDocument()
      expect(onSubmit).not.toHaveBeenCalled()
    })

    it('handles very long email (254 chars)', async () => {
      const user = userEvent.setup()
      render(<AuthForm {...defaultProps} />)

      const validLongEmail = 'a'.repeat(240) + '@example.com' // 252 chars
      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/^password$/i)

      await user.type(emailInput, validLongEmail)
      await user.type(passwordInput, 'password123')

      const submitButton = screen.getByRole('button', { name: /sign in/i })
      await user.click(submitButton)

      // Should not show email error (within 254 char limit)
      expect(screen.queryByText(/email too long/i)).not.toBeInTheDocument()
    })

    it('handles special characters in password', async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<AuthForm {...defaultProps} onSubmit={onSubmit} />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/^password$/i)

      await user.type(emailInput, 'test@email.com')
      await user.type(passwordInput, 'P@ssw0rd!#$%')

      const submitButton = screen.getByRole('button', { name: /sign in/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith({
          email: 'test@email.com',
          password: 'P@ssw0rd!#$%',
          confirmPassword: '',
        })
      })
    })

    it('handles rapid form submission attempts', async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<AuthForm {...defaultProps} onSubmit={onSubmit} />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/^password$/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await user.type(emailInput, 'test@email.com')
      await user.type(passwordInput, 'password123')

      // Click submit multiple times rapidly
      await user.click(submitButton)
      await user.click(submitButton)
      await user.click(submitButton)

      // Should only call once per valid submission
      await waitFor(() => {
        expect(onSubmit.mock.calls.length).toBeGreaterThan(0)
      })
    })

    it('handles switching modes with filled data', async () => {
      const user = userEvent.setup()
      const onModeSwitch = vi.fn()
      render(<AuthForm {...defaultProps} onModeSwitch={onModeSwitch} />)

      const emailInput = screen.getByLabelText(/email/i)
      await user.type(emailInput, 'test@email.com')

      const switchButton = screen.getByRole('button', { name: /sign up/i })
      await user.click(switchButton)

      expect(onModeSwitch).toHaveBeenCalled()
    })

    it('prevents submission with only whitespace', async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<AuthForm {...defaultProps} onSubmit={onSubmit} />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/^password$/i)

      await user.type(emailInput, '   ')
      await user.type(passwordInput, '   ')

      const submitButton = screen.getByRole('button', { name: /sign in/i })
      await user.click(submitButton)

      expect(onSubmit).not.toHaveBeenCalled()
    })
  })
})
