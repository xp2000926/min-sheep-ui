import type { App } from 'vue';
import Result from './src/result';
import '../index.scss';
import './style/result.scss';

// 具名导出
export { Result };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Result.name!, Result);
  }
};
