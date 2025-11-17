import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Footer, FooterProps } from './Footer'

expect.extend(toHaveNoViolations)

const defaultProps: FooterProps = {
  companyName: 'Test Company',
  companyDescription: 'A test company for unit testing',
  sections: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
      ],
    },
  ],
  socialLinks: [
    { icon: 'Heart', href: 'https://twitter.com', label: 'Twitter' },
  ],
  copyrightYear: 2025,
  legalLinks: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
}

describe('Footer Component', () => {
  // ========== RENDERING TESTS (4) ==========
  describe('Rendering', () => {
    it('should render with required props', () => {
      render(<Footer companyName="Test" sections={[]} legalLinks={[]} />)
      expect(screen.getByText('Test')).toBeInTheDocument()
    })

    it('should render company info section', () => {
      render(<Footer {...defaultProps} />)
      expect(screen.getByText('Test Company')).toBeInTheDocument()
      expect(
        screen.getByText('A test company for unit testing')
      ).toBeInTheDocument()
    })

    it('should render all navigation sections', () => {
      render(<Footer {...defaultProps} />)
      expect(screen.getByText('Product')).toBeInTheDocument()
      expect(screen.getByText('Company')).toBeInTheDocument()
    })

    it('should render footer element semantically', () => {
      const { container } = render(<Footer {...defaultProps} />)
      const footer = container.querySelector('footer')
      expect(footer).toBeInTheDocument()
      expect(footer).toHaveAttribute('role', 'contentinfo')
    })
  })

  // ========== LAYOUT TESTS (4) ==========
  describe('Layout and Responsive Design', () => {
    it('should have dark background styling', () => {
      const { container } = render(<Footer {...defaultProps} />)
      const footer = container.querySelector('footer')
      expect(footer).toHaveClass('bg-gray-900')
      expect(footer).toHaveClass('text-gray-300')
    })

    it('should have border and spacing classes', () => {
      const { container } = render(<Footer {...defaultProps} />)
      const footer = container.querySelector('footer')
      expect(footer).toHaveClass('border-t')
      expect(footer).toHaveClass('border-gray-800')
    })

    it('should use grid layout with responsive columns', () => {
      const { container } = render(<Footer {...defaultProps} />)
      const grids = container.querySelectorAll('.grid')
      expect(grids.length).toBeGreaterThan(0)
      const grid = grids[0]
      expect(grid).toHaveClass('grid-cols-1')
      expect(grid).toHaveClass('md:grid-cols-2')
      expect(grid).toHaveClass('lg:grid-cols-4')
    })

    it('should have proper container max-width', () => {
      const { container } = render(<Footer {...defaultProps} />)
      const maxWidthDiv = container.querySelector('.max-w-7xl')
      expect(maxWidthDiv).toBeInTheDocument()
    })
  })

  // ========== NAVIGATION LINKS TESTS (5) ==========
  describe('Navigation Links', () => {
    it('should render all section links', () => {
      render(<Footer {...defaultProps} />)
      expect(screen.getByText('Features')).toBeInTheDocument()
      expect(screen.getByText('Pricing')).toBeInTheDocument()
      expect(screen.getByText('About')).toBeInTheDocument()
      expect(screen.getByText('Blog')).toBeInTheDocument()
    })

    it('should have correct href values for links', () => {
      render(<Footer {...defaultProps} />)
      const featuresLink = screen.getByText('Features').closest('a')
      expect(featuresLink).toHaveAttribute('href', '/features')
      const pricingLink = screen.getByText('Pricing').closest('a')
      expect(pricingLink).toHaveAttribute('href', '/pricing')
    })

    it('should have hover transition classes on links', () => {
      render(<Footer {...defaultProps} />)
      const link = screen.getByText('Features').closest('a')
      expect(link).toHaveClass('hover:text-blue-400')
      expect(link).toHaveClass('transition-colors')
    })

    it('should have focus styles for accessibility', () => {
      render(<Footer {...defaultProps} />)
      const link = screen.getByText('Features').closest('a')
      expect(link).toHaveClass('focus:outline-none')
      expect(link).toHaveClass('focus:ring-2')
      expect(link).toHaveClass('focus:ring-blue-400')
    })

    it('should render links as list items', () => {
      const { container } = render(<Footer {...defaultProps} />)
      const listItems = container.querySelectorAll('li')
      expect(listItems.length).toBeGreaterThan(0)
    })
  })

  // ========== SOCIAL LINKS TESTS (3) ==========
  describe('Social Links', () => {
    it('should render social links when provided', () => {
      render(<Footer {...defaultProps} />)
      const twitterLink = screen.getByLabelText('Twitter')
      expect(twitterLink).toBeInTheDocument()
      expect(twitterLink).toHaveAttribute('href', 'https://twitter.com')
    })

    it('should open social links in new tab', () => {
      render(<Footer {...defaultProps} />)
      const twitterLink = screen.getByLabelText('Twitter')
      expect(twitterLink).toHaveAttribute('target', '_blank')
      expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('should not render social links when array is empty', () => {
      render(<Footer {...defaultProps} socialLinks={[]} />)
      const twitterLink = screen.queryByLabelText('Twitter')
      expect(twitterLink).not.toBeInTheDocument()
    })
  })

  // ========== LEGAL LINKS TESTS (3) ==========
  describe('Legal Links', () => {
    it('should render legal links at bottom', () => {
      render(<Footer {...defaultProps} />)
      const privacyLink = screen.getByText('Privacy')
      const termsLink = screen.getByText('Terms')
      expect(privacyLink).toBeInTheDocument()
      expect(termsLink).toBeInTheDocument()
    })

    it('should have correct href values for legal links', () => {
      render(<Footer {...defaultProps} />)
      const privacyLink = screen.getByText('Privacy').closest('a')
      expect(privacyLink).toHaveAttribute('href', '/privacy')
      const termsLink = screen.getByText('Terms').closest('a')
      expect(termsLink).toHaveAttribute('href', '/terms')
    })

    it('should not render legal section when array is empty', () => {
      render(<Footer {...defaultProps} legalLinks={[]} />)
      const privacyLink = screen.queryByText('Privacy')
      expect(privacyLink).not.toBeInTheDocument()
    })
  })

  // ========== COPYRIGHT TESTS (3) ==========
  describe('Copyright Section', () => {
    it('should render copyright with company name', () => {
      render(<Footer {...defaultProps} />)
      expect(screen.getByText(/© 2025 Test Company/)).toBeInTheDocument()
    })

    it('should use dynamic copyright year when provided', () => {
      render(<Footer {...defaultProps} copyrightYear={2024} />)
      expect(screen.getByText(/© 2024 Test Company/)).toBeInTheDocument()
    })

    it('should use current year when copyrightYear not provided', () => {
      const currentYear = new Date().getFullYear()
      render(<Footer companyName="Test" sections={[]} legalLinks={[]} />)
      expect(
        screen.getByText(new RegExp(`© ${currentYear} Test`))
      ).toBeInTheDocument()
    })
  })

  // ========== OPTIONAL PROPS TESTS (2) ==========
  describe('Optional Props', () => {
    it('should render without company description', () => {
      render(<Footer companyName="Test" sections={[]} legalLinks={[]} />)
      expect(screen.getByText('Test')).toBeInTheDocument()
    })

    it('should render with custom className', () => {
      const { container } = render(
        <Footer {...defaultProps} className="custom-class" />
      )
      const footer = container.querySelector('footer')
      expect(footer).toHaveClass('custom-class')
    })
  })

  // ========== STRUCTURE TESTS (2) ==========
  describe('Structure and Organization', () => {
    it('should organize layout with proper sections', () => {
      const { container } = render(<Footer {...defaultProps} />)
      const gridCells = container.querySelectorAll('[class*="col-span"]')
      expect(gridCells.length).toBeGreaterThan(0)
    })

    it('should have proper spacing between sections', () => {
      const { container } = render(<Footer {...defaultProps} />)
      const grid = container.querySelector('.gap-8')
      expect(grid).toBeInTheDocument()
    })
  })

  // ========== ACCESSIBILITY TESTS (4) ==========
  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(<Footer {...defaultProps} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have semantic footer element', () => {
      const { container } = render(<Footer {...defaultProps} />)
      const footer = container.querySelector('footer[role="contentinfo"]')
      expect(footer).toBeInTheDocument()
    })

    it('should have proper heading structure with Text component', () => {
      render(<Footer {...defaultProps} />)
      const sectionTitles = screen.getByText('Product')
      expect(sectionTitles).toBeInTheDocument()
    })

    it('should have accessible social media links with labels', () => {
      render(<Footer {...defaultProps} />)
      const twitterLink = screen.getByLabelText('Twitter')
      expect(twitterLink).toBeInTheDocument()
    })
  })

  // ========== EDGE CASES (2) ==========
  describe('Edge Cases', () => {
    it('should handle empty sections array', () => {
      render(<Footer companyName="Test" sections={[]} legalLinks={[]} />)
      expect(screen.getByText('Test')).toBeInTheDocument()
    })

    it('should handle sections with many links', () => {
      const manyLinksSection = {
        title: 'Many Links',
        links: Array.from({ length: 10 }, (_, i) => ({
          label: `Link ${i + 1}`,
          href: `/link-${i + 1}`,
        })),
      }
      render(
        <Footer
          companyName="Test"
          sections={[manyLinksSection]}
          legalLinks={[]}
        />
      )
      expect(screen.getByText('Link 5')).toBeInTheDocument()
      expect(screen.getByText('Link 10')).toBeInTheDocument()
    })
  })
})
