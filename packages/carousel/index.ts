import type { App } from 'vue';
import Carousel from './src/carousel';
import '../index.scss';
import './style/carousel.scss';

// 具名导出
export { Carousel };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Carousel.name!, Carousel);
  }
};
