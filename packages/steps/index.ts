import type { App } from 'vue';
import Steps from './src/steps';
import '../index.scss';
import './style/steps.scss';

// 具名导出
export { Steps };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Steps.name!, Steps);
  }
};
