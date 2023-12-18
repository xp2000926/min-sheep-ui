import { ExtractPropTypes } from 'vue'

export const tableTbodyProps = {
  data: {
    type: Array,
    default: () => []
  },
  columnData: {
    type: Array,
    default: () => []
  },
  stripe: { type: Boolean, default: false }
} as const
export type TableTbodyProps = ExtractPropTypes<typeof tableTbodyProps>
