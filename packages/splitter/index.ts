import type { App } from 'vue';
import Splitter from './src/splitter';
import SplitterPanel from './src/splitter-panel';
import '../index.scss';
import './style/splitter.scss';

// 具名导出
export { Splitter, SplitterPanel };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Splitter.name!, Splitter);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(SplitterPanel.name!, SplitterPanel);
  }
};
