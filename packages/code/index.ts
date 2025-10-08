import type { App } from 'vue';
import Code from './src/code';
import '../index.scss';
import './style/code.scss';

// 具名导出
export { Code };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Code.name!, Code);
  }
};
