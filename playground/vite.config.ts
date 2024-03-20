import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import Unplugin from "../src/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [Inspect(), Unplugin(), react()],
});
