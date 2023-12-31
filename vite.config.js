import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/11st": {
        target: `http://openapi.11st.co.kr/openapi/OpenApiService.tmall`,
        rewrite: (path) => path.replace(/^\/11st/, ""),
        changeOrigin: true,
      },
    },
  },
});
