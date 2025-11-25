import React from 'react';
export interface ImageProps {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    loading?: 'eager' | 'lazy';
    className?: string;
    title?: string;
    onLoad?: React.ReactEventHandler<HTMLImageElement>;
    onError?: React.ReactEventHandler<HTMLImageElement>;
}
export declare const Image: ({ src, alt, width, height, objectFit, loading, className, ...props }: ImageProps) => React.JSX.Element;
//# sourceMappingURL=Image.d.ts.map