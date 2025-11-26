import React, { ReactNode, Ref } from 'react';
export interface WrapperProps {
    /** Child elements */
    children?: ReactNode;
    /** Ref for the container div */
    containerRef?: Ref<HTMLDivElement>;
    /** Custom className for outer container */
    className?: string;
    /** Custom className for inner wrapper */
    innerClassName?: string;
    /** Width variant */
    variantWidth?: 'primary' | 'secondary';
    /** HTML id for the container */
    blockId?: string;
    /** Whether to apply overflow-hidden */
    overflowHidden?: boolean;
    /** Horizontal translation in pixels */
    translateX?: number;
    /** CSS transition string */
    transition?: string;
    /** Whether inner wrapper should be flex */
    isFlex?: boolean;
    /** Custom inline styles for outer container */
    style?: React.CSSProperties;
    /** Custom inline styles for inner wrapper */
    innerStyle?: React.CSSProperties;
}
export declare const Wrapper: ({ children, containerRef, className, innerClassName, variantWidth, blockId, overflowHidden, translateX, transition, isFlex, style, innerStyle, }: WrapperProps) => React.JSX.Element;
//# sourceMappingURL=Wrapper.d.ts.map