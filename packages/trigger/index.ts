import type { App } from 'vue';
import Trigger from './src/trigger';
import '../index.scss';
import './style/trigger.scss';

// 具名导出
export { Trigger };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Trigger.name!, Trigger);
  }
};
