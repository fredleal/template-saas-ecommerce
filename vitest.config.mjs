import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
    
    // ⭐ SIMPLESMENTE IGNORA CSS
    css: false,  // Desabilita processamento de CSS
    
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        '**/index.ts',
      ],
      thresholds: {
        'src/components/atoms/**/*.{ts,tsx}': {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
        'src/components/molecules/**/*.{ts,tsx}': {
          statements: 60,
          branches: 60,
          functions: 60,
          lines: 60,
        },
      },
    },
    
    include: ['**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', '.next', 'dist'],
  },
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/assets': path.resolve(__dirname, './src/assets'),
    },
  },
})