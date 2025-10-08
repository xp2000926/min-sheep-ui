import type { App } from 'vue';
import Tour from './src/tour';
import '../index.scss';
import './style/tour.scss';

// 具名导出
export { Tour };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Tour.name!, Tour);
  }
};
