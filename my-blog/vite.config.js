import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1': {
        target: "http://localhost:5000", // Backend server URL
        changeOrigin: true, // Change the origin header to match the target
        rewrite: (path) => path.replace(/^\/api\/v1/, '/api/v1'), // Optional, keeps the same path
      }
    }
  }
})
