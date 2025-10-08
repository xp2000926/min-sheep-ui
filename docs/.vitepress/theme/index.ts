import DefaultTheme from 'vitepress/theme';
import MinSheepUI from '../../../scripts/entry';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'; // 引入样式
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'; // 引入样式
import IconExample from './iconExample.vue';
import overview from './overview.vue';
import './index.scss';

export default {
  ...DefaultTheme,
  //扩展应用程序实例
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.use(MinSheepUI);
    // 注册组件
    ctx.app.component('Demo', Demo);
    ctx.app.component('IconExample', IconExample);
    ctx.app.component('Overview', overview);
  }
};
