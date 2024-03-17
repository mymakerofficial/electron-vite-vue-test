import {defineConfig} from "vite";
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, 'src', 'shared'),
      '@main': path.resolve(__dirname, 'src', 'main'),
      '@preload': path.resolve(__dirname, 'src', 'preload'),
      '@renderer': path.resolve(__dirname, 'src', 'renderer'),
    }
  }
});