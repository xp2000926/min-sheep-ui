import { ExtractPropTypes, PropType } from 'vue';
export type MenuMode = 'vertical' | 'horizontal' | 'inline';
export const menuProps = {
  mode: {
    type: String as PropType<MenuMode>,
    default: 'vertical'
  },
  defaultActive: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  textColor: {
    type: String,
    default: ''
  },
  activeTextColor: {
    type: String,
    default: ''
  },
  activeBackgroundColor: {
    type: String,
    default: ''
  }
} as const;
export type MenuProps = ExtractPropTypes<typeof menuProps>;
