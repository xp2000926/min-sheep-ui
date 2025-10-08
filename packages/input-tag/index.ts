import type { App } from 'vue';
import InputTag from './src/input-tag';
import '../index.scss';
import './style/input-tag.scss';

// 具名导出
export { InputTag };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(InputTag.name!, InputTag);
  }
};
