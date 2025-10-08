import type { App } from 'vue';
import Text from './src/text';
import '../index.scss';
import './style/text.scss';

// 具名导出
export { Text };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Text.name!, Text);
  }
};
