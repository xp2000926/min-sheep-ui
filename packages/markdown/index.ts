import type { App } from 'vue';
import Markdown from './src/markdown';
import '../index.scss';
import './style/markdown.scss';

// 具名导出
export { Markdown };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Markdown.name!, Markdown);
  }
};
