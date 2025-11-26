import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CarouselSlide } from './CarouselSlide'

interface TestItem {
  id: number
  title: string
}

describe('CarouselSlide', () => {
  const mockItem: TestItem = { id: 1, title: 'Test Item' }
  const mockRenderItem = (item: TestItem) => (
    <div data-testid="slide-content">{item.title}</div>
  )

  describe('Rendering', () => {
    it('should render slide with item content', () => {
      render(
        <CarouselSlide item={mockItem} index={0} renderItem={mockRenderItem} />
      )

      expect(screen.getByTestId('slide-content')).toBeInTheDocument()
      expect(screen.getByText('Test Item')).toBeInTheDocument()
    })

    it('should call renderItem with correct arguments', () => {
      const renderItem = vi.fn((item: TestItem) => <div>{item.title}</div>)

      render(
        <CarouselSlide item={mockItem} index={5} renderItem={renderItem} />
      )

      expect(renderItem).toHaveBeenCalledWith(mockItem, 5)
    })

    it('should apply data-slide-index attribute', () => {
      render(
        <CarouselSlide item={mockItem} index={3} renderItem={mockRenderItem} />
      )

      const slideElement = screen.getByTestId('slide-content').parentElement
      expect(slideElement).toHaveAttribute('data-slide-index', '3')
    })
  })

  describe('Styling', () => {
    it('should apply width style when provided', () => {
      render(
        <CarouselSlide
          item={mockItem}
          index={0}
          renderItem={mockRenderItem}
          width={300}
        />
      )

      const slideElement = screen.getByTestId('slide-content').parentElement
      expect(slideElement).toHaveStyle({ width: '300px', minWidth: '300px' })
    })

    it('should apply gap as margin-right when not last slide', () => {
      render(
        <CarouselSlide
          item={mockItem}
          index={0}
          renderItem={mockRenderItem}
          gap={20}
          isLast={false}
        />
      )

      const slideElement = screen.getByTestId('slide-content').parentElement
      expect(slideElement).toHaveStyle({ marginRight: '20px' })
    })

    it('should not apply gap margin when isLast is true', () => {
      render(
        <CarouselSlide
          item={mockItem}
          index={0}
          renderItem={mockRenderItem}
          gap={20}
          isLast={true}
        />
      )

      const slideElement = screen.getByTestId('slide-content').parentElement
      expect(slideElement).not.toHaveStyle({ marginRight: '20px' })
    })

    it('should apply custom className', () => {
      render(
        <CarouselSlide
          item={mockItem}
          index={0}
          renderItem={mockRenderItem}
          className="custom-slide-class"
        />
      )

      const slideElement = screen.getByTestId('slide-content').parentElement
      expect(slideElement).toHaveClass('custom-slide-class')
    })

    it('should always have flex-shrink-0 class', () => {
      render(
        <CarouselSlide item={mockItem} index={0} renderItem={mockRenderItem} />
      )

      const slideElement = screen.getByTestId('slide-content').parentElement
      expect(slideElement).toHaveClass('flex-shrink-0')
    })
  })

  describe('Generic Type Support', () => {
    it('should work with string items', () => {
      const renderString = (item: string) => <div>{item}</div>

      render(
        <CarouselSlide item="Hello World" index={0} renderItem={renderString} />
      )

      expect(screen.getByText('Hello World')).toBeInTheDocument()
    })

    it('should work with number items', () => {
      const renderNumber = (item: number) => <div>{item}</div>

      render(<CarouselSlide item={42} index={0} renderItem={renderNumber} />)

      expect(screen.getByText('42')).toBeInTheDocument()
    })

    it('should work with complex object items', () => {
      interface ComplexItem {
        id: number
        name: string
        description: string
      }

      const complexItem: ComplexItem = {
        id: 1,
        name: 'Product',
        description: 'A great product',
      }

      const renderComplex = (item: ComplexItem) => (
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      )

      render(
        <CarouselSlide
          item={complexItem}
          index={0}
          renderItem={renderComplex}
        />
      )

      expect(screen.getByText('Product')).toBeInTheDocument()
      expect(screen.getByText('A great product')).toBeInTheDocument()
    })
  })

  describe('Ref Support', () => {
    it('should accept and attach itemRef', () => {
      const ref = vi.fn()

      render(
        <CarouselSlide
          item={mockItem}
          index={0}
          renderItem={mockRenderItem}
          itemRef={ref}
        />
      )

      expect(ref).toHaveBeenCalled()
    })
  })
})
