import { createApp } from 'vue';
// import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import App from './App.vue';
import router from './router';

async function init() {
  const app = createApp(App);
  app.use(ElementPlus).use(router).mount('#app');
}

init();
