import { getDeployConfig } from './config/deploy.config';
import { getViteDevConfig } from './config/dev.config';

import type { ConfigEnv } from 'vite';

export default async ({ command }: ConfigEnv) => {
  if (command === 'build') return getDeployConfig();
  // 本地运行
  return getViteDevConfig();
};
