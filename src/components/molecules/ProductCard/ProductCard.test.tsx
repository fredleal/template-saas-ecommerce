import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  const defaultProps = {
    id: 'product-1',
    name: 'Premium Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    image: '/headphones.jpg',
    price: 199.99,
    stock: 10,
  }

  describe('Rendering', () => {
    it('should render product card with basic information', () => {
      render(<ProductCard {...defaultProps} />)

      expect(screen.getByTestId('product-card')).toBeInTheDocument()
      expect(screen.getByText('Premium Headphones')).toBeInTheDocument()
      expect(
        screen.getByText(
          'High-quality wireless headphones with noise cancellation'
        )
      ).toBeInTheDocument()
      expect(screen.getByText('$199.99')).toBeInTheDocument()
    })

    it('should render without description', () => {
      render(<ProductCard {...defaultProps} description={undefined} />)

      expect(screen.getByText('Premium Headphones')).toBeInTheDocument()
      expect(
        screen.queryByText(
          'High-quality wireless headphones with noise cancellation'
        )
      ).not.toBeInTheDocument()
    })

    it('should render product image with correct alt text', () => {
      render(<ProductCard {...defaultProps} imageAlt="Headphones product" />)

      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('alt', 'Headphones product')
    })

    it('should use product name as alt text when imageAlt is not provided', () => {
      render(<ProductCard {...defaultProps} />)

      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('alt', 'Premium Headphones')
    })
  })

  describe('Pricing', () => {
    it('should display price with correct currency', () => {
      render(<ProductCard {...defaultProps} currency="BRL" />)

      expect(screen.getByText('R$199.99')).toBeInTheDocument()
    })

    it('should display discount label when originalPrice is provided', () => {
      render(<ProductCard {...defaultProps} originalPrice={299.99} />)

      // 33% discount: ((299.99 - 199.99) / 299.99) * 100 = 33.33...
      expect(screen.getByText('-33%')).toBeInTheDocument()
      expect(screen.getByText('$299.99')).toBeInTheDocument() // strikethrough price
    })

    it('should not display discount label when prices are equal', () => {
      render(<ProductCard {...defaultProps} originalPrice={199.99} />)

      expect(screen.queryByText(/-\d+%/)).not.toBeInTheDocument()
    })

    it('should not display discount label when originalPrice is lower', () => {
      render(<ProductCard {...defaultProps} originalPrice={100} />)

      expect(screen.queryByText(/-\d+%/)).not.toBeInTheDocument()
    })
  })

  describe('Stock', () => {
    it('should display stock badge with correct status', () => {
      render(<ProductCard {...defaultProps} stock={10} />)

      expect(screen.getByText('In Stock')).toBeInTheDocument()
      expect(screen.getByText('(10)')).toBeInTheDocument()
    })

    it('should display low stock badge', () => {
      render(<ProductCard {...defaultProps} stock={3} />)

      expect(screen.getByText('Low Stock')).toBeInTheDocument()
      expect(screen.getByText('(3)')).toBeInTheDocument()
    })

    it('should display out of stock badge', () => {
      render(<ProductCard {...defaultProps} stock={0} />)

      expect(screen.getByText('Out of Stock')).toBeInTheDocument()
      expect(screen.queryByText(/\(\d+\)/)).not.toBeInTheDocument()
    })

    it('should use custom stockVariant when provided', () => {
      render(
        <ProductCard {...defaultProps} stock={50} stockVariant="lowStock" />
      )

      expect(screen.getByText('Low Stock')).toBeInTheDocument()
    })
  })

  describe('Quantity Selector', () => {
    it('should display quantity selector by default', () => {
      render(<ProductCard {...defaultProps} />)

      expect(screen.getByTestId('quantity-selector')).toBeInTheDocument()
      expect(screen.getByTestId('quantity-value')).toHaveTextContent('1')
    })

    it('should hide quantity selector when showQuantitySelector is false', () => {
      render(<ProductCard {...defaultProps} showQuantitySelector={false} />)

      expect(screen.queryByTestId('quantity-selector')).not.toBeInTheDocument()
    })

    it('should hide quantity selector when out of stock', () => {
      render(<ProductCard {...defaultProps} stock={0} />)

      expect(screen.queryByTestId('quantity-selector')).not.toBeInTheDocument()
    })

    it('should allow changing quantity', async () => {
      const user = userEvent.setup()
      render(<ProductCard {...defaultProps} />)

      const incrementButton = screen.getByTestId('quantity-increment')
      await user.click(incrementButton)

      expect(screen.getByTestId('quantity-value')).toHaveTextContent('2')
    })

    it('should limit max quantity to stock amount', async () => {
      const user = userEvent.setup()
      render(<ProductCard {...defaultProps} stock={2} />)

      const incrementButton = screen.getByTestId('quantity-increment')

      // Increment to 2
      await user.click(incrementButton)
      expect(screen.getByTestId('quantity-value')).toHaveTextContent('2')

      // Try to increment beyond stock (should not work)
      await user.click(incrementButton)
      expect(screen.getByTestId('quantity-value')).toHaveTextContent('2')
    })
  })

  describe('Actions', () => {
    it('should call onAddToCart with correct parameters', async () => {
      const user = userEvent.setup()
      const onAddToCart = vi.fn()

      render(<ProductCard {...defaultProps} onAddToCart={onAddToCart} />)

      const addButton = screen.getByText('Add to Cart')
      await user.click(addButton)

      expect(onAddToCart).toHaveBeenCalledWith('product-1', 1)
    })

    it('should call onAddToCart with selected quantity', async () => {
      const user = userEvent.setup()
      const onAddToCart = vi.fn()

      render(<ProductCard {...defaultProps} onAddToCart={onAddToCart} />)

      // Increment quantity to 3
      const incrementButton = screen.getByTestId('quantity-increment')
      await user.click(incrementButton)
      await user.click(incrementButton)

      const addButton = screen.getByText('Add to Cart')
      await user.click(addButton)

      expect(onAddToCart).toHaveBeenCalledWith('product-1', 3)
    })

    it('should call onViewDetails when details button is clicked', async () => {
      const user = userEvent.setup()
      const onViewDetails = vi.fn()

      render(<ProductCard {...defaultProps} onViewDetails={onViewDetails} />)

      const detailsButton = screen.getByText('Details')
      await user.click(detailsButton)

      expect(onViewDetails).toHaveBeenCalledWith('product-1')
    })

    it('should disable add to cart button when out of stock', () => {
      render(<ProductCard {...defaultProps} stock={0} onAddToCart={vi.fn()} />)

      const addButton = screen.getByRole('button', { name: 'Out of Stock' })
      expect(addButton).toBeDisabled()
    })

    it('should not render add to cart button when onAddToCart is not provided', () => {
      render(<ProductCard {...defaultProps} />)

      expect(screen.queryByText('Add to Cart')).not.toBeInTheDocument()
    })

    it('should not render details button when onViewDetails is not provided', () => {
      render(<ProductCard {...defaultProps} onAddToCart={vi.fn()} />)

      expect(screen.queryByText('Details')).not.toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('should render default variant', () => {
      render(<ProductCard {...defaultProps} variant="default" />)

      const card = screen.getByTestId('product-card')
      expect(card).toBeInTheDocument()
    })

    it('should render compact variant', () => {
      render(<ProductCard {...defaultProps} variant="compact" />)

      const card = screen.getByTestId('product-card')
      expect(card).toHaveClass('max-w-sm')
    })

    it('should render featured variant with highlighted border', () => {
      render(<ProductCard {...defaultProps} variant="featured" />)

      const card = screen.getByTestId('product-card')
      expect(card).toHaveClass('border-2', 'border-blue-500', 'shadow-md')
    })
  })

  describe('Sizes', () => {
    it('should render small size', () => {
      render(<ProductCard {...defaultProps} size="sm" />)

      expect(screen.getByTestId('product-card')).toBeInTheDocument()
    })

    it('should render medium size (default)', () => {
      render(<ProductCard {...defaultProps} size="md" />)

      expect(screen.getByTestId('product-card')).toBeInTheDocument()
    })

    it('should render large size', () => {
      render(<ProductCard {...defaultProps} size="lg" />)

      expect(screen.getByTestId('product-card')).toBeInTheDocument()
    })
  })

  describe('Custom Styling', () => {
    it('should apply custom className', () => {
      render(<ProductCard {...defaultProps} className="custom-class" />)

      const card = screen.getByTestId('product-card')
      expect(card).toHaveClass('custom-class')
    })
  })

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(
        <ProductCard {...defaultProps} onAddToCart={vi.fn()} />
      )

      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have proper heading hierarchy', () => {
      render(<ProductCard {...defaultProps} />)

      const heading = screen.getByText('Premium Headphones')
      expect(heading.tagName).toBe('H3')
    })

    it('should have descriptive button labels', () => {
      render(
        <ProductCard
          {...defaultProps}
          onAddToCart={vi.fn()}
          onViewDetails={vi.fn()}
        />
      )

      expect(screen.getByText('Add to Cart')).toBeInTheDocument()
      expect(screen.getByText('Details')).toBeInTheDocument()
    })
  })
})
