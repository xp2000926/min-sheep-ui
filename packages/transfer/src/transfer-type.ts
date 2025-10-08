import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';
// 表格
export type TransferType = 'table' | 'tree' | '';

export const transferProps = {
  modelValue: {
    type: definePropType<string | number>([String, Number]),
    required: true
  },
  data: {
    type: definePropType<string>([String]),
    required: ''
  },
  filterable: {
    // 是否可搜索
    type: Boolean,
    default: false
  },
  type: {
    type: definePropType<TransferType>(String),
    required: ''
  },
  disabled: {
    // 禁用穿梭框
    type: Boolean,
    default: false
  },
  draggable: {
    // 是否可拖拽
    type: Boolean,
    default: false
  },
  pagination: {
    // 是否分页
    type: Boolean,
    default: false
  }
} as const;
export type TransferProps = ExtractPropTypes<typeof transferProps>;
