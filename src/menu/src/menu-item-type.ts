import { ExtractPropTypes } from 'vue';
export const menuItemProps = {
  icon: {
    type: String,
    default: ''
  },
  path: {
    type: String,
    default: ''
  },
  level: {
    type: Number,
    default: 0
  }
} as const;
export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>;
export type MenuInjectProps = {
  defaultActive: string;
  textColor: string;
  activeTextColor: string;
  activeBackgroundColor: string;
};
