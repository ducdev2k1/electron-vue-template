import { createVuetify } from 'vuetify';

import * as labsComponents from 'vuetify/labs/components';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    ...labsComponents,
  },
  date: {
    locale: {
      en: 'vi-VN',
    },
  },
});
