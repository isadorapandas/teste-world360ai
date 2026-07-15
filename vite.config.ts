import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {        
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        highlights: resolve(__dirname, 'highlights.html'),
        research: resolve(__dirname, 'research.html'),
        projects: resolve(__dirname, 'projects.html'),
        events: resolve(__dirname, 'events.html'),
        media: resolve(__dirname, 'media.html'),
        references: resolve(__dirname, 'references.html'),
        internal: resolve(__dirname, 'internal.html')
      },
    },
  },
})