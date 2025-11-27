'use client';
import { useState, useEffect } from 'react';
export const useSlideWidth = ({ containerRef, slidesToShow, gap, }) => {
    const [slideWidth, setSlideWidth] = useState(0);
    useEffect(() => {
        const updateSlideWidth = () => {
            if (!containerRef.current)
                return;
            const containerWidth = containerRef.current.offsetWidth;
            const totalGap = gap * (slidesToShow - 1);
            const calculatedWidth = (containerWidth - totalGap) / slidesToShow;
            setSlideWidth(calculatedWidth);
        };
        updateSlideWidth();
        if (typeof window === 'undefined')
            return;
        // eslint-disable-next-line no-undef
        const resizeObserver = new ResizeObserver(updateSlideWidth);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
        return () => {
            resizeObserver.disconnect();
        };
    }, [containerRef, slidesToShow, gap]);
    return slideWidth;
};
//# sourceMappingURL=useSlideWidth.js.map