import type { RouteRecordRaw } from 'vue-router';

import Home from '../views/home/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [],
  },
];

export default routes;
