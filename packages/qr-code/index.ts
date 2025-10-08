import type { App } from 'vue';
import QrCode from './src/qr-code';
import '../index.scss';
import './style/qr-code.scss';

// 具名导出
export { QrCode };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(QrCode.name!, QrCode);
  }
};
