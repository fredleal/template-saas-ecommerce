import React from 'react';
type TagType = 'span' | 'p' | 'div';
export interface TagTextProps {
    /** HTML tag to render */
    as?: TagType;
    /** Text content */
    text: string;
    /** Size variant */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** Font weight */
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
    /** Text color variant */
    color?: 'primary' | 'secondary' | 'muted';
    /** Custom className */
    className?: string;
}
export declare const TagText: ({ as, text, size, weight, color, className, }: TagTextProps) => React.JSX.Element;
export {};
//# sourceMappingURL=TagText.d.ts.map