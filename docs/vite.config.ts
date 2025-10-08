import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
export default defineConfig({
  plugins: [vueJsx()],
  server: {
    port: 7770
  }
});
