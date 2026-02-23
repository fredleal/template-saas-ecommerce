import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Link } from './Link'

describe('Link', () => {
  describe('Rendering', () => {
    it('renders children text correctly', () => {
      render(<Link href="/test">Click here</Link>)
      expect(
        screen.getByRole('link', { name: /click here/i })
      ).toBeInTheDocument()
    })

    it('renders with default props', () => {
      render(<Link href="/test">Default Link</Link>)
      const link = screen.getByRole('link')
      expect(link).toHaveClass('text-[var(--color-primary-600,#2563eb)]') // primary variant
      expect(link).toHaveClass('underline')
      expect(link).toHaveAttribute('target', '_self')
    })

    it('renders as anchor element', () => {
      render(<Link href="/test">Link</Link>)
      const link = screen.getByRole('link')
      expect(link.tagName).toBe('A')
    })

    it('renders correct href attribute', () => {
      render(<Link href="/about">About</Link>)
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', '/about')
    })
  })

  describe('Variants', () => {
    it('renders primary variant correctly (underlined)', () => {
      render(
        <Link href="/test" variant="primary">
          Primary Link
        </Link>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveClass('text-[var(--color-primary-600,#2563eb)]')
      expect(link).toHaveClass('underline')
    })

    it('renders secondary variant correctly (no underline)', () => {
      render(
        <Link href="/test" variant="secondary">
          Secondary Link
        </Link>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveClass('text-[var(--color-primary-600,#2563eb)]')
      expect(link).toHaveClass('no-underline')
    })
  })

  describe('Target Attribute', () => {
    it('renders with _self target (default)', () => {
      render(<Link href="/test">Same window</Link>)
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('target', '_self')
    })

    it('renders with _blank target', () => {
      render(
        <Link href="https://example.com" target="_blank">
          New tab
        </Link>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('target', '_blank')
    })

    it('renders with _parent target', () => {
      render(
        <Link href="/test" target="_parent">
          Parent
        </Link>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('target', '_parent')
    })

    it('renders with _top target', () => {
      render(
        <Link href="/test" target="_top">
          Top
        </Link>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('target', '_top')
    })
  })

  describe('Security Attributes', () => {
    it('adds noopener noreferrer for _blank targets automatically', () => {
      render(
        <Link href="https://example.com" target="_blank">
          External
        </Link>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('does not add noopener noreferrer for _self targets', () => {
      render(<Link href="/internal">Internal</Link>)
      const link = screen.getByRole('link')
      expect(link).not.toHaveAttribute('rel')
    })

    it('preserves custom rel when provided with _blank', () => {
      render(
        <Link href="https://example.com" target="_blank" rel="nofollow">
          External
        </Link>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('rel', 'nofollow noopener noreferrer')
    })

    it('preserves custom rel when provided without _blank', () => {
      render(
        <Link href="/test" rel="nofollow">
          Test
        </Link>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('rel', 'nofollow')
    })
  })

  describe('Interaction', () => {
    it('calls onClick handler when clicked', () => {
      let clicked = false
      const handleClick = () => {
        clicked = true
      }

      render(
        <Link href="/test" onClick={handleClick}>
          Click me
        </Link>
      )
      const link = screen.getByRole('link')

      link.click()
      expect(clicked).toBe(true)
    })

    it('passes event to onClick handler', () => {
      let eventReceived = false
      const handleClick = (e: { type: string }) => {
        eventReceived = e.type === 'click'
      }

      render(
        <Link href="/test" onClick={handleClick}>
          Click me
        </Link>
      )
      const link = screen.getByRole('link')

      link.click()
      expect(eventReceived).toBe(true)
    })
  })

  describe('Additional Attributes', () => {
    it('renders with title attribute', () => {
      render(
        <Link href="/test" title="Go to test page">
          Test
        </Link>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('title', 'Go to test page')
    })

    it('renders with download attribute', () => {
      render(
        <Link href="/file.pdf" download>
          Download PDF
        </Link>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('download')
    })

    it('renders with download filename', () => {
      render(
        <Link href="/file.pdf" download="document.pdf">
          Download
        </Link>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('download', 'document.pdf')
    })

    it('renders with tabIndex', () => {
      render(
        <Link href="/test" tabIndex={2}>
          Link
        </Link>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('tabIndex', '2')
    })

    it('renders with aria-label', () => {
      render(
        <Link href="/test" aria-label="Custom label">
          Link
        </Link>
      )
      const link = screen.getByRole('link', { name: 'Custom label' })
      expect(link).toBeInTheDocument()
    })

    it('renders with custom role', () => {
      render(
        <Link href="/test" role="button">
          Button Link
        </Link>
      )
      const link = screen.getByRole('button')
      expect(link).toBeInTheDocument()
    })
  })

  describe('Composition', () => {
    it('renders with icon as child', () => {
      render(
        <Link href="/test">
          <span data-testid="icon">🔗</span>
          Link with icon
        </Link>
      )
      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(screen.getByRole('link')).toBeInTheDocument()
    })

    it('renders with multiple children', () => {
      render(
        <Link href="/test">
          <span data-testid="icon">→</span>
          <span data-testid="text">Go to page</span>
        </Link>
      )
      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(screen.getByTestId('text')).toBeInTheDocument()
    })
  })

  describe('Custom Styling', () => {
    it('applies custom className correctly', () => {
      render(
        <Link href="/test" className="custom-class">
          Custom
        </Link>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveClass('custom-class')
      // Should also have base classes
      expect(link).toHaveClass('transition-colors')
      expect(link).toHaveClass('text-[var(--color-primary-600,#2563eb)]')
    })

    it('combines custom className with variant classes', () => {
      render(
        <Link href="/test" variant="secondary" className="font-bold">
          Custom
        </Link>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveClass('font-bold')
      expect(link).toHaveClass('no-underline')
      expect(link).toHaveClass('text-[var(--color-primary-600,#2563eb)]')
    })
  })

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Link href="/test">Accessible Link</Link>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has no violations with _blank target', async () => {
      const { container } = render(
        <Link href="https://example.com" target="_blank">
          External Link
        </Link>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('has no violations with download attribute', async () => {
      const { container } = render(
        <Link href="/file.pdf" download>
          Download File
        </Link>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe('Edge Cases', () => {
    it('handles empty children gracefully', () => {
      render(<Link href="/test">{''}</Link>)
      const link = screen.getByRole('link')
      expect(link).toBeInTheDocument()
      expect(link.textContent).toBe('')
    })

    it('handles very long href without breaking', () => {
      const longHref =
        '/very/long/path/that/goes/on/and/on/and/should/not/break/the/component'
      render(<Link href={longHref}>Long URL</Link>)
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', longHref)
    })

    it('handles onClick undefined gracefully', () => {
      expect(() => {
        render(<Link href="/test">No onClick</Link>)
      }).not.toThrow()
    })

    it('handles very long text without breaking', () => {
      const longText =
        'This is a very long link text that should not break the layout and should be handled gracefully'
      render(<Link href="/test">{longText}</Link>)
      expect(
        screen.getByRole('link', { name: new RegExp(longText) })
      ).toBeInTheDocument()
    })
  })
})
