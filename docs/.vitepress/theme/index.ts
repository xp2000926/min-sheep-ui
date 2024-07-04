import Theme from 'vitepress/theme'; //默认样式
import { Tree } from '../../../src/tree/index';
import { Button } from '../../../src/button/index';
import { Switch } from '../../../src/switch/index';
import 'vitepress-theme-demoblock/theme/styles/index.css';
import "./index.scss";
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';
export default {
  ...Theme,
  //扩展应用程序实例
  enhanceApp({ app }) {
    // 注册组件
    app.component('Demo', Demo);
    app.component('DemoBlock', DemoBlock);
    app.component('STree', Tree);
    app.component('SButton', Button);
    app.component('SSwitch', Switch);
  }
};