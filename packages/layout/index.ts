import type { App } from 'vue';
import Row from './src/row';
import Col from './src/col.tsx';
import '../index.scss';
import './style/row.scss';
import './style/col.scss';
import './style/display.scss';

// 具名导出
export { Row, Col };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Row.name!, Row);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Col.name!, Col);
  }
};
