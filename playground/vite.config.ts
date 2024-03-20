import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import Unplugin from "../src/vite";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    react(),
    Unplugin({
      replace: {
        c: {
          name: "className",
          value: (v) => {
            return `{clsx(${v})}`;
          },
        },
      },
    }),
    AutoImport({
      imports: {
        clsx: [["default", "clsx"]],
      },
    }),
    Inspect(),
  ],
});
