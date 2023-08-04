import { ExtractPropTypes } from 'vue'

export const tableProps = {
  data: {
    type: Array,
    default: () => []
  }
} as const
export type TableProps = ExtractPropTypes<typeof tableProps>
