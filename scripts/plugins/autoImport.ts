import AutoImport from "unplugin-auto-import/vite";

export default function autoImport() {
  return AutoImport({
    imports: ["react", "react-router-dom"],
    dts: true,
  });
}
