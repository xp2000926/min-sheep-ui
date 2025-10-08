import type { App } from 'vue';
import Waterfall from './src/waterfall';
import '../index.scss';
import './style/waterfall.scss';

// 具名导出
export { Waterfall };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Waterfall.name!, Waterfall);
  }
};
