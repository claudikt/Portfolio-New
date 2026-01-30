import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

export default defineConfig({
  // When deploying to GitHub Pages under a repository (e.g.
  // https://<user>.github.io/<repo>/) Vite needs a base path so
  // built assets are referenced correctly. Update this to your
  // repository name if it differs.
  base: '/Luxury-Automotive-Portfolio-Website--1-/',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory (works in ESM + TS without __dirname)
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
