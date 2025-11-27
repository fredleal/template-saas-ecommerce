/* global Event */
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Dropdown } from './Dropdown'

describe('Dropdown', () => {
  describe('Rendering', () => {
    it('should render with label', () => {
      render(<Dropdown label="Test Label">Content</Dropdown>)

      expect(screen.getByText('Test Label')).toBeInTheDocument()
    })

    it('should render closed by default', () => {
      render(<Dropdown label="Test">Content</Dropdown>)

      expect(screen.queryByText('Content')).not.toBeVisible()
    })

    it('should render open when defaultOpen is true', () => {
      render(
        <Dropdown label="Test" defaultOpen>
          Content
        </Dropdown>
      )

      expect(screen.getByText('Content')).toBeVisible()
    })
  })

  describe('Interaction', () => {
    it('should toggle open/closed when clicked', () => {
      const { container } = render(
        <Dropdown label="Toggle Me">Hidden Content</Dropdown>
      )

      const details = container.querySelector('details')

      // Initially closed
      expect(details?.open).toBe(false)

      // Simulate toggle to open
      if (details) {
        details.open = true
        fireEvent(details, new Event('toggle', { bubbles: true }))
      }
      expect(details?.open).toBe(true)
    })

    it('should call onToggle when toggled', () => {
      const onToggle = vi.fn()
      const { container } = render(
        <Dropdown label="Test" onToggle={onToggle}>
          Content
        </Dropdown>
      )

      const details = container.querySelector('details')
      if (details) {
        details.open = true
        fireEvent(details, new Event('toggle', { bubbles: true }))
      }

      expect(onToggle).toHaveBeenCalledWith(true)
    })

    it('should call onToggle with false when closed', () => {
      const onToggle = vi.fn()
      const { container } = render(
        <Dropdown label="Test" defaultOpen onToggle={onToggle}>
          Content
        </Dropdown>
      )

      const details = container.querySelector('details')
      if (details) {
        details.open = false
        fireEvent(details, new Event('toggle', { bubbles: true }))
      }

      expect(onToggle).toHaveBeenCalledWith(false)
    })
  })

  describe('Controlled Mode', () => {
    it('should use isOpen prop when controlled', () => {
      const { rerender } = render(
        <Dropdown label="Test" isOpen={false}>
          Content
        </Dropdown>
      )

      expect(screen.queryByText('Content')).not.toBeVisible()

      rerender(
        <Dropdown label="Test" isOpen={true}>
          Content
        </Dropdown>
      )

      expect(screen.getByText('Content')).toBeVisible()
    })

    it('should call onToggle when controlled', () => {
      const onToggle = vi.fn()
      const { container } = render(
        <Dropdown label="Test" isOpen={false} onToggle={onToggle}>
          Content
        </Dropdown>
      )

      const details = container.querySelector('details')
      if (details) {
        details.open = true
        fireEvent(details, new Event('toggle', { bubbles: true }))
      }

      expect(onToggle).toHaveBeenCalledWith(true)
    })
  })

  describe('Disabled State', () => {
    it('should not toggle when disabled', () => {
      const { container } = render(
        <Dropdown label="Test" disabled>
          Content
        </Dropdown>
      )

      const details = container.querySelector('details')
      if (details) {
        details.open = true
        fireEvent(details, new Event('toggle', { bubbles: true }))
      }

      expect(details?.open).toBe(false)
    })

    it('should not call onToggle when disabled', () => {
      const onToggle = vi.fn()
      const { container } = render(
        <Dropdown label="Test" disabled onToggle={onToggle}>
          Content
        </Dropdown>
      )

      const details = container.querySelector('details')
      if (details) {
        details.open = true
        fireEvent(details, new Event('toggle', { bubbles: true }))
      }

      expect(onToggle).not.toHaveBeenCalled()
    })

    it('should apply disabled styles', () => {
      const { container } = render(
        <Dropdown label="Test" disabled>
          Content
        </Dropdown>
      )

      const details = container.querySelector('details')
      expect(details).toHaveClass('opacity-50', 'cursor-not-allowed')
    })
  })

  describe('Custom Styling', () => {
    it('should accept custom className', () => {
      const { container } = render(
        <Dropdown label="Test" className="custom-class">
          Content
        </Dropdown>
      )

      const details = container.querySelector('details')
      expect(details).toHaveClass('custom-class')
    })
  })

  describe('Chevron Icon', () => {
    it('should rotate chevron when open', () => {
      render(
        <Dropdown label="Test" defaultOpen>
          Content
        </Dropdown>
      )

      const chevron = document.querySelector('svg')
      expect(chevron).toHaveClass('rotate-180')
    })

    it('should not rotate chevron when closed', () => {
      render(<Dropdown label="Test">Content</Dropdown>)

      const chevron = document.querySelector('svg')
      expect(chevron).toHaveClass('rotate-0')
    })
  })
})
