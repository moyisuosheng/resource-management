import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host:'0.0.0.0',
    port:4000,
    proxy: {
      '/minio-path': {
        target: 'http://localhost:9001/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/minio-path/, '') // 不可以省略rewrite
      }
    }
  }
})
