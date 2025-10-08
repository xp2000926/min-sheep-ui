import type { App } from 'vue';
import Cascader from './src/cascader';
import CascaderPanel from './src/cascader-panel';
import '../index.scss';
import './style/cascader.scss';

// 具名导出
export { Cascader, CascaderPanel };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Cascader.name!, Cascader);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(CascaderPanel.name!, CascaderPanel);
  }
};
