import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { SearchInput } from './SearchInput'

describe('SearchInput', () => {
  // ==================== RENDERING ====================
  describe('Rendering', () => {
    it('renders with default placeholder', () => {
      render(<SearchInput />)
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    })

    it('renders with custom placeholder', () => {
      render(<SearchInput placeholder="Find products..." />)
      expect(
        screen.getByPlaceholderText('Find products...')
      ).toBeInTheDocument()
    })

    it('renders search icon', () => {
      render(<SearchInput />)
      expect(screen.getByLabelText('Search')).toBeInTheDocument()
    })

    it('does not render clear button when empty', () => {
      render(<SearchInput />)
      expect(screen.queryByLabelText('Clear search')).not.toBeInTheDocument()
    })

    it('renders clear button when has value', () => {
      render(<SearchInput value="test" />)
      expect(screen.getByLabelText('Clear search')).toBeInTheDocument()
    })
  })

  // ==================== CONTROLLED MODE ====================
  describe('Controlled Mode', () => {
    it('displays controlled value', () => {
      render(<SearchInput value="controlled value" />)
      expect(screen.getByDisplayValue('controlled value')).toBeInTheDocument()
    })

    it('calls onChange when typing', async () => {
      const handleChange = vi.fn()
      render(<SearchInput value="" onChange={handleChange} />)

      const input = screen.getByRole('textbox')
      await userEvent.type(input, 'a')

      expect(handleChange).toHaveBeenCalledWith('a')
    })

    it('does not update internal state in controlled mode', async () => {
      const handleChange = vi.fn()
      render(<SearchInput value="fixed" onChange={handleChange} />)

      const input = screen.getByRole('textbox')
      await userEvent.type(input, 'x')

      // Value should remain "fixed" as it's controlled
      expect(input).toHaveValue('fixed')
    })
  })

  // ==================== UNCONTROLLED MODE ====================
  describe('Uncontrolled Mode', () => {
    it('uses defaultValue initially', () => {
      render(<SearchInput defaultValue="initial" />)
      expect(screen.getByDisplayValue('initial')).toBeInTheDocument()
    })

    it('updates internal state when typing', async () => {
      render(<SearchInput defaultValue="" />)

      const input = screen.getByRole('textbox')
      await userEvent.type(input, 'hello')

      expect(input).toHaveValue('hello')
    })

    it('calls onChange in uncontrolled mode', async () => {
      const handleChange = vi.fn()
      render(<SearchInput onChange={handleChange} />)

      const input = screen.getByRole('textbox')
      await userEvent.type(input, 'test')

      expect(handleChange).toHaveBeenCalledTimes(4)
      expect(handleChange).toHaveBeenLastCalledWith('test')
    })
  })

  // ==================== SEARCH FUNCTIONALITY ====================
  describe('Search Functionality', () => {
    it('calls onSearch when pressing Enter', async () => {
      const handleSearch = vi.fn()
      render(<SearchInput value="query" onSearch={handleSearch} />)

      const input = screen.getByRole('textbox')
      fireEvent.keyDown(input, { key: 'Enter' })

      expect(handleSearch).toHaveBeenCalledWith('query')
    })

    it('does not call onSearch on Enter with empty value', async () => {
      const handleSearch = vi.fn()
      render(<SearchInput value="" onSearch={handleSearch} />)

      const input = screen.getByRole('textbox')
      fireEvent.keyDown(input, { key: 'Enter' })

      expect(handleSearch).not.toHaveBeenCalled()
    })

    it('does not call onSearch on Enter with whitespace only', async () => {
      const handleSearch = vi.fn()
      render(<SearchInput value="   " onSearch={handleSearch} />)

      const input = screen.getByRole('textbox')
      fireEvent.keyDown(input, { key: 'Enter' })

      expect(handleSearch).not.toHaveBeenCalled()
    })

    it('trims value when calling onSearch', async () => {
      const handleSearch = vi.fn()
      render(<SearchInput value="  query  " onSearch={handleSearch} />)

      const input = screen.getByRole('textbox')
      fireEvent.keyDown(input, { key: 'Enter' })

      expect(handleSearch).toHaveBeenCalledWith('query')
    })

    it('calls onSearch when clicking search icon', async () => {
      const handleSearch = vi.fn()
      render(<SearchInput value="query" onSearch={handleSearch} />)

      const searchButton = screen.getByLabelText('Search')
      await userEvent.click(searchButton)

      expect(handleSearch).toHaveBeenCalledWith('query')
    })
  })

  // ==================== CLEAR FUNCTIONALITY ====================
  describe('Clear Functionality', () => {
    it('clears value when clicking clear button', async () => {
      const handleChange = vi.fn()
      const handleClear = vi.fn()
      render(
        <SearchInput
          defaultValue="test"
          onChange={handleChange}
          onClear={handleClear}
        />
      )

      const clearButton = screen.getByLabelText('Clear search')
      await userEvent.click(clearButton)

      expect(handleChange).toHaveBeenCalledWith('')
      expect(handleClear).toHaveBeenCalled()
    })

    it('hides clear button after clearing', async () => {
      render(<SearchInput defaultValue="test" />)

      expect(screen.getByLabelText('Clear search')).toBeInTheDocument()

      const clearButton = screen.getByLabelText('Clear search')
      await userEvent.click(clearButton)

      expect(screen.queryByLabelText('Clear search')).not.toBeInTheDocument()
    })

    it('calls onClear callback', async () => {
      const handleClear = vi.fn()
      render(<SearchInput defaultValue="test" onClear={handleClear} />)

      const clearButton = screen.getByLabelText('Clear search')
      await userEvent.click(clearButton)

      expect(handleClear).toHaveBeenCalled()
    })
  })

  // ==================== SIZE VARIANTS ====================
  describe('Size Variants', () => {
    it('applies sm size classes', () => {
      render(<SearchInput size="sm" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('h-8', 'text-sm')
    })

    it('applies md size classes (default)', () => {
      render(<SearchInput />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('h-10', 'text-base')
    })

    it('applies lg size classes', () => {
      render(<SearchInput size="lg" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('h-12', 'text-lg')
    })
  })

  // ==================== DISABLED STATE ====================
  describe('Disabled State', () => {
    it('disables input when disabled prop is true', () => {
      render(<SearchInput disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('applies disabled styles', () => {
      render(<SearchInput disabled />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass(
        'bg-gray-100',
        'cursor-not-allowed',
        'opacity-60'
      )
    })

    it('hides clear button when disabled even with value', () => {
      render(<SearchInput value="test" disabled />)
      expect(screen.queryByLabelText('Clear search')).not.toBeInTheDocument()
    })

    it('disables search button when disabled', () => {
      render(<SearchInput disabled />)
      expect(screen.getByLabelText('Search')).toBeDisabled()
    })
  })

  // ==================== AUTOFOCUS ====================
  describe('AutoFocus', () => {
    it('focuses input on mount when autoFocus is true', () => {
      render(<SearchInput autoFocus />)
      expect(screen.getByRole('textbox')).toHaveFocus()
    })

    it('does not focus input by default', () => {
      render(<SearchInput />)
      expect(screen.getByRole('textbox')).not.toHaveFocus()
    })
  })

  // ==================== CUSTOM CLASSNAME ====================
  describe('Custom ClassName', () => {
    it('applies custom className to input', () => {
      render(<SearchInput className="custom-class" />)
      expect(screen.getByRole('textbox')).toHaveClass('custom-class')
    })

    it('preserves default classes with custom className', () => {
      render(<SearchInput className="custom-class" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass(
        'w-full',
        'rounded-lg',
        'border',
        'custom-class'
      )
    })
  })

  // ==================== ACCESSIBILITY ====================
  describe('Accessibility', () => {
    it('has aria-label on input from placeholder', () => {
      render(<SearchInput placeholder="Search products" />)
      expect(screen.getByLabelText('Search products')).toBeInTheDocument()
    })

    it('has aria-label on search button', () => {
      render(<SearchInput />)
      expect(screen.getByLabelText('Search')).toBeInTheDocument()
    })

    it('has aria-label on clear button', () => {
      render(<SearchInput value="test" />)
      expect(screen.getByLabelText('Clear search')).toBeInTheDocument()
    })

    it('search and clear buttons are accessible via keyboard', async () => {
      const handleSearch = vi.fn()
      const handleClear = vi.fn()
      render(
        <SearchInput
          value="test"
          onSearch={handleSearch}
          onClear={handleClear}
        />
      )

      const searchButton = screen.getByLabelText('Search')
      const clearButton = screen.getByLabelText('Clear search')

      searchButton.focus()
      fireEvent.keyDown(searchButton, { key: 'Enter' })
      await userEvent.click(searchButton)
      expect(handleSearch).toHaveBeenCalled()

      await userEvent.click(clearButton)
      expect(handleClear).toHaveBeenCalled()
    })
  })
})
