/// <reference types="vite/client" />
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface Window {
  vue: any;
  MonitorJS: any;
  ic: any;
  BASE_PATH: string;
  VITE_UPLOAD_URL: string;
  VITE_AUTHID: string;
  VITE_AUTHSECRET: string;
}
declare var window: Window;

class MonitorJS {
  init: Function;
  static EnnDEV: string;
  static EnnFAT: string;
  static EnnUAT: string;
  static EnnPROD: string;
}

interface ImportMeta {
  url: string;
  readonly env: ImportMetaEnv;
  glob: any;
}
