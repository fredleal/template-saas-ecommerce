'use client'
/**
 * AuthForm - Organism-level authentication form component
 *
 * Demonstrates atomic design composition:
 * - Uses Button, Input, Text, Heading atoms
 * - Manages complex form state
 * - Full validation and accessibility
 *
 * @author Fred Leal
 * @date 2025-01-11
 * @ai-assisted Ollama (llama3.1:8b) for design patterns analysis
 */

import React, { useState, FormEvent } from 'react'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'
import { Text, Heading } from '../../atoms/Text/Text'
import { AuthFormProps, AuthFormData, AuthFormErrors } from './types'

export const AuthForm: React.FC<AuthFormProps> = ({
  mode,
  onSubmit,
  onModeSwitch,
  isLoading = false,
  error,
  successMessage,
  className = '',
}) => {
  // Form state
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
    confirmPassword: '',
  })

  // Validation errors
  const [errors, setErrors] = useState<AuthFormErrors>({})

  // Email validation regex (RFC 5322 simplified)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  /**
   * Validate form data
   * Validation rules from design doc (Ollama analysis)
   */
  const validate = (): boolean => {
    const newErrors: AuthFormErrors = {}

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (formData.email.length > 254) {
      newErrors.email = 'Email too long (max 254 characters)'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (mode === 'login' && formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    } else if (mode === 'signup' && formData.password.length < 12) {
      newErrors.password = 'Password must be at least 12 characters'
    } else if (mode === 'signup') {
      // Check password complexity for signup
      const hasUpper = /[A-Z]/.test(formData.password)
      const hasLower = /[a-z]/.test(formData.password)
      const hasNumber = /[0-9]/.test(formData.password)
      const hasSpecial = /[!@#$%^&*]/.test(formData.password)

      if (!hasUpper || !hasLower || !hasNumber || !hasSpecial) {
        newErrors.password =
          'Password must contain uppercase, lowercase, number, and special character'
      }
    }

    // Confirm password (signup only)
    if (mode === 'signup') {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password'
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    try {
      await onSubmit(formData)
    } catch (err) {
      // Error handled by parent
    }
  }

  /**
   * Handle input changes with error clearing
   */
  const handleChange =
    (field: keyof AuthFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }))

      // Clear error for this field when user types
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }))
      }
    }

  const isSignup = mode === 'signup'

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-6 ${className}`}
      role="form"
      aria-label={isSignup ? 'Sign up form' : 'Sign in form'}
      noValidate
    >
      {/* Header */}
      <div className="space-y-2">
        <Heading level={2}>{isSignup ? 'Create Account' : 'Sign In'}</Heading>
        <Text size="sm" color="muted">
          {isSignup
            ? 'Sign up to get started with our platform'
            : 'Welcome back! Please sign in to continue'}
        </Text>
      </div>

      {/* General error message */}
      {error && (
        <div
          role="alert"
          aria-live="polite"
          className="p-3 bg-red-50 border border-red-200 rounded-md"
        >
          <Text size="sm" color="error">
            {error}
          </Text>
        </div>
      )}

      {/* Success message */}
      {successMessage && (
        <div
          role="alert"
          aria-live="polite"
          className="p-3 bg-green-50 border border-green-200 rounded-md"
        >
          <Text size="sm" className="text-green-700">
            {successMessage}
          </Text>
        </div>
      )}

      {/* Email field */}
      <div className="space-y-2">
        <label htmlFor="email" className="block">
          <Text size="sm" weight="medium">
            Email
          </Text>
        </label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          error={!!errors.email}
          disabled={isLoading}
          placeholder="your@email.com"
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <Text id="email-error" size="sm" color="error">
            {errors.email}
          </Text>
        )}
      </div>

      {/* Password field */}
      <div className="space-y-2">
        <label htmlFor="password" className="block">
          <Text size="sm" weight="medium">
            Password
          </Text>
        </label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange('password')}
          error={!!errors.password}
          disabled={isLoading}
          placeholder={isSignup ? 'Min 12 characters' : 'Enter password'}
          aria-describedby={errors.password ? 'password-error' : undefined}
          aria-invalid={!!errors.password}
        />
        {errors.password && (
          <Text id="password-error" size="sm" color="error">
            {errors.password}
          </Text>
        )}
      </div>

      {/* Confirm password field (signup only) */}
      {isSignup && (
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block">
            <Text size="sm" weight="medium">
              Confirm Password
            </Text>
          </label>
          <Input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword || ''}
            onChange={handleChange('confirmPassword')}
            error={!!errors.confirmPassword}
            disabled={isLoading}
            placeholder="Re-enter password"
            aria-describedby={
              errors.confirmPassword ? 'confirm-password-error' : undefined
            }
            aria-invalid={!!errors.confirmPassword}
          />
          {errors.confirmPassword && (
            <Text id="confirm-password-error" size="sm" color="error">
              {errors.confirmPassword}
            </Text>
          )}
        </div>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        variant="primary"
        size="md"
        isLoading={isLoading}
        disabled={isLoading}
        className="w-full"
        aria-busy={isLoading}
      >
        {isLoading
          ? isSignup
            ? 'Creating account...'
            : 'Signing in...'
          : isSignup
            ? 'Create Account'
            : 'Sign In'}
      </Button>

      {/* Mode switch */}
      {onModeSwitch && (
        <div className="text-center">
          <Text size="sm" color="muted">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={onModeSwitch}
              className="text-blue-500 hover:underline font-medium"
              disabled={isLoading}
            >
              {isSignup ? 'Sign In' : 'Sign Up'}
            </button>
          </Text>
        </div>
      )}
    </form>
  )
}
