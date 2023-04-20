import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sassDts from "vite-plugin-sass-dts";
import typescript from "@rollup/plugin-typescript";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig(() => ({
  plugins: [cssInjectedByJsPlugin(), sassDts(), react(), typescript()],
  build: {
    lib: {
      formats: ["cjs"],
      entry: resolve(__dirname, "src/index.ts"),
      name: "react-horizontal-datepicker",
      //fileName: "index",
      fileName: "index.js",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
}));
