'use client'
import { useState, useEffect } from 'react'

export type DeviceType = 'phone' | 'tablet' | 'desktop'

export interface UseDeviceReturn {
  deviceType: DeviceType
  isPhone: boolean
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

const getDeviceTypeFromWidth = (width: number): DeviceType => {
  if (width <= 640) return 'phone'
  if (width <= 1024) return 'tablet'
  return 'desktop'
}

export const useDevice = (): UseDeviceReturn => {
  const [deviceType, setDeviceType] = useState<DeviceType>(() => {
    if (typeof window === 'undefined') return 'desktop'
    return getDeviceTypeFromWidth(window.innerWidth)
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      const newDeviceType = getDeviceTypeFromWidth(window.innerWidth)
      if (newDeviceType !== deviceType) {
        setDeviceType(newDeviceType)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [deviceType])

  return {
    deviceType,
    isPhone: deviceType === 'phone',
    isMobile: deviceType === 'phone' || deviceType === 'tablet',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
  }
}
