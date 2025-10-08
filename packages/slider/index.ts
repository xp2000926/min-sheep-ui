import type { App } from 'vue';
import Slider from './src/slider';
import '../index.scss';
import './style/slider.scss';

// 具名导出
export { Slider };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Slider.name!, Slider);
  }
};
