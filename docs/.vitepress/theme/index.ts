import Theme from 'vitepress/theme'; //默认样式
import { Tree } from '../../../src/tree/index';
import { Button } from '../../../src/button/index';
import { Switch } from '../../../src/switch/index';
import { Form, FormItem } from '../../../src/form/index';
import { Input } from '../../../src/input/index';
import { Icon } from '../../../src/icon/index';
import { Menu, MenuItem, SubMenu } from '../../../src/menu/index';
import { Select } from '../../../src/select/index';
import 'vitepress-theme-demoblock/theme/styles/index.css';
import './index.scss';
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
    app.component('SForm', Form);
    app.component('SFormItem', FormItem);
    app.component('SInput', Input);
    app.component('SIcon', Icon);
    app.component('SMenu', Menu);
    app.component('SMenuItem', MenuItem);
    app.component('SSubMenu', SubMenu);
    app.component('SSelect', Select);
  }
};
