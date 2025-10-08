import type { App } from 'vue';
import Tag from './src/tag';
import '../index.scss';
import './style/tag.scss';

// 具名导出
export { Tag };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Tag.name!, Tag);
  }
};
