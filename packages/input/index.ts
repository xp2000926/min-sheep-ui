import type { App } from 'vue';
import Input from './src/input';
import InputGroup from './src/input-group';
import '../index.scss';
import './style/input.scss';
import './style/input-group.scss';

// 具名导出
export { Input, InputGroup };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Input.name!, Input);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(InputGroup.name!, InputGroup);
  }
};
