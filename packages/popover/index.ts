import type { App } from 'vue';
import Popover from './src/popover';
import '../index.scss';
import './style/popover.scss';

// 具名导出
export { Popover };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Popover.name!, Popover);
  }
};
