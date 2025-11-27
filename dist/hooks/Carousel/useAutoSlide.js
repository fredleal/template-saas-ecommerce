'use client';
import { useEffect } from 'react';
export const useAutoSlide = ({ isTabVisible, isBannerVisible, isHovered, goToNextSlide, enabled, interval = 7000, }) => {
    useEffect(() => {
        if (!enabled || isHovered || !isTabVisible || !isBannerVisible) {
            return;
        }
        const timer = setInterval(() => {
            goToNextSlide();
        }, interval);
        return () => clearInterval(timer);
    }, [
        enabled,
        isHovered,
        isTabVisible,
        isBannerVisible,
        goToNextSlide,
        interval,
    ]);
};
//# sourceMappingURL=useAutoSlide.js.map