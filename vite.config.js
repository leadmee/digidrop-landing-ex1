import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves the project under /<repo>/; only the Pages build (run
  // inside GitHub Actions) needs that base — local dev and other hosts use '/'.
  base: process.env.GITHUB_ACTIONS ? '/digidrop-landing-ex1/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: '127.0.0.1',
    port: 5174,
    strictPort: true,
  },
})
