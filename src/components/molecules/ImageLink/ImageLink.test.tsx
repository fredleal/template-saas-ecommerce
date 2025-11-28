import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ImageLink } from './ImageLink'
import * as useDeviceModule from '../../../hooks/useDevice'
import * as useVisibilityModule from '../../../hooks/Carousel/useVisibilityWithTabCheck'

// Mock hooks
vi.mock('../../../hooks/useDevice', () => ({
  useDevice: vi.fn(() => ({
    deviceType: 'desktop',
    isPhone: false,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  })),
}))

vi.mock('../../../hooks/Carousel/useVisibilityWithTabCheck', () => ({
  useVisibilityWithTabCheck: vi.fn(() => ({
    ref: { current: null },
    isTabVisible: true,
    isElementVisible: true,
    isVisible: true,
  })),
}))

describe('ImageLink', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Reset mocks to default state
    vi.mocked(useDeviceModule.useDevice).mockReturnValue({
      deviceType: 'desktop',
      isPhone: false,
      isMobile: false,
      isTablet: false,
      isDesktop: true,
    })
    vi.mocked(useVisibilityModule.useVisibilityWithTabCheck).mockReturnValue({
      ref: { current: null },
      isTabVisible: true,
      isElementVisible: true,
      isVisible: true,
    })
  })

  // Group 1: Basic Rendering
  describe('Basic Rendering', () => {
    it('renders with desktop image', () => {
      render(
        <ImageLink
          imgDesktop="https://example.com/desktop.jpg"
          title="Test Image"
        />
      )

      const image = screen.getByRole('img')
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', 'https://example.com/desktop.jpg')
    })

    it('renders with mobile image when isMobile', () => {
      vi.mocked(useDeviceModule.useDevice).mockReturnValue({
        deviceType: 'phone',
        isPhone: true,
        isMobile: true,
        isTablet: false,
        isDesktop: false,
      })

      render(
        <ImageLink
          imgMobile="https://example.com/mobile.jpg"
          imgDesktop="https://example.com/desktop.jpg"
        />
      )

      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('src', 'https://example.com/mobile.jpg')
    })

    it('does not render when no image provided', () => {
      const { container } = render(<ImageLink />)

      const imageLink = container.querySelector('[data-testid="image-link"]')
      expect(imageLink).not.toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(
        <ImageLink
          imgDesktop="https://example.com/image.jpg"
          className="custom-class"
        />
      )

      const container = screen.getByTestId('image-link')
      expect(container).toHaveClass('custom-class')
    })
  })

  // Group 2: Link Behavior
  describe('Link Behavior', () => {
    it('renders link with default href', () => {
      render(<ImageLink imgDesktop="https://example.com/image.jpg" />)

      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', '#')
    })

    it('renders link with custom href', () => {
      render(
        <ImageLink
          imgDesktop="https://example.com/image.jpg"
          href="https://example.com"
        />
      )

      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', 'https://example.com')
    })

    it('opens in same tab by default', () => {
      render(<ImageLink imgDesktop="https://example.com/image.jpg" />)

      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('target', '_self')
    })

    it('opens in new tab when external', () => {
      render(<ImageLink imgDesktop="https://example.com/image.jpg" external />)

      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
    })

    it('uses title as aria-label', () => {
      render(
        <ImageLink
          imgDesktop="https://example.com/image.jpg"
          title="Promotional Banner"
        />
      )

      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('aria-label', 'Promotional Banner')
    })
  })

  // Group 3: Image Properties
  describe('Image Properties', () => {
    it('uses title as image alt', () => {
      render(
        <ImageLink
          imgDesktop="https://example.com/image.jpg"
          title="Product Image"
        />
      )

      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('alt', 'Product Image')
    })

    it('applies width and height', () => {
      render(
        <ImageLink
          imgDesktop="https://example.com/image.jpg"
          width={300}
          height={200}
        />
      )

      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('width', '300')
      expect(image).toHaveAttribute('height', '200')
    })

    it('uses lazy loading by default', () => {
      render(<ImageLink imgDesktop="https://example.com/image.jpg" />)

      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('loading', 'lazy')
    })

    it('applies eager loading when specified', () => {
      render(
        <ImageLink imgDesktop="https://example.com/image.jpg" loading="eager" />
      )

      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('loading', 'eager')
    })

    it('applies fetch priority', () => {
      render(
        <ImageLink imgDesktop="https://example.com/image.jpg" priority="high" />
      )

      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('fetchpriority', 'high')
    })

    it('uses fallback src', () => {
      render(
        <ImageLink
          imgDesktop="https://example.com/image.jpg"
          fallbackSrc="https://example.com/fallback.jpg"
        />
      )

      // Fallback is passed to Image component
      expect(screen.getByRole('img')).toBeInTheDocument()
    })
  })

  // Group 4: Device Responsiveness
  describe('Device Responsiveness', () => {
    it('selects desktop image on desktop', () => {
      vi.mocked(useDeviceModule.useDevice).mockReturnValue({
        deviceType: 'desktop',
        isPhone: false,
        isMobile: false,
        isTablet: false,
        isDesktop: true,
      })

      render(
        <ImageLink
          imgMobile="https://example.com/mobile.jpg"
          imgDesktop="https://example.com/desktop.jpg"
        />
      )

      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('src', 'https://example.com/desktop.jpg')
    })

    it('selects mobile image on mobile', () => {
      vi.mocked(useDeviceModule.useDevice).mockReturnValue({
        deviceType: 'phone',
        isPhone: true,
        isMobile: true,
        isTablet: false,
        isDesktop: false,
      })

      render(
        <ImageLink
          imgMobile="https://example.com/mobile.jpg"
          imgDesktop="https://example.com/desktop.jpg"
        />
      )

      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('src', 'https://example.com/mobile.jpg')
    })

    it('does not render if only mobile image on desktop', () => {
      vi.mocked(useDeviceModule.useDevice).mockReturnValue({
        deviceType: 'desktop',
        isPhone: false,
        isMobile: false,
        isTablet: false,
        isDesktop: true,
      })

      const { container } = render(
        <ImageLink imgMobile="https://example.com/mobile.jpg" />
      )

      const imageLink = container.querySelector('[data-testid="image-link"]')
      expect(imageLink).not.toBeInTheDocument()
    })
  })

  // Group 5: Event Handlers
  describe('Event Handlers', () => {
    it('calls onClick when link clicked', () => {
      const handleClick = vi.fn()
      render(
        <ImageLink
          imgDesktop="https://example.com/image.jpg"
          onClick={handleClick}
        />
      )

      const link = screen.getByRole('link')
      fireEvent.click(link)

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('calls onMouseEnter when mouse enters', () => {
      const handleMouseEnter = vi.fn()
      render(
        <ImageLink
          imgDesktop="https://example.com/image.jpg"
          onMouseEnter={handleMouseEnter}
        />
      )

      const link = screen.getByRole('link')
      fireEvent.mouseEnter(link)

      expect(handleMouseEnter).toHaveBeenCalledTimes(1)
    })

    it('calls onMouseLeave when mouse leaves', () => {
      const handleMouseLeave = vi.fn()
      render(
        <ImageLink
          imgDesktop="https://example.com/image.jpg"
          onMouseLeave={handleMouseLeave}
        />
      )

      const link = screen.getByRole('link')
      fireEvent.mouseLeave(link)

      expect(handleMouseLeave).toHaveBeenCalledTimes(1)
    })

    it('calls onMouseOver on mouse over', () => {
      const handleMouseOver = vi.fn()
      render(
        <ImageLink
          imgDesktop="https://example.com/image.jpg"
          onMouseOver={handleMouseOver}
        />
      )

      const link = screen.getByRole('link')
      fireEvent.mouseOver(link)

      expect(handleMouseOver).toHaveBeenCalledTimes(1)
    })
  })

  // Group 6: Visibility Tracking
  describe('Visibility Tracking', () => {
    it('calls onVisible when element becomes visible', () => {
      const handleVisible = vi.fn()

      render(
        <ImageLink
          imgDesktop="https://example.com/image.jpg"
          onVisible={handleVisible}
        />
      )

      // useEffect should trigger onVisible
      expect(handleVisible).toHaveBeenCalledTimes(1)
    })

    it('does not call onVisible when disabled', () => {
      const handleVisible = vi.fn()

      render(
        <ImageLink
          imgDesktop="https://example.com/image.jpg"
          onVisible={handleVisible}
          disableVisibilityTracking
        />
      )

      expect(handleVisible).not.toHaveBeenCalled()
    })

    it('does not call onVisible when not visible', () => {
      vi.mocked(useVisibilityModule.useVisibilityWithTabCheck).mockReturnValue({
        ref: { current: null },
        isTabVisible: true,
        isElementVisible: false,
        isVisible: false,
      })

      const handleVisible = vi.fn()

      render(
        <ImageLink
          imgDesktop="https://example.com/image.jpg"
          onVisible={handleVisible}
        />
      )

      expect(handleVisible).not.toHaveBeenCalled()
    })
  })

  // Group 7: Accessibility
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <ImageLink
          imgDesktop="https://example.com/image.jpg"
          title="Accessible Image Link"
        />
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })

    it('has no accessibility violations when external', async () => {
      const { container } = render(
        <ImageLink
          imgDesktop="https://example.com/image.jpg"
          href="https://example.com"
          external
          title="External Link"
        />
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })
})
