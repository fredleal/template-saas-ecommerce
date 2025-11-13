import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './Input'

describe('Input', () => {
  describe('Rendering', () => {
    it('renders input element', () => {
      render(<Input />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('renders with placeholder', () => {
      render(<Input placeholder="Enter text" />)
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
    })

    it('renders with default value', () => {
      render(<Input defaultValue="Initial text" />)
      expect(screen.getByDisplayValue('Initial text')).toBeInTheDocument()
    })

    it('renders with controlled value', () => {
      render(<Input value="Controlled value" onChange={() => {}} />)
      expect(screen.getByDisplayValue('Controlled value')).toBeInTheDocument()
    })
  })

  describe('Input Types', () => {
    it('renders as text input by default', () => {
      render(<Input />)
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text')
    })

    it('renders as email input', () => {
      render(<Input type="email" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('type', 'email')
    })

    it('renders as password input', () => {
      const { container } = render(<Input type="password" />)
      const input = container.querySelector('input[type="password"]')
      expect(input).toHaveAttribute('type', 'password')
    })

    it('renders as number input', () => {
      const { container } = render(<Input type="number" />)
      const input = container.querySelector('input[type="number"]')
      expect(input).toHaveAttribute('type', 'number')
    })

    it('renders as tel input', () => {
      const { container } = render(<Input type="tel" />)
      const input = container.querySelector('input[type="tel"]')
      expect(input).toHaveAttribute('type', 'tel')
    })

    it('renders as url input', () => {
      const { container } = render(<Input type="url" />)
      const input = container.querySelector('input[type="url"]')
      expect(input).toHaveAttribute('type', 'url')
    })
  })

  describe('Size Variants', () => {
    it('renders small size', () => {
      render(<Input size="sm" />)
      expect(screen.getByRole('textbox')).toHaveClass(
        'px-3',
        'py-1.5',
        'text-sm'
      )
    })

    it('renders medium size (default)', () => {
      render(<Input />)
      expect(screen.getByRole('textbox')).toHaveClass(
        'px-4',
        'py-2',
        'text-base'
      )
    })

    it('renders large size', () => {
      render(<Input size="lg" />)
      expect(screen.getByRole('textbox')).toHaveClass('px-5', 'py-3', 'text-lg')
    })
  })

  describe('States', () => {
    it('applies disabled state', () => {
      render(<Input disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('applies disabled styling', () => {
      render(<Input disabled />)
      expect(screen.getByRole('textbox')).toHaveClass(
        'bg-gray-100',
        'cursor-not-allowed',
        'opacity-60'
      )
    })

    it('applies readOnly state', () => {
      render(<Input readOnly />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('readonly')
    })

    it('applies readOnly styling', () => {
      render(<Input readOnly />)
      expect(screen.getByRole('textbox')).toHaveClass(
        'bg-gray-100',
        'cursor-not-allowed',
        'opacity-60'
      )
    })

    it('applies error styling', () => {
      render(<Input error />)
      expect(screen.getByRole('textbox')).toHaveClass(
        'border-red-500',
        'focus:ring-red-500'
      )
    })

    it('applies normal styling when not in error state', () => {
      render(<Input />)
      expect(screen.getByRole('textbox')).toHaveClass(
        'border-gray-300',
        'focus:ring-blue-500'
      )
    })

    it('applies required attribute', () => {
      render(<Input required />)
      expect(screen.getByRole('textbox')).toBeRequired()
    })
  })

  describe('Events', () => {
    it('calls onChange when typing', async () => {
      const onChange = vi.fn()
      const user = userEvent.setup()
      render(<Input onChange={onChange} />)

      const input = screen.getByRole('textbox')
      await user.type(input, 'hello')

      expect(onChange).toHaveBeenCalled()
      expect(onChange).toHaveBeenCalledWith('h')
    })

    it('calls onFocus when focused', async () => {
      const onFocus = vi.fn()
      const user = userEvent.setup()
      render(<Input onFocus={onFocus} />)

      await user.click(screen.getByRole('textbox'))

      expect(onFocus).toHaveBeenCalledTimes(1)
    })

    it('calls onBlur when blurred', async () => {
      const onBlur = vi.fn()
      const user = userEvent.setup()
      render(<Input onBlur={onBlur} />)

      const input = screen.getByRole('textbox')
      await user.click(input)
      await user.tab()

      expect(onBlur).toHaveBeenCalledTimes(1)
    })
  })

  describe('Attributes', () => {
    it('accepts id attribute', () => {
      render(<Input id="email-input" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'email-input')
    })

    it('accepts name attribute', () => {
      render(<Input name="email" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('name', 'email')
    })

    it('accepts autoComplete attribute', () => {
      render(<Input autoComplete="email" />)
      expect(screen.getByRole('textbox')).toHaveAttribute(
        'autocomplete',
        'email'
      )
    })

    it('accepts maxLength attribute', () => {
      render(<Input maxLength={10} />)
      expect(screen.getByRole('textbox')).toHaveAttribute('maxlength', '10')
    })
  })

  describe('Custom Styling', () => {
    it('applies custom className', () => {
      render(<Input className="custom-class" />)
      expect(screen.getByRole('textbox')).toHaveClass('custom-class')
    })
  })

  describe('Accessibility', () => {
    it('has correct role for text input', () => {
      render(<Input />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('supports form associations', () => {
      render(
        <form>
          <Input name="test" id="test-input" />
        </form>
      )
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('name', 'test')
      expect(input).toHaveAttribute('id', 'test-input')
    })
  })
})
