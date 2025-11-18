/**
 * JSON Schema type definitions for component customization
 * Used by admin panels to generate forms for editing component props
 */
export interface SchemaProperty {
    type: string;
    title?: string;
    description?: string;
    default?: any;
    enum?: string[];
    enumNames?: string[];
    format?: string;
    items?: SchemaProperty;
    properties?: Record<string, SchemaProperty>;
    required?: string[];
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    minimum?: number;
    maximum?: number;
}
export interface ComponentSchema {
    title: string;
    description?: string;
    type: 'object';
    properties: Record<string, SchemaProperty>;
    required?: string[];
}
export interface SchemaRegistry {
    [componentName: string]: ComponentSchema;
}
//# sourceMappingURL=types.d.ts.map