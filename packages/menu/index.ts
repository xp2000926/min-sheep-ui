import type { App } from 'vue';
import Menu from './src/menu';
import MenuItem from './src/menu-item';
import MenuItemGroup from './src/menu-item-group';
import SubMenu from './src/sub-menu';
import '../index.scss';
import './style/menu-item.scss';
import './style/menu-item-group.scss';
import './style/sub-menu.scss';

// 具名导出
export { Menu, MenuItem, MenuItemGroup, SubMenu };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Menu.name!, Menu);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(MenuItem.name!, MenuItem);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(MenuItemGroup.name!, MenuItemGroup);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(SubMenu.name!, SubMenu);
  }
};
