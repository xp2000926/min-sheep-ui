import { App } from 'vue';
import Select from './src/select';
import '../index.scss';
import './style/select.scss';

// 具名导出
export { Select };

// 导出插件
export default {
  install(app: App) {
    app.component(Select.name, Select);
  }
};
