import type { App } from 'vue';
import Loading from './src/loading';
import vLoading from './src/directive';
import '../index.scss';
import './style/loading.scss';

// 具名导出
export { vLoading, Loading };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Loading.name!, Loading);
  },
  directiveL: vLoading,
  service: Loading
};
