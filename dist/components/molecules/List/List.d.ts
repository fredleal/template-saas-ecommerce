import React from 'react';
type ListTag = 'ul' | 'ol';
export interface ListProps<T extends ListTag, ItemType> {
    /** HTML tag to render (ul or ol) */
    as?: T;
    /** Optional title for the list */
    title?: string;
    /** List items array */
    items?: ItemType[];
    /** Render function for each item */
    renderItem?: (item: ItemType, index: number) => React.ReactNode;
    /** Function to generate unique keys */
    getKey?: (item: ItemType, index: number) => string;
    /** List direction */
    direction?: 'row' | 'column';
    /** Visual variant */
    variant?: 'primary' | 'secondary';
    /** Custom className */
    className?: string;
    /** Additional props for the list element */
    listProps?: React.ComponentPropsWithoutRef<T>;
}
export declare function List<T extends ListTag = 'ul', ItemType = string | React.ReactNode>({ as, title, items, renderItem, getKey, direction, variant, className, listProps, }: ListProps<T, ItemType>): React.JSX.Element;
export {};
//# sourceMappingURL=List.d.ts.map