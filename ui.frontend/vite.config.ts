import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteForAem } from '@aem-vite/vite-aem-plugin';
import { bundlesImportRewriter } from '@aem-vite/import-rewriter';

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig(({ command, mode }) => ({
  plugins: [
    vue(),
    vueJsx(),
    tsconfigPaths(),
    viteForAem({
      contentPaths: [
        '/content/wknd/us/en',
        '/',
        './',
        '/content/wknd/us/en.html',
      ],
      publicPath: '/etc.clientlibs/wknd/clientlibs/clientlib-site',
    }),
    bundlesImportRewriter({
      publicPath: '/etc.clientlibs/wknd/clientlibs/clientlib-site',
      resourcesPath: 'resources/js',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./client', import.meta.url)),
    },
  },
  base: command === 'build' ? '/etc.clientlibs/wknd/clientlibs/' : '/',
  publicDir: command === 'build' ? false : 'client/assets',
  build: {
    brotliSize: false,
    manifest: false,
    minify: mode === 'development' ? false : 'terser',
    outDir: 'dist',
    /* path.join(
      __dirname,
      'target/vault-work/jcr_root/apps/settings/wcm/design/aem-product-selection-tools'
    ), */
    sourcemap: command === 'serve' ? 'inline' : false,
    rollupOptions: {
      output: {
        assetFileNames: 'clientlib-site/resources/[ext]/[name][extname]',
        chunkFileNames: 'clientlib-site/resources/chunks/[name].[hash].js',
        entryFileNames: 'clientlib-site/resources/js/[name].js',
      },
      input: {
        bundle: './client/main.ts',
      },
    },
  },
  server: {
    origin: 'http://localhost:3000',
  },
}));
