import { ExtractPropTypes, VNode } from 'vue';

export type MenuMode = ['horizontal', 'vertical', 'pop'];
export interface MenuOption {
  type?: string;
  label: string | (() => VNode | string);
  icon?: string;
  disabled?: boolean;
  show?: boolean;
  children?: MenuOption[];
  key: string;
  [key: string]: any;
}

export interface MenuPropsOption {
  option: MenuOption[];
  mode: MenuMode;
}

export const menuProps = {
  option: {
    type: Array as () => MenuOption[],
    default: (): MenuOption[] => []
  },
  mode: {
    type: String as () => MenuMode[number],
    values: ['horizontal', 'vertical', 'pop'] as const,
    default: 'vertical',
    validator: (value: MenuMode[number]): boolean =>
      ['horizontal', 'vertical', 'pop'].includes(value),
    description: '菜单展示模式'
  },
  router: {
    type: Boolean,
    default: false,
    description: '是否开启路由模式'
  },
  defaultActive: {
    type: String,
    default: '',
    description: '默认激活的菜单项'
  }
} as const;

export type MenuProps = ExtractPropTypes<typeof menuProps>;
