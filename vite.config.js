import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "nested/index.html"),
      },
    },
  },
  plugins: [
    // Without Data
    ViteEjsPlugin(),

    // With Data
    ViteEjsPlugin({
      domain: "example.com",
      title: "My vue project!",
    }),

    // Or With Vite Config
    ViteEjsPlugin((viteConfig) => {
      // viteConfig is the current viteResolved config.
      return {
        root: viteConfig.root,
        domain: "example.com",
        title: "My vue project!",
      };
    }),
  ],
});
