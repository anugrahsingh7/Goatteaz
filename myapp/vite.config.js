import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets', // Default folder for images, fonts, etc.
    rollupOptions: {
      output: {
        assetFileNames: 'assets/images .[hash][extname]',
        assetFileNames: 'assets/movies .[hash][extname]', // Customize output file structure
      },
    },
  },
})
