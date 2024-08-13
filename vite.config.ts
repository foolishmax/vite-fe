import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default () => {
  // console.log(config);

  return defineConfig({
    plugins: [
      react(),
      checker({
        typescript: {
          buildMode: true,
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "business"),
      },
    },
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  });
};
