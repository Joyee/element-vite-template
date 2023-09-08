import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(window.BASE_PATH || ''),
  routes,
})

export default router