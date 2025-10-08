import type { App } from 'vue';
import TimeLine from './src/time-line';
import '../index.scss';
import './style/time-line.scss';

// 具名导出
export { TimeLine };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(TimeLine.name!, TimeLine);
  }
};
