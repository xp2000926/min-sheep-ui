import { App } from 'vue';
import Tree from './src/tree';
import '../index.scss';
import './style/tree.scss';

// 具名导出
export { Tree };

// 导出插件
export default {
  install(app: App) {
    app.component(Tree.name, Tree);
  }
};
