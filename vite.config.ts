import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// path组合
const resolvePath = dir => path.resolve(__dirname, dir)

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@styles/index.scss";
        `
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolvePath('src'),
      '@styles': resolvePath('src/assets/styles')
    }
  }
})
