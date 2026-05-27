import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    // Substitua 'nome-do-seu-repositorio' pelo nome exato do repositório no GitHub
    base: '/nome-do-seu-repositorio/', 
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // Configurações mantidas para o bom funcionamento do ambiente
      hmr: process.env.DISABLE_HMR !== 'verdadeiro',
      watch: process.env.DISABLE_HMR === 'verdadeiro' ? null : {},
    },
  };
});
