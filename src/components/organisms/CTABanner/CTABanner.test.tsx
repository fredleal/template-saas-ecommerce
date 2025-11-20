import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { CTABanner } from './CTABanner'

describe('CTABanner', () => {
  const mockPrimaryCTA = {
    label: 'Get Started',
    onClick: vi.fn(),
  }

  describe('Rendering', () => {
    it('renders title and primary CTA', () => {
      render(
        <CTABanner title="Ready to get started?" primaryCTA={mockPrimaryCTA} />
      )

      expect(screen.getByText('Ready to get started?')).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: 'Get Started' })
      ).toBeInTheDocument()
    })

    it('renders with description', () => {
      render(
        <CTABanner
          title="Join us today"
          description="Start your journey with our platform"
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(screen.getByText('Join us today')).toBeInTheDocument()
      expect(
        screen.getByText('Start your journey with our platform')
      ).toBeInTheDocument()
    })

    it('renders without description', () => {
      render(<CTABanner title="Simple CTA" primaryCTA={mockPrimaryCTA} />)

      expect(screen.getByText('Simple CTA')).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: 'Get Started' })
      ).toBeInTheDocument()
    })

    it('renders with badge', () => {
      render(
        <CTABanner
          title="Special Offer"
          badge={{ text: 'Limited Time', variant: 'warning' }}
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(screen.getByText('Limited Time')).toBeInTheDocument()
      expect(screen.getByText('Special Offer')).toBeInTheDocument()
    })

    it('renders secondary CTA when provided', () => {
      render(
        <CTABanner
          title="Get Started"
          primaryCTA={mockPrimaryCTA}
          secondaryCTA={{ label: 'Learn More', onClick: vi.fn() }}
        />
      )

      expect(
        screen.getByRole('button', { name: 'Get Started' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: 'Learn More' })
      ).toBeInTheDocument()
    })

    it('does not render secondary CTA when not provided', () => {
      render(<CTABanner title="Get Started" primaryCTA={mockPrimaryCTA} />)

      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(1)
    })
  })

  describe('Interactions', () => {
    it('calls onClick when primary CTA is clicked', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(
        <CTABanner
          title="Click Test"
          primaryCTA={{ label: 'Click Me', onClick: handleClick }}
        />
      )

      const button = screen.getByRole('button', { name: 'Click Me' })
      await user.click(button)

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('calls onClick when secondary CTA is clicked', async () => {
      const user = userEvent.setup()
      const handleSecondaryClick = vi.fn()

      render(
        <CTABanner
          title="Click Test"
          primaryCTA={mockPrimaryCTA}
          secondaryCTA={{ label: 'Secondary', onClick: handleSecondaryClick }}
        />
      )

      const secondaryButton = screen.getByRole('button', { name: 'Secondary' })
      await user.click(secondaryButton)

      expect(handleSecondaryClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Variants', () => {
    it('renders centered variant (default)', () => {
      const { container } = render(
        <CTABanner
          title="Centered"
          primaryCTA={mockPrimaryCTA}
          variant="centered"
        />
      )

      const contentDiv = container.querySelector('.items-center.text-center')
      expect(contentDiv).toBeInTheDocument()
    })

    it('renders split variant', () => {
      const { container } = render(
        <CTABanner
          title="Split Layout"
          primaryCTA={mockPrimaryCTA}
          variant="split"
        />
      )

      const contentDiv = container.querySelector('.md\\:flex-row')
      expect(contentDiv).toBeInTheDocument()
    })

    it('uses centered variant as default when not specified', () => {
      const { container } = render(
        <CTABanner title="Default" primaryCTA={mockPrimaryCTA} />
      )

      const contentDiv = container.querySelector('.text-center')
      expect(contentDiv).toBeInTheDocument()
    })
  })

  describe('Background Variants', () => {
    it('renders with primary background (default)', () => {
      const { container } = render(
        <CTABanner
          title="Primary BG"
          primaryCTA={mockPrimaryCTA}
          background="primary"
        />
      )

      const section = container.querySelector('section')
      expect(section).toHaveClass('bg-blue-600', 'text-white')
    })

    it('renders with secondary background', () => {
      const { container } = render(
        <CTABanner
          title="Secondary BG"
          primaryCTA={mockPrimaryCTA}
          background="secondary"
        />
      )

      const section = container.querySelector('section')
      expect(section).toHaveClass('bg-gray-800', 'text-white')
    })

    it('renders with gradient background', () => {
      const { container } = render(
        <CTABanner
          title="Gradient BG"
          primaryCTA={mockPrimaryCTA}
          background="gradient"
        />
      )

      const section = container.querySelector('section')
      expect(section).toHaveClass('bg-gradient-to-r')
    })

    it('renders with light background', () => {
      const { container } = render(
        <CTABanner
          title="Light BG"
          primaryCTA={mockPrimaryCTA}
          background="light"
        />
      )

      const section = container.querySelector('section')
      expect(section).toHaveClass('bg-gray-50', 'text-gray-900')
    })

    it('renders with dark background', () => {
      const { container } = render(
        <CTABanner
          title="Dark BG"
          primaryCTA={mockPrimaryCTA}
          background="dark"
        />
      )

      const section = container.querySelector('section')
      expect(section).toHaveClass('bg-gray-900', 'text-white')
    })

    it('uses primary background as default when not specified', () => {
      const { container } = render(
        <CTABanner title="Default BG" primaryCTA={mockPrimaryCTA} />
      )

      const section = container.querySelector('section')
      expect(section).toHaveClass('bg-blue-600')
    })
  })

  describe('Size Variants', () => {
    it('renders small size', () => {
      const { container } = render(
        <CTABanner title="Small" primaryCTA={mockPrimaryCTA} size="sm" />
      )

      const section = container.querySelector('section')
      expect(section).toHaveClass('py-8', 'px-6')
    })

    it('renders medium size (default)', () => {
      const { container } = render(
        <CTABanner title="Medium" primaryCTA={mockPrimaryCTA} size="md" />
      )

      const section = container.querySelector('section')
      expect(section).toHaveClass('py-12', 'px-6')
    })

    it('renders large size', () => {
      const { container } = render(
        <CTABanner title="Large" primaryCTA={mockPrimaryCTA} size="lg" />
      )

      const section = container.querySelector('section')
      expect(section).toHaveClass('py-16', 'px-8')
    })

    it('uses medium size as default when not specified', () => {
      const { container } = render(
        <CTABanner title="Default Size" primaryCTA={mockPrimaryCTA} />
      )

      const section = container.querySelector('section')
      expect(section).toHaveClass('py-12')
    })
  })

  describe('Badge Variants', () => {
    it('renders badge with default variant', () => {
      render(
        <CTABanner
          title="With Badge"
          badge={{ text: 'New Feature' }}
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(screen.getByText('New Feature')).toBeInTheDocument()
    })

    it('renders badge with different variants', () => {
      const variants: Array<
        'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
      > = ['primary', 'secondary', 'success', 'warning', 'danger', 'info']

      variants.forEach(variant => {
        const { unmount } = render(
          <CTABanner
            title="Test"
            badge={{ text: `${variant} badge`, variant }}
            primaryCTA={mockPrimaryCTA}
          />
        )

        expect(screen.getByText(`${variant} badge`)).toBeInTheDocument()
        unmount()
      })
    })
  })

  describe('Custom Styling', () => {
    it('applies custom className', () => {
      const { container } = render(
        <CTABanner
          title="Custom"
          primaryCTA={mockPrimaryCTA}
          className="custom-test-class"
        />
      )

      const section = container.querySelector('section')
      expect(section).toHaveClass('custom-test-class')
    })

    it('maintains default classes with custom className', () => {
      const { container } = render(
        <CTABanner
          title="Combined"
          primaryCTA={mockPrimaryCTA}
          className="my-custom-class"
        />
      )

      const section = container.querySelector('section')
      expect(section).toHaveClass('my-custom-class')
      expect(section).toHaveClass('py-12')
    })
  })

  describe('Accessibility', () => {
    it('should not have any accessibility violations', async () => {
      const { container } = render(
        <CTABanner
          title="Accessible Banner"
          description="This banner is accessible"
          primaryCTA={mockPrimaryCTA}
        />
      )

      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has proper ARIA role', () => {
      render(<CTABanner title="Test" primaryCTA={mockPrimaryCTA} />)

      const section = screen.getByRole('region', { name: 'Call to action' })
      expect(section).toBeInTheDocument()
    })

    it('should not have accessibility violations with badge', async () => {
      const { container } = render(
        <CTABanner
          title="With Badge"
          badge={{ text: 'Limited Offer', variant: 'warning' }}
          primaryCTA={mockPrimaryCTA}
        />
      )

      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should not have accessibility violations with secondary CTA', async () => {
      const { container } = render(
        <CTABanner
          title="Two CTAs"
          primaryCTA={mockPrimaryCTA}
          secondaryCTA={{ label: 'Learn More', onClick: vi.fn() }}
        />
      )

      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should not have accessibility violations in split layout', async () => {
      const { container } = render(
        <CTABanner
          title="Split Layout"
          description="Split layout banner"
          variant="split"
          primaryCTA={mockPrimaryCTA}
        />
      )

      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe('Edge Cases', () => {
    it('handles very long title text', () => {
      const longTitle =
        'This is a very long banner title that should be displayed correctly even with lots of text content'

      render(<CTABanner title={longTitle} primaryCTA={mockPrimaryCTA} />)

      expect(screen.getByText(longTitle)).toBeInTheDocument()
    })

    it('handles very long description text', () => {
      const longDescription =
        'This is a very long banner description that should be displayed correctly even with lots and lots of text content that goes on and on explaining the call to action in great detail'

      render(
        <CTABanner
          title="Title"
          description={longDescription}
          primaryCTA={mockPrimaryCTA}
        />
      )

      expect(screen.getByText(longDescription)).toBeInTheDocument()
    })

    it('handles long CTA button labels', () => {
      render(
        <CTABanner
          title="Test"
          primaryCTA={{
            label: 'This is a very long button label',
            onClick: vi.fn(),
          }}
        />
      )

      expect(
        screen.getByRole('button', { name: 'This is a very long button label' })
      ).toBeInTheDocument()
    })
  })

  describe('Combined Props', () => {
    it('renders correctly with all props combined', () => {
      const { container } = render(
        <CTABanner
          title="Complete Banner"
          description="All features enabled"
          badge={{ text: 'New', variant: 'success' }}
          primaryCTA={mockPrimaryCTA}
          secondaryCTA={{ label: 'Learn More', onClick: vi.fn() }}
          variant="split"
          background="gradient"
          size="lg"
          className="custom-class"
        />
      )

      expect(screen.getByText('Complete Banner')).toBeInTheDocument()
      expect(screen.getByText('All features enabled')).toBeInTheDocument()
      expect(screen.getByText('New')).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: 'Get Started' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: 'Learn More' })
      ).toBeInTheDocument()

      const section = container.querySelector('section')
      expect(section).toHaveClass('custom-class')
      expect(section).toHaveClass('py-16', 'px-8')
      expect(section).toHaveClass('bg-gradient-to-r')
    })
  })
})
