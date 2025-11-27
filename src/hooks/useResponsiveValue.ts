'use client'
import { useDevice } from './useDevice'

export interface ResponsiveConfig<T> {
  mobile: T
  tablet: T
  desktop: T
}

export const useResponsiveValue = <T>(config: ResponsiveConfig<T>): T => {
  const { deviceType } = useDevice()

  if (deviceType === 'phone') return config.mobile
  if (deviceType === 'tablet') return config.tablet
  return config.desktop
}
