/**
 * Centralized export of all component schemas
 * These schemas define which props are customizable in admin panels
 */
export { type ComponentSchema, type SchemaProperty, type SchemaRegistry, } from './types';
export { buttonSchema } from './button.schema';
export { heroSchema } from './hero.schema';
export { featureCardSchema } from './featurecard.schema';
/**
 * Registry of all available component schemas
 * Use this to dynamically load schemas in admin panels
 */
export declare const schemaRegistry: {
    readonly Button: import("./types").ComponentSchema;
    readonly Hero: import("./types").ComponentSchema;
    readonly FeatureCard: import("./types").ComponentSchema;
};
export type ComponentName = keyof typeof schemaRegistry;
//# sourceMappingURL=index.d.ts.map