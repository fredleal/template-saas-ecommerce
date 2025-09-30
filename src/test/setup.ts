import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { afterEach, vi } from 'vitest'
import { toHaveNoViolations } from 'jest-axe'
import { expect } from 'vitest'

// Adiciona matcher customizado do jest-axe
expect.extend(toHaveNoViolations)

// Limpa o DOM após cada teste
afterEach(() => {
  cleanup()
})

// Mock window.matchMedia (usado para media queries)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock IntersectionObserver (usado para lazy loading)
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() {
    return []
  }
} as any

// Mock ResizeObserver (usado para componentes responsivos)
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
} as any
