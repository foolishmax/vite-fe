import react from '@vitejs/plugin-react';
import path from 'path';
import { ConfigEnv, defineConfig } from 'vite';

// https://vitejs.dev/config/
export default (config: ConfigEnv) => {
  console.log(config);

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'business'),
      }
    },
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        }
      }
    }
  })
}
