import type { App } from 'vue';
import Countdown from './src/countdown';
import '../index.scss';
import './style/countdown.scss';

// 具名导出
export { Countdown };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Countdown.name!, Countdown);
  }
};
