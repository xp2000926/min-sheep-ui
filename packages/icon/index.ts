import type { App } from 'vue';
import Icon from './src/icon';
import registerIcon from './icon-register';
import '../index.scss';
import './style/icon.scss';

// 具名导出
export { Icon, registerIcon };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Icon.name!, Icon);
  }
};
