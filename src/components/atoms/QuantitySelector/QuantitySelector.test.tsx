import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { QuantitySelector } from './QuantitySelector'

describe('QuantitySelector', () => {
  // Grupo 1: Testes de Renderização
  describe('Rendering', () => {
    it('renders with initial value', () => {
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={5} onChange={mockOnChange} />)

      expect(screen.getByTestId('quantity-value')).toHaveTextContent('5')
    })

    it('renders increment and decrement buttons', () => {
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={1} onChange={mockOnChange} />)

      expect(screen.getByTestId('quantity-increment')).toBeInTheDocument()
      expect(screen.getByTestId('quantity-decrement')).toBeInTheDocument()
    })

    it('renders with correct aria-labels', () => {
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={1} onChange={mockOnChange} />)

      expect(screen.getByLabelText('Increase quantity')).toBeInTheDocument()
      expect(screen.getByLabelText('Decrease quantity')).toBeInTheDocument()
    })
  })

  // Grupo 2: Testes de Interação
  describe('User Interactions', () => {
    it('calls onChange when increment button is clicked', async () => {
      const user = userEvent.setup()
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={5} onChange={mockOnChange} />)

      const incrementBtn = screen.getByTestId('quantity-increment')
      await user.click(incrementBtn)

      expect(mockOnChange).toHaveBeenCalledWith(6)
    })

    it('calls onChange when decrement button is clicked', async () => {
      const user = userEvent.setup()
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={5} onChange={mockOnChange} />)

      const decrementBtn = screen.getByTestId('quantity-decrement')
      await user.click(decrementBtn)

      expect(mockOnChange).toHaveBeenCalledWith(4)
    })

    it('increments value multiple times', async () => {
      const user = userEvent.setup()
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={1} onChange={mockOnChange} />)

      const incrementBtn = screen.getByTestId('quantity-increment')
      await user.click(incrementBtn)
      await user.click(incrementBtn)
      await user.click(incrementBtn)

      expect(mockOnChange).toHaveBeenCalledTimes(3)
      expect(mockOnChange).toHaveBeenNthCalledWith(1, 2)
      expect(mockOnChange).toHaveBeenNthCalledWith(2, 2)
      expect(mockOnChange).toHaveBeenNthCalledWith(3, 2)
    })
  })

  // Grupo 3: Testes de Min/Max Boundaries
  describe('Min/Max Boundaries', () => {
    it('disables decrement button when value equals min', () => {
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={1} min={1} onChange={mockOnChange} />)

      const decrementBtn = screen.getByTestId('quantity-decrement')
      expect(decrementBtn).toBeDisabled()
    })

    it('disables increment button when value equals max', () => {
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={10} max={10} onChange={mockOnChange} />)

      const incrementBtn = screen.getByTestId('quantity-increment')
      expect(incrementBtn).toBeDisabled()
    })

    it('does not call onChange when decrementing at min value', async () => {
      const user = userEvent.setup()
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={1} min={1} onChange={mockOnChange} />)

      const decrementBtn = screen.getByTestId('quantity-decrement')
      await user.click(decrementBtn)

      expect(mockOnChange).not.toHaveBeenCalled()
    })

    it('does not call onChange when incrementing at max value', async () => {
      const user = userEvent.setup()
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={99} max={99} onChange={mockOnChange} />)

      const incrementBtn = screen.getByTestId('quantity-increment')
      await user.click(incrementBtn)

      expect(mockOnChange).not.toHaveBeenCalled()
    })

    it('respects custom min value', () => {
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={5} min={5} onChange={mockOnChange} />)

      const decrementBtn = screen.getByTestId('quantity-decrement')
      expect(decrementBtn).toBeDisabled()
    })

    it('respects custom max value', () => {
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={20} max={20} onChange={mockOnChange} />)

      const incrementBtn = screen.getByTestId('quantity-increment')
      expect(incrementBtn).toBeDisabled()
    })
  })

  // Grupo 4: Testes de Disabled State
  describe('Disabled State', () => {
    it('disables both buttons when disabled prop is true', () => {
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={5} disabled onChange={mockOnChange} />)

      expect(screen.getByTestId('quantity-increment')).toBeDisabled()
      expect(screen.getByTestId('quantity-decrement')).toBeDisabled()
    })

    it('does not call onChange when disabled', async () => {
      const user = userEvent.setup()
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={5} disabled onChange={mockOnChange} />)

      const incrementBtn = screen.getByTestId('quantity-increment')
      await user.click(incrementBtn)

      expect(mockOnChange).not.toHaveBeenCalled()
    })
  })

  // Grupo 5: Testes de Tamanhos
  describe('Sizes', () => {
    it('renders with small size', () => {
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={1} size="sm" onChange={mockOnChange} />)

      const container = screen.getByTestId('quantity-selector')
      expect(container).toHaveClass('h-8')
    })

    it('renders with medium size (default)', () => {
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={1} size="md" onChange={mockOnChange} />)

      const container = screen.getByTestId('quantity-selector')
      expect(container).toHaveClass('h-10')
    })

    it('renders with large size', () => {
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={1} size="lg" onChange={mockOnChange} />)

      const container = screen.getByTestId('quantity-selector')
      expect(container).toHaveClass('h-12')
    })
  })

  // Grupo 6: Testes de Acessibilidade
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const mockOnChange = vi.fn()
      const { container } = render(
        <QuantitySelector value={5} onChange={mockOnChange} />
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('buttons have correct type attribute', () => {
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={5} onChange={mockOnChange} />)

      const buttons = screen.getAllByRole('button')
      buttons.forEach(button => {
        expect(button).toHaveAttribute('type', 'button')
      })
    })
  })

  // Grupo 7: Testes de Edge Cases
  describe('Edge Cases', () => {
    it('handles value of 0', () => {
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={0} min={0} onChange={mockOnChange} />)

      expect(screen.getByTestId('quantity-value')).toHaveTextContent('0')
    })

    it('handles large values', () => {
      const mockOnChange = vi.fn()
      render(<QuantitySelector value={999} max={999} onChange={mockOnChange} />)

      expect(screen.getByTestId('quantity-value')).toHaveTextContent('999')
    })

    it('applies custom className', () => {
      const mockOnChange = vi.fn()
      render(
        <QuantitySelector
          value={1}
          onChange={mockOnChange}
          className="custom-class"
        />
      )

      const container = screen.getByTestId('quantity-selector')
      expect(container).toHaveClass('custom-class')
    })
  })
})
