import { ExtractPropTypes, PropType } from 'vue';
import { MenuOption } from './menu-type';

export const menuItemProps = {
  path: {
    type: String,
    default: '',
    description: '唯一标志'
  },
  icon: {
    type: String,
    default: '',
    description: '菜单图标'
  },
  title: {
    type: String,
    default: '',
    description: '菜单标题'
  },
  popperClass: {
    type: String,
    default: '',
    description: '为 popper 添加类名'
  },
  disabled: {
    type: Boolean,
    default: false,
    description: '是否禁用'
  },
  route: {
    type: Object || String,
    default: () => ({}),
    description: 'Vue Route 路由位置参数'
  },
  option: {
    type: Object as PropType<MenuOption>,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
} as const;
export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>;
