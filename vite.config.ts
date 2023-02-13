import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/***': {
        target: 'http://88.88.88.88',
        changeOrigin: true,
      }
    }
  },
  // build: {
  //   commonjsOptions: {
  //     transformMixedEsModules: true,
  //     dynamicRequireTargets: ["./.cz-config.js", 'node_modules/cz-customizable/*.js'],
  //     ignoreDynamicRequires: true
  //   }
  // }
})
