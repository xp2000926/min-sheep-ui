import { App } from 'vue';
import Menu from './src/menu';
import MenuItem from './src/menu-item';
import SubMenu from './src/sub-menu';

// 具名导出
export { Menu, MenuItem, SubMenu };

// 导出插件
export default {
  install(app: App) {
    app.component(Menu.name, Menu);
    app.component(MenuItem.name, MenuItem);
    app.component(SubMenu.name, SubMenu);
  }
};
