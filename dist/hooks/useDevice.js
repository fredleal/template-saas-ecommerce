'use client';
import { useState, useEffect } from 'react';
const getDeviceTypeFromWidth = (width) => {
    if (width <= 640)
        return 'phone';
    if (width <= 1024)
        return 'tablet';
    return 'desktop';
};
export const useDevice = () => {
    const [deviceType, setDeviceType] = useState(() => {
        if (typeof window === 'undefined')
            return 'desktop';
        return getDeviceTypeFromWidth(window.innerWidth);
    });
    useEffect(() => {
        if (typeof window === 'undefined')
            return;
        const handleResize = () => {
            const newDeviceType = getDeviceTypeFromWidth(window.innerWidth);
            if (newDeviceType !== deviceType) {
                setDeviceType(newDeviceType);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [deviceType]);
    return {
        deviceType,
        isPhone: deviceType === 'phone',
        isMobile: deviceType === 'phone' || deviceType === 'tablet',
        isTablet: deviceType === 'tablet',
        isDesktop: deviceType === 'desktop',
    };
};
//# sourceMappingURL=useDevice.js.map