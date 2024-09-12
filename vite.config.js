import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Use './' if you're serving the app from a subdirectory or relative path.
  plugins: [react()],
})
