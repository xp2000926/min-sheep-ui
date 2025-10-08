import type { App } from 'vue';
import Typewriter from './src/typewriter';
import '../index.scss';
import './style/typewriter.scss';

// 具名导出
export { Typewriter };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Typewriter.name!, Typewriter);
  }
};
