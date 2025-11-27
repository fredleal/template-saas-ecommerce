'use client';
import { useState, useEffect, useRef } from 'react';
const DEBOUNCE_DELAY = 100;
export const useVisibilityWithTabCheck = () => {
    const ref = useRef(null);
    const [isTabVisible, setIsTabVisible] = useState(true);
    const [isElementVisible, setIsElementVisible] = useState(false);
    // eslint-disable-next-line no-undef
    const debounceTimerRef = useRef(null);
    // Track tab visibility
    useEffect(() => {
        if (typeof document === 'undefined')
            return;
        const handleVisibilityChange = () => {
            setIsTabVisible(!document.hidden);
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);
    // Track element visibility with IntersectionObserver
    useEffect(() => {
        if (typeof window === 'undefined' || !ref.current)
            return;
        // eslint-disable-next-line no-undef
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (debounceTimerRef.current) {
                    clearTimeout(debounceTimerRef.current);
                }
                debounceTimerRef.current = setTimeout(() => {
                    setIsElementVisible(entry.isIntersecting);
                }, DEBOUNCE_DELAY);
            });
        };
        // eslint-disable-next-line no-undef
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });
        observer.observe(ref.current);
        return () => {
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }
            observer.disconnect();
        };
    }, []);
    const isVisible = isTabVisible && isElementVisible;
    return {
        ref,
        isTabVisible,
        isElementVisible,
        isVisible,
    };
};
//# sourceMappingURL=useVisibilityWithTabCheck.js.map