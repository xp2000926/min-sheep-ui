import type { App } from 'vue';
import TimePicker from './src/time-picker';
import '../index.scss';
import './style/time-picker.scss';

// 具名导出
export { TimePicker };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(TimePicker.name!, TimePicker);
  }
};
