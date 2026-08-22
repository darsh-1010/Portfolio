import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Lighthouse flagged ~1.5MB of unnecessarily large images (carrent.png
    // alone is 759KB). Compresses PNG/JPEG/SVG at build time, same format
    // and import paths, no code changes needed elsewhere.
    ViteImageOptimizer(),
  ],
})
