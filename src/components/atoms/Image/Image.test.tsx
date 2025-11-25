import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Image } from './Image'

describe('Image', () => {
  const defaultProps = {
    src: '/test-image.jpg',
    alt: 'Test image description',
  }

  describe('Rendering', () => {
    it('renders image with src and alt correctly', () => {
      render(<Image {...defaultProps} />)
      const img = screen.getByRole('img', { name: /test image description/i })
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', '/test-image.jpg')
      expect(img).toHaveAttribute('alt', 'Test image description')
    })

    it('renders with default props', () => {
      render(<Image {...defaultProps} />)
      const img = screen.getByRole('img')
      expect(img).toHaveClass('object-cover') // default objectFit
      expect(img).toHaveAttribute('loading', 'lazy') // default loading
    })

    it('renders as img element', () => {
      render(<Image {...defaultProps} />)
      const img = screen.getByRole('img')
      expect(img.tagName).toBe('IMG')
    })
  })

  describe('Dimensions', () => {
    it('renders with width as number', () => {
      render(<Image {...defaultProps} width={800} />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('width', '800')
    })

    it('renders with height as number', () => {
      render(<Image {...defaultProps} height={600} />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('height', '600')
    })

    it('renders with width and height as strings', () => {
      render(<Image {...defaultProps} width="100%" height="auto" />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('width', '100%')
      expect(img).toHaveAttribute('height', 'auto')
    })

    it('renders without dimensions', () => {
      render(<Image {...defaultProps} />)
      const img = screen.getByRole('img')
      expect(img).not.toHaveAttribute('width')
      expect(img).not.toHaveAttribute('height')
    })
  })

  describe('Object Fit', () => {
    it('renders with contain objectFit', () => {
      render(<Image {...defaultProps} objectFit="contain" />)
      const img = screen.getByRole('img')
      expect(img).toHaveClass('object-contain')
    })

    it('renders with cover objectFit (default)', () => {
      render(<Image {...defaultProps} objectFit="cover" />)
      const img = screen.getByRole('img')
      expect(img).toHaveClass('object-cover')
    })

    it('renders with fill objectFit', () => {
      render(<Image {...defaultProps} objectFit="fill" />)
      const img = screen.getByRole('img')
      expect(img).toHaveClass('object-fill')
    })

    it('renders with none objectFit', () => {
      render(<Image {...defaultProps} objectFit="none" />)
      const img = screen.getByRole('img')
      expect(img).toHaveClass('object-none')
    })

    it('renders with scale-down objectFit', () => {
      render(<Image {...defaultProps} objectFit="scale-down" />)
      const img = screen.getByRole('img')
      expect(img).toHaveClass('object-scale-down')
    })
  })

  describe('Loading Strategy', () => {
    it('renders with lazy loading (default)', () => {
      render(<Image {...defaultProps} />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('loading', 'lazy')
    })

    it('renders with eager loading', () => {
      render(<Image {...defaultProps} loading="eager" />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('loading', 'eager')
    })
  })

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Image {...defaultProps} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('requires alt text for accessibility', () => {
      render(<Image {...defaultProps} alt="Descriptive alt text" />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('alt', 'Descriptive alt text')
    })

    it('allows empty alt for decorative images', () => {
      const { container } = render(<Image src="/decorative.jpg" alt="" />)
      const img = container.querySelector('img')
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('alt', '')
    })
  })

  describe('Custom Styling', () => {
    it('applies custom className correctly', () => {
      render(<Image {...defaultProps} className="rounded-lg shadow-md" />)
      const img = screen.getByRole('img')
      expect(img).toHaveClass('rounded-lg')
      expect(img).toHaveClass('shadow-md')
      // Should also have base classes
      expect(img).toHaveClass('block')
      expect(img).toHaveClass('max-w-full')
    })

    it('combines custom className with default classes', () => {
      render(<Image {...defaultProps} className="custom-class" />)
      const img = screen.getByRole('img')
      expect(img).toHaveClass('custom-class')
      expect(img).toHaveClass('block')
      expect(img).toHaveClass('object-cover')
    })
  })

  describe('Edge Cases', () => {
    it('handles very long src URL', () => {
      const longSrc =
        'https://example.com/very/long/path/to/image/that/might/be/used/in/real/world/applications/image.jpg?query=param&another=param'
      render(<Image src={longSrc} alt="Long URL image" />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('src', longSrc)
    })

    it('handles special characters in alt text', () => {
      const altText = 'Image with special chars: <>&"\''
      render(<Image src="/image.jpg" alt={altText} />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('alt', altText)
    })

    it('handles data URLs', () => {
      const dataUrl =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
      render(<Image src={dataUrl} alt="Data URL image" />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('src', dataUrl)
    })
  })

  describe('HTML Attributes', () => {
    it('passes through additional HTML attributes', () => {
      render(
        <Image
          {...defaultProps}
          title="Image title"
          data-testid="custom-image"
        />
      )
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('title', 'Image title')
      expect(img).toHaveAttribute('data-testid', 'custom-image')
    })

    it('handles onLoad callback', () => {
      let loaded = false
      const handleLoad = () => {
        loaded = true
      }
      render(<Image {...defaultProps} onLoad={handleLoad} />)
      const img = screen.getByRole('img')

      // Simulate image load
      const loadEvent = new window.Event('load')
      img.dispatchEvent(loadEvent)
      expect(loaded).toBe(true)
    })

    it('handles onError callback', () => {
      let errored = false
      const handleError = () => {
        errored = true
      }
      render(<Image {...defaultProps} onError={handleError} />)
      const img = screen.getByRole('img')

      // Simulate image error
      const errorEvent = new window.Event('error')
      img.dispatchEvent(errorEvent)
      expect(errored).toBe(true)
    })
  })
})
