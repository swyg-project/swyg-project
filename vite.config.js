import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/openapi": {
        target: `http://openapi.11st.co.kr`,
        changeOrigin: true,
      },
    },
  },
});
