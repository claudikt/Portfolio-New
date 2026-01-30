import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
// Removed import of 'url' to avoid TypeScript errors

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory (use import.meta.url to avoid Node built-ins)
      // Using .pathname avoids importing 'url' and keeps this file pure ESM/TS
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
})
