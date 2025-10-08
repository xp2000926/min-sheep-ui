import type { App } from 'vue';
import FilesCard from './src/files-card';
import '../index.scss';
import './style/files-card.scss';

// 具名导出
export { FilesCard };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(FilesCard.name!, FilesCard);
  }
};
