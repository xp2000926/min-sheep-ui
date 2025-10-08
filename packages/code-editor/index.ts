import type { App } from 'vue';
import CodeEditor from './src/code-editor';
import '../index.scss';
import './style/code-editor.scss';

// 具名导出
export { CodeEditor };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(CodeEditor.name!, CodeEditor);
  }
};
