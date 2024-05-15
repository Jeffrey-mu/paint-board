import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
const base = '/paint-board'
// https://vitejs.dev/config/
export default defineConfig({
  base,
  server: {
    host: '0.0.0.0'
  },
  plugins: [
    react(),
    viteEslint({
      failOnError: false
    }),
    svgr(),
    splitVendorChunkPlugin()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer, tailwindcss]
    }
  },
  build: {
    outDir: base.slice(1) // 将文件打包到 dist 目录
  }
})
