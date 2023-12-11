import { ExtractPropTypes } from 'vue'
import { ColumnContext } from './table-column-type'

export const tableProps = {
  data: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array<ColumnContext>,
    default: []
  },
  //边框
  border: {
    type: Boolean,
    default: false
  },
  //带斑马纹表格
  stripe: {
    type: Boolean,
    default: false
  },
  //合计行
  showSummary: { type: Boolean, default: false }
} as const
export type TableProps = ExtractPropTypes<typeof tableProps>
