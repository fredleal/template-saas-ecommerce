/* eslint-disable no-undef */
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import { useResponsiveValue } from '../useResponsiveValue'

describe('useResponsiveValue', () => {
  let originalInnerWidth: number

  beforeEach(() => {
    originalInnerWidth = window.innerWidth
  })

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    })
  })

  const setWindowWidth = (width: number) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    })
  }

  describe('Value Selection', () => {
    it('should return mobile value for phone device', () => {
      setWindowWidth(640)
      const config = { mobile: 1, tablet: 2, desktop: 3 }
      const { result } = renderHook(() => useResponsiveValue(config))

      expect(result.current).toBe(1)
    })

    it('should return tablet value for tablet device', () => {
      setWindowWidth(768)
      const config = { mobile: 1, tablet: 2, desktop: 3 }
      const { result } = renderHook(() => useResponsiveValue(config))

      expect(result.current).toBe(2)
    })

    it('should return desktop value for desktop device', () => {
      setWindowWidth(1920)
      const config = { mobile: 1, tablet: 2, desktop: 3 }
      const { result } = renderHook(() => useResponsiveValue(config))

      expect(result.current).toBe(3)
    })
  })

  describe('Generic Type Support', () => {
    it('should work with string values', () => {
      setWindowWidth(768)
      const config = { mobile: 'small', tablet: 'medium', desktop: 'large' }
      const { result } = renderHook(() => useResponsiveValue(config))

      expect(result.current).toBe('medium')
    })

    it('should work with boolean values', () => {
      setWindowWidth(1920)
      const config = { mobile: false, tablet: false, desktop: true }
      const { result } = renderHook(() => useResponsiveValue(config))

      expect(result.current).toBe(true)
    })

    it('should work with object values', () => {
      setWindowWidth(640)
      const config = {
        mobile: { size: 'sm', columns: 1 },
        tablet: { size: 'md', columns: 2 },
        desktop: { size: 'lg', columns: 3 },
      }
      const { result } = renderHook(() => useResponsiveValue(config))

      expect(result.current).toEqual({ size: 'sm', columns: 1 })
    })

    it('should work with array values', () => {
      setWindowWidth(768)
      const config = {
        mobile: [1, 2],
        tablet: [1, 2, 3],
        desktop: [1, 2, 3, 4],
      }
      const { result } = renderHook(() => useResponsiveValue(config))

      expect(result.current).toEqual([1, 2, 3])
    })
  })

  describe('Responsive Updates', () => {
    it('should update value when device type changes from mobile to tablet', async () => {
      setWindowWidth(640)
      const config = { mobile: 1, tablet: 2, desktop: 3 }
      const { result } = renderHook(() => useResponsiveValue(config))

      expect(result.current).toBe(1)

      act(() => {
        setWindowWidth(768)
        window.dispatchEvent(new Event('resize'))
      })

      await waitFor(() => {
        expect(result.current).toBe(2)
      })
    })

    it('should update value when device type changes from tablet to desktop', async () => {
      setWindowWidth(768)
      const config = { mobile: 1, tablet: 2, desktop: 3 }
      const { result } = renderHook(() => useResponsiveValue(config))

      expect(result.current).toBe(2)

      act(() => {
        setWindowWidth(1920)
        window.dispatchEvent(new Event('resize'))
      })

      await waitFor(() => {
        expect(result.current).toBe(3)
      })
    })

    it('should update value when device type changes from desktop to mobile', async () => {
      setWindowWidth(1920)
      const config = { mobile: 1, tablet: 2, desktop: 3 }
      const { result } = renderHook(() => useResponsiveValue(config))

      expect(result.current).toBe(3)

      act(() => {
        setWindowWidth(375)
        window.dispatchEvent(new Event('resize'))
      })

      await waitFor(() => {
        expect(result.current).toBe(1)
      })
    })
  })

  describe('Edge Cases', () => {
    it('should handle same values across devices', () => {
      setWindowWidth(768)
      const config = { mobile: 'same', tablet: 'same', desktop: 'same' }
      const { result } = renderHook(() => useResponsiveValue(config))

      expect(result.current).toBe('same')
    })

    it('should handle breakpoint boundaries correctly', () => {
      setWindowWidth(640)
      const config = { mobile: 'phone', tablet: 'tablet', desktop: 'desktop' }
      const { result: phoneResult } = renderHook(() =>
        useResponsiveValue(config)
      )
      expect(phoneResult.current).toBe('phone')

      setWindowWidth(641)
      const { result: tabletResult } = renderHook(() =>
        useResponsiveValue(config)
      )
      expect(tabletResult.current).toBe('tablet')

      setWindowWidth(1024)
      const { result: tabletResult2 } = renderHook(() =>
        useResponsiveValue(config)
      )
      expect(tabletResult2.current).toBe('tablet')

      setWindowWidth(1025)
      const { result: desktopResult } = renderHook(() =>
        useResponsiveValue(config)
      )
      expect(desktopResult.current).toBe('desktop')
    })
  })
})
