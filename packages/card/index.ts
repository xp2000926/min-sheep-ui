import type { App } from 'vue';
import Card from './src/card';
import '../index.scss';
import './style/card.scss';

// 具名导出
export { Card };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Card.name!, Card);
  }
};
