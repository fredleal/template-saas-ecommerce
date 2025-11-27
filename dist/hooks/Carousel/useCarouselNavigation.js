'use client';
import { useState, useCallback, useEffect } from 'react';
export const useCarouselNavigation = ({ totalSlides, slidesToShow, infiniteLoop = false, currentIndex: controlledIndex, onSlideChange, defaultIndex = 0, }) => {
    const [internalIndex, setInternalIndex] = useState(defaultIndex);
    // Check if component is controlled or uncontrolled
    const isControlled = controlledIndex !== undefined;
    const currentIndex = isControlled ? controlledIndex : internalIndex;
    // Calculate if we have fractional slides (more slides than can be shown)
    const isFractional = totalSlides > slidesToShow;
    // Calculate the maximum index we can navigate to
    const maxIndex = isFractional ? totalSlides - slidesToShow : totalSlides - 1;
    // Sync internal state with controlled prop if it changes
    useEffect(() => {
        if (isControlled && controlledIndex !== internalIndex) {
            setInternalIndex(controlledIndex);
        }
    }, [isControlled, controlledIndex, internalIndex]);
    const goToSlide = useCallback((index) => {
        let newIndex = index;
        if (infiniteLoop) {
            // Handle infinite loop wrapping
            if (newIndex < 0) {
                newIndex = maxIndex;
            }
            else if (newIndex > maxIndex) {
                newIndex = 0;
            }
        }
        else {
            // Clamp to valid range
            newIndex = Math.max(0, Math.min(newIndex, maxIndex));
        }
        if (!isControlled) {
            setInternalIndex(newIndex);
        }
        if (onSlideChange && newIndex !== currentIndex) {
            onSlideChange(newIndex);
        }
    }, [infiniteLoop, maxIndex, isControlled, currentIndex, onSlideChange]);
    const handleNext = useCallback(() => {
        const nextIndex = currentIndex + 1;
        if (infiniteLoop) {
            goToSlide(nextIndex > maxIndex ? 0 : nextIndex);
        }
        else if (nextIndex <= maxIndex) {
            goToSlide(nextIndex);
        }
    }, [currentIndex, maxIndex, infiniteLoop, goToSlide]);
    const handlePrev = useCallback(() => {
        const prevIndex = currentIndex - 1;
        if (infiniteLoop) {
            goToSlide(prevIndex < 0 ? maxIndex : prevIndex);
        }
        else if (prevIndex >= 0) {
            goToSlide(prevIndex);
        }
    }, [currentIndex, maxIndex, infiniteLoop, goToSlide]);
    return {
        currentIndex,
        goToSlide,
        handleNext,
        handlePrev,
        maxIndex,
        isFractional,
    };
};
//# sourceMappingURL=useCarouselNavigation.js.map