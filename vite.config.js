import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/main.ts'),
      name: 'rad_fix',
      fileName: 'index'
    },
    minify: true
  }
});
