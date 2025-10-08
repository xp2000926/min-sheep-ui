import type { App } from 'vue';
import Notification from './src/notification';
import '../index.scss';
import './style/notification.scss';

// 具名导出
export { Notification };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Notification.name!, Notification);
  }
};
