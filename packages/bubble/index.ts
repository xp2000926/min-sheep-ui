import type { App } from 'vue';
import Bubble from './src/bubble';
import '../index.scss';
import './style/bubble.scss';

// 具名导出
export { Bubble };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Bubble.name!, Bubble);
  }
};
