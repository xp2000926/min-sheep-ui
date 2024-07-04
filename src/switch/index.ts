import { App } from 'vue';
import Switch from './src/switch';
import '../index.scss';
import './style/switch.scss';

// 具名导出
export { Switch };

// 导出插件
export default {
  install(app: App) {
    app.component(Switch.name, Switch);
  }
};
