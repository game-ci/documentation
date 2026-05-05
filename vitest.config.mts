import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.ts'],
    globals: false,
    include: ['tests/**/*.test.tsx', 'tests/**/*.test.ts', 'src/**/*.test.tsx', 'src/**/*.test.ts'],
    exclude: ['**/node_modules/**', '**/build/**', '**/.docusaurus/**', 'e2e/**'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/**/*.tsx', 'src/**/*.ts'],
      exclude: ['src/**/*.test.tsx', 'src/**/*.test.ts'],
    },
  },
  resolve: {
    alias: {
      '@site': new URL('./', import.meta.url).pathname,
    },
  },
});
