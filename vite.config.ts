import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "tools",
  server: {
    proxy: {
      '/***': {
        target: 'http://88.88.88.88',
        changeOrigin: true,
      }
    }
  }
})
