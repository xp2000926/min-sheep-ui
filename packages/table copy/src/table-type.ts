import { ExtractPropTypes } from 'vue';
import { ColumnContext } from './table-column-type';
import { definePropType } from '../../utils.utils';

export const tableProps = {
  data: {
    type: Array,
    default: () => []
  },
  //边框
  border: {
    type: Boolean,
    default: false
  },
  //带斑马纹表格
  stripe: { type: Boolean, default: false },
  headerCellStyle: {
    type: [Object, Function],
    default: {}
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  columns: {
    type: Array<ColumnContext>,
    default: []
  },
  rowClassName: {
    type: [String, Function], //as PropType<string | Function>,
    default: ''
  },
  //合计行
  showSummary: { type: Boolean, default: false },
  height: {
    type: definePropType<number | string>([Number, String]),
    default: ''
  }
} as const;
export type TableProps = ExtractPropTypes<typeof tableProps>;
