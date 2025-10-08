import type { App } from 'vue';
import BasePopover from './src/base-popover';
import '../index.scss';
import './style/base-popover.scss';

// 具名导出
export { BasePopover };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(BasePopover.name!, BasePopover);
  }
};
