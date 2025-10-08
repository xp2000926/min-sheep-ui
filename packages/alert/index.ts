import type { App } from 'vue';
import Alert from './src/alert';
import '../index.scss';
import './style/alert.scss';

// 具名导出
export { Alert };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Alert.name!, Alert);
  }
};
