import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vueJsx()],
  server: {
    port: 7770
  },
  resolve: {
    alias: {
      'min-sheep-ui': fileURLToPath(
        new URL('../scripts/entry.ts', import.meta.url)
      )
    }
  }
});
