import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import VueRouter from 'unplugin-vue-router/vite';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';

function wrapperEnv(envConf: any) {
  const ret: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;

    if (envName === 'VITE_PORT') {
      realName = Number(realName);
    }
    if (envName === 'VITE_PROXY' && realName) {
      try {
        realName = JSON.parse(realName.replace(/'/g, '"'));
      } catch (e: unknown) {
        console.error(e);
        realName = '';
      }
    }
    ret[envName] = realName;
    if (typeof realName === 'string') {
      process.env[envName] = realName;
    } else if (typeof realName === 'object') {
      process.env[envName] = JSON.stringify(realName);
    }
  }
  return ret;
}

const root = process.cwd();

const env = loadEnv(process.env.NODE_ENV, root);

// The boolean type read by loadEnv is a string. This function can be converted to boolean type
const viteEnv = wrapperEnv(env);

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './src/locales/**')],
    }),
    VueRouter({
      dts: 'src/typed-router.d.ts',
    }),
    AutoImport({
      imports: [
        'vue',
        // 'pinia',
        // '@vueuse/core',
        {
          'vue-router/auto': ['useRoute', 'useRouter'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
      vueTemplate: true,
    }),
    Components({
      //  dirs: ['src/components', 'src/layouts'],
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'tailwind-config': path.resolve(__dirname, './tailwind.config.js'),
      inferno: process.env.NODE_ENV === 'production' ? 'inferno/dist/index.esm.js' : 'inferno/dist/index.dev.esm.js',
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
});
