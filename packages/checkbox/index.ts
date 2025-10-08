import type { App } from 'vue';
import Checkbox from './src/checkbox';
import '../index.scss';
import './style/checkbox.scss';

// 具名导出
export { Checkbox };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Checkbox.name!, Checkbox);
  }
};
