import React from 'react';
export interface ImageProps {
    src: string;
    alt: string;
    fallbackSrc?: string;
    width?: number | string;
    height?: number | string;
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    loading?: 'eager' | 'lazy';
    fetchPriority?: 'high' | 'low' | 'auto';
    className?: string;
    title?: string;
    onLoad?: () => void;
    onError?: () => void;
}
export declare const Image: ({ src, alt, fallbackSrc, width, height, objectFit, loading, fetchPriority, className, onLoad, onError, ...props }: ImageProps) => React.JSX.Element;
//# sourceMappingURL=Image.d.ts.map