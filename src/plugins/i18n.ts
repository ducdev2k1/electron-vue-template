import { EnumLocale } from '@/utils/MyEnum';
import messages from '@intlify/unplugin-vue-i18n/messages';
import { createI18n } from 'vue-i18n';

export const i18n = createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: EnumLocale.vi, // default
  fallbackLocale: EnumLocale.vi,
  messages,
});
export default i18n;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const t = i18n.global.t;
