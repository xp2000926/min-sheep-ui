import { App } from 'vue';
import VirtualList from './src/virtual-list';
import '../index.scss';
import './style/virtual-list.scss';

// 具名导出
export { VirtualList };

// 导出插件
export default {
  install(app: App) {
    app.component(VirtualList.name, VirtualList);
  }
};
