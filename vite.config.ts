import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import topLevelAwait from 'vite-plugin-top-level-await';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    topLevelAwait()],
  server: {
    // proxy: {
    //   '/***': {
    //     target: 'http://88.88.88.88',
    //     changeOrigin: true,
    //   }
    // },
    // https: true
    port: 5174
  },
  base: '/tools/',
  // build: {
  //   commonjsOptions: {
  //     transformMixedEsModules: true,
  //     dynamicRequireTargets: ["./.cz-config.js", 'node_modules/cz-customizable/*.js'],
  //     ignoreDynamicRequires: true
  //   }
  // }
})
