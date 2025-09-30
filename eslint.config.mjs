import js from '@eslint/js'
import typescriptParser from '@typescript-eslint/parser'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'

export default [
  // Base JavaScript configuration
  js.configs.recommended,
  
  // Global ignores
  {
    ignores: ['node_modules/', '.next/', 'out/', 'dist/', 'coverage/'],
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
        React: 'readonly',
        window: 'readonly',
        global: 'readonly',
        process: 'readonly',
        console: 'readonly',
        alert: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLInputElement: 'readonly',
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
