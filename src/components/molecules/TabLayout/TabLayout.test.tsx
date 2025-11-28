import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import { TabLayout, Tab } from './TabLayout'

const mockTabs: Tab[] = [
  { label: 'Tab 1', content: 'Content 1' },
  { label: 'Tab 2', content: 'Content 2' },
  { label: 'Tab 3', content: 'Content 3' },
]

describe('TabLayout', () => {
  // Group 1: Basic Rendering
  describe('Basic Rendering', () => {
    it('renders all tab buttons', () => {
      render(<TabLayout tabs={mockTabs} />)

      expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: 'Tab 3' })).toBeInTheDocument()
    })

    it('renders first tab content by default', () => {
      render(<TabLayout tabs={mockTabs} />)

      expect(screen.getByText('Content 1')).toBeVisible()
    })

    it('applies custom className', () => {
      render(<TabLayout tabs={mockTabs} className="custom-class" />)

      const container = screen.getByTestId('tab-layout')
      expect(container).toHaveClass('custom-class')
    })

    it('renders with horizontal orientation by default', () => {
      render(<TabLayout tabs={mockTabs} />)

      const container = screen.getByTestId('tab-layout')
      expect(container).toHaveClass('flex-col')
    })
  })

  // Group 2: Initial Index
  describe('Initial Index', () => {
    it('shows first tab when initialIndex=0', () => {
      render(<TabLayout tabs={mockTabs} initialIndex={0} />)

      expect(screen.getByText('Content 1')).toBeVisible()
    })

    it('shows second tab when initialIndex=1', () => {
      render(<TabLayout tabs={mockTabs} initialIndex={1} />)

      expect(screen.getByText('Content 2')).toBeVisible()
    })

    it('shows third tab when initialIndex=2', () => {
      render(<TabLayout tabs={mockTabs} initialIndex={2} />)

      expect(screen.getByText('Content 3')).toBeVisible()
    })
  })

  // Group 3: Tab Switching
  describe('Tab Switching', () => {
    it('switches to second tab when clicked', () => {
      render(<TabLayout tabs={mockTabs} />)

      const tab2 = screen.getByRole('tab', { name: 'Tab 2' })
      fireEvent.click(tab2)

      expect(screen.getByText('Content 2')).toBeVisible()
    })

    it('switches to third tab when clicked', () => {
      render(<TabLayout tabs={mockTabs} />)

      const tab3 = screen.getByRole('tab', { name: 'Tab 3' })
      fireEvent.click(tab3)

      expect(screen.getByText('Content 3')).toBeVisible()
    })

    it('can switch back to first tab', () => {
      render(<TabLayout tabs={mockTabs} initialIndex={1} />)

      const tab1 = screen.getByRole('tab', { name: 'Tab 1' })
      fireEvent.click(tab1)

      expect(screen.getByText('Content 1')).toBeVisible()
    })

    it('calls onTabChange when tab clicked', () => {
      const handleChange = vi.fn()
      render(<TabLayout tabs={mockTabs} onTabChange={handleChange} />)

      const tab2 = screen.getByRole('tab', { name: 'Tab 2' })
      fireEvent.click(tab2)

      expect(handleChange).toHaveBeenCalledWith(mockTabs[1], 1)
    })

    it('calls onTabChange with correct index', () => {
      const handleChange = vi.fn()
      render(<TabLayout tabs={mockTabs} onTabChange={handleChange} />)

      const tab3 = screen.getByRole('tab', { name: 'Tab 3' })
      fireEvent.click(tab3)

      expect(handleChange).toHaveBeenCalledWith(mockTabs[2], 2)
    })
  })

  // Group 4: Orientation
  describe('Orientation', () => {
    it('renders horizontal layout by default', () => {
      render(<TabLayout tabs={mockTabs} />)

      const container = screen.getByTestId('tab-layout')
      expect(container).toHaveClass('flex-col')
    })

    it('renders horizontal layout when specified', () => {
      render(<TabLayout tabs={mockTabs} orientation="horizontal" />)

      const container = screen.getByTestId('tab-layout')
      expect(container).toHaveClass('flex-col')
    })

    it('renders vertical layout when specified', () => {
      render(<TabLayout tabs={mockTabs} orientation="vertical" />)

      const container = screen.getByTestId('tab-layout')
      expect(container).toHaveClass('flex-row')
    })
  })

  // Group 5: Variant Styles
  describe('Variant Styles', () => {
    it('applies primary variant by default', () => {
      render(<TabLayout tabs={mockTabs} variant="primary" />)

      const activeTab = screen.getByRole('tab', { name: 'Tab 1' })
      // Active tab should have primary variant styles
      expect(activeTab).toBeInTheDocument()
    })

    it('applies secondary variant', () => {
      render(<TabLayout tabs={mockTabs} variant="secondary" />)

      const activeTab = screen.getByRole('tab', { name: 'Tab 1' })
      expect(activeTab).toBeInTheDocument()
    })
  })

  // Group 6: Tab Panel Content
  describe('Tab Panel Content', () => {
    it('renders complex content', () => {
      const complexTabs: Tab[] = [
        {
          label: 'Rich Content',
          content: (
            <div>
              <h3>Heading</h3>
              <p>Paragraph</p>
              <button>Button</button>
            </div>
          ),
        },
      ]

      render(<TabLayout tabs={complexTabs} />)

      expect(
        screen.getByRole('heading', { name: 'Heading' })
      ).toBeInTheDocument()
      expect(screen.getByText('Paragraph')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument()
    })

    it('renders multiple tabs with different content types', () => {
      const mixedTabs: Tab[] = [
        { label: 'Text', content: 'Simple text' },
        { label: 'HTML', content: <div>HTML content</div> },
        { label: 'Component', content: <button>Component</button> },
      ]

      render(<TabLayout tabs={mixedTabs} />)

      expect(screen.getByText('Simple text')).toBeVisible()

      fireEvent.click(screen.getByRole('tab', { name: 'HTML' }))
      expect(screen.getByText('HTML content')).toBeVisible()

      fireEvent.click(screen.getByRole('tab', { name: 'Component' }))
      expect(
        screen.getByRole('button', { name: 'Component' })
      ).toBeInTheDocument()
    })
  })

  // Group 7: ARIA Attributes
  describe('ARIA Attributes', () => {
    it('has correct role attributes', () => {
      render(<TabLayout tabs={mockTabs} />)

      const tablist = screen.getByRole('tablist')
      expect(tablist).toBeInTheDocument()

      const tabs = screen.getAllByRole('tab')
      expect(tabs).toHaveLength(3)

      const tabpanels = screen.getAllByRole('tabpanel', { hidden: true })
      expect(tabpanels).toHaveLength(3)
    })

    it('sets aria-selected on active tab', () => {
      render(<TabLayout tabs={mockTabs} />)

      const tab1 = screen.getByRole('tab', { name: 'Tab 1' })
      const tab2 = screen.getByRole('tab', { name: 'Tab 2' })

      expect(tab1).toHaveAttribute('aria-selected', 'true')
      expect(tab2).toHaveAttribute('aria-selected', 'false')
    })

    it('updates aria-selected when tab changes', () => {
      render(<TabLayout tabs={mockTabs} />)

      const tab2 = screen.getByRole('tab', { name: 'Tab 2' })
      fireEvent.click(tab2)

      expect(tab2).toHaveAttribute('aria-selected', 'true')
      expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute(
        'aria-selected',
        'false'
      )
    })

    it('sets aria-controls on tabs', () => {
      render(<TabLayout tabs={mockTabs} />)

      const tab1 = screen.getByRole('tab', { name: 'Tab 1' })
      expect(tab1).toHaveAttribute('aria-controls', 'tabpanel-0')
    })

    it('sets aria-labelledby on panels', () => {
      render(<TabLayout tabs={mockTabs} />)

      const panels = screen.getAllByRole('tabpanel', { hidden: true })
      expect(panels[0]).toHaveAttribute('aria-labelledby', 'tab-0')
    })

    it('sets tabIndex correctly', () => {
      render(<TabLayout tabs={mockTabs} />)

      const tab1 = screen.getByRole('tab', { name: 'Tab 1' })
      const tab2 = screen.getByRole('tab', { name: 'Tab 2' })

      expect(tab1).toHaveAttribute('tabIndex', '0')
      expect(tab2).toHaveAttribute('tabIndex', '-1')
    })
  })

  // Group 8: Accessibility
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<TabLayout tabs={mockTabs} />)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations when second tab active', async () => {
      const { container } = render(
        <TabLayout tabs={mockTabs} initialIndex={1} />
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations in vertical orientation', async () => {
      const { container } = render(
        <TabLayout tabs={mockTabs} orientation="vertical" />
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })
})
