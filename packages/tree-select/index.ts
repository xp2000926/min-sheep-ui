import type { App } from 'vue';
import TreeSelect from './src/tree-select';
import '../index.scss';
import './style/tree-select.scss';

// 具名导出
export { TreeSelect };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(TreeSelect.name!, TreeSelect);
  }
};
