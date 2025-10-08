import type { App } from 'vue';
import Tabs from './src/tabs';
import TabPane from './src/tab-pane';
import '../index.scss';
import './style/tabs.scss';

// 具名导出
export { Tabs, TabPane };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Tabs.name!, Tabs);
    app.component(TabPane.name!, TabPane);
  }
};
