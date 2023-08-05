import { ExtractPropTypes } from 'vue'

export const paginationProps = {
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 10
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  modelValue: {
    type: Number,
    default: 1
  },
  hideOnSinglePage: {
    type: Boolean,
    default: true
  }
} as const
export type PaginationProps = ExtractPropTypes<typeof paginationProps>
