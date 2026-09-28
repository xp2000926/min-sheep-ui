import type { App } from 'vue';
import Ahp from './src/ahp';
import '../index.scss';
import './style/ahp.scss';

// 具名导出
export { Ahp };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Ahp.name!, Ahp);
  }
};
