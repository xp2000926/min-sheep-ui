import type { App } from 'vue';
import TimeSelect from './src/time-select';
import '../index.scss';
import './style/time-select.scss';

// 具名导出
export { TimeSelect };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(TimeSelect.name!, TimeSelect);
  }
};
