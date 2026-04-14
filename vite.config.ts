import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Set base to '/' for custom domain, or '/repo-name/' for GitHub Pages without custom domain
export default defineConfig({
  plugins: [react()],
  base: '/',
})
