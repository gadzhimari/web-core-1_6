import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const base = process.env.NODE_ENV === "production" ? "/" : "/web-core-1_6/";

  return {
    publicDir: "public",
    base,
    build: {
      outDir: "dist",
      cssCodeSplit: true,
      emptyOutDir: true,
      assetsDir: ".",
      rollupOptions: {
        input: {
          main: "index.html",
        },
      },
    },

    server: {
      port: 3000,
      open: true,
    },
  };
});
