import type { App } from 'vue';
import DatePickerPanel from './src/date-picker-panel';
import '../index.scss';
import './style/date-picker-panel.scss';

// 具名导出
export { DatePickerPanel };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(DatePickerPanel.name!, DatePickerPanel);
  }
};
