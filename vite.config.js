import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base precisa bater com o nome do repositório no GitHub Pages
// (ex.: https://seuusuario.github.io/dm-digital-site/)
// Se um dia usar domínio próprio (registro.com.br), troque para base: '/'
export default defineConfig({
  base: '/dm-digital-site/',
  plugins: [react(), tailwindcss()],
})