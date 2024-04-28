import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy: {
    //   '/***': {
    //     target: 'http://88.88.88.88',
    //     changeOrigin: true,
    //   }
    // },
    // https: true
  },

  // build: {
  //   commonjsOptions: {
  //     transformMixedEsModules: true,
  //     dynamicRequireTargets: ["./.cz-config.js", 'node_modules/cz-customizable/*.js'],
  //     ignoreDynamicRequires: true
  //   }
  // }
})
