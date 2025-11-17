import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { HeroSection } from './HeroSection'

describe('HeroSection', () => {
  describe('Rendering', () => {
    it('renders title', () => {
      render(<HeroSection title="Welcome" />)
      expect(
        screen.getByRole('heading', { name: 'Welcome' })
      ).toBeInTheDocument()
    })

    it('renders with subtitle', () => {
      render(<HeroSection title="Title" subtitle="Subtitle Text" />)
      expect(screen.getByText('Subtitle Text')).toBeInTheDocument()
    })

    it('renders description', () => {
      render(
        <HeroSection title="Title" description="This is the description" />
      )
      expect(screen.getByText('This is the description')).toBeInTheDocument()
    })
  })

  describe('Call-to-Action Buttons', () => {
    it('renders primary CTA button', () => {
      render(
        <HeroSection title="Title" primaryCTA={{ label: 'Get Started' }} />
      )
      expect(
        screen.getByRole('button', { name: 'Get Started' })
      ).toBeInTheDocument()
    })

    it('renders secondary CTA button', () => {
      render(
        <HeroSection title="Title" secondaryCTA={{ label: 'Learn More' }} />
      )
      expect(
        screen.getByRole('button', { name: 'Learn More' })
      ).toBeInTheDocument()
    })

    it('renders both CTA buttons', () => {
      render(
        <HeroSection
          title="Title"
          primaryCTA={{ label: 'Get Started' }}
          secondaryCTA={{ label: 'Learn More' }}
        />
      )
      expect(
        screen.getByRole('button', { name: 'Get Started' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: 'Learn More' })
      ).toBeInTheDocument()
    })

    it('handles primary CTA click', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      render(
        <HeroSection
          title="Title"
          primaryCTA={{ label: 'Click me', onClick }}
        />
      )
      await user.click(screen.getByRole('button', { name: 'Click me' }))
      expect(onClick).toHaveBeenCalled()
    })

    it('handles secondary CTA click', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      render(
        <HeroSection
          title="Title"
          secondaryCTA={{ label: 'Click me', onClick }}
        />
      )
      await user.click(screen.getByRole('button', { name: 'Click me' }))
      expect(onClick).toHaveBeenCalled()
    })
  })

  describe('Layout', () => {
    it('applies min-height for section', () => {
      const { container } = render(<HeroSection title="Title" />)
      const section = container.querySelector('section')
      expect(section).toHaveClass('min-h-[500px]', 'md:min-h-[600px]')
    })

    it('centers content', () => {
      const { container } = render(<HeroSection title="Title" />)
      const section = container.querySelector('section')
      expect(section).toHaveClass('flex', 'items-center', 'justify-center')
    })

    it('renders gradient overlay by default', () => {
      const { container } = render(<HeroSection title="Title" />)
      const overlay = container.querySelector('.bg-gradient-to-b')
      expect(overlay).toBeInTheDocument()
    })

    it('skips gradient when backgroundGradient is false', () => {
      const { container } = render(
        <HeroSection title="Title" backgroundGradient={false} />
      )
      const overlay = container.querySelector('.bg-gradient-to-b')
      expect(overlay).not.toBeInTheDocument()
    })
  })

  describe('Custom Content', () => {
    it('renders children when provided', () => {
      render(
        <HeroSection title="Title">
          <p>Custom content</p>
        </HeroSection>
      )
      expect(screen.getByText('Custom content')).toBeInTheDocument()
    })
  })

  describe('Props', () => {
    it('applies custom className', () => {
      const { container } = render(
        <HeroSection title="Title" className="custom-class" />
      )
      const section = container.querySelector('section')
      expect(section).toHaveClass('custom-class')
    })

    it('applies background image when provided', () => {
      const { container } = render(
        <HeroSection
          title="Title"
          backgroundImage="https://example.com/image.jpg"
        />
      )
      const section = container.querySelector('section')
      expect(section).toHaveStyle(
        'backgroundImage: url(https://example.com/image.jpg)'
      )
    })
  })

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <HeroSection
          title="Hero Title"
          subtitle="Subtitle"
          description="Description text"
          primaryCTA={{ label: 'Get Started' }}
        />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('uses proper heading structure', () => {
      render(<HeroSection title="Main Title" />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Main Title')
    })
  })

  describe('Responsive Design', () => {
    it('renders section with responsive classes', () => {
      const { container } = render(<HeroSection title="Title" />)
      const section = container.querySelector('section')
      expect(section).toHaveClass(
        'md:min-h-[600px]',
        'lg:text-6xl',
        'md:text-5xl'
      )
    })
  })
})
