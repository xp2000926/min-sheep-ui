import type { App } from 'vue';
import Breadcrumb from './src/breadcrumb';
import BreadcrumbItem from './src/breadcrumb-item';
import '../index.scss';
import './style/breadcrumb.scss';

// 具名导出
export { Breadcrumb, BreadcrumbItem };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Breadcrumb.name!, Breadcrumb);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(BreadcrumbItem.name!, BreadcrumbItem);
  }
};
