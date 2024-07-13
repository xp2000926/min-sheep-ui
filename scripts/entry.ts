// 人口文件
//  1.引入实现组件批量导出去
import type { App } from 'vue';
import ButtonPlugin, { Button } from '../src/button';
import TreePlugin, { Tree } from '../src/tree';
import SwitchPlugin, { Switch } from '../src/switch';
import FormPlugin, { Form, FormItem } from '../src/form';
import InputPlugin, { Input } from '../src/input';
import IconPlugin, { Icon } from '../src/icon';
import MenuPlugin, { Menu, MenuItem, SubMenu } from '../src/menu';
import SelectPlugin, { Select } from '../src/select';
// 2.导出这些组件
export {
  Button,
  Tree,
  Switch,
  Form,
  FormItem,
  Input,
  Icon,
  Menu,
  MenuItem,
  SubMenu,
  Select
};
const installs = [
  ButtonPlugin,
  TreePlugin,
  SwitchPlugin,
  FormPlugin,
  InputPlugin,
  IconPlugin,
  MenuPlugin,
  SelectPlugin
];
// 3.导出一个vue插件
export default {
  install(app: App) {
    installs.forEach(p => app.use(p));
  }
};
