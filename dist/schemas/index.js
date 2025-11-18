/**
 * Centralized export of all component schemas
 * These schemas define which props are customizable in admin panels
 */
export { buttonSchema } from './button.schema';
export { heroSchema } from './hero.schema';
export { featureCardSchema } from './featurecard.schema';
import { buttonSchema } from './button.schema';
import { heroSchema } from './hero.schema';
import { featureCardSchema } from './featurecard.schema';
/**
 * Registry of all available component schemas
 * Use this to dynamically load schemas in admin panels
 */
export const schemaRegistry = {
    Button: buttonSchema,
    Hero: heroSchema,
    FeatureCard: featureCardSchema,
};
//# sourceMappingURL=index.js.map