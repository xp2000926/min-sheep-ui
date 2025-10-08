import type { App } from 'vue';
import Flex from './src/flex';
import '../index.scss';
import './style/flex.scss';

// 具名导出
export { Flex };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Flex.name!, Flex);
  }
};
