'use client';
import React, { useEffect } from 'react';
import { Link } from '../../atoms/Link/Link';
import { Image } from '../../atoms/Image/Image';
import { useDevice } from '../../../hooks/useDevice';
import { useVisibilityWithTabCheck } from '../../../hooks/Carousel/useVisibilityWithTabCheck';
export const ImageLink = ({ title = 'Image Link', imgMobile, imgDesktop, fallbackSrc = 'https://placehold.co/300x300', width, height, href = '#', external = false, loading = 'lazy', priority = 'auto', onVisible, disableVisibilityTracking = false, className = '', onClick, onMouseOver, onMouseEnter, onMouseLeave, }) => {
    const { isMobile } = useDevice();
    const { ref, isVisible } = useVisibilityWithTabCheck();
    // Select appropriate image based on device
    const selectedImage = isMobile ? imgMobile : imgDesktop;
    // Handle visibility tracking
    useEffect(() => {
        if (isVisible && !disableVisibilityTracking && onVisible) {
            onVisible();
        }
    }, [isVisible, onVisible, disableVisibilityTracking]);
    // Don't render if no image is available
    if (!selectedImage)
        return null;
    return (<div ref={ref} className={`w-full ${className}`} data-testid="image-link">
      <Link href={href} target={external ? '_blank' : '_self'} onClick={onClick} onMouseOver={onMouseOver} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} title={title} aria-label={title} variant="secondary" className="block w-full h-auto">
        <Image src={selectedImage} alt={title} width={width} height={height} fallbackSrc={fallbackSrc} loading={loading} fetchPriority={priority} className="w-full h-auto"/>
      </Link>
    </div>);
};
//# sourceMappingURL=ImageLink.jsx.map