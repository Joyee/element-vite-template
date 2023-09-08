import { defineConfig } from 'vite';
import config from './share.config';

export function getViteDevConfig() {
  return defineConfig({
    ...config,
    server: {
      host: '0.0.0.0',
      open: true,
      https: !!process.env.HTTPS,
    },
  });
}
