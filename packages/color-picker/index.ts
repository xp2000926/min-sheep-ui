import type { App } from 'vue';
import ColorPicker from './src/color-picker';
import '../index.scss';
import './style/color-picker.scss';

// 具名导出
export { ColorPicker };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(ColorPicker.name!, ColorPicker);
  }
};
