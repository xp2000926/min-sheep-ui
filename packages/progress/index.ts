import type { App } from 'vue';
import Progress from './src/progress';
import '../index.scss';
import './style/progress.scss';

// 具名导出
export { Progress };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Progress.name!, Progress);
  }
};
