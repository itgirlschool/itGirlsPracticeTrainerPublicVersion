import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  base:"/",
  server: { https: true },
  plugins: [react(),mkcert()],
  build: { chunkSizeWarningLimit: 1600, },
  optimizeDeps: {
    exclude: ['react-hook-form']
  }
})
