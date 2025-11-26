import js from '@eslint/js'
import typescriptParser from '@typescript-eslint/parser'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'

export default [
  // Base JavaScript configuration
  js.configs.recommended,
  
  // Global ignores
  {
    ignores: ['node_modules/', '.next/', 'out/', 'dist/', 'coverage/', 'storybook-static/'],
  },
  
  // JavaScript files
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
  
  // TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // React
        React: 'readonly',

        // Browser globals
        window: 'readonly',
        global: 'readonly',
        process: 'readonly',
        console: 'readonly',
        alert: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',

        // HTML Elements (comprehensive list)
        HTMLElement: 'readonly',
        HTMLAnchorElement: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLSelectElement: 'readonly',
        HTMLFormElement: 'readonly',
        HTMLLabelElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLSpanElement: 'readonly',
        HTMLParagraphElement: 'readonly',
        HTMLHeadingElement: 'readonly',
        HTMLImageElement: 'readonly',
        HTMLVideoElement: 'readonly',
        HTMLAudioElement: 'readonly',
        HTMLCanvasElement: 'readonly',
        HTMLIFrameElement: 'readonly',
        HTMLTableElement: 'readonly',
        HTMLTableRowElement: 'readonly',
        HTMLTableCellElement: 'readonly',
        HTMLUListElement: 'readonly',
        HTMLOListElement: 'readonly',
        HTMLLIElement: 'readonly',
        HTMLFieldSetElement: 'readonly',
        HTMLLegendElement: 'readonly',
        HTMLOptGroupElement: 'readonly',
        HTMLOptionElement: 'readonly',
        HTMLDetailsElement: 'readonly',
        HTMLDialogElement: 'readonly',
        HTMLMenuElement: 'readonly',
        HTMLScriptElement: 'readonly',
        HTMLStyleElement: 'readonly',
        HTMLLinkElement: 'readonly',
        HTMLMetaElement: 'readonly',
        HTMLTitleElement: 'readonly',
        HTMLBaseElement: 'readonly',
        HTMLHeadElement: 'readonly',
        HTMLBodyElement: 'readonly',
        HTMLHtmlElement: 'readonly',
        HTMLBRElement: 'readonly',
        HTMLHRElement: 'readonly',
        HTMLModElement: 'readonly',
        HTMLQuoteElement: 'readonly',
        HTMLPreElement: 'readonly',
        HTMLDataElement: 'readonly',
        HTMLTimeElement: 'readonly',
        HTMLProgressElement: 'readonly',
        HTMLMeterElement: 'readonly',
        HTMLOutputElement: 'readonly',
        HTMLEmbedElement: 'readonly',
        HTMLObjectElement: 'readonly',
        HTMLParamElement: 'readonly',
        HTMLSourceElement: 'readonly',
        HTMLTrackElement: 'readonly',
        HTMLAreaElement: 'readonly',
        HTMLMapElement: 'readonly',
        HTMLTemplateElement: 'readonly',
        HTMLSlotElement: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'off', // Turn off for TS files since TS handles this
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  
  // Test files - vitest globals
  {
    files: ['**/*.test.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Vitest globals
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        test: 'readonly',
        afterEach: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        beforeAll: 'readonly',
        vi: 'readonly',
        // Browser globals for tests
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        HTMLElement: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },

  // Node.js files
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
]
