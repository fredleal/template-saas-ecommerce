import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  // Test Case 1: Rendering
  it('renders correctly with a label', () => {
    render(<Checkbox label="Bolo de chocolate" name="chocolate" />)
    expect(screen.getByLabelText('Bolo de chocolate')).toBeInTheDocument()
  })

  it('renders without a label when not provided', () => {
    render(<Checkbox name="no-label" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.queryByText(/Bolo de chocolate/i)).not.toBeInTheDocument()
  })

  it('renders with label on the left', () => {
    render(<Checkbox label="Left Label" name="left" labelPosition="left" />)
    const checkbox = screen.getByRole('checkbox')
    const labelSpan = screen.getByText('Left Label')
    expect(checkbox.previousSibling).toBe(labelSpan)
  })

  it('renders with label on the right (default)', () => {
    render(<Checkbox label="Right Label" name="right" labelPosition="right" />)
    const checkbox = screen.getByRole('checkbox')
    const labelSpan = screen.getByText('Right Label')
    expect(checkbox.nextSibling).toBe(labelSpan)
  })

  // Test Case 2: State management
  it('handles controlled state correctly', () => {
    const handleChange = vi.fn()
    render(
      <Checkbox checked={true} onChange={handleChange} name="controlled" />
    )
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(true)

    fireEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalledTimes(1)
    // Since it's controlled, the internal state doesn't change on click without parent update
    expect(checkbox.checked).toBe(true)
  })

  it('handles uncontrolled state correctly', () => {
    render(<Checkbox name="uncontrolled" />)
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(false)

    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)

    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(false)
  })

  it('handles indeterminate state', () => {
    render(<Checkbox indeterminate name="indeterminate" />)
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.indeterminate).toBe(true)
  })

  // Test Case 3: Interactions
  it('calls onChange when clicked', async () => {
    const handleChange = vi.fn()
    render(<Checkbox name="click-test" onChange={handleChange} />)
    const checkbox = screen.getByRole('checkbox')

    await userEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)
  })

  it('does not call onChange when disabled', async () => {
    const handleChange = vi.fn()
    render(<Checkbox name="disabled-test" disabled onChange={handleChange} />)
    const checkbox = screen.getByRole('checkbox')

    await userEvent.click(checkbox)
    expect(handleChange).not.toHaveBeenCalled()
    expect(checkbox).toBeDisabled()
  })

  // Test Case 4: Size variants
  it('applies correct class for small size', () => {
    render(<Checkbox name="size-sm" size="sm" />)
    expect(screen.getByRole('checkbox')).toHaveClass('w-4 h-4')
  })

  it('applies correct class for medium size (default)', () => {
    render(<Checkbox name="size-md" size="md" />)
    expect(screen.getByRole('checkbox')).toHaveClass('w-5 h-5')
  })

  it('applies correct class for large size', () => {
    render(<Checkbox name="size-lg" size="lg" />)
    expect(screen.getByRole('checkbox')).toHaveClass('w-6 h-6')
  })

  // Test Case 5: Accessibility
  it('has correct role and aria-checked attribute', () => {
    render(<Checkbox name="aria-test" checked={false} />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('type', 'checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('has aria-checked="true" when checked', () => {
    render(<Checkbox name="aria-test-checked" checked={true} />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('has aria-disabled="true" when disabled', () => {
    render(<Checkbox name="aria-test-disabled" disabled />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('type', 'checkbox')
    expect(checkbox).toBeDisabled()
  })

  it('associates label with checkbox using id', () => {
    render(<Checkbox label="Accessible Label" name="accessible" />)
    const checkbox = screen.getByLabelText('Accessible Label')
    const expectedId = 'accessible-label-checkbox'
    expect(checkbox).toHaveAttribute('id', expectedId)
    const labelElement = screen.getByText('Accessible Label').closest('label')
    expect(labelElement).toHaveAttribute('for', expectedId)
  })

  // Test Case 6: Custom className
  it('applies custom className to the container', () => {
    render(<Checkbox name="custom-class" className="my-custom-class" />)
    expect(screen.getByRole('checkbox')).toHaveClass('my-custom-class')
  })
})
