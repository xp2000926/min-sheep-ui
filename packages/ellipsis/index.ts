import type { App } from 'vue';
import Ellipsis from './src/ellipsis';
import PerformantEllipsis from './src/performant-ellipsis';
import '../index.scss';
import './style/ellipsis.scss';
import './style/performant-ellipsis.scss';

// 具名导出
export { Ellipsis, PerformantEllipsis };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Ellipsis.name!, Ellipsis);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(PerformantEllipsis.name!, PerformantEllipsis);
  }
};

// 参考 Naive UI
