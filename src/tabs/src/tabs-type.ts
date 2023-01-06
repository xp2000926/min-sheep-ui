import { ExtractPropTypes } from 'vue'

export const tabsProps = {
  modelValue: {
    type: String,
    default: ''
  },
  closable: {
    type: Boolean,
    default: false
  },
  addable: {
    type: Boolean,
    default: false
  }
} as const
export type TabsProps = ExtractPropTypes<typeof tabsProps>
