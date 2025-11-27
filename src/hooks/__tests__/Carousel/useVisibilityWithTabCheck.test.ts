import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useVisibilityWithTabCheck } from '../../Carousel/useVisibilityWithTabCheck'

describe('useVisibilityWithTabCheck', () => {
  let mockObserve: ReturnType<typeof vi.fn>
  let mockDisconnect: ReturnType<typeof vi.fn>

  beforeEach(() => {
    mockObserve = vi.fn()
    mockDisconnect = vi.fn()

    global.IntersectionObserver = vi.fn(() => ({
      observe: mockObserve,
      disconnect: mockDisconnect,
      unobserve: vi.fn(),
      root: null,
      rootMargin: '',
      thresholds: [],
      takeRecords: () => [],
    })) as any

    Object.defineProperty(document, 'hidden', {
      configurable: true,
      writable: true,
      value: false,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Initialization', () => {
    it('should return a ref', () => {
      const { result } = renderHook(() => useVisibilityWithTabCheck())
      expect(result.current.ref).toBeDefined()
      expect(result.current.ref.current).toBeNull()
    })

    it('should initialize with tab visible', () => {
      const { result } = renderHook(() => useVisibilityWithTabCheck())
      expect(result.current.isTabVisible).toBe(true)
    })

    it('should initialize with element not visible', () => {
      const { result } = renderHook(() => useVisibilityWithTabCheck())
      expect(result.current.isElementVisible).toBe(false)
    })

    it('should have isVisible false when element is not visible', () => {
      const { result } = renderHook(() => useVisibilityWithTabCheck())
      expect(result.current.isVisible).toBe(false)
    })
  })

  describe('Cleanup', () => {
    it('should remove visibilitychange listener on unmount', () => {
      const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener')
      const { unmount } = renderHook(() => useVisibilityWithTabCheck())
      unmount()
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'visibilitychange',
        expect.any(Function)
      )
    })
  })
})
