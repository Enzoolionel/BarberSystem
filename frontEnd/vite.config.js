import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Alias para la carpeta src
      "@assets": "/src/assets", // Alias para assets
      "@components": "/src/components", // Alias para componentes
      "@img": "/public/img", // Alias para imágenes
      "@icon": "/public/icon", // Alias para icons
    },
  },
});
