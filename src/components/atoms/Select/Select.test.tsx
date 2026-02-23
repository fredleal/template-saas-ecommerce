import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Select, SelectOption } from './Select'

const mockOptions: SelectOption[] = [
  { value: 'opt1', label: 'Option 1' },
  { value: 'opt2', label: 'Option 2' },
  { value: 'opt3', label: 'Option 3' },
]

describe('Select', () => {
  describe('Rendering', () => {
    it('renders with required props', () => {
      render(<Select options={mockOptions} />)
      const select = screen.getByRole('combobox')
      expect(select).toBeInTheDocument()
    })

    it('renders all options', () => {
      render(<Select options={mockOptions} />)
      expect(screen.getByText('Option 1')).toBeInTheDocument()
      expect(screen.getByText('Option 2')).toBeInTheDocument()
      expect(screen.getByText('Option 3')).toBeInTheDocument()
    })

    it('renders placeholder option', () => {
      render(<Select options={mockOptions} placeholder="Choose one" />)
      expect(screen.getByText('Choose one')).toBeInTheDocument()
    })

    it('renders default placeholder when not specified', () => {
      render(<Select options={mockOptions} />)
      expect(screen.getByText('Selecione...')).toBeInTheDocument()
    })

    it('renders chevron icon', () => {
      render(<Select options={mockOptions} />)
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  describe('Options', () => {
    it('renders disabled options', () => {
      const optionsWithDisabled: SelectOption[] = [
        { value: 'opt1', label: 'Option 1' },
        { value: 'opt2', label: 'Option 2', disabled: true },
      ]
      render(<Select options={optionsWithDisabled} />)
      const disabledOption = screen.getByText('Option 2')
      expect(disabledOption).toHaveAttribute('disabled')
    })

    it('renders empty options array', () => {
      render(<Select options={[]} />)
      const select = screen.getByRole('combobox')
      expect(select).toBeInTheDocument()
    })
  })

  describe('Controlled Mode', () => {
    it('shows selected value', () => {
      render(<Select options={mockOptions} value="opt2" onChange={() => {}} />)
      const select = screen.getByRole('combobox') as HTMLSelectElement
      expect(select.value).toBe('opt2')
    })

    it('calls onChange when selection changes', () => {
      const handleChange = vi.fn()
      render(<Select options={mockOptions} value="" onChange={handleChange} />)
      const select = screen.getByRole('combobox')
      fireEvent.change(select, { target: { value: 'opt1' } })
      expect(handleChange).toHaveBeenCalledWith('opt1')
    })
  })

  describe('Uncontrolled Mode', () => {
    it('uses defaultValue', () => {
      render(<Select options={mockOptions} defaultValue="opt3" />)
      const select = screen.getByRole('combobox') as HTMLSelectElement
      expect(select.value).toBe('opt3')
    })
  })

  describe('Events', () => {
    it('calls onFocus when focused', () => {
      const handleFocus = vi.fn()
      render(<Select options={mockOptions} onFocus={handleFocus} />)
      const select = screen.getByRole('combobox')
      fireEvent.focus(select)
      expect(handleFocus).toHaveBeenCalledTimes(1)
    })

    it('calls onBlur when blurred', () => {
      const handleBlur = vi.fn()
      render(<Select options={mockOptions} onBlur={handleBlur} />)
      const select = screen.getByRole('combobox')
      fireEvent.blur(select)
      expect(handleBlur).toHaveBeenCalledTimes(1)
    })
  })

  describe('Disabled State', () => {
    it('renders disabled select', () => {
      render(<Select options={mockOptions} disabled />)
      const select = screen.getByRole('combobox')
      expect(select).toBeDisabled()
    })

    it('applies disabled styling', () => {
      render(<Select options={mockOptions} disabled />)
      const select = screen.getByRole('combobox')
      expect(select).toHaveClass('cursor-not-allowed')
      expect(select).toHaveClass('opacity-60')
    })
  })

  describe('Error State', () => {
    it('applies error styling', () => {
      render(<Select options={mockOptions} error />)
      const select = screen.getByRole('combobox')
      expect(select).toHaveClass('border-[var(--color-error-500,#ef4444)]')
    })

    it('renders error message', () => {
      render(
        <Select
          options={mockOptions}
          error
          errorMessage="This field is required"
          id="test-select"
        />
      )
      expect(screen.getByText('This field is required')).toBeInTheDocument()
    })

    it('sets aria-invalid when error', () => {
      render(<Select options={mockOptions} error />)
      const select = screen.getByRole('combobox')
      expect(select).toHaveAttribute('aria-invalid', 'true')
    })

    it('links error message with aria-describedby', () => {
      render(
        <Select
          options={mockOptions}
          error
          errorMessage="Error message"
          id="my-select"
        />
      )
      const select = screen.getByRole('combobox')
      expect(select).toHaveAttribute('aria-describedby', 'my-select-error')
    })
  })

  describe('Size Variants', () => {
    it('renders small size', () => {
      render(<Select options={mockOptions} size="sm" />)
      const select = screen.getByRole('combobox')
      expect(select).toHaveClass('py-1.5')
      expect(select).toHaveClass('text-sm')
    })

    it('renders medium size (default)', () => {
      render(<Select options={mockOptions} />)
      const select = screen.getByRole('combobox')
      expect(select).toHaveClass('py-2')
      expect(select).toHaveClass('text-base')
    })

    it('renders large size', () => {
      render(<Select options={mockOptions} size="lg" />)
      const select = screen.getByRole('combobox')
      expect(select).toHaveClass('py-3')
      expect(select).toHaveClass('text-lg')
    })
  })

  describe('Form Attributes', () => {
    it('applies name attribute', () => {
      render(<Select options={mockOptions} name="category" />)
      const select = screen.getByRole('combobox')
      expect(select).toHaveAttribute('name', 'category')
    })

    it('applies id attribute', () => {
      render(<Select options={mockOptions} id="category-select" />)
      const select = screen.getByRole('combobox')
      expect(select).toHaveAttribute('id', 'category-select')
    })

    it('applies required attribute', () => {
      render(<Select options={mockOptions} required />)
      const select = screen.getByRole('combobox')
      expect(select).toBeRequired()
    })
  })

  describe('Custom Styling', () => {
    it('applies custom className', () => {
      render(<Select options={mockOptions} className="custom-class" />)
      const select = screen.getByRole('combobox')
      expect(select).toHaveClass('custom-class')
    })
  })

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <label htmlFor="accessible-select">
          Category
          <Select options={mockOptions} id="accessible-select" />
        </label>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has no violations in error state', async () => {
      const { container } = render(
        <label htmlFor="error-select">
          Category
          <Select
            options={mockOptions}
            id="error-select"
            error
            errorMessage="Required field"
          />
        </label>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has no violations when disabled', async () => {
      const { container } = render(
        <label htmlFor="disabled-select">
          Category
          <Select options={mockOptions} id="disabled-select" disabled />
        </label>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('supports custom aria-describedby', () => {
      render(<Select options={mockOptions} ariaDescribedBy="help-text" />)
      const select = screen.getByRole('combobox')
      expect(select).toHaveAttribute('aria-describedby', 'help-text')
    })
  })
})
