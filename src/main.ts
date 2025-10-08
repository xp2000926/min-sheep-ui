// import './assets/main.css';
import './index.scss';
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import Button from '../packages/button';
// import CodeEditor from '../packages/code-editor';
import { Tree } from '../packages/tree';

createApp(App)
  .use(Button)
  // .use(CodeEditor)
  .use(Tree)
  .use(ElementPlus)
  .mount('#app');
