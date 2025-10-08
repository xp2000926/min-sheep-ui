import type { App } from 'vue';
import BubbleList from './src/bubble-list';
import '../index.scss';
import './style/bubble-list.scss';

// 具名导出
export { BubbleList };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(BubbleList.name!, BubbleList);
  }
};
