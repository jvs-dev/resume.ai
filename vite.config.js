import { defineConfig } from 'vite';

export default defineConfig({
  // ... outras configurações
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // exemplo de configuração de proxy
    },
  },
  // configuração de rotas
  routes: [
    { "handle": "filesystem" },
    { "src": "/", "dest": "/index.html" },
    { "src": "/resumos", "dest": "/resumos.html" }
  ],
});