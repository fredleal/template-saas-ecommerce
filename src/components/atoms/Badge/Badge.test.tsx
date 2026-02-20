import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Badge } from './Badge'

describe('Badge', () => {
  // Grupo 1: Testes de Renderização
  describe('Rendering', () => {
    it('renders text content correctly', () => {
      render(<Badge>New</Badge>)

      const badge = screen.getByRole('status')
      expect(badge).toHaveTextContent('New')
    })

    it('renders with different variants', () => {
      // Testa comportamento visual via classes Tailwind
      const { rerender } = render(<Badge variant="default">Default</Badge>)
      const badge = screen.getByText('Default')
      expect(badge).toHaveClass('bg-[var(--color-gray-100,#f3f4f6)]') // Verifica cor do default

      rerender(<Badge variant="success">Success</Badge>)
      expect(screen.getByText('Success')).toHaveClass(
        'bg-[var(--color-success-100,#dcfce7)]'
      ) // Verde

      rerender(<Badge variant="error">Error</Badge>)
      expect(screen.getByText('Error')).toHaveClass(
        'bg-[var(--color-error-100,#fee2e2)]'
      ) // Vermelho
    })

    it('renders with different sizes', () => {
      const { rerender } = render(<Badge size="sm">Small</Badge>)
      const smallBadge = screen.getByText('Small')
      expect(smallBadge).toHaveClass('text-xs') // Small usa text-xs

      rerender(<Badge size="md">Medium</Badge>)
      expect(screen.getByText('Medium')).toHaveClass('text-sm') // Medium usa text-sm

      rerender(<Badge size="lg">Large</Badge>)
      expect(screen.getByText('Large')).toHaveClass('text-base') // Large usa text-base
    })
  })

  // Grupo 2: Testes de Acessibilidade
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Badge>Accessible Badge</Badge>)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has correct role attribute', () => {
      render(<Badge>Status Badge</Badge>)

      const badge = screen.getByRole('status')
      expect(badge).toBeInTheDocument()
    })
  })

  // Grupo 3: Testes de Edge Cases
  describe('Edge Cases', () => {
    it('handles empty children gracefully', () => {
      render(<Badge>{''}</Badge>)

      const badge = screen.getByRole('status')
      expect(badge).toBeInTheDocument()
      expect(badge).toBeEmptyDOMElement()
    })

    it('handles long text without breaking', () => {
      const longText = 'A'.repeat(100)
      render(<Badge>{longText}</Badge>)

      expect(screen.getByText(longText)).toBeInTheDocument()
    })

    it('handles undefined children', () => {
      render(<Badge>{undefined}</Badge>)

      expect(screen.getByRole('status')).toBeInTheDocument()
    })
  })
})
