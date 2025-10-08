import { App } from 'vue';
import BaseModal from './src/base-modal';
import '../index.scss';
import './style/base-modal.scss';

// 具名导出
export { BaseModal };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(BaseModal.name!, BaseModal);
  }
};
