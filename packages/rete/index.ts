import type { App } from 'vue';
import Rete from './src/rete';
import '../index.scss';
import './style/rete.scss';

// 具名导出
export { Rete };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Rete.name!, Rete);
  }
};
