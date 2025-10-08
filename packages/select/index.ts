import type { App } from 'vue';
import Select from './src/select';
import Option from './src/option';
import OptionGroup from './src/option-group';
import '../index.scss';
import './style/select.scss';
import './style/option.scss';
import './style/option-group.scss';

// 具名导出
export { Select, Option, OptionGroup };

// 导出插件
export default {
  install(app: App) {
    app.component(Select.name, Select);
    app.component(Option.name, Option);
    app.component(OptionGroup.name, OptionGroup);
  }
};
