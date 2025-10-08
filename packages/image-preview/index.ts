import type { App } from 'vue';
import ImagePreview from './src/image-preview';
import '../index.scss';
import './style/image-preview.scss';

// 具名导出
export { ImagePreview };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(ImagePreview.name!, ImagePreview);
  }
};
