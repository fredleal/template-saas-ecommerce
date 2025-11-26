import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { List } from './List'

describe('List', () => {
  describe('Rendering', () => {
    it('should render ul by default', () => {
      const { container } = render(
        <List items={['Item 1', 'Item 2']} />
      )

      const list = container.querySelector('ul')
      expect(list).toBeInTheDocument()
    })

    it('should render ol when as="ol"', () => {
      const { container } = render(
        <List as="ol" items={['Item 1', 'Item 2']} />
      )

      const list = container.querySelector('ol')
      expect(list).toBeInTheDocument()
    })

    it('should render list items', () => {
      render(
        <List items={['Item 1', 'Item 2', 'Item 3']} />
      )

      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
      expect(screen.getByText('Item 3')).toBeInTheDocument()
    })

    it('should render optional title', () => {
      render(
        <List title="My List" items={['Item 1']} />
      )

      expect(screen.getByText('My List')).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('My List')
    })

    it('should render empty list when no items', () => {
      const { container } = render(<List items={[]} />)

      const list = container.querySelector('ul')
      expect(list).toBeInTheDocument()
      expect(list?.children).toHaveLength(0)
    })
  })

  describe('Custom Rendering', () => {
    it('should use renderItem function when provided', () => {
      const items = [{ name: 'Alice' }, { name: 'Bob' }]
      const renderItem = (item: { name: string }) => <span data-testid="custom-item">{item.name}</span>

      render(<List items={items} renderItem={renderItem} />)

      const customItems = screen.getAllByTestId('custom-item')
      expect(customItems).toHaveLength(2)
      expect(customItems[0]).toHaveTextContent('Alice')
      expect(customItems[1]).toHaveTextContent('Bob')
    })

    it('should pass correct item and index to renderItem', () => {
      const renderItem = vi.fn((item: string, index: number) => (
        <span>{`${index}: ${item}`}</span>
      ))

      render(<List items={['First', 'Second']} renderItem={renderItem} />)

      expect(renderItem).toHaveBeenCalledWith('First', 0)
      expect(renderItem).toHaveBeenCalledWith('Second', 1)
    })

    it('should use getKey function for unique keys', () => {
      const items = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]
      const getKey = vi.fn((item: { id: number }) => `key-${item.id}`)

      render(
        <List items={items} renderItem={(item) => <span>{item.name}</span>} getKey={getKey} />
      )

      // Verify getKey was called for each item
      expect(getKey).toHaveBeenCalledWith(items[0], 0)
      expect(getKey).toHaveBeenCalledWith(items[1], 1)
    })
  })

  describe('Direction', () => {
    it('should render column direction by default', () => {
      const { container } = render(<List items={['Item 1']} />)

      const list = container.querySelector('ul')
      expect(list).toHaveClass('flex-col')
    })

    it('should render row direction when specified', () => {
      const { container } = render(
        <List items={['Item 1']} direction="row" />
      )

      const list = container.querySelector('ul')
      expect(list).toHaveClass('flex-row')
    })
  })

  describe('Variants', () => {
    it('should apply primary variant by default', () => {
      const { container } = render(<List items={['Item 1']} />)

      const list = container.querySelector('ul')
      expect(list).toBeInTheDocument()
    })

    it('should apply secondary variant when specified', () => {
      const { container } = render(
        <List items={['Item 1']} variant="secondary" />
      )

      const list = container.querySelector('ul')
      expect(list).toHaveClass('text-gray-600')
    })
  })

  describe('Custom Styling', () => {
    it('should apply custom className', () => {
      const { container } = render(
        <List items={['Item 1']} className="custom-list-class" />
      )

      const list = container.querySelector('ul')
      expect(list).toHaveClass('custom-list-class')
    })

    it('should always have base classes', () => {
      const { container } = render(<List items={['Item 1']} />)

      const list = container.querySelector('ul')
      expect(list).toHaveClass('list-none', 'm-0', 'p-0', 'flex')
    })
  })

  describe('Generic Type Support', () => {
    it('should work with string items', () => {
      render(<List items={['Apple', 'Banana', 'Cherry']} />)

      expect(screen.getByText('Apple')).toBeInTheDocument()
      expect(screen.getByText('Banana')).toBeInTheDocument()
      expect(screen.getByText('Cherry')).toBeInTheDocument()
    })

    it('should work with number items', () => {
      render(
        <List items={[1, 2, 3]} renderItem={(num) => <span>{num * 2}</span>} />
      )

      expect(screen.getByText('2')).toBeInTheDocument()
      expect(screen.getByText('4')).toBeInTheDocument()
      expect(screen.getByText('6')).toBeInTheDocument()
    })

    it('should work with complex object items', () => {
      interface Product {
        id: number
        name: string
        price: number
      }

      const products: Product[] = [
        { id: 1, name: 'Product A', price: 10 },
        { id: 2, name: 'Product B', price: 20 },
      ]

      render(
        <List
          items={products}
          renderItem={(product) => (
            <div>
              <strong>{product.name}</strong>: ${product.price}
            </div>
          )}
          getKey={(product) => `product-${product.id}`}
        />
      )

      expect(screen.getByText('Product A')).toBeInTheDocument()
      expect(screen.getByText(/\$10/)).toBeInTheDocument()
      expect(screen.getByText('Product B')).toBeInTheDocument()
      expect(screen.getByText(/\$20/)).toBeInTheDocument()
    })

    it('should work with ReactNode items', () => {
      const items = [
        <div key="1">Custom Node 1</div>,
        <div key="2">Custom Node 2</div>,
      ]

      render(<List items={items} />)

      expect(screen.getByText('Custom Node 1')).toBeInTheDocument()
      expect(screen.getByText('Custom Node 2')).toBeInTheDocument()
    })
  })

  describe('Additional Props', () => {
    it('should accept and pass through listProps', () => {
      const { container } = render(
        <List
          items={['Item 1']}
          listProps={{ 'aria-label': 'Custom list', id: 'my-list' } as any}
        />
      )

      const list = container.querySelector('ul')
      expect(list).toHaveAttribute('aria-label', 'Custom list')
      expect(list).toHaveAttribute('id', 'my-list')
    })
  })
})
