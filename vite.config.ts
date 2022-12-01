import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'safari13',
  },
  esbuild: {
    target: 'safari13',
  },
  server: {
    port: 2137
  },
})
