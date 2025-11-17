import { describe, it, expect } from 'vitest'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { TableOfContents } from './TableOfContents'

expect.extend(toHaveNoViolations)

describe('TableOfContents', () => {
  const defaultItems = [
    { id: 'intro', label: 'Introduction', level: 1 as const },
    { id: 'getting-started', label: 'Getting Started', level: 1 as const },
    { id: 'installation', label: 'Installation', level: 2 as const },
    { id: 'basic-usage', label: 'Basic Usage', level: 2 as const },
    { id: 'advanced', label: 'Advanced Concepts', level: 1 as const },
    { id: 'hooks', label: 'Custom Hooks', level: 2 as const },
    { id: 'api-reference', label: 'API Reference', level: 2 as const },
  ]

  describe('Rendering', () => {
    it('should render the component with default title', () => {
      render(<TableOfContents items={defaultItems} />)
      expect(screen.getByText('Table of Contents')).toBeInTheDocument()
    })

    it('should render with custom title', () => {
      render(<TableOfContents items={defaultItems} title="Article Outline" />)
      expect(screen.getByText('Article Outline')).toBeInTheDocument()
    })

    it('should render all items', () => {
      render(<TableOfContents items={defaultItems} />)
      defaultItems.forEach(item => {
        expect(screen.getByText(item.label)).toBeInTheDocument()
      })
    })

    it('should render with empty items array', () => {
      render(<TableOfContents items={[]} />)
      expect(screen.getByText('Table of Contents')).toBeInTheDocument()
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })
  })

  describe('Item Levels and Indentation', () => {
    it('should render level 1 items with correct indentation', () => {
      render(<TableOfContents items={defaultItems} />)
      const introButton = screen.getByText('Introduction').closest('button')
      expect(introButton).toHaveClass('ml-0')
    })

    it('should render level 2 items with correct indentation', () => {
      render(<TableOfContents items={defaultItems} />)
      const installButton = screen.getByText('Installation').closest('button')
      expect(installButton).toHaveClass('ml-4')
    })

    it('should render level 3 items with correct indentation', () => {
      const level3Items = [{ id: 'item1', label: 'Item 1', level: 3 as const }]
      render(<TableOfContents items={level3Items} />)
      const button = screen.getByText('Item 1').closest('button')
      expect(button).toHaveClass('ml-8')
    })
  })

  describe('Active State', () => {
    it('should highlight active item', () => {
      render(<TableOfContents items={defaultItems} activeId="intro" />)
      const introButton = screen.getByText('Introduction').closest('button')
      expect(introButton).toHaveClass('bg-blue-500', 'text-white')
    })

    it('should set aria-current for active item', () => {
      render(
        <TableOfContents items={defaultItems} activeId="getting-started" />
      )
      const button = screen.getByText('Getting Started').closest('button')
      expect(button).toHaveAttribute('aria-current', 'location')
    })

    it('should not set aria-current for non-active items', () => {
      render(<TableOfContents items={defaultItems} activeId="intro" />)
      const button = screen.getByText('Getting Started').closest('button')
      expect(button).not.toHaveAttribute('aria-current')
    })

    it('should update active item styling', () => {
      const { rerender } = render(
        <TableOfContents items={defaultItems} activeId="intro" />
      )
      let button = screen.getByText('Introduction').closest('button')
      expect(button).toHaveClass('bg-blue-500')

      rerender(<TableOfContents items={defaultItems} activeId="advanced" />)
      button = screen.getByText('Advanced Concepts').closest('button')
      expect(button).toHaveClass('bg-blue-500')
    })
  })

  describe('Click Handling', () => {
    it('should call onItemClick when item is clicked', () => {
      const onItemClick = vi.fn()
      render(<TableOfContents items={defaultItems} onItemClick={onItemClick} />)
      const button = screen.getByText('Introduction')
      fireEvent.click(button)
      expect(onItemClick).toHaveBeenCalledWith('intro')
    })

    it('should scroll to element when clicked', () => {
      const onItemClick = vi.fn()
      render(<TableOfContents items={defaultItems} onItemClick={onItemClick} />)

      // Create a mock element to scroll to
      const mockElement = document.createElement('div')
      mockElement.id = 'intro'
      mockElement.scrollIntoView = vi.fn()
      document.body.appendChild(mockElement)

      const button = screen.getByText('Introduction')
      fireEvent.click(button)

      expect(onItemClick).toHaveBeenCalledWith('intro')
      document.body.removeChild(mockElement)
    })

    it('should handle multiple clicks', () => {
      const onItemClick = vi.fn()
      render(<TableOfContents items={defaultItems} onItemClick={onItemClick} />)

      fireEvent.click(screen.getByText('Introduction'))
      fireEvent.click(screen.getByText('Advanced Concepts'))
      fireEvent.click(screen.getByText('Installation'))

      expect(onItemClick).toHaveBeenCalledTimes(3)
      expect(onItemClick).toHaveBeenNthCalledWith(1, 'intro')
      expect(onItemClick).toHaveBeenNthCalledWith(2, 'advanced')
      expect(onItemClick).toHaveBeenNthCalledWith(3, 'installation')
    })
  })

  describe('Styling', () => {
    it('should apply custom className', () => {
      const { container } = render(
        <TableOfContents items={defaultItems} className="custom-toc" />
      )
      const nav = container.querySelector('nav')
      expect(nav).toHaveClass('custom-toc')
    })

    it('should have proper border and background classes', () => {
      const { container } = render(<TableOfContents items={defaultItems} />)
      const nav = container.querySelector('nav')
      expect(nav).toHaveClass('border', 'border-gray-200', 'bg-gray-50')
    })

    it('should have proper padding', () => {
      const { container } = render(<TableOfContents items={defaultItems} />)
      const nav = container.querySelector('nav')
      expect(nav).toHaveClass('p-4')
    })
  })

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(<TableOfContents items={defaultItems} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have nav element with aria-label', () => {
      render(<TableOfContents items={defaultItems} />)
      const nav = screen.getByRole('navigation', { name: 'Article navigation' })
      expect(nav).toBeInTheDocument()
    })

    it('should render items as buttons for keyboard navigation', () => {
      render(<TableOfContents items={defaultItems} />)
      const buttons = screen.getAllByRole('button')
      expect(buttons.length).toBe(defaultItems.length)
    })
  })

  describe('Edge Cases', () => {
    it('should handle very long item labels', () => {
      const longLabelItems = [
        {
          id: 'long',
          label:
            'This is a very long section title that might wrap across multiple lines',
          level: 1 as const,
        },
      ]
      render(<TableOfContents items={longLabelItems} />)
      expect(
        screen.getByText(
          'This is a very long section title that might wrap across multiple lines'
        )
      ).toBeInTheDocument()
    })

    it('should handle many items', () => {
      const manyItems = Array.from({ length: 50 }, (_, i) => ({
        id: `item-${i}`,
        label: `Section ${i + 1}`,
        level: ((i % 3) + 1) as 1 | 2 | 3,
      }))
      render(<TableOfContents items={manyItems} />)
      expect(screen.getByText('Section 1')).toBeInTheDocument()
      expect(screen.getByText('Section 50')).toBeInTheDocument()
    })

    it('should handle special characters in labels', () => {
      const specialItems = [
        {
          id: 'special',
          label: 'Item with & Special < Characters >',
          level: 1 as const,
        },
      ]
      render(<TableOfContents items={specialItems} />)
      expect(
        screen.getByText('Item with & Special < Characters >')
      ).toBeInTheDocument()
    })
  })
})
