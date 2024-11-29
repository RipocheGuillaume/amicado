import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./public"),
    },
  },
});

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), "");
//   return {
//     define: {
//       "process.env.SOME_KEY": JSON.stringify(env.SOME_KEY),
//     },
//     plugins: [react()],
//   };
// });
