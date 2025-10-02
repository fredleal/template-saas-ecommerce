import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import userEvent from '@testing-library/user-event'
import { Input } from './Input'

describe('Input', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      expect(input).toBeInTheDocument()
    })

    it('renders with label', () => {
      render(<Input label="Email" />)
      expect(screen.getByLabelText('Email')).toBeInTheDocument()
    })

    it('renders with placeholder', () => {
      render(<Input placeholder="Enter your email" />)
      expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('renders default variant', () => {
      render(<Input variant="default" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('border')
      expect(input).toHaveClass('rounded-md')
    })

    it('renders filled variant', () => {
      render(<Input variant="filled" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('bg-gray-100')
    })

    it('renders flushed variant', () => {
      render(<Input variant="flushed" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('border-b-2')
      expect(input).toHaveClass('rounded-none')
    })
  })

  describe('States', () => {
    it('error state displays correctly', () => {
      render(<Input error label="Email" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('border-red-500')
    })

    it('error message shows when error prop is true', () => {
      render(<Input error errorMessage="Invalid email" />)
      expect(screen.getByText('Invalid email')).toBeInTheDocument()
    })

    it('helper text shows when no error', () => {
      render(<Input helperText="We'll never share your email" />)
      expect(screen.getByText("We'll never share your email")).toBeInTheDocument()
    })

    it('disabled state prevents interaction', () => {
      render(<Input disabled />)
      const input = screen.getByRole('textbox')
      expect(input).toBeDisabled()
      expect(input).toHaveClass('disabled:opacity-50')
    })
  })

  describe('Value & Change', () => {
    it('handles onChange event correctly', async () => {
      const user = userEvent.setup()
      let value = ''
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        value = e.target.value
      }

      render(<Input onChange={handleChange} />)
      const input = screen.getByRole('textbox')
      
      await user.type(input, 'test@example.com')
      expect(value).toBe('test@example.com')
    })

    it('updates value on user input', async () => {
      const user = userEvent.setup()
      render(<Input defaultValue="" />)
      const input = screen.getByRole('textbox') as HTMLInputElement
      
      await user.type(input, 'Hello')
      expect(input.value).toBe('Hello')
    })

    it('controlled component behavior', () => {
      const { rerender } = render(<Input value="initial" onChange={() => {}} />)
      const input = screen.getByRole('textbox') as HTMLInputElement
      expect(input.value).toBe('initial')

      rerender(<Input value="updated" onChange={() => {}} />)
      expect(input.value).toBe('updated')
    })
  })

  describe('Form Integration', () => {
    it('works with form submission', async () => {
      let submittedValue = ''
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        submittedValue = formData.get('email') as string
      }

      render(
        <form onSubmit={handleSubmit}>
          <Input name="email" defaultValue="test@example.com" />
          <button type="submit">Submit</button>
        </form>
      )

      const button = screen.getByRole('button')
      button.click()
      
      expect(submittedValue).toBe('test@example.com')
    })

    it('required attribute works correctly', () => {
      render(<Input required />)
      const input = screen.getByRole('textbox')
      expect(input).toBeRequired()
    })
  })

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Input label="Email" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('label is properly associated with input', () => {
      render(<Input label="Email Address" id="email-input" />)
      const label = screen.getByText('Email Address')
      const input = screen.getByLabelText('Email Address')
      expect(label).toBeInTheDocument()
      expect(input).toBeInTheDocument()
      expect(input.id).toBe('email-input')
    })

    it('error message has proper styling', () => {
      render(<Input error errorMessage="This field is required" label="Email" />)
      const errorMsg = screen.getByText('This field is required')
      expect(errorMsg).toHaveClass('text-red-600')
    })
  })

  describe('Edge Cases', () => {
    it('handles empty value', () => {
      render(<Input value="" onChange={() => {}} />)
      const input = screen.getByRole('textbox') as HTMLInputElement
      expect(input.value).toBe('')
    })

    it('handles very long text input', async () => {
      const user = userEvent.setup()
      const longText = 'a'.repeat(200)
      render(<Input />)
      const input = screen.getByRole('textbox') as HTMLInputElement
      
      await user.type(input, longText)
      expect(input.value).toBe(longText)
    })

    it('handles special characters', () => {
      // Using fireEvent instead of userEvent for special characters
      const specialChars = '!@#$%^&*()_+-=[]{}|;:",.<>?/~`'
      render(<Input />)
      const input = screen.getByRole('textbox') as HTMLInputElement
      
      fireEvent.change(input, { target: { value: specialChars } })
      expect(input.value).toBe(specialChars)
    })

    it('applies custom className correctly', () => {
      render(<Input className="custom-input" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('custom-input')
      expect(input).toHaveClass('w-full') // base class preserved
    })
  })
})
