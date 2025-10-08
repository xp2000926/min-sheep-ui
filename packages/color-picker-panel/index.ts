import type { App } from 'vue';
import ColorPickerPanel from './src/color-picker-panel';
import '../index.scss';
import './style/color-picker-panel.scss';

// 具名导出
export { ColorPickerPanel };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(ColorPickerPanel.name!, ColorPickerPanel);
  }
};
