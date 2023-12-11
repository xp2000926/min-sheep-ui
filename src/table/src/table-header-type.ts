import { ExtractPropTypes, PropType } from 'vue'
import { ColumnContext } from './table-column-type'

export const tableHeaderProps = {
  columns: {
    type: Array<ColumnContext>,
    default: {}
  }
} as const
export type TableHeaderProps = ExtractPropTypes<typeof tableHeaderProps>
