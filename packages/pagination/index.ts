import type { App } from 'vue';
import Pagination from './src/pagination';
import '../index.scss';
import './style/pagination.scss';

// 具名导出
export { Pagination };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Pagination.name!, Pagination);
  }
};
