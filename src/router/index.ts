/**
 * router/index.ts
 *
 * Automatic routes for `./src/renderer/pages/*.vue`
 */
// Composables
// import { setupLayouts } from 'virtual:generated-layouts';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err: any, to: any) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error');
      localStorage.setItem('vuetify:dynamic-reload', 'true');
      location.assign(to.fullPath);
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload');
});

router.beforeEach((to, from, next) => {
  console.log('control before view paage :>> ');  
  next();
});

export default router;
