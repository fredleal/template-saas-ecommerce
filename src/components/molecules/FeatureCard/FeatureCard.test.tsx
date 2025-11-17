import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { FeatureCard } from './FeatureCard'

describe('FeatureCard', () => {
  describe('Rendering', () => {
    it('renders title and description', () => {
      render(
        <FeatureCard
          icon="Plus"
          title="Feature Title"
          description="Feature description text"
        />
      )
      expect(screen.getByText('Feature Title')).toBeInTheDocument()
      expect(screen.getByText('Feature description text')).toBeInTheDocument()
    })

    it('renders with correct icon', () => {
      const { container } = render(
        <FeatureCard
          icon="Plus"
          title="Add Feature"
          description="Click to add"
        />
      )
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  describe('Props', () => {
    it('applies custom className', () => {
      const { container } = render(
        <FeatureCard
          icon="Plus"
          title="Test"
          description="Test description"
          className="custom-class"
        />
      )
      const featureCard = container.firstChild as HTMLElement
      expect(featureCard).toHaveClass('custom-class')
    })

    it('renders with different icon sizes', () => {
      const sizes = ['sm', 'md', 'lg'] as const
      sizes.forEach(size => {
        const { container, unmount } = render(
          <FeatureCard
            icon="Plus"
            title="Test"
            description="Description"
            iconSize={size}
          />
        )
        const svg = container.querySelector('svg')
        expect(svg).toBeInTheDocument()
        unmount()
      })
    })

    it('renders with different icon colors', () => {
      const colors = ['primary', 'secondary', 'current'] as const
      colors.forEach(color => {
        const { container, unmount } = render(
          <FeatureCard
            icon="Plus"
            title="Test"
            description="Description"
            iconColor={color}
          />
        )
        const svg = container.querySelector('svg')
        expect(svg).toBeInTheDocument()
        unmount()
      })
    })
  })

  describe('Content', () => {
    it('truncates long descriptions', () => {
      const longDescription = 'A'.repeat(200)
      render(
        <FeatureCard
          icon="Plus"
          title="Feature"
          description={longDescription}
        />
      )
      const descriptionElement = screen.getByText(longDescription)
      expect(descriptionElement).toHaveClass('line-clamp-3')
    })

    it('renders title as heading element', () => {
      render(
        <FeatureCard icon="Plus" title="Heading" description="Description" />
      )
      const heading = screen.getByRole('heading', { name: 'Heading' })
      expect(heading).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <FeatureCard icon="Plus" title="Feature" description="Description" />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('icon is marked as decorative', () => {
      const { container } = render(
        <FeatureCard icon="Plus" title="Feature" description="Description" />
      )
      const svg = container.querySelector('svg')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('Layout', () => {
    it('applies flex column layout', () => {
      const { container } = render(
        <FeatureCard icon="Plus" title="Test" description="Description" />
      )
      const featureCard = container.firstChild as HTMLElement
      expect(featureCard).toHaveClass(
        'flex',
        'flex-col',
        'items-center',
        'text-center'
      )
    })

    it('has icon container with background', () => {
      const { container } = render(
        <FeatureCard icon="Plus" title="Test" description="Description" />
      )
      const iconContainer = container.querySelector('.bg-blue-50')
      expect(iconContainer).toBeInTheDocument()
      expect(iconContainer).toHaveClass('p-4', 'rounded-lg')
    })
  })
})
