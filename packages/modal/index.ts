import type { App } from 'vue';
import Modal from './src/modal';
import '../index.scss';
import './style/modal.scss';

// 具名导出
export { Modal };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Modal.name!, Modal);
  }
};
