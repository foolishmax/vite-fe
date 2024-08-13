import react from "@vitejs/plugin-react";
import { codeInspectorPlugin } from "code-inspector-plugin";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
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
      codeInspectorPlugin({
        bundler: "vite",
      }),
      AutoImport({
        imports: ["react", "react-router-dom"],
        dts: true,
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
