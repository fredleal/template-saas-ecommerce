import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Textarea } from './Textarea'

describe('Textarea', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toBeInTheDocument()
    })

    it('renders with placeholder', () => {
      render(<Textarea placeholder="Enter your message" />)
      expect(
        screen.getByPlaceholderText('Enter your message')
      ).toBeInTheDocument()
    })

    it('renders with default rows', () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('rows', '4')
    })

    it('renders with custom rows', () => {
      render(<Textarea rows={6} />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('rows', '6')
    })
  })

  describe('Controlled Mode', () => {
    it('shows controlled value', () => {
      render(<Textarea value="Hello World" onChange={() => {}} />)
      const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
      expect(textarea.value).toBe('Hello World')
    })

    it('calls onChange when text changes', () => {
      const handleChange = vi.fn()
      render(<Textarea value="" onChange={handleChange} />)
      const textarea = screen.getByRole('textbox')
      fireEvent.change(textarea, { target: { value: 'New text' } })
      expect(handleChange).toHaveBeenCalledWith('New text')
    })
  })

  describe('Uncontrolled Mode', () => {
    it('uses defaultValue', () => {
      render(<Textarea defaultValue="Default text" />)
      const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
      expect(textarea.value).toBe('Default text')
    })
  })

  describe('Events', () => {
    it('calls onFocus when focused', () => {
      const handleFocus = vi.fn()
      render(<Textarea onFocus={handleFocus} />)
      const textarea = screen.getByRole('textbox')
      fireEvent.focus(textarea)
      expect(handleFocus).toHaveBeenCalledTimes(1)
    })

    it('calls onBlur when blurred', () => {
      const handleBlur = vi.fn()
      render(<Textarea onBlur={handleBlur} />)
      const textarea = screen.getByRole('textbox')
      fireEvent.blur(textarea)
      expect(handleBlur).toHaveBeenCalledTimes(1)
    })
  })

  describe('Disabled State', () => {
    it('renders disabled textarea', () => {
      render(<Textarea disabled />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toBeDisabled()
    })

    it('applies disabled styling', () => {
      render(<Textarea disabled />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('cursor-not-allowed')
      expect(textarea).toHaveClass('opacity-60')
    })
  })

  describe('ReadOnly State', () => {
    it('renders readonly textarea', () => {
      render(<Textarea readOnly />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('readonly')
    })

    it('applies readonly styling', () => {
      render(<Textarea readOnly />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('cursor-not-allowed')
    })
  })

  describe('Error State', () => {
    it('applies error styling', () => {
      render(<Textarea error />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('border-[var(--color-error-500,#ef4444)]')
    })

    it('renders error message', () => {
      render(
        <Textarea
          error
          errorMessage="This field is required"
          id="test-textarea"
        />
      )
      expect(screen.getByText('This field is required')).toBeInTheDocument()
    })

    it('sets aria-invalid when error', () => {
      render(<Textarea error />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('aria-invalid', 'true')
    })

    it('links error message with aria-describedby', () => {
      render(<Textarea error errorMessage="Error message" id="my-textarea" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('aria-describedby', 'my-textarea-error')
    })
  })

  describe('Size Variants', () => {
    it('renders small size', () => {
      render(<Textarea size="sm" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('py-1.5')
      expect(textarea).toHaveClass('text-sm')
    })

    it('renders medium size (default)', () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('py-2')
      expect(textarea).toHaveClass('text-base')
    })

    it('renders large size', () => {
      render(<Textarea size="lg" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('py-3')
      expect(textarea).toHaveClass('text-lg')
    })
  })

  describe('Resize Options', () => {
    it('applies resize-none', () => {
      render(<Textarea resize="none" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('resize-none')
    })

    it('applies resize-y (default)', () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('resize-y')
    })

    it('applies resize-x', () => {
      render(<Textarea resize="horizontal" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('resize-x')
    })

    it('applies resize', () => {
      render(<Textarea resize="both" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('resize')
    })
  })

  describe('Character Count', () => {
    it('does not show char count by default', () => {
      render(<Textarea maxLength={100} />)
      expect(screen.queryByText(/\/100/)).not.toBeInTheDocument()
    })

    it('shows char count when showCharCount is true', () => {
      render(<Textarea maxLength={100} showCharCount />)
      expect(screen.getByText('0/100')).toBeInTheDocument()
    })

    it('updates char count on typing', () => {
      render(<Textarea maxLength={100} showCharCount />)
      const textarea = screen.getByRole('textbox')
      fireEvent.change(textarea, { target: { value: 'Hello' } })
      expect(screen.getByText('5/100')).toBeInTheDocument()
    })

    it('shows char count with defaultValue', () => {
      render(<Textarea maxLength={100} showCharCount defaultValue="Test" />)
      expect(screen.getByText('4/100')).toBeInTheDocument()
    })

    it('applies red color when at max length', () => {
      render(<Textarea maxLength={5} showCharCount />)
      const textarea = screen.getByRole('textbox')
      fireEvent.change(textarea, { target: { value: '12345' } })
      const counter = screen.getByText('5/5')
      expect(counter).toHaveClass('text-[var(--color-error-600,#dc2626)]')
    })
  })

  describe('Form Attributes', () => {
    it('applies name attribute', () => {
      render(<Textarea name="message" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('name', 'message')
    })

    it('applies id attribute', () => {
      render(<Textarea id="message-textarea" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('id', 'message-textarea')
    })

    it('applies required attribute', () => {
      render(<Textarea required />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toBeRequired()
    })

    it('applies maxLength attribute', () => {
      render(<Textarea maxLength={500} />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('maxLength', '500')
    })
  })

  describe('Custom Styling', () => {
    it('applies custom className', () => {
      render(<Textarea className="custom-class" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('custom-class')
    })
  })

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <label htmlFor="accessible-textarea">
          Message
          <Textarea id="accessible-textarea" />
        </label>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has no violations in error state', async () => {
      const { container } = render(
        <label htmlFor="error-textarea">
          Message
          <Textarea id="error-textarea" error errorMessage="Required field" />
        </label>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has no violations when disabled', async () => {
      const { container } = render(
        <label htmlFor="disabled-textarea">
          Message
          <Textarea id="disabled-textarea" disabled />
        </label>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('supports custom aria-describedby', () => {
      render(<Textarea ariaDescribedBy="help-text" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('aria-describedby', 'help-text')
    })
  })
})
