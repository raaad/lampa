import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/main.ts'),
      name: 'rad_fix',
      fileName: 'index',
      formats: ['umd']
    },
    minify: true,
    rollupOptions: {
      output: {
        entryFileNames: `index.html`
      }
    }
  },
  plugins: [
    {
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          req.headers['sec-fetch-dest'] = 'document';
          next();
        });
      }
    }
  ]
});
