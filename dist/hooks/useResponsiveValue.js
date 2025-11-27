'use client';
import { useDevice } from './useDevice';
export const useResponsiveValue = (config) => {
    const { deviceType } = useDevice();
    if (deviceType === 'phone')
        return config.mobile;
    if (deviceType === 'tablet')
        return config.tablet;
    return config.desktop;
};
//# sourceMappingURL=useResponsiveValue.js.map