import type { App } from 'vue';
import Image from './src/image';
import '../index.scss';
import './style/image.scss';

// 具名导出
export { Image };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Image.name!, Image);
  }
};
