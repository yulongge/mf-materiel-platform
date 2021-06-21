import { loadEnv, ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
const CWD = process.cwd()

// path组合
const resolvePath = dir => path.resolve(__dirname, dir)
console.log(resolvePath, 'resolvePath')
export default ({ mode }: ConfigEnv): UserConfig => {
  const { VITE_BASE_URL } = loadEnv(mode, CWD)

  return {
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
    base: VITE_BASE_URL, // 设置打包路径
    resolve: {
      alias: {
        '@': resolvePath('src'),
        '@styles': resolvePath('src/assets/styles'),
        '@views': resolvePath('src/views'),
        '@components': resolvePath('src/components')
      }
    }
  }
}
