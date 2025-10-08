import type { App } from 'vue';
import TimePickerPanel from './src/time-picker-panel';
import '../index.scss';
import './style/time-picker-panel.scss';

// 具名导出
export { TimePickerPanel };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(TimePickerPanel.name!, TimePickerPanel);
  }
};
