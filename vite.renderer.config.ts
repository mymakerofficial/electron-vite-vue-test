import {ConfigEnv, mergeConfig, UserConfig, defineConfig} from 'vite';
import { pluginExposeRenderer } from './vite.base.config';
import viteConfig from './vite.config';
import path from "path";

// https://vitejs.dev/config
export default defineConfig((env) => {
  const forgeEnv = env as ConfigEnv<'renderer'>;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? '';

  const config: UserConfig = {
    root,
    mode,
    base: './',
    build: {
      outDir: `.vite/renderer/${name}`,
      rollupOptions: {
        input: {
          main_window: path.join(__dirname, "index.html"),
          modal_window: path.join(__dirname, 'modalWindow.html'),
        },
      },
    },
    plugins: [pluginExposeRenderer(name)],
    resolve: {
      preserveSymlinks: true,
    },
    clearScreen: false,
  }

  return mergeConfig(config, viteConfig)
});
