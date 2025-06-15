import '@/assets/scss/style.scss';
import type { App } from 'vue';
import router from '../router';
import i18n from './i18n';

export function registerPlugins(app: App) {
  app.use(router).use(i18n);
}
