import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { PricingCard } from './PricingCard'

describe('PricingCard', () => {
  const mockFeatures = ['Up to 3 pages', 'Basic templates', 'Mobile responsive']

  const mockPrimaryCTA = {
    label: 'Get Started',
    onClick: vi.fn(),
  }

  describe('Rendering', () => {
    it('renders plan name and description', () => {
      render(
        <PricingCard
          name="Free"
          price={0}
          description="Perfect for getting started"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(screen.getByText('Free')).toBeInTheDocument()
      expect(
        screen.getByText('Perfect for getting started')
      ).toBeInTheDocument()
    })

    it('renders numeric price with currency and period', () => {
      render(
        <PricingCard
          name="Pro"
          price={29}
          currency="$"
          period="/month"
          description="For professionals"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(screen.getByText('$29')).toBeInTheDocument()
      expect(screen.getByText('/month')).toBeInTheDocument()
    })

    it('renders custom price without period', () => {
      render(
        <PricingCard
          name="Enterprise"
          price="Custom"
          description="For large teams"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(screen.getByText('Custom')).toBeInTheDocument()
      expect(screen.queryByText('/month')).not.toBeInTheDocument()
    })

    it('renders all features in the list', () => {
      render(
        <PricingCard
          name="Pro"
          price={29}
          description="Professional plan"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
        />
      )

      mockFeatures.forEach(feature => {
        expect(screen.getByText(feature)).toBeInTheDocument()
      })
    })

    it('renders popular badge when popular is true', () => {
      render(
        <PricingCard
          name="Pro"
          price={29}
          description="Most popular plan"
          features={mockFeatures}
          popular={true}
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(screen.getByText('Most Popular')).toBeInTheDocument()
    })

    it('does not render popular badge when popular is false', () => {
      render(
        <PricingCard
          name="Free"
          price={0}
          description="Basic plan"
          features={mockFeatures}
          popular={false}
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(screen.queryByText('Most Popular')).not.toBeInTheDocument()
    })
  })

  describe('CTA Buttons', () => {
    it('renders primary CTA button', () => {
      render(
        <PricingCard
          name="Pro"
          price={29}
          description="Professional plan"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(
        screen.getByRole('button', { name: 'Get Started' })
      ).toBeInTheDocument()
    })

    it('calls onClick when primary CTA is clicked', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(
        <PricingCard
          name="Pro"
          price={29}
          description="Professional plan"
          features={mockFeatures}
          primaryCTA={{ label: 'Get Started', onClick: handleClick }}
        />
      )

      const button = screen.getByRole('button', { name: 'Get Started' })
      await user.click(button)

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('renders secondary CTA when provided', () => {
      render(
        <PricingCard
          name="Pro"
          price={29}
          description="Professional plan"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
          secondaryCTA={{ label: 'Learn More', onClick: vi.fn() }}
        />
      )

      expect(
        screen.getByRole('button', { name: 'Learn More' })
      ).toBeInTheDocument()
    })

    it('calls onClick when secondary CTA is clicked', async () => {
      const user = userEvent.setup()
      const handleSecondaryClick = vi.fn()

      render(
        <PricingCard
          name="Pro"
          price={29}
          description="Professional plan"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
          secondaryCTA={{ label: 'Learn More', onClick: handleSecondaryClick }}
        />
      )

      const secondaryButton = screen.getByRole('button', { name: 'Learn More' })
      await user.click(secondaryButton)

      expect(handleSecondaryClick).toHaveBeenCalledTimes(1)
    })

    it('does not render secondary CTA when not provided', () => {
      render(
        <PricingCard
          name="Free"
          price={0}
          description="Basic plan"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
        />
      )

      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(1)
    })
  })

  describe('Styling', () => {
    it('applies popular styling when popular is true', () => {
      const { container } = render(
        <PricingCard
          name="Pro"
          price={29}
          description="Most popular"
          features={mockFeatures}
          popular={true}
          primaryCTA={mockPrimaryCTA}
        />
      )

      const card = container.firstChild as HTMLElement
      expect(card).toHaveClass('border-blue-500')
      expect(card).toHaveClass('md:scale-105')
    })

    it('applies default styling when popular is false', () => {
      const { container } = render(
        <PricingCard
          name="Free"
          price={0}
          description="Basic plan"
          features={mockFeatures}
          popular={false}
          primaryCTA={mockPrimaryCTA}
        />
      )

      const card = container.firstChild as HTMLElement
      expect(card).toHaveClass('border-gray-200')
    })

    it('applies custom className', () => {
      const { container } = render(
        <PricingCard
          name="Pro"
          price={29}
          description="Professional plan"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
          className="custom-test-class"
        />
      )

      const card = container.firstChild as HTMLElement
      expect(card).toHaveClass('custom-test-class')
    })
  })

  describe('Currency and Period', () => {
    it('uses default currency ($) when not specified', () => {
      render(
        <PricingCard
          name="Pro"
          price={29}
          description="Professional plan"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(screen.getByText('$29')).toBeInTheDocument()
    })

    it('uses custom currency when specified', () => {
      render(
        <PricingCard
          name="Pro"
          price={29}
          currency="€"
          description="Professional plan"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(screen.getByText('€29')).toBeInTheDocument()
    })

    it('uses default period (/month) when not specified', () => {
      render(
        <PricingCard
          name="Pro"
          price={29}
          description="Professional plan"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(screen.getByText('/month')).toBeInTheDocument()
    })

    it('uses custom period when specified', () => {
      render(
        <PricingCard
          name="Annual"
          price={290}
          period="/year"
          description="Annual plan"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(screen.getByText('/year')).toBeInTheDocument()
    })
  })

  describe('Features Icons', () => {
    it('renders checkmark icons for each feature', () => {
      const { container } = render(
        <PricingCard
          name="Pro"
          price={29}
          description="Professional plan"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
        />
      )

      const icons = container.querySelectorAll('svg')
      // Should have checkmark icon for each feature
      expect(icons.length).toBeGreaterThanOrEqual(mockFeatures.length)
    })
  })

  describe('Accessibility', () => {
    it('should not have any accessibility violations', async () => {
      const { container } = render(
        <PricingCard
          name="Pro"
          price={29}
          description="Professional plan"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
        />
      )

      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should not have accessibility violations with popular badge', async () => {
      const { container } = render(
        <PricingCard
          name="Pro"
          price={29}
          description="Most popular plan"
          features={mockFeatures}
          popular={true}
          primaryCTA={mockPrimaryCTA}
        />
      )

      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should not have accessibility violations with secondary CTA', async () => {
      const { container } = render(
        <PricingCard
          name="Pro"
          price={29}
          description="Professional plan"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
          secondaryCTA={{ label: 'Learn More', onClick: vi.fn() }}
        />
      )

      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe('Edge Cases', () => {
    it('handles zero price correctly', () => {
      render(
        <PricingCard
          name="Free"
          price={0}
          description="Free forever"
          features={mockFeatures}
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(screen.getByText('$0')).toBeInTheDocument()
    })

    it('handles empty features array', () => {
      render(
        <PricingCard
          name="Basic"
          price={10}
          description="Basic plan"
          features={[]}
          primaryCTA={mockPrimaryCTA}
        />
      )

      // Should still render the card structure
      expect(screen.getByText('Basic')).toBeInTheDocument()
      expect(screen.getByText('Basic plan')).toBeInTheDocument()
    })

    it('handles very long feature text', () => {
      const longFeature =
        'This is a very long feature description that should be displayed correctly even with lots of text'

      render(
        <PricingCard
          name="Pro"
          price={29}
          description="Professional plan"
          features={[longFeature]}
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(screen.getByText(longFeature)).toBeInTheDocument()
    })
  })
})
