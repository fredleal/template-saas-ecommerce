import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

const mockLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

describe('Header', () => {
  describe('Rendering', () => {
    it('renders with logoText', () => {
      render(<Header logoText="My Blog" links={mockLinks} />)
      expect(screen.getByText('My Blog')).toBeInTheDocument()
    })

    it('renders all navigation links', () => {
      render(<Header logoText="My Blog" links={mockLinks} />)
      // Only desktop links visible when mobile menu closed
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('Blog')).toBeInTheDocument()
      expect(screen.getByText('About')).toBeInTheDocument()
    })

    it('renders desktop navigation', () => {
      render(<Header logoText="My Blog" links={mockLinks} />)
      const nav = screen.getByRole('navigation')
      expect(nav).toBeInTheDocument()
    })

    it('renders mobile menu button', () => {
      render(<Header logoText="My Blog" links={mockLinks} />)
      const button = screen.getByLabelText('Open menu')
      expect(button).toBeInTheDocument()
    })
  })

  describe('Mobile Menu', () => {
    it('mobile menu is closed by default', () => {
      render(<Header logoText="My Blog" links={mockLinks} />)
      const homeLinks = screen.getAllByText('Home')
      // Mobile menu not rendered when closed, only desktop link visible
      expect(homeLinks).toHaveLength(1)
    })

    it('opens mobile menu on button click', async () => {
      const user = userEvent.setup()
      render(<Header logoText="My Blog" links={mockLinks} />)

      const menuButton = screen.getByLabelText('Open menu')
      await user.click(menuButton)

      // Mobile menu should be visible
      expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    })

    it('closes mobile menu when clicking close button', async () => {
      const user = userEvent.setup()
      render(<Header logoText="My Blog" links={mockLinks} />)

      // Open menu
      const openButton = screen.getByLabelText('Open menu')
      await user.click(openButton)

      // Close menu
      const closeButton = screen.getByLabelText('Close menu')
      await user.click(closeButton)

      // Should show open button again
      expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
    })

    it('closes mobile menu when clicking a link', async () => {
      const user = userEvent.setup()
      render(<Header logoText="My Blog" links={mockLinks} />)

      // Open menu
      const menuButton = screen.getByLabelText('Open menu')
      await user.click(menuButton)

      // Click a link in mobile menu (there are 2 of each link)
      const mobileLinks = screen.getAllByText('Home')
      await user.click(mobileLinks[1]) // Click mobile version

      // Menu should close (button should say "Open menu")
      expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
    })
  })

  describe('Active Link Highlighting', () => {
    it('highlights active link when currentPath matches', () => {
      render(
        <Header logoText="My Blog" links={mockLinks} currentPath="/blog" />
      )

      const blogLink = screen.getByText('Blog')
      // Text component should have the color class
      expect(blogLink).toHaveClass('text-blue-600')
    })

    it('does not highlight inactive links', () => {
      render(
        <Header logoText="My Blog" links={mockLinks} currentPath="/blog" />
      )

      const homeLink = screen.getByText('Home')
      // Inactive links have gray color
      expect(homeLink).toHaveClass('text-gray-700')
    })

    it('highlights different link when currentPath changes', () => {
      const { rerender } = render(
        <Header logoText="My Blog" links={mockLinks} currentPath="/" />
      )

      let homeLink = screen.getByText('Home')
      expect(homeLink).toHaveClass('text-blue-600')

      // Change currentPath
      rerender(
        <Header logoText="My Blog" links={mockLinks} currentPath="/about" />
      )

      const aboutLink = screen.getByText('About')
      expect(aboutLink).toHaveClass('text-blue-600')

      // Home should no longer be highlighted
      homeLink = screen.getByText('Home')
      expect(homeLink).toHaveClass('text-gray-700')
    })
  })

  describe('Responsive Behavior', () => {
    it('has responsive container classes', () => {
      const { container } = render(
        <Header logoText="My Blog" links={mockLinks} />
      )
      const headerContainer = container.querySelector('.max-w-7xl')
      expect(headerContainer).toBeInTheDocument()
      expect(headerContainer).toHaveClass('mx-auto')
    })

    it('has responsive padding classes', () => {
      const { container } = render(
        <Header logoText="My Blog" links={mockLinks} />
      )
      const headerContainer = container.querySelector('.max-w-7xl')
      expect(headerContainer).toHaveClass('px-4', 'md:px-6', 'lg:px-8')
    })

    it('desktop nav has hidden class on mobile', () => {
      const { container } = render(
        <Header logoText="My Blog" links={mockLinks} />
      )
      const desktopNav = container.querySelector('.hidden.md\\:flex')
      expect(desktopNav).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('uses semantic header element', () => {
      const { container } = render(
        <Header logoText="My Blog" links={mockLinks} />
      )
      const header = container.querySelector('header')
      expect(header).toBeInTheDocument()
    })

    it('uses semantic nav element', () => {
      render(<Header logoText="My Blog" links={mockLinks} />)
      const nav = screen.getByRole('navigation')
      expect(nav).toBeInTheDocument()
    })

    it('menu button has aria-label', () => {
      render(<Header logoText="My Blog" links={mockLinks} />)
      const button = screen.getByLabelText('Open menu')
      expect(button).toHaveAttribute('aria-label')
    })
  })

  describe('Custom Styling', () => {
    it('accepts and applies className prop', () => {
      const { container } = render(
        <Header logoText="My Blog" links={mockLinks} className="custom-class" />
      )
      const header = container.querySelector('header')
      expect(header).toHaveClass('custom-class')
    })
  })

  describe('Sticky Positioning', () => {
    it('has sticky positioning classes', () => {
      const { container } = render(
        <Header logoText="My Blog" links={mockLinks} />
      )
      const header = container.querySelector('header')
      expect(header).toHaveClass('sticky', 'top-0', 'z-50')
    })

    it('has background and border classes', () => {
      const { container } = render(
        <Header logoText="My Blog" links={mockLinks} />
      )
      const header = container.querySelector('header')
      expect(header).toHaveClass('bg-white', 'border-b', 'border-gray-200')
    })
  })

  describe('Links Behavior', () => {
    it('all links are clickable', () => {
      render(<Header logoText="My Blog" links={mockLinks} />)

      mockLinks.forEach(link => {
        const elements = screen.getAllByText(link.label)
        elements.forEach(element => {
          const anchor = element.closest('a')
          expect(anchor).toHaveAttribute('href', link.href)
        })
      })
    })

    it('desktop links have hover classes', () => {
      const { container } = render(
        <Header logoText="My Blog" links={mockLinks} />
      )

      const desktopLinks = container.querySelectorAll('.hidden.md\\:flex a')
      desktopLinks.forEach(link => {
        expect(link).toHaveClass('hover:text-blue-600')
      })
    })

    it('mobile links have hover classes', async () => {
      const user = userEvent.setup()
      const { container } = render(
        <Header logoText="My Blog" links={mockLinks} />
      )

      // Open mobile menu
      const menuButton = screen.getByLabelText('Open menu')
      await user.click(menuButton)

      // Check mobile links
      const mobileMenu = container.querySelector('.md\\:hidden .space-y-3')
      expect(mobileMenu).toBeInTheDocument()

      const mobileLinks = mobileMenu?.querySelectorAll('a')
      mobileLinks?.forEach(link => {
        expect(link).toHaveClass('hover:bg-gray-50')
      })
    })
  })
})
