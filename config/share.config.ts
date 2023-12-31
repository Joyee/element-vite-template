import { UserConfig, type DepOptimizationOptions } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';

import { resolve } from 'path';

const define = {
  'process.env.PUBLIC_PATH': JSON.stringify(process.env.PUBLIC_PATH),
  'process.env.ENV': JSON.stringify(process.env.ENV),
};

const optimizeDeps = ['vue', '@vue/shared', 'dayjs/plugin/localeData.js', '@vueuse/core'];

const _optimizeDeps: DepOptimizationOptions = {
  include: optimizeDeps,
};

const config: Partial<UserConfig> = {
  define,
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
    },
  },
  // 如果你的代码里import了ency组件，并且node_modules里也安装了它，是会被vite搜索并预构建的。只有在vite搜索不到该依赖的场景，才需要配置optimizeDeps.include
  // optimizeDeps: _optimizeDeps,
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),

    vue({
      template: {
        compilerOptions: {
          // 外框架组件是 webcompoment 不需要被识别为 vue 组件
          isCustomElement: tag => /^(sl|fl)/.test(tag),
        },
      },
    }),
    vueSetupExtend(),
    vueJsx(),
  ],
};
export default config;
