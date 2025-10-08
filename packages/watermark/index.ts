import type { App } from 'vue';
import Watermark from './src/watermark';
import '../index.scss';
import './style/watermark.scss';

// 具名导出
export { Watermark };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Watermark.name!, Watermark);
  }
};
