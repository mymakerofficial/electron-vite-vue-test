import type { ConfigEnv, UserConfig } from 'vite';
import { defineConfig, mergeConfig } from 'vite';
import { getBuildConfig, getBuildDefine, external, pluginHotRestart } from './vite.base.config';
import path from "path";
import viteConfig from "./vite.config";

// https://vitejs.dev/config
export default defineConfig((env) => {
  const forgeEnv = env as ConfigEnv<'build'>;
  const define = getBuildDefine(forgeEnv);

  const config: UserConfig = {
    build: {
      lib: {
        entry: path.join(__dirname, 'src', 'main', 'main.ts'),
        fileName: () => '[name].js',
        formats: ['cjs'],
      },
      rollupOptions: {
        external,
      },
    },
    plugins: [pluginHotRestart('restart')],
    define,
    resolve: {
      // Load the Node.js entry.
      mainFields: ['module', 'jsnext:main', 'jsnext'],
      ...viteConfig.resolve,
    },
  };

  return mergeConfig(getBuildConfig(forgeEnv), config);
});
