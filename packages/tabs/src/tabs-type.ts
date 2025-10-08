import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';

export type StyleType = '' | 'border-card' | 'card';
export const tabsProps = {
  modelValue: {
    type: Number || String,
    default: ''
  },
  type: {
    type: definePropType<StyleType>(String),
    default: 'line'
    // 风格类型
  },
  closable: {
    type: Boolean,
    default: false
    // 标签是否可关闭
  },
  editable: {
    type: Boolean,
    default: false
    // 标签是否同时可增加和关闭
  }
} as const;
export type TabsProps = ExtractPropTypes<typeof tabsProps>;
// 参考 element-plus
