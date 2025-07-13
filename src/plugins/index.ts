import '@/assets/scss/style.scss';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import type { App } from 'vue';
import router from '../router';
import i18n from './i18n';

export function registerPlugins(app: App) {
  app.use(router).use(i18n).use(Antd);
}
