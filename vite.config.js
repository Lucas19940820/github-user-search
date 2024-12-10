import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures the build output goes to the 'dist' folder
    rollupOptions: {
      input: {
        main: 'index.html', // Ensure 'index.html' is the main entry point
      },
    },
  },
  server: {
    open: true, // Opens the app in your browser automatically during local dev
  },
  resolve: {
    alias: {
      '@': '/src', // Optional alias for cleaner imports
    },
  },
})
