import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Icon } from './Icon'

describe('Icon', () => {
  describe('Rendering', () => {
    it('renders with valid icon name', () => {
      render(<Icon name="CartIcon" />)
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('returns null with invalid icon name', () => {
      const { container } = render(<Icon name="InvalidIcon" as any />)
      expect(container.firstChild).toBeNull()
    })
  })

  describe('All Icons Render', () => {
    it('renders CartIcon', () => {
      render(<Icon name="CartIcon" />)
      expect(document.querySelector('svg')).toBeInTheDocument()
    })

    it('renders HeartIcon', () => {
      render(<Icon name="HeartIcon" />)
      expect(document.querySelector('svg')).toBeInTheDocument()
    })

    it('renders SearchIcon', () => {
      render(<Icon name="SearchIcon" />)
      expect(document.querySelector('svg')).toBeInTheDocument()
    })

    it('renders MenuIcon', () => {
      render(<Icon name="MenuIcon" />)
      expect(document.querySelector('svg')).toBeInTheDocument()
    })

    it('renders PlusIcon', () => {
      render(<Icon name="PlusIcon" />)
      expect(document.querySelector('svg')).toBeInTheDocument()
    })

    it('renders StarIcon', () => {
      render(<Icon name="StarIcon" />)
      expect(document.querySelector('svg')).toBeInTheDocument()
    })

    it('renders CheckIcon', () => {
      render(<Icon name="CheckIcon" />)
      expect(document.querySelector('svg')).toBeInTheDocument()
    })

    it('renders UserIcon', () => {
      render(<Icon name="UserIcon" />)
      expect(document.querySelector('svg')).toBeInTheDocument()
    })

    it('renders FilterIcon', () => {
      render(<Icon name="FilterIcon" />)
      expect(document.querySelector('svg')).toBeInTheDocument()
    })
  })

  describe('Props Delegation', () => {
    it('passes size prop to icon component', () => {
      render(<Icon name="CartIcon" size="lg" />)
      const svg = document.querySelector('svg')
      expect(svg).toHaveAttribute('width', '24')
      expect(svg).toHaveAttribute('height', '24')
    })

    it('passes color prop to icon component', () => {
      render(<Icon name="CartIcon" color="success" />)
      const svg = document.querySelector('svg')
      expect(svg).toHaveClass('text-green-600')
    })

    it('passes decorative prop to icon component', () => {
      render(<Icon name="CartIcon" decorative />)
      const svg = document.querySelector('svg')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
    })

    it('passes aria-label when not decorative', () => {
      render(<Icon name="CartIcon" aria-label="Shopping cart" />)
      const svg = document.querySelector('svg')
      expect(svg).toHaveAttribute('aria-label', 'Shopping cart')
    })
  })

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Icon name="CartIcon" aria-label="Cart" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has no violations when decorative', async () => {
      const { container } = render(<Icon name="CartIcon" decorative />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
