import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // indigo-900
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [react(),
  tailwindcss(),
  ],
})
