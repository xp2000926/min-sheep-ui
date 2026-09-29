import type { App } from 'vue';
import Tree from './src/tree';
import '../index.scss';
import './style/tree.scss';

// 具名导出
export { Tree };
export type {
  ITreeNode,
  IInnerTreeNode,
  FieldType,
  treeProps,
  TreeProps
} from './src/tree-type';

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Tree.name!, Tree);
  }
};
