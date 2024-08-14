import path from "path";
import { ConfigEnv, defineConfig, loadEnv } from "vite";
import {
  createViteProxy,
  getServiceEnvConfig,
  setupVitePlugins,
} from "./packages/vite";
import { ImportMetaEnv } from "./packages/vite/type";

// https://vitejs.dev/config/
export default (ConfigEnv: ConfigEnv) => {
  const viteEnv = loadEnv(
    ConfigEnv.mode,
    process.cwd(),
  ) as unknown as ImportMetaEnv;
  const isProxy = viteEnv.VITE_HTTP_PROXY === "Y";
  const envConfig = getServiceEnvConfig(viteEnv);

  return defineConfig({
    plugins: setupVitePlugins(viteEnv),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "business"),
      },
    },
    server: {
      host: "0.0.0.0",
      port: 5173,
      proxy: createViteProxy(isProxy, envConfig),
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
