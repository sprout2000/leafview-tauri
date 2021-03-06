/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';

  return {
    root: './src',
    server: {
      port: 3000,
    },
    build: {
      outDir: '../dist',
      minify: true,
      emptyOutDir: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
    plugins: [
      react(),
      createHtmlPlugin({
        minify: !isDev,
        inject: {
          data: {
            devtools: isDev
              ? `<script src="http://localhost:8097"></script>`
              : undefined,
          },
        },
      }),
    ],
  };
});
