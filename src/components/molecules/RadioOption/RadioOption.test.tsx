import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import { RadioOption } from './RadioOption'

describe('RadioOption', () => {
  // Group 1: Basic Rendering
  describe('Basic Rendering', () => {
    it('renders with required props', () => {
      render(
        <RadioOption
          id="option-1"
          name="options"
          value="option1"
          label="Option 1"
        />
      )

      const radio = screen.getByRole('radio')
      const label = screen.getByText('Option 1')

      expect(radio).toBeInTheDocument()
      expect(label).toBeInTheDocument()
    })

    it('renders radio input with correct attributes', () => {
      render(
        <RadioOption
          id="test-radio"
          name="test-group"
          value="test-value"
          label="Test"
        />
      )

      const radio = screen.getByRole('radio')
      expect(radio).toHaveAttribute('id', 'test-radio')
      expect(radio).toHaveAttribute('name', 'test-group')
      expect(radio).toHaveAttribute('value', 'test-value')
      expect(radio).toHaveAttribute('type', 'radio')
    })

    it('applies custom className to container', () => {
      const { container } = render(
        <RadioOption
          id="option"
          name="options"
          value="val"
          label="Label"
          className="custom-class"
        />
      )

      const labelElement = container.querySelector('label')
      expect(labelElement).toHaveClass('custom-class')
    })
  })

  // Group 2: Checked State
  describe('Checked State', () => {
    it('renders unchecked by default', () => {
      render(<RadioOption id="r1" name="r" value="v1" label="Unchecked" />)

      const radio = screen.getByRole('radio')
      expect(radio).not.toBeChecked()
    })

    it('renders checked when checked prop is true', () => {
      render(
        <RadioOption id="r1" name="r" value="v1" label="Checked" checked />
      )

      const radio = screen.getByRole('radio')
      expect(radio).toBeChecked()
    })

    it('applies checked styles when checked', () => {
      const { container } = render(
        <RadioOption
          id="r1"
          name="r"
          value="v1"
          label="Checked"
          checked
          variant="primary"
        />
      )

      const labelElement = container.querySelector('label')
      expect(labelElement).toHaveClass('border-blue-500')
      expect(labelElement).toHaveClass('bg-blue-50')
    })
  })

  // Group 3: Disabled State
  describe('Disabled State', () => {
    it('renders enabled by default', () => {
      render(<RadioOption id="r1" name="r" value="v1" label="Enabled" />)

      const radio = screen.getByRole('radio')
      expect(radio).not.toBeDisabled()
    })

    it('renders disabled when disabled prop is true', () => {
      render(
        <RadioOption id="r1" name="r" value="v1" label="Disabled" disabled />
      )

      const radio = screen.getByRole('radio')
      expect(radio).toBeDisabled()
    })

    it('applies disabled styles', () => {
      const { container } = render(
        <RadioOption id="r1" name="r" value="v1" label="Disabled" disabled />
      )

      const labelElement = container.querySelector('label')
      expect(labelElement).toHaveClass('opacity-50')
      expect(labelElement).toHaveClass('cursor-not-allowed')
    })
  })

  // Group 4: Variant Styles
  describe('Variant Styles', () => {
    it('applies primary variant by default', () => {
      const { container } = render(
        <RadioOption id="r1" name="r" value="v1" label="Primary" />
      )

      const labelElement = container.querySelector('label')
      expect(labelElement).toHaveClass('border-gray-300')
    })

    it('applies primary checked styles', () => {
      const { container } = render(
        <RadioOption
          id="r1"
          name="r"
          value="v1"
          label="Primary"
          checked
          variant="primary"
        />
      )

      const labelElement = container.querySelector('label')
      expect(labelElement).toHaveClass('border-blue-500')
      expect(labelElement).toHaveClass('bg-blue-50')
    })

    it('applies secondary checked styles', () => {
      const { container } = render(
        <RadioOption
          id="r1"
          name="r"
          value="v1"
          label="Secondary"
          checked
          variant="secondary"
        />
      )

      const labelElement = container.querySelector('label')
      expect(labelElement).toHaveClass('border-purple-500')
      expect(labelElement).toHaveClass('bg-purple-50')
    })
  })

  // Group 5: Image Support
  describe('Image Support', () => {
    it('does not render image when imageSrc not provided', () => {
      render(<RadioOption id="r1" name="r" value="v1" label="No Image" />)

      const image = screen.queryByRole('img')
      expect(image).not.toBeInTheDocument()
    })

    it('renders image when imageSrc provided', () => {
      render(
        <RadioOption
          id="r1"
          name="r"
          value="v1"
          label="With Image"
          imageSrc="https://example.com/image.jpg"
        />
      )

      const image = screen.getByRole('img')
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', 'https://example.com/image.jpg')
    })

    it('uses label as image alt when imageAlt not provided', () => {
      render(
        <RadioOption
          id="r1"
          name="r"
          value="v1"
          label="Option Label"
          imageSrc="https://example.com/image.jpg"
        />
      )

      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('alt', 'Option Label')
    })

    it('uses imageAlt when provided', () => {
      render(
        <RadioOption
          id="r1"
          name="r"
          value="v1"
          label="Label"
          imageSrc="https://example.com/image.jpg"
          imageAlt="Custom Alt"
        />
      )

      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('alt', 'Custom Alt')
    })
  })

  // Group 6: User Interactions
  describe('User Interactions', () => {
    it('calls onChange when clicked', () => {
      const handleChange = vi.fn()
      render(
        <RadioOption
          id="r1"
          name="r"
          value="v1"
          label="Clickable"
          onChange={handleChange}
        />
      )

      const radio = screen.getByRole('radio')
      fireEvent.click(radio)

      expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it('does not call onChange when disabled', () => {
      const handleChange = vi.fn()
      render(
        <RadioOption
          id="r1"
          name="r"
          value="v1"
          label="Disabled"
          disabled
          onChange={handleChange}
        />
      )

      const radio = screen.getByRole('radio')
      fireEvent.click(radio)

      expect(handleChange).not.toHaveBeenCalled()
    })

    it('can be selected by clicking label', () => {
      const handleChange = vi.fn()
      render(
        <RadioOption
          id="r1"
          name="r"
          value="v1"
          label="Click Label"
          onChange={handleChange}
        />
      )

      const label = screen.getByText('Click Label')
      fireEvent.click(label)

      expect(handleChange).toHaveBeenCalled()
    })
  })

  // Group 7: Radio Groups
  describe('Radio Groups', () => {
    it('groups radios with same name', () => {
      render(
        <>
          <RadioOption id="r1" name="group" value="v1" label="Option 1" />
          <RadioOption id="r2" name="group" value="v2" label="Option 2" />
          <RadioOption id="r3" name="group" value="v3" label="Option 3" />
        </>
      )

      const radios = screen.getAllByRole('radio')
      expect(radios).toHaveLength(3)
      radios.forEach(radio => {
        expect(radio).toHaveAttribute('name', 'group')
      })
    })

    it('allows only one radio to be checked in a group', () => {
      const { rerender } = render(
        <>
          <RadioOption
            id="r1"
            name="group"
            value="v1"
            label="Option 1"
            checked
          />
          <RadioOption id="r2" name="group" value="v2" label="Option 2" />
        </>
      )

      let radios = screen.getAllByRole('radio')
      expect(radios[0]).toBeChecked()
      expect(radios[1]).not.toBeChecked()

      rerender(
        <>
          <RadioOption id="r1" name="group" value="v1" label="Option 1" />
          <RadioOption
            id="r2"
            name="group"
            value="v2"
            label="Option 2"
            checked
          />
        </>
      )

      radios = screen.getAllByRole('radio')
      expect(radios[0]).not.toBeChecked()
      expect(radios[1]).toBeChecked()
    })
  })

  // Group 8: Accessibility
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <RadioOption id="r1" name="r" value="v1" label="Accessible" />
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations when checked', async () => {
      const { container } = render(
        <RadioOption id="r1" name="r" value="v1" label="Checked" checked />
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations when disabled', async () => {
      const { container } = render(
        <RadioOption id="r1" name="r" value="v1" label="Disabled" disabled />
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations with image', async () => {
      const { container } = render(
        <RadioOption
          id="r1"
          name="r"
          value="v1"
          label="With Image"
          imageSrc="https://example.com/image.jpg"
        />
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })
})
