import { ImportMetaEnv, ServiceEnvConfig, ServiceEnvType } from "../type";

const serviceEnv: Record<ServiceEnvType, ServiceEnvConfig> = {
  dev: {
    url: "http://xxx.xx.xxx.xx: xxxx",
    urlPattern: "/x",
  },
  test: {
    url: " xxxx",
    urlPattern: "/x",
  },
  prod: {
    url: " xxxx",
    urlPattern: "/x",
  },
};

export function getServiceEnvConfig(env: ImportMetaEnv) {
  const { VITE_SERVICE_ENV = "dev" } = env;

  return serviceEnv[VITE_SERVICE_ENV];
}
