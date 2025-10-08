import type { App } from 'vue';
import Divider from './src/divider';
import '../index.scss';
import './style/divider.scss';

// 具名导出
export { Divider };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Divider.name!, Divider);
  }
};
