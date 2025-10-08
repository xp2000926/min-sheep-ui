import type { App } from 'vue';
import Backtop from './src/backtop';
import '../index.scss';
import './style/backtop.scss';

// 具名导出
export { Backtop };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Backtop.name!, Backtop);
  }
};
