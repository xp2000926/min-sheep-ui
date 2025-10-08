import type { App } from 'vue';
import InputNumber from './src/input-number';
import '../index.scss';
import './style/input-number.scss';

// 具名导出
export { InputNumber };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(InputNumber.name!, InputNumber);
  }
};
