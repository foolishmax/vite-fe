import react from "@vitejs/plugin-react";
import autoImport from "./autoImport";
import checkerPlugin from "./checker";
import codeInspector from "./inspector";

export function setupVitePlugins(viteEnv: Record<string, any>) {
  console.log(viteEnv);
  const plugins = [react(), checkerPlugin(), codeInspector(), autoImport()];

  return plugins;
}
