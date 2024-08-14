import { codeInspectorPlugin } from "code-inspector-plugin";

export default function codeInspector() {
  return codeInspectorPlugin({
    bundler: "vite",
  });
}
