import type { App } from 'vue';
import Scroll from './src/scroll';
import '../index.scss';
import './style/scroll.scss';

// 具名导出
export { Scroll };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Scroll.name!, Scroll);
  }
};
