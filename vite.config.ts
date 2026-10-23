import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  // 載入環境變數
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // 修正本機 404 與 GitHub Pages 部署路徑：
    // 本機開發時使用根路徑 '/'，只有在執行 npm run build 打包時才使用 '/minMInisMy/'
    base: mode === 'production' ? '/minMInisMy/' : '/',

    plugins: [react()],

    resolve: {
      alias: {
        '@app': path.resolve(import.meta.dirname, './src'),
        '@assets': path.resolve(import.meta.dirname, './src/assets'),
        '@components': path.resolve(import.meta.dirname, './src/components'),
        '@page': path.resolve(import.meta.dirname, './src/page'),
        '@api': path.resolve(import.meta.dirname, './src/data'),
        '@typeTs': path.resolve(import.meta.dirname, './src/typeTs'),
        '@utils': path.resolve(import.meta.dirname, './src/utils'),
        '@hook': path.resolve(import.meta.dirname, './src/hook'),
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ['color-functions', 'import', 'global-builtin'],

          additionalData: `
            @import "bootstrap/scss/functions";
            @import "bootstrap/scss/mixins";
            @import "@assets/mixins/_mixins.scss";
            @import "@assets/_variables.scss";
          `,
        },
      },
      devSourcemap: mode !== 'production',
    },

    build: {
      sourcemap: false,
      outDir: 'dist',
    },

    server: {
      port: 3000,
      open: true,
    },
  };
});
