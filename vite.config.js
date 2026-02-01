import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'Registro Serviço Bombeiro de Aeródromo Militar',
        short_name: 'RBA 24h',
        theme_color: '#C62828',
        background_color: '#F2F4F7',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          { src: '/assets/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/assets/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ]
})
