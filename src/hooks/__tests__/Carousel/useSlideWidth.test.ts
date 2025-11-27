/* eslint-disable no-undef */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useSlideWidth } from '../../Carousel/useSlideWidth'

describe('useSlideWidth', () => {
  let mockElement: HTMLDivElement
  let observeCallback: ResizeObserverCallback
  let mockObserve: ReturnType<typeof vi.fn>
  let mockDisconnect: ReturnType<typeof vi.fn>

  beforeEach(() => {
    mockElement = document.createElement('div')
    mockObserve = vi.fn()
    mockDisconnect = vi.fn()

    // Mock ResizeObserver
    global.ResizeObserver = vi.fn(callback => {
      observeCallback = callback
      return {
        observe: mockObserve,
        disconnect: mockDisconnect,
        unobserve: vi.fn(),
      }
    }) as any
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('Width Calculation', () => {
    it('should calculate slide width correctly with no gap', async () => {
      Object.defineProperty(mockElement, 'offsetWidth', {
        configurable: true,
        value: 1000,
      })

      const containerRef = { current: mockElement }

      const { result } = renderHook(() =>
        useSlideWidth({ containerRef, slidesToShow: 4, gap: 0 })
      )

      await waitFor(() => {
        expect(result.current).toBe(250) // 1000 / 4 = 250
      })
    })

    it('should calculate slide width correctly with gap', async () => {
      Object.defineProperty(mockElement, 'offsetWidth', {
        configurable: true,
        value: 1000,
      })

      const containerRef = { current: mockElement }

      const { result } = renderHook(() =>
        useSlideWidth({ containerRef, slidesToShow: 4, gap: 20 })
      )

      await waitFor(() => {
        // (1000 - (20 * 3)) / 4 = 940 / 4 = 235
        expect(result.current).toBe(235)
      })
    })

    it('should calculate slide width for single slide', async () => {
      Object.defineProperty(mockElement, 'offsetWidth', {
        configurable: true,
        value: 1000,
      })

      const containerRef = { current: mockElement }

      const { result } = renderHook(() =>
        useSlideWidth({ containerRef, slidesToShow: 1, gap: 0 })
      )

      await waitFor(() => {
        expect(result.current).toBe(1000) // 1000 / 1 = 1000
      })
    })

    it('should handle large gap values', async () => {
      Object.defineProperty(mockElement, 'offsetWidth', {
        configurable: true,
        value: 1000,
      })

      const containerRef = { current: mockElement }

      const { result } = renderHook(() =>
        useSlideWidth({ containerRef, slidesToShow: 3, gap: 100 })
      )

      await waitFor(() => {
        // (1000 - (100 * 2)) / 3 = 800 / 3 = 266.666...
        expect(result.current).toBeCloseTo(266.67, 1)
      })
    })
  })

  describe('ResizeObserver Integration', () => {
    it('should observe container element', () => {
      const containerRef = { current: mockElement }

      renderHook(() =>
        useSlideWidth({ containerRef, slidesToShow: 4, gap: 20 })
      )

      expect(mockObserve).toHaveBeenCalledWith(mockElement)
    })

    it('should disconnect observer on unmount', () => {
      const containerRef = { current: mockElement }

      const { unmount } = renderHook(() =>
        useSlideWidth({ containerRef, slidesToShow: 4, gap: 20 })
      )

      unmount()

      expect(mockDisconnect).toHaveBeenCalled()
    })

    it('should not observe if containerRef is null', () => {
      const containerRef = { current: null }

      renderHook(() =>
        useSlideWidth({ containerRef, slidesToShow: 4, gap: 20 })
      )

      expect(mockObserve).not.toHaveBeenCalled()
    })
  })

  describe('Dynamic Updates', () => {
    it('should update width when slidesToShow changes', async () => {
      Object.defineProperty(mockElement, 'offsetWidth', {
        configurable: true,
        value: 1000,
      })

      const containerRef = { current: mockElement }

      const { result, rerender } = renderHook(
        ({ slidesToShow }) =>
          useSlideWidth({ containerRef, slidesToShow, gap: 0 }),
        { initialProps: { slidesToShow: 4 } }
      )

      await waitFor(() => {
        expect(result.current).toBe(250)
      })

      rerender({ slidesToShow: 5 })

      await waitFor(() => {
        expect(result.current).toBe(200) // 1000 / 5 = 200
      })
    })

    it('should update width when gap changes', async () => {
      Object.defineProperty(mockElement, 'offsetWidth', {
        configurable: true,
        value: 1000,
      })

      const containerRef = { current: mockElement }

      const { result, rerender } = renderHook(
        ({ gap }) => useSlideWidth({ containerRef, slidesToShow: 4, gap }),
        { initialProps: { gap: 0 } }
      )

      await waitFor(() => {
        expect(result.current).toBe(250)
      })

      rerender({ gap: 20 })

      await waitFor(() => {
        expect(result.current).toBe(235) // (1000 - 60) / 4 = 235
      })
    })
  })

  describe('Edge Cases', () => {
    it('should return 0 if container has no width', async () => {
      Object.defineProperty(mockElement, 'offsetWidth', {
        configurable: true,
        value: 0,
      })

      const containerRef = { current: mockElement }

      const { result } = renderHook(() =>
        useSlideWidth({ containerRef, slidesToShow: 4, gap: 0 })
      )

      await waitFor(() => {
        expect(result.current).toBe(0)
      })
    })

    it('should handle fractional widths', async () => {
      Object.defineProperty(mockElement, 'offsetWidth', {
        configurable: true,
        value: 999,
      })

      const containerRef = { current: mockElement }

      const { result } = renderHook(() =>
        useSlideWidth({ containerRef, slidesToShow: 4, gap: 0 })
      )

      await waitFor(() => {
        expect(result.current).toBe(249.75) // 999 / 4 = 249.75
      })
    })
  })
})
