import React from 'react';
interface TableOfContentsItem {
    id: string;
    label: string;
    level: 1 | 2 | 3;
}
export interface TableOfContentsProps {
    items: TableOfContentsItem[];
    activeId?: string;
    onItemClick?: (id: string) => void;
    className?: string;
    title?: string;
}
export declare const TableOfContents: ({ items, activeId, onItemClick, className, title, }: TableOfContentsProps) => React.JSX.Element;
export {};
//# sourceMappingURL=TableOfContents.d.ts.map