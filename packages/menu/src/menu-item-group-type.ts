import { ExtractPropTypes } from 'vue';

export const menuItemGroupProps = {
  title: {
    type: String,
    default: '',
    description: '菜单分组标题'
  },
  disabled: {
    type: Boolean,
    default: false,
    description: '是否禁用该组内所有菜单项'
  }
} as const;
export type MenuItemGroupProps = ExtractPropTypes<typeof menuItemGroupProps>;
