import type { App } from 'vue';
import Skeleton from './src/skeleton';
import '../index.scss';
import './style/skeleton.scss';

// 具名导出
export { Skeleton };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Skeleton.name!, Skeleton);
  }
};
