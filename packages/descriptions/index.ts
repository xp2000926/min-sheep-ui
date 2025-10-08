import type { App } from 'vue';
import Descriptions from './src/descriptions';
import '../index.scss';
import './style/descriptions.scss';

// 具名导出
export { Descriptions };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Descriptions.name!, Descriptions);
  }
};
