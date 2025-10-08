import type { App } from 'vue';
import Message from './src/message';
import '../index.scss';
import './style/message.scss';

// 具名导出
export { Message };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Message.name!, Message);
  }
};
