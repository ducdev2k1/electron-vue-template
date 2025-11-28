import '@/assets/scss/style.scss';
import type { App } from 'vue';
import Toastify from 'vue3-toastify';
import router from '../router';
import i18n from './i18n';
import vuetify from './vuetify';

export function registerPlugins(app: App) {
  app.use(router).use(i18n).use(vuetify).use(Toastify);
}
