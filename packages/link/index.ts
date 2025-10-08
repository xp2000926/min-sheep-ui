import type { App } from 'vue';
import Link from './src/link';
import '../index.scss';
import './style/link.scss';

// 具名导出
export { Link };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Link.name!, Link);
  }
};
