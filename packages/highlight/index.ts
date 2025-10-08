import type { App } from 'vue';
import Highlight from './src/highlight';
import '../index.scss';
import './style/highlight.scss';

// 具名导出
export { Highlight };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Highlight.name!, Highlight);
  }
};
