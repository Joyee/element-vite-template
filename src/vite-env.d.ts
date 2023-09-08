/// <reference types="vite/client" />
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface Window {
  vue: any;
  BASE_PATH: string;
}

declare var window: Window;
