import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      three: path.resolve("./node_modules/three"),
    },
  },
  base: "/Portfolio/",  
  build: {  
    chunkSizeWarningLimit: 100000,
    rollupOptions: {  
      output: {  
        manualChunks: {  
          vendor: ['react', 'react-dom'],
        },  
      },  
    },  
  },
});

