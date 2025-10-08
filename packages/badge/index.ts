import type { App } from 'vue';
import Badge from './src/badge';
import '../index.scss';
import './style/badge.scss';

// 具名导出
export { Badge };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Badge.name!, Badge);
  }
};
