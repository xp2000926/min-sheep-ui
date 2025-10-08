import type { App } from 'vue';
import Form from './src/form';
import FormItem from './src/form-item';
import '../index.scss';
import './style/form.scss';
import './style/form-item.scss';

// 具名导出
export { Form, FormItem };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Form.name!, Form);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(FormItem.name!, FormItem);
  }
};
