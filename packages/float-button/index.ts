import type { App } from 'vue';
import FloatButton from './src/float-button';
import '../index.scss';
import './style/float-button.scss';

// 具名导出
export { FloatButton };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(FloatButton.name!, FloatButton);
  }
};
