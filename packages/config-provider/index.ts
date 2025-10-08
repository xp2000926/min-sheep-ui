import type { App } from 'vue';
import ConfigProvider from './src/config-provider';
import '../index.scss';
import './style/config-provider.scss';

// 具名导出
export { ConfigProvider };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(ConfigProvider.name!, ConfigProvider);
  }
};
