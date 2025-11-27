import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Carousel } from './Carousel'

// Mock hooks
vi.mock('@/hooks', () => ({
  useDevice: () => ({ deviceType: 'desktop' }),
  useResponsiveValue: (config: any) => config.desktop,
  useCarouselNavigation: () => ({
    currentIndex: 0,
    handleNext: vi.fn(),
    handlePrev: vi.fn(),
    goToSlide: vi.fn(),
    maxIndex: 2,
  }),
  useVisibilityWithTabCheck: () => ({
    ref: { current: null },
    isTabVisible: true,
    isElementVisible: true,
    isVisible: true,
  }),
  useSlideWidth: () => 300,
  useAutoSlide: vi.fn(),
}))

describe('Carousel', () => {
  const mockItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]

  const renderItem = (item: { id: number; name: string }) => (
    <div data-testid={`item-${item.id}`}>{item.name}</div>
  )

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Rendering', () => {
    it('should render carousel with items', () => {
      render(<Carousel items={mockItems} renderItem={renderItem} />)

      expect(screen.getByTestId('item-1')).toBeInTheDocument()
      expect(screen.getByTestId('item-2')).toBeInTheDocument()
      expect(screen.getByTestId('item-3')).toBeInTheDocument()
    })

    it('should return null when items array is empty', () => {
      const { container } = render(<Carousel items={[]} renderItem={renderItem} />)
      expect(container.firstChild).toBeNull()
    })

    it('should render single item without controls', () => {
      render(<Carousel items={[mockItems[0]]} renderItem={renderItem} />)

      expect(screen.getByTestId('item-1')).toBeInTheDocument()
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })
  })

  describe('Navigation Controls', () => {
    it('should show arrows when showArrows is true', () => {
      render(<Carousel items={mockItems} renderItem={renderItem} showArrows={true} />)

      const buttons = screen.getAllByRole('button')
      expect(buttons.length).toBeGreaterThan(0)
    })

    it('should hide arrows when showArrows is false', () => {
      render(<Carousel items={mockItems} renderItem={renderItem} showArrows={false} />)

      const buttons = screen.queryAllByRole('button')
      expect(buttons.length).toBe(0)
    })

    it('should show dots when showDots is true', () => {
      // Use more items than slidesToShow (mock returns 3) to trigger dots display
      const moreItems = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
      ]
      render(<Carousel items={moreItems} renderItem={renderItem} showDots={true} />)

      const buttons = screen.getAllByRole('button')
      expect(buttons.length).toBeGreaterThan(2)
    })
  })

  describe('Generic Type Support', () => {
    it('should work with string items', () => {
      const items = ['Item A', 'Item B', 'Item C']
      render(
        <Carousel
          items={items}
          renderItem={(item) => <div data-testid={item}>{item}</div>}
        />
      )

      expect(screen.getByTestId('Item A')).toBeInTheDocument()
      expect(screen.getByTestId('Item B')).toBeInTheDocument()
    })

    it('should work with complex objects', () => {
      interface Product {
        id: number
        title: string
        price: number
      }

      const products: Product[] = [
        { id: 1, title: 'Product 1', price: 100 },
        { id: 2, title: 'Product 2', price: 200 },
      ]

      render(
        <Carousel
          items={products}
          renderItem={(p) => (
            <div data-testid={`product-${p.id}`}>
              {p.title} - ${p.price}
            </div>
          )}
          getItemKey={(p) => `prod-${p.id}`}
        />
      )

      expect(screen.getByTestId('product-1')).toHaveTextContent('Product 1 - $100')
      expect(screen.getByTestId('product-2')).toHaveTextContent('Product 2 - $200')
    })
  })

  describe('Props', () => {
    it('should apply custom className', () => {
      const { container } = render(
        <Carousel items={mockItems} renderItem={renderItem} className="custom-class" />
      )

      expect(container.querySelector('.custom-class')).toBeInTheDocument()
    })

    it('should accept variant prop', () => {
      render(<Carousel items={mockItems} renderItem={renderItem} variant="secondary" />)

      expect(screen.getByTestId('item-1')).toBeInTheDocument()
    })

    it('should accept responsive slidesToShow props', () => {
      render(
        <Carousel
          items={mockItems}
          renderItem={renderItem}
          slidesToShowMobile={1}
          slidesToShowTablet={2}
          slidesToShowDesktop={3}
        />
      )

      expect(screen.getByTestId('item-1')).toBeInTheDocument()
    })

    it('should accept gap prop', () => {
      render(<Carousel items={mockItems} renderItem={renderItem} gap={20} />)

      expect(screen.getByTestId('item-1')).toBeInTheDocument()
    })

    it('should accept infinite loop prop', () => {
      render(<Carousel items={mockItems} renderItem={renderItem} infinite={true} />)

      expect(screen.getByTestId('item-1')).toBeInTheDocument()
    })

    it('should accept autoplay prop', () => {
      render(<Carousel items={mockItems} renderItem={renderItem} autoplay={true} />)

      expect(screen.getByTestId('item-1')).toBeInTheDocument()
    })
  })
})
